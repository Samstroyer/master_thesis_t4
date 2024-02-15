// This file will contain the commands 
// needed in project explorer

import { spawn } from "child_process"

function GetBranches(url) {
    const cp = spawn('git branch -v', {
        shell: true
    })

    return cp.stdout;
}

function GetTags(url) {
    const cp = spawn('git tag -v', {
        shell: true
    })

    return cp.stdout;
}

function GetCommits(url) {
    const cp = spawn('git log -v', {
        shell: true
    })

    return cp.stdout;
}

/**
 * @description Returns wanted data from a GitHub project
 * @param {boolean} branches 
 * @param {boolean} tags 
 * @param {{commits: boolean, messages?: boolean, author?: boolean}} commits 
 */
export function GetData(branches, tags, commits, url) {
    let cp = spawn('git rev-parse --git-dir', {
        shell: true,

    })

    cp.stdout.on('data', (data) => { console.log(data.toString()) })

    if (branches) {
        GetBranches(url);
    }

    if (tags) {
        GetTags(url);
    }

    if (commits) {
        GetCommits(url);
    }
}