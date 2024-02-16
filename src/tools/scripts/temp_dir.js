import { os, tmpdir, type } from "os";
import { createHash } from "crypto";
import { execSync } from "child_process";
import { GetItems, SetItem, CheckExists } from "./localstorage";
import { readdir } from "fs";

const tempDir = () => tmpdir + ((type == 'Darwin') ? '/projectexplorer/repos/' : '\\prpjectexplorer\\repos\\');

/* 
https://github.com/Samstroyer/master_thesis_t4.git
*/

// Used to generate hashes for files
// Not dangerous to touch... 
// ...but could have consequences (non-catastrophic)
const KEY = "myKey";

/**
 * @description Downloads a repo to temp dir to have it on system temporarily. 
 * @param {String} url 
 * @returns {{error: String, cwd: String, note: String?}} Returns error and cwd in an object
 */
export function downloadInternetURLToTempDir(url) {
    let newHash = createHash("sha256", KEY).update(url).digest('hex');

    syncTmpdirtoLocalstorage();
    if (localStorage.getItem(newHash)) return { error: undefined, cwd: tempDir() + newHash, note: "Item already exists!" };

    // Check chars that are not accepted - expand list later
    if (includes(url, [' ', '?', '='])) return { error: "Invalid url!", cwd: null };

    if (!url.includes("github")) return { error: "Unsuported link! Must contain 'github'", cwd: null };

    try {
        execSync(`git clone ${url} ${tempDir() + newHash}`);

        if (type == 'Darwin') {
            let repoName = execSync('git ls-remote --get-url | xargs basename', {
                cwd: tempDir() + newHash
            });
            SetItem(newHash, repoName.toString());
        } else {
            // Bad way to do it
            SetItem(newHash, url);
        }

        return { error: undefined, cwd: tempDir() + newHash };
        // For easily testing the command
        // console.log(`git clone ${url} ${tempDir() + newHash}`);
    } catch (e) {
        return { error: e, cwd: null };
    }
}

/**
 * @description Checks if a string includes any of the provided elements
 * @param {String} toSearch
 * @param {String[]} searchArr
 * @returns {bool} contains any 
 */
function includes(toSearch, searchArr) {
    // False til proven
    let acc = false;

    searchArr.forEach(str => {
        if (toSearch.includes(str)) acc = true;
    })

    return acc;
}

/**
 * @description this functions syncs local repos in temp to localstorage
 */
export function syncTmpdirtoLocalstorage() {
    let localstorage_defs = localStorage;
    let keyArr = [];

    for (let i = 0; i < localstorage_defs.length; i++) {
        let key = localStorage.key(i);
        keyArr.push(key);
    }

    readdir(tempDir(), (err, files) => {
        if (files.includes('.DS_Store')) {
            files.toSorted();
            // It will be first element as it contais . in front
            files.splice(0, 1);
        }

        let keysToRemove = [];
        keyArr.forEach(key => {
            if (!files.includes(key)) {
                keysToRemove.push(key);
            }
        })

        if (keysToRemove.length < 1) return;

        keysToRemove.forEach(key => localStorage.removeItem(key));
    })
}   