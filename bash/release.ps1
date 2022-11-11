param ($version = $(throw "version is required."), $notes = $(throw "notes is required."))

# set env
$env:version = $version
$env:notes=$notes

# Build Tauri
npx tauri build

# generate updater.json
npm run updater $version $notes
exit 0