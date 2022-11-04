param ($version = $(throw "version is required."))

Write-Output $version
Rename-Item -Path .\src-tauri\target\release\learn-use-workflow.exe -NewName ("learn-use-workflow-v"+$version+".exe")