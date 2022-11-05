const fs = require('fs');
const { resolve } = require('path');
const nowDir = __dirname
const notes = process.env.notes;
const version = process.env.version
const versionTag = "v" + version;

const update = {
    version: versionTag,
    notes,
    "pub_date": new Date(),
    "platforms": {
        "windows-x86_64": {
            "signature": readSig(),
            "url": `https://github.com/lzjyzq2/learn-use-workflow/releases/download/${versionTag}/OhMyBox_${version}_x64_en-US.msi.zip`
        }
    }
}

const readSig = () => {
    const path = resolve(nowDir, '..', 'src-tauri', 'target', 'release', 'bundle', 'learn-use-workflow.x64.msi.zip.sig')
    return fs.readFileSync(path, 'utf-8')
}

const createUpdater = () => {
    const path = resolve(nowDir, '..', '.updater')
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    const jsonPath = resolve(path, 'updater.json')
    fs.writeFileSync(
        jsonPath,
        JSON.stringify(update, null, 2)
    );
}

createUpdater()