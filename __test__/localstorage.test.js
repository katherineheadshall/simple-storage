/**
 * @jest-environment jsdom
 */

const { get, getUniqueKey, set, setObject, remove } = require('../localstorage');

test("get::method - should get an null item from the storage", (done) => {
  expect(get("test_storage_item", null)).toEqual(null);
  done();
});

test("set::method - should get string result from storage item", (done) => {
  expect(set("test_storage_item", 10)).toEqual("10");
  done();
});

test("setObject::method - should get 10 result from storage item", (done) => {
  expect(setObject("test_storage_item", 10)).toEqual(10);
  done();
});

test("getUniqueKey::method - should get null from storage item", (done) => {
  expect(getUniqueKey("test_storage_unique_key")).toEqual(null);
  done();
});

test("remove::method - should get null from storage item", (done) => {
  expect(set("test_storage_item_1", 10)).toEqual("10");
  expect(remove("test_storage_item_1")).toEqual(null);
  done();
});