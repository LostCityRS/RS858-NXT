import { Class433 } from 'Class433.js';
import { Class701 } from 'Class701.js';
import { Class299 } from 'Class299.js';
import { Class404 } from 'Class404.js';
export var Class745 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class433.member6400.member6428 = function (d, g) {
        var e = Class701(d);
        return !a.member6101.member9085(e.member3239() ? e : undefined, e.member9926());
    };
    Class433.member6402.member6428 = function (g, j) {
        var e = g.member1135();
        var d = g.member1117();
        var h = g.member1117();
        var n = Math.ceil(d / Class299.member3570);
        var k = Class404.get(h);
        if (k !== undefined) {
            var m = a.member6116.member7139();
            for (var i = k.member776(); i !== null; i = k.member777()) {
                i.member4648(e, m, m + n);
            }
        }
    };
    return b;
}();