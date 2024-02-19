import { toRaw } from "vue";

/**
 * @WARNING NOT IMPLEMENTED
 * @deprecated
 * @WARNING NOT IMPLEMENTED
 * @deprecated
 * @WARNING NOT IMPLEMENTED
 * @deprecated
 * @description Gets the items from local storage
 * @default {Storage} An array of kvp
 * @returns Array of items, empty if nothing present
 */
export function GetItems() {
    return localStorage;
    // if(!options) 
    // if (options.onlyEntries) {

    // } else if()

    // }
}

export function SetItem(key, value) {
    localStorage.setItem(key, value);
}

export function CheckExists(key) {
    // Should only return null and not undefined?
    // From my tests at least
    return (localStorage.getItem(key) != null);
}
