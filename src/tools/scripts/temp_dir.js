import { os, tmpdir } from "os";
import { createRepo } from "../scripts/download"
import { createHash } from "crypto";
import { execSync } from "child_process";

const tempDir = () => tmpdir;

// Used to generate hashes for files
// Not dangerous to touch... 
// ...but could have consequences (non-catastrophic)
const KEY = "myKey";

/**
 * @description Downloads a repo to temp dir to have it on system temporarily. 
 * @param {String} url 
 * @returns error if there is an error, else nothing
 */
export function downloadInternetURLToTempDir(url) {
    let newHash = createHash("sha256", KEY).update(url).digest('hex');

    // console.log(newHash);

    // Check chars that are not accepted
    if (url.includes([' ', '=', '?'])) return "Invalid url!";

    if (url.includes("github")) {
        let path = tempDir();
        try {
            execSync(`git clone ${url} ${tempDir() + "\\" + newHash}`)
            console.log("Created repo in: " + tempDir() + "\\" + newHash);
        } catch (e) {
            return e;
        }
    } else { return "Unsuported link! Must contain 'github'"; }
}