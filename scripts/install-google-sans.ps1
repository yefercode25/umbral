param(
  [string]$FontZip = "Google_Sans.zip"
)

$ErrorActionPreference = "Stop"

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$zipPath = if ([System.IO.Path]::IsPathRooted($FontZip)) {
  $FontZip
} else {
  Join-Path $projectRoot $FontZip
}

if (-not (Test-Path $zipPath)) {
  throw "No se encontro Google_Sans.zip. Copialo en la raiz del proyecto o ejecuta: .\\scripts\\install-google-sans.ps1 -FontZip 'C:\\ruta\\Google_Sans.zip'"
}

$destination = Join-Path $projectRoot "public\fonts"
New-Item -ItemType Directory -Force -Path $destination | Out-Null

$tempDir = Join-Path ([System.IO.Path]::GetTempPath()) ("umbral-google-sans-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

try {
  Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force

  $normalName = "GoogleSans-VariableFont_GRAD,opsz,wght.ttf"
  $italicName = "GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf"
  $normalSource = Join-Path $tempDir $normalName
  $italicSource = Join-Path $tempDir $italicName

  if (-not (Test-Path $normalSource)) {
    throw "El ZIP no contiene $normalName en su raiz."
  }
  if (-not (Test-Path $italicSource)) {
    throw "El ZIP no contiene $italicName en su raiz."
  }

  Copy-Item $normalSource (Join-Path $destination $normalName) -Force
  Copy-Item $italicSource (Join-Path $destination $italicName) -Force

  Write-Host "Google Sans integrado correctamente en public/fonts." -ForegroundColor Green
  Write-Host "Reinicia Vite si estaba abierto: npm run dev" -ForegroundColor Cyan
}
finally {
  if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
  }
}
