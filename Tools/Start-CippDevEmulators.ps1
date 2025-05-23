Get-Command wt -ErrorAction Stop | Out-Null
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -ErrorAction SilentlyContinue
$Path = (Get-Item $PSScriptRoot).Parent.Parent.FullName
Write-Host "CIPP Dev Emulators starting in $Path" -ForegroundColor Green

pwsh -file (Join-Path $PSScriptRoot 'Start-CippDevInstallation.ps1')

Write-Host 'Starting CIPP Dev Emulators'

if (Test-Path (Join-Path $Path 'CIPP-API-Processor')) {
  $Process = Read-Host -Prompt 'Start Process Function (y/N)?'
}

if ($Process -eq 'y') {
  wt --title CIPP`; new-tab --title 'Azurite' -d $Path pwsh -c azurite`; new-tab --title 'FunctionApp' -d $Path\CIPP-API pwsh -c func start`; new-tab --title 'CIPP Frontend' -d $Path\CIPP pwsh -c npm run dev`; new-tab --title 'SWA' -d $Path\CIPP pwsh -c npm run start-swa`; new-tab --title 'CIPP-API-Processor' -d $Path\CIPP-API-Processor pwsh -c func start --port 7072
} else {
  wt --title CIPP`; new-tab --title 'Azurite' -d $Path pwsh -c azurite`; new-tab --title 'FunctionApp' -d $Path\CIPP-API pwsh -c func start`; new-tab --title 'CIPP Frontend' -d $Path\CIPP pwsh -c npm run dev`; new-tab --title 'SWA' -d $Path\CIPP pwsh -c npm run start-swa
}