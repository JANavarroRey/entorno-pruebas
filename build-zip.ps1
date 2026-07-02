# build-zip.ps1
# Genera un ZIP con rutas Linux (/) para compatibilidad con servidores Linux
# Se ejecuta desde el directorio web-redesign/

Add-Type -Assembly 'System.IO.Compression.FileSystem'

$sourceDir = Join-Path $PSScriptRoot 'murcianitos-theme'
$zipFile = Join-Path $PSScriptRoot 'murcianitos-theme.zip'

# Borrar ZIP antiguo
if (Test-Path $zipFile) { Remove-Item $zipFile -Force }

# Crear ZIP con rutas correctas
$zip = [System.IO.Compression.ZipFile]::Open($zipFile, 'Create')
$count = 0

Get-ChildItem -Path $sourceDir -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1)
    # Convertir backslashes de Windows a forward slashes de Linux
    $entryName = 'murcianitos-theme/' + $relativePath.Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $zip, $_.FullName, $entryName, 'Optimal'
    ) | Out-Null
    $count++
    Write-Host "  + $entryName"
}

$zip.Dispose()

$size = [math]::Round((Get-Item $zipFile).Length / 1MB, 2)
Write-Host ""
Write-Host "OK: murcianitos-theme.zip ($size MB, $count archivos)"
Write-Host "   Todas las rutas internas usan '/' (Linux compatible)"
