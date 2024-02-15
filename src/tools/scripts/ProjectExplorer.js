// This file will contain the commands 
// needed in project explorer

import { downloadInternetURLToTempDir } from "../scripts/temp_dir"
import { exec, execSync } from "child_process"

function GetBranches(ret) {
    exec('git branch -v', (err, stdout, stderr) => {
        let arr = stdout.split("\n");
        arr.forEach(branch => ret.push(branch))
    })
}

function GetTags(ret) {
    exec('git tag', (err, stdout, stderr) => {
        let arr = stdout.split("\n");
        arr.forEach(tag => ret.push(tag))
    })
}

function GetCommits(ret) {
    exec('git log -v', (err, stdout, stderr) => {
        // Split every new commit 
        stdout.split("commit")
            // Add back the commit text...
            .map(commit => "commit" + commit)
            // Remove the first element as it is empty
            .toSpliced(0, 1)
            // Foreach commit, push it to the page
            .forEach(commit => ret.push(commit));
    })
}

/**
 * @description Returns the data from a repo to the selected arrays in the parameter
 * @param {[]} branches 
 * @param {[]} tags 
 * @param {[]} commits 
 */
export function GetData(branches, tags, commits, errorbox, url) {
    // Try seeing if .git exists, then we can safely call the following commands
    try {
        // Maybe have a timeout property set here? 
        // Could lead to death / infinite loops because why wouldn't it?
        let output = execSync('git rev-parse --git-dir');

        errorbox.push(downloadInternetURLToTempDir(url));

        GetBranches(branches);
        GetCommits(commits);
        GetTags(tags);
    } catch (e) {
        errorbox.push("Error! Possible problems:");
        errorbox.push("- Check that a folder is selected");
        errorbox.push("- Check that git exists in folder");
        errorbox.push(e);
    }
}