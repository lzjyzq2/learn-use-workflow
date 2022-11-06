const fs = require('fs');
const { resolve } = require('path');
const nowDir = __dirname
const notes = process.env.notes;
const version = process.env.version
const versionTag = "v" + version;


const readSig = () => {
    const path = resolve(nowDir, '..', 'src-tauri', 'target', 'release', 'bundle', `learn-use-workflow_${version}_x64_en-US.msi.zip.sig`)
    console.log('readSig', path)
    const sig = fs.readFileSync(path, 'utf-8')
    return sig
}

const update = {
    version: versionTag,
    notes,
    "pub_date": new Date(),
    "platforms": {
        "windows-x86_64": {
            "signature": readSig(),
            "url": `https://github.com/lzjyzq2/learn-use-workflow/releases/download/${versionTag}/learn-use-workflow_${version}_x64_en-US.msi.zip`
        }
    }
}



const createUpdater = () => {
    const path = resolve(nowDir, '..', '.updater')
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    const jsonPath = resolve(path, 'updater.json')
    console.log('update', jsonPath)
    fs.writeFileSync(
        jsonPath,
        JSON.stringify(update, null, 2)
    );
}

createUpdater()