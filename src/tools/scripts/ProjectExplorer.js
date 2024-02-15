// This file will contain the commands 
// needed in project explorer

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
export function GetData(branches, tags, commits) {

    // Check if the repo exists in future - error checking

    GetBranches(branches);
    GetCommits(commits);
    GetTags(tags);
}