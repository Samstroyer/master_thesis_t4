import { remote } from "electron";
export async function selectFolder() {
    const res = await remote.dialog.showOpenDialog({
        properties: [
            'openDirectory'
        ]
    })
        .then(res => res.filePaths[0])
        .catch(e => e);

    return res;
}

export const fullURL = (username, repository) => {
    return `https://github.com/${username}/${repository}.git`;
}

import { exec } from "child_process"
import os from 'os'; // os.type() == Darwin for Mac
/**
 * @description This method clones the url to the path
 * @param {string} url 
 * @param {string} path 
 */
export async function createRepo(url, path) {
    // Clones the repo with a Git command
    exec(`git clone "${url}" ${path}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    })
}