"use strict";
exports.__esModule = true;
var merge_js_1 = require("./merge.js");
describe("Merge", function () {
    var merge;
    beforeEach(function () {
        merge = new merge_js_1.Merge();
    });
    it("should merge two sorted arrays", function () {
        var collection_1 = [1, 3, 5];
        var collection_2 = [2, 4, 6];
        var result = merge.merge(collection_1, collection_2);
    });
    it("should handle an empty first array", function () {
        var collection_1 = [];
        var collection_2 = [2, 4, 6];
        var result = merge.merge(collection_1, collection_2);
    });
    it("should handle an empty second array", function () {
        var collection_1 = [1, 3, 5];
        var collection_2 = [];
        var result = merge.merge(collection_1, collection_2);
    });
    it("should handle two empty arrays", function () {
        var collection_1 = [];
        var collection_2 = [];
        var result = merge.merge(collection_1, collection_2);
    });
});
