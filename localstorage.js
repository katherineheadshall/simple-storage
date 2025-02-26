"use strict";

const storage = {
    /**
     * @description Allow you to create an item in the locastorage.
     * @param {string} key the name you will give to your item name.
     * @param {string} value you can pass an object, but it need to be in an stringfy state, for example: set("item", JSON.stringify({object})).
     */
    set(key, value) {
        window.localStorage[key] = value;
        return window.localStorage[key];
    },
    /**
     * @description Allow you to get an item from the locastorage, the return value is a string or a default value you can provide.
     * @param {string} key should be an storage item name.
     * @param {string} defaultValue if no item is found you can provide an default value to be returned.
     */
    get(key, defaultValue) {
        return window.localStorage[key] || defaultValue;
    },
    /**
     * @description Allow you to create an item in the locastorage.
     * @param {string} key the name you will give to your item name.
     * @param {Object} value can be an plain string, number or object.
     */
    setObject(key, value) {
        window.localStorage[key] = JSON.stringify(value);
        return storage.getObject(key);
    },
    /**
     * @description Allow you to get an item from the locastorage, the return value is the parsed already stored value.
     * @param {string} key the name of the already stored item.
     */
    getObject(key) {
        return (window.localStorage[key] !== undefined) ? JSON.parse(window.localStorage[key]) : null;
    },
    /**
     * @description Allow you to get an item from the locastorage, the return value is a string, if not found is null.
     * @param {string} key the name of the already stored item.
     */
    getUniqueKey(key) {
        return (window.localStorage[key] !== undefined) ? window.localStorage[key] : null;
    },
    /**
     * @description Allow you to delete an item from the locastorage, the return value is always null.
     * @param {string} key the name of the already stored item.
     */
    remove(key) {
        return (window.localStorage.removeItem(key)) ? storage.get(key, null) : null;
    }
}

module.exports = storage;