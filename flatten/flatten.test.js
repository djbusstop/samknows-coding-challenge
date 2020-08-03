const flatten = require("./flatten");

describe("flatten.js", () => {
  describe("flatten()", () => {
    it("can flatten an array of arrays of numbers", () => {
      const testData = [1, 2, [3, 4, [5, 6]]];
      const result = flatten(testData);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("can flatten an array of arrays with strings", () => {
      const testData = [
        [1, "hello"],
        [2, "world"]
      ];
      const result = flatten(testData);
      expect(result).toEqual([1, "hello", 2, "world"]);
    });

    it("can flatten nested objects with arrays and strings", () => {
      const testData = {
        hello: "a",
        world: [2, 3, { foo: [[4]] }]
      };
      const result = flatten(testData);
      expect(result).toEqual(["a", 2, 3, 4]);
    });

    it("returns array if already flat", () => {
      const testData = [1, 2, 3, 4];
      const result = flatten(testData);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it("returns one value from object with only one prop", () => {
      const testData = { hello: "world" };
      const result = flatten(testData);
      expect(result).toEqual(["world"]);
    });

    it("returns one value from object with multiple nested props", () => {
      const testData = {
        the: { sea: { was: { angry: { that: { day: { my: "friends" } } } } } }
      };
      const result = flatten(testData);
      expect(result).toEqual(["friends"]);
    });

    it("returns array if includes empty array", () => {
      const testData = [1, 2, [], 4];
      const result = flatten(testData);
      expect(result).toEqual([1, 2, 4]);
    });

    it("returns non-object value", () => {
      const testData = "string";
      const result = flatten(testData);
      expect(result).toEqual(testData);
    });

    it("returns null value", () => {
      const testData = null;
      const result = flatten(testData);
      expect(result).toEqual(testData);
    });

    it("returns array if includes null", () => {
      const testData = [1, [2, null], 4];
      const result = flatten(testData);
      expect(result).toEqual([1, 2, null, 4]);
    });

    it("returns array if includes undefined", () => {
      const testData = [[1, 2], undefined, 4];
      const result = flatten(testData);
      expect(result).toEqual([1, 2, undefined, 4]);
    });
  });
});
