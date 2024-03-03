import { Class182 } from 'Class182.js';
import { Class377 } from 'Class377.js';
import { Class695 } from 'Class695.js';
import { Class696 } from 'Class696.js';
export var Class697 = function () {
    var d = {};
    var a;
    var b = Class182();
    d.member25 = function (g) {
        a = g;
    };
    var e = d.member25;
    d.member7183 = function (i, h) {
        var g = b.member776();
        while (g !== undefined) {
            g.member512();
            g = b.member777();
        }
        b.member301();
    };
    var c = d.member7183;
    d.member487 = function () {
        var h = a.member6116.member7139();
        var g = b.member776();
        while (g !== undefined) {
            if (g.member1999(h)) {
                g.member512();
                b.remove();
            } else {
                g.member9909(h);
            }
            g = b.member777();
        }
    };
    d.member486 = function () {
        var h = a.member6116.member7139();
        var g = b.member776();
        while (g !== undefined) {
            g.member4380(h);
            g = b.member777();
        }
    };
    d.add = function (h) {
        if (h.member6432 === undefined || h.member873 === undefined || h.member875 === undefined || h.member6433 === undefined || h.member6434 === undefined || h.member6435 === undefined || h.member6436 === undefined || h.member6437 === undefined || h.member6438 === undefined || h.member6439 === undefined || h.member6440 === undefined || h.member6441 === undefined || h.member6442 === undefined || h.member6443 === undefined || h.member1788 === undefined) {
            throw new Error('1513 ');
        }
        var g = null;
        var k = Class377();
        var j = a.member6444.member6445();
        if (j !== null) {
            g = j.member7842();
            g.member2013(k);
        }
        h.member7710 = a;
        h.parent = g;
        h.member4070 = j;
        h.node = k;
        h.level = Class695.member9905();
        var i = Class696(h);
        k.member4185(i);
        b.member2038(i);
    };
    return d;
}();