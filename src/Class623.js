import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class93 } from 'Class93.js';
import { Priority } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class555 } from 'Class555.js';
import { Class566 } from 'Class566.js';
export var Class623 = function () {
    var b = {};
    var d = null;
    var e = null;
    var a = Class105({ member895: 25 });
    var h = false;
    var g = function (j, i) {
        d = j;
        h = i;
    };
    b.member25 = g;
    var c = function (m) {
        var i = a.find(m);
        if (i !== null) {
            return i;
        }
        var k = d.member1551(Class95.member811, m, 0, Class93.member796);
        var r = d.member1551(Class95.member814, m, 0, Class93.member796);
        if (k === undefined || r === undefined) {
            return undefined;
        }
        if (!k || !r) {
            return NULL;
        }
        var j = d.getFile(Class95.member811, m, 0, Priority.member841, Class93.member796);
        var q = Class80.member606(j);
        var o = d.getFile(Class95.member814, m, 0, Priority.member841, Class93.member795);
        var n = Class555.load(o);
        var i = Class566({
            member9302: 16,
            member8852: 16,
            member8853: q,
            member8854: n,
            member8855: h
        });
        a.put(i, 1, m);
        return i;
    };
    b.member3639 = c;
    return b;
}();