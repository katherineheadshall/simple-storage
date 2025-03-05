/**
 * @jest-environment jsdom
 */

import { ktget, ktgetUniqueKey, ktremove, ktset, ktsetObject } from "./localStorage";

test("get::method - should get an blank item '' item from the storage", (done) => {
  expect(ktget("test_storage_item", "")).toEqual("");
  done();
});

test("set::method - should get string result from storage item", (done) => {
  expect(ktset("test_storage_item", JSON.stringify({ myObject: "myObjectValue" }))).toEqual(JSON.stringify({ myObject: "myObjectValue" }));
  done();
});

test("setObject::method - should get 10 result from storage item", (done) => {
  expect(ktsetObject("test_storage_item", { myObject: "myObjectValue1" })).toEqual({ myObject: "myObjectValue1" });
  done();
});

test("getUniqueKey::method - should get null from storage item", (done) => {
  expect(ktgetUniqueKey("test_storage_unique_key")).toEqual(null);
  done();
});

test("getUniqueKey::method - should get items from storage item", (done) => {
  ktset("test_storage_unique_key", "myValue");
  expect(ktgetUniqueKey("test_storage_unique_key")).toEqual("myValue");
  done();
});

test("remove::method - should get undefined from storage item", (done) => {
  expect(ktset("test_storage_item_1", "myValue")).toEqual("myValue");
  expect(ktremove("test_storage_item_1")).toEqual(undefined);
  done();
});