import { Class421 } from 'Class421.js';
export var Class648 = function () {
    var a = {};
    Class421.member5962.member867 = function (c) {
        var d = c.member6100[--c.member6099];
        var b = c.member8883;
        var g = b.member9625(d);
        var e = b.member9626(d);
        c.member6100[c.member6099++] = g;
        c.member6100[c.member6099++] = e;
    };
    Class421.member5956.member867 = function (d) {
        var c = d.member8883;
        var e = c.member9627();
        if (e === NULL) {
            return true;
        }
        var b = e.getName();
        if (e.getMultiNPC() !== undefined) {
            e = e.getMultiNPC();
            if (e === undefined) {
                b = '';
            } else {
                b = e.getName();
            }
        }
        if (b === undefined) {
            b = '';
        }
        d.member6142[d.member6143++] = b;
    };
    Class421.member5957.member867 = function (c) {
        var b = c.member8883;
        c.member6100[c.member6099++] = b.getVisLevel();
    };
    Class421.member5963.member867 = function (d) {
        var c = d.member8883;
        var b = false;
        var e = c.member9627();
        if (e === NULL) {
            return true;
        }
        if (e !== undefined) {
            b = e.getActive();
        }
        d.member6100[d.member6099++] = b ? 1 : 0;
    };
    Class421.member5964.member867 = function (c) {
        var b = c.member8883;
        var d = b.member9627();
        if (d === NULL) {
            return true;
        }
        c.member6100[c.member6099++] = d === undefined ? 0 : 1;
    };
    Class421.member5966.member867 = function (b) {
        b.member6100[b.member6099++] = b.member8883.member9231();
    };
    return a;
}();