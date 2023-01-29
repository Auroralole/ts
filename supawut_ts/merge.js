"use strict";
exports.__esModule = true;
exports.Merge = void 0;
var Merge = /** @class */ (function () {
    function Merge() {
    }
    Merge.prototype.merge = function (collection_1, collection_2) {
        var result = [];
        var i = 0;
        var j = 0;
        while (i < collection_1.length && j < collection_2.length) {
            if (collection_1[i] < collection_2[j]) {
                result.push(collection_1[i++]);
            }
            else {
                result.push(collection_2[j++]);
            }
        }
        while (i < collection_1.length) {
            result.push(collection_1[i++]);
        }
        while (j < collection_2.length) {
            result.push(collection_2[j++]);
        }
        return result;
    };
    return Merge;
}());
exports.Merge = Merge;
