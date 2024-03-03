import { Class124 } from 'Class124.js';
import { Class123 } from 'Class123.js';
export var Class365 = function (d) {
    var q = {};
    var x, u;
    var v;
    q.member3981 = function () {
        return v;
    };
    var n;
    q.member3982 = function (m) {
        return n[m];
    };
    if (d.member3983 !== undefined && d.member3984 !== undefined && d.member2698 !== undefined) {
        x = d.member3983;
        u = d.member3984;
        var j = d.member2698;
        j.member607(5);
        v = j.member609();
        j.member607(j.member1047() + v * (4 + 4 + 4 + 4 + 64));
        var g = j.getSize() - j.member1047();
        var t = Class124(g);
        t.member1067(j.getData(), j.member1047(), g);
        var b;
        if (x === null || u === null) {
            b = t;
        } else {
            var o = Class123.fromPacket(t);
            var a = Class123.member1041(o, x, u);
            b = Class123.toPacket(a);
        }
        if (b.getSize() != 64 + 1) {
        }
        var c = Class124(0);
        n = new Array(v);
        for (var e = 0; e < v; e++) {
            j.member607(e * (4 + 4 + 4 + 4 + 64) + 6);
            var s = j.member1074();
            var r = j.member1074();
            var i = j.member1073();
            var h = j.member1073();
            var k = Class124(64);
            k.member1067(j.getData(), j.member1047(), 64);
            n[e] = {
                member2774: s,
                member3878: r,
                member3877: k,
                member3985: i,
                member3986: h
            };
        }
    } else {
        throw new Error('1352 ');
    }
    d = undefined;
    return q;
};