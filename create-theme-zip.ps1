# create-theme-zip.ps1
# Creates a ZIP with proper forward-slash paths for Linux/WordPress compatibility

Add-Type -Assembly 'System.IO.Compression.FileSystem'

$sourceDir = Join-Path $PSScriptRoot 'murcianitos-child'
$zipFile = Join-Path $PSScriptRoot 'murcianitos-child-final.zip'

# Delete existing zip
if (Test-Path $zipFile) { Remove-Item $zipFile -Force }

# Create zip
$zip = [System.IO.Compression.ZipFile]::Open($zipFile, 'Create')

Get-ChildItem -Path $sourceDir -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1)
    # Prefix with theme folder name + convert backslashes to forward slashes
    $entryName = 'murcianitos-child/' + $relativePath.Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
        $zip, $_.FullName, $entryName, 'Optimal'
    ) | Out-Null
    Write-Host "  + $entryName"
}

$zip.Dispose()

$size = [math]::Round((Get-Item $zipFile).Length / 1MB, 2)
Write-Host "`n✅ murcianitos-child-final.zip creado ($size MB)"
Write-Host "   Todas las rutas usan '/' (compatible con Linux)"
