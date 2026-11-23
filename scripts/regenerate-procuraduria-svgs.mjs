import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

function buildSvgAssets(source) {
  const part=source.split("export const procuraduriaModuleBlueprints")[1];
  if(!part)throw Error("No existe la definición de módulos PGN.");
  function splitArgs(s) {let out=[],start=0,depth=0,q="",escaped=false;for(let i=0;i<s.length;i++){const ch=s[i];if(q){if(escaped)escaped=false;else if(ch==="\\")escaped=true;else if(ch===q)q="";continue;}if("'\"`".includes(ch)){q=ch;continue;}if("([{".includes(ch))depth++;else if(")]}".includes(ch))depth--;else if(ch===","&&depth===0){out.push(s.slice(start,i).trim());start=i+1;}}out.push(s.slice(start).trim());return out;}
  function str(s){return s.slice(1,-1).replace(/\\'/g,"'").replace(/\\n/g," ").replace(/\\\\/g,"\\");}
  const arr=s=>splitArgs(s.slice(1,-1)).map(str);
  const mods=[];const pattern=/\bm\((\d+)\s*,/g;let match;
  while((match=pattern.exec(part))){const start=match.index+2;let j=start,depth=1,q="",esc=false;for(;j<part.length;j++){const ch=part[j];if(q){if(esc)esc=false;else if(ch==="\\")esc=true;else if(ch===q)q="";continue;}if("'\"`".includes(ch)){q=ch;continue;}if(ch==="(")depth++;else if(ch===")"&&--depth===0)break;}const a=splitArgs(part.slice(start,j));if(a.length!==10)throw Error("Definición M"+match[1]+" cambió: "+a.length);mods.push({n:Number(a[0]),title:str(a[1]),points:arr(a[4]),steps:arr(a[5]),scenario:str(a[6]),wrong:arr(a[8])});pattern.lastIndex=j+1;}
  if(mods.length!==85||mods.some((m,i)=>m.n!==i||m.points.length!==3||m.steps.length!==4||m.wrong.length<2))throw Error("El curso ya no tiene estructura de 85 módulos con 3 reglas, 4 pasos y 2 distractores.");
  const c={bg:"#12161D",panel:"#1C222C",line:"#394350",text:"#F3F6F8",muted:"#A8B0BB",green:"#8BE11F",red:"#FB888A"};
  const palette=["#8BE11F","#75AFFF","#51CFBB","#F0BD60","#B7A2FA"];
  const normalize=s=>String(s).replace(/[→⇒]/g," / ").replace(/≠/g," no equivale a ").replace(/[“”]/g,'"').replace(/[—–]/g," - ").replace(/\s+/g," ").trim();
  const xml=s=>normalize(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  function wrap(t,lim,max){const words=normalize(t).split(" "),out=[];let line="";for(const word of words){if(line&&(line+" "+word).length>lim){out.push(line);line=word;}else line=line?line+" "+word:word;}if(line)out.push(line);if(out.length>max){out.length=max;out[max-1]=out[max-1].replace(/[.,;: ]+$/g,"")+"…";}return out;}
  const multiline=(t,x,y,lim,max,dy=22,cls="txt")=>wrap(t,lim,max).map((v,i)=>`<text x="${x}" y="${y+i*dy}" class="${cls}">${xml(v)}</text>`).join("");
  function svg(w,h,title,desc,content){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="title desc"><title id="title">${xml(title)}</title><desc id="desc">${xml(desc)}</desc><style>.bg{fill:${c.bg}}.box{fill:${c.panel};stroke:${c.line};stroke-width:1.5}.txt{font:500 17px 'Google Sans',Arial,sans-serif;fill:${c.text}}.small{font:500 15px 'Google Sans',Arial,sans-serif;fill:${c.muted}}.bold{font:700 18px 'Google Sans',Arial,sans-serif;fill:${c.text}}.count{font:800 16px 'Google Sans',Arial,sans-serif;fill:${c.bg}}.warn{font:700 17px 'Google Sans',Arial,sans-serif;fill:${c.red}}</style><rect class="bg" width="${w}" height="${h}" rx="20"/>${content}</svg>`;}
  const box=(x,y,w,h)=>`<rect class="box" x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/>`;
  const arrow=(a,b,x,y,color)=>`<path d="M${a} ${b} L${x} ${y}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/><path d="M${x-9} ${y-7} L${x} ${y} L${x-9} ${y+7}" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>`;
  const assets=[];
  function add(path,text){if(!text.includes("<title ")||!text.includes("<desc ")||/<script\b|<foreignObject\b|<image\b|<iframe\b|\son\w+\s*=|href\s*=|url\(/i.test(text))throw Error("SVG no autorizado "+path);assets.push({path,mode:"100644",type:"blob",content:text});}
  for(const m of mods){
    const accent=palette[Math.floor(m.n/5)%palette.length];
    const concepts=m.points.map((point,i)=>{const x=20+i*286;return box(x,85,260,270)+`<circle cx="${x+28}" cy="113" r="16" fill="${accent}"/><text x="${x+28}" y="119" text-anchor="middle" class="count">${i+1}</text>`+multiline(point,x+20,163,28,8,23);}).join("");
    const branches=`<path d="M436 32 V63 M150 63 H722 M150 63 V85 M436 63 V85 M722 63 V85" stroke="${accent}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
    add(`public/media/procuraduria/module-diagrams/pgn-m${m.n}-l1.svg`,svg(890,375,`M${m.n}: tres conceptos`,`M${m.n} / LECCIÓN 1. Conceptos del módulo ${m.title}`,branches+concepts));
    const poses=[[20,22],[458,22],[20,218],[458,218]];
    const steps=m.steps.map((step,i)=>{const [x,y]=poses[i];return box(x,y,412,176)+`<circle cx="${x+29}" cy="${y+31}" r="17" fill="${accent}"/><text class="count" x="${x+29}" y="${y+37}" text-anchor="middle">${i+1}</text>`+multiline(step,x+22,y+88,38,4,24);}).join("");
    add(`public/media/procuraduria/module-diagrams/pgn-m${m.n}-l2.svg`,svg(890,414,`M${m.n}: ruta de aplicación`,`M${m.n} / LECCIÓN 2. Secuencia del módulo ${m.title}`,steps+arrow(433,110,452,110,accent)+arrow(433,306,452,306,accent)));
    const top=box(20,20,850,152)+`<rect x="20" y="20" width="7" height="152" rx="3.5" fill="${accent}"/>`+multiline(m.scenario,44,66,100,5,23);
    const fork=`<path d="M445 172 V206 M225 206 H665 M225 206 V234 M665 206 V234" fill="none" stroke="${accent}" stroke-width="2.5"/>`;
    const traps=m.wrong.slice(0,2).map((d,i)=>{const x=20+i*445;return box(x,234,405,164)+`<circle cx="${x+30}" cy="264" r="16" fill="#49303A"/><text x="${x+30}" y="270" class="warn" text-anchor="middle">!</text><text x="${x+57}" y="271" class="warn">Revisar este atajo</text>`+multiline(d,x+20,312,40,4,22);}).join("");
    const bottom=box(20,422,850,58)+`<text x="42" y="458" class="small">Contrastar: hechos · competencia · evidencia · etapa</text>`;
    add(`public/media/procuraduria/module-diagrams/pgn-m${m.n}-l3.svg`,svg(890,500,`M${m.n}: caso con distractores`,`M${m.n} / LECCIÓN 3. Caso del módulo ${m.title}`,top+fork+traps+bottom));
  }
  const overview={
    "procuraduria-course-route.svg":["Convocatoria","Estado","PGN","CPACA","Disciplina","Prueba","Prevención","Gestión","Sistemas"],
    "colombian-state-public-function.svg":["Estado","Derechos","Ramas","Función pública","Competencia","Responsabilidad"],
    "procuraduria-structure-competence.svg":["Ministerio Público","Prevención","Intervención","Disciplina","Nivel territorial","Competencia"],
    "cpaca-petition-route.svg":["Petición","Competencia","Traslado","Respuesta","Notificación","Recursos"],
    "disciplinary-process-route.svg":["Noticia","Relevancia","Indagación cuando aplica","Investigación","Cierre","Evaluación"],
    "disciplinary-evidence-guide.svg":["Hipótesis","Medios de prueba","Legalidad","Contradicción","Valoración","Motivación"],
    "preventive-control-intervention.svg":["Riesgo","Prevención","Recomendación","Seguimiento","Intervención","Control"],
    "contracting-integrity-territory.svg":["Planeación","Selección objetiva","Ejecución","Supervisión","Integridad","Control"],
    "systems-disciplinary-evidence.svg":["Fuente de datos","Preservación","Integridad","Correlación","Hipótesis","Informe técnico"]
  };
  for(const [file,names] of Object.entries(overview)){
    const rows=Math.ceil(names.length/3),h=rows*136+28;
    const blocks=names.map((name,i)=>{const x=20+(i%3)*291,y=18+Math.floor(i/3)*136;return box(x,y,274,116)+`<circle cx="${x+32}" cy="${y+32}" r="16" fill="${c.green}"/><text class="count" x="${x+32}" y="${y+38}" text-anchor="middle">${i+1}</text>`+multiline(name,x+20,y+80,25,2,22,"bold");}).join("");
    add("public/media/lesson-support/"+file,svg(890,h,file.replace(".svg","").replace(/-/g," "),"Guía general de Procuraduría",blocks));
  }
  if(assets.length!==264||new Set(assets.map(x=>x.content)).size!==264)throw Error("No se generaron 264 SVG únicos");
  return assets;
}
const blueprint = readFileSync('content/courses/procuraduria-104-2026-3pu15/blueprints.ts', 'utf8')
const assets = buildSvgAssets(blueprint)
for (const asset of assets) { mkdirSync(dirname(asset.path), { recursive: true }); writeFileSync(asset.path, asset.content) }
console.log('SVG de Procuraduría generados:', assets.length)
