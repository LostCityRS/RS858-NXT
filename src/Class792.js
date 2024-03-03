import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class96 } from 'Class96.js';
import { Class707 } from 'Class707.js';
export var Class792 = function (j) {
    var b = {};
    var i = null;
    var h = null;
    var k = null;
    var g = 0;
    b.member2975 = function () {
        return g;
    };
    var a = Class105({ member895: 64 });
    if (j.member2739 !== undefined && j.member3992 !== undefined && j.member995 !== null) {
        i = j.member2739;
        h = j.member3992;
        k = j.member995;
        g = k.member1439(Class95.member807, Class131.member1259.member1204).member3896();
    } else {
        throw new Error('1394 ');
    }
    var e = function (o) {
        var m = a.find(o);
        if (m === member47) {
            var n = k.getFile(Class95.member807, Class131.member1259.member1204, o, Class96.member840);
            if (n === member47) {
                return member47;
            }
            m = Class707(o, b);
            if (n !== undefined) {
                m.decode(n);
            }
            a.put(m, 1, o);
        }
        return m;
    };
    b.list = e;
    var d = function () {
        a.member301();
    };
    b.member8696 = d;
    var c = function (m) {
        a.member905(m * 10);
    };
    b.member8697 = c;
    j = undefined;
    return b;
};