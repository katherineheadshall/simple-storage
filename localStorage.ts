"use strict";
/**
 * @name KatherinHeadshall Simple Storage
 * @description Simple storage was built to be faster and
 * dependency free.
 */

/**
 * @description Allow you to create an item in the locastorage.
 * @param {string} key the name you will give to your item name.
 * @param {string} value you can pass an object, but it need to be in an stringfy state, for example: set("item", JSON.stringify({object})).
 */
const ktset = (key: string, value: string) => {
    window.localStorage[key] = value;
    return window.localStorage[key];
}
/**
 * @description Allow you to get an item from the locastorage, the return value is a string or a default value you can provide.
 * @param {string} key should be an storage item name.
 * @param {string} defaultValue if no item is found you can provide an default value to be returned.
 */
const ktget = (key: string, defaultValue: string) => {
    return window.localStorage[key] || defaultValue;
}
/**
 * @description Allow you to create an item in the locastorage.
 * @param {string} key the name you will give to your item name.
 * @param {Object} value can be an plain string, number or object.
 */
const ktsetObject = (key: string, value: object) => {
    window.localStorage[key] = JSON.stringify(value);
    return ktgetObject(key);
}
/**
 * @description Allow you to get an item from the locastorage, the return value is the parsed already stored value.
 * @param {string} key the name of the already stored item.
 */
const ktgetObject = (key: string) => {
    return (window.localStorage[key] !== undefined) ? JSON.parse(window.localStorage[key]) : null;
}
/**
 * @description Allow you to get an item from the locastorage, the return value is a string, if not found is null.
 * @param {string} key the name of the already stored item.
 */
const ktgetUniqueKey = (key: string) => {
    return (window.localStorage[key] !== undefined) ? window.localStorage[key] : null;
}
/**
 * @description Allow you to delete an item from the locastorage, the return value is always null.
 * @param {string} key the name of the already stored item.
 */
const ktremove = (key: string): void => {
    return window.localStorage.removeItem(key);
}