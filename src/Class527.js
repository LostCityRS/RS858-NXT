import { Class526 } from 'Class526.js';
export var Class527 = function () {
    var g = {};
    var e;
    var c = {};
    g.member25 = function (j) {
        e = j;
    };
    var i = g.member25;
    g.member301 = function () {
        c = {};
    };
    var h = g.member301;
    g.member8478 = function (j, m) {
        var k = c[j << 1 | (m ? 1 : 0)] = Class526({
            member2970: e,
            member8468: j
        });
        return k;
    };
    var d = g.member8478;
    g.member7552 = function (j, m) {
        var k = c[j << 1 | (m ? 1 : 0)];
        if (k === undefined) {
            return null;
        } else {
            return k;
        }
    };
    var b = g.member7552;
    g.member8479 = function (j, k) {
        c[j << 1 | (k ? 1 : 0)] = undefined;
    };
    var a = g.member8479;
    return g;
}();