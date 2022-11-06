echo "version: $1, notes: $2 "

export version = $1
export notes = $2

npx build tauri

npm run updater