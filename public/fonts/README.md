# Google Sans en Umbral

Umbral ya referencia las variantes variables de Google Sans desde `src/styles/global.css`.

Archivos esperados en esta carpeta:

- `GoogleSans-VariableFont_GRAD,opsz,wght.ttf`
- `GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf`

En Windows, copia tu `Google_Sans.zip` a la raiz del proyecto y ejecuta:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-google-sans.ps1
```

Tambien puedes indicar una ruta distinta:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-google-sans.ps1 -FontZip "C:\ruta\Google_Sans.zip"
```

Despues reinicia Vite.
