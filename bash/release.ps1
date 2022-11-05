# param ($version = $(throw "version is required."), $notes = $(throw "notes is required."))

# Write-Output ("version:" + $version)
# Write-Output ("notes:" + $notes)
# # Rename-Item -Path .\src-tauri\target\release\learn-use-workflow.exe -NewName ("learn-use-workflow-v"+$version+".exe")

# $versionTag = ("v" + $version)
# $win64 = New-Object PsObject -Property @{ signature = "" ; url = "" }

# $platforms = New-Object PsObject -Property @{ 'windows-x86_64' = $win64 }

# $updater = New-Object PsObject -Property @{ version = $versionTag; notes = $notes; pub_date = Get-TimeZone -Format "yyyy-MM-dd'T'HH:mm:ss.SZ"; platforms = $platforms }

# $updater | ConvertTo-Json | Write-Output

param ($version = $(throw "version is required."))
# , $notes = $(throw "notes is required.")

# set env
$env:version=$version
# $env:notes=$notes

# Build Tauri
npx tauri build

# generate updater.json
npm run updater