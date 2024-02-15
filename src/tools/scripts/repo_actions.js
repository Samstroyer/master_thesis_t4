/** 
 * This file is for all the repo actions that are available in the program. 
 * This file should finally contain function for: 
 * Init, branch, checkout, switch, subtrees, worktrees, bare (more to come)
 */
import { exec } from "child_process"

export function initRepo(path) {
    if (!path) { return "Undefined path!"; }
    if (path == "") { return "Not a valid path"; }
    try {
        exec(`git init "${path}"`);
        return "Success!"
    } catch (e) {
        return "Error!";
    }
}