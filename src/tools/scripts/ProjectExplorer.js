// This file will contain the commands 
// needed in project explorer

import { downloadInternetURLToTempDir } from "../scripts/temp_dir"
import { exec, execSync } from "child_process"

function GetBranches(ret, cwd) {
    exec('git branch -v', { cwd: cwd }, (err, stdout, stderr) => {
        let arr = stdout.split("\n");
        arr.forEach(branch => ret.push(branch))
    })
}

function GetTags(ret, cwd) {
    exec('git tag', { cwd: cwd }, (err, stdout, stderr) => {
        let arr = stdout.split("\n");
        arr.forEach(tag => ret.push(tag))
    })
}

function GetCommits(ret, cwd) {
    exec('git log -v', { cwd: cwd }, (err, stdout, stderr) => {
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
    try {
        let data = downloadInternetURLToTempDir(url);

        if (data.note == 'Item already exists!') {
            errorbox.push(data.note);
        } else if (data.error) {
            errorbox.push(data.error);
            return;
        }

        GetBranches(branches, data.cwd);
        GetCommits(commits, data.cwd);
        GetTags(tags, data.cwd);
    } catch (e) {
        errorbox.push("Error! Possible problems:");
        errorbox.push("- Check that a folder is selected");
        errorbox.push("- Check that git exists in folder");
        errorbox.push(e);
    }
}