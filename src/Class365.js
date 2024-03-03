import { Packet } from 'Class124.js';
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
    if (d.member3983 !== undefined && d.member3984 !== undefined && d.packet !== undefined) {
        x = d.member3983;
        u = d.member3984;
        var j = d.packet;
        j.setPos(5);
        v = j.g1();
        j.setPos(j.getPos() + v * (4 + 4 + 4 + 4 + 64));
        var g = j.getSize() - j.getPos();
        var t = Packet(g);
        t.member1067(j.getData(), j.getPos(), g);
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
        var c = Packet(0);
        n = new Array(v);
        for (var e = 0; e < v; e++) {
            j.setPos(e * (4 + 4 + 4 + 4 + 64) + 6);
            var s = j.g4s();
            var r = j.g4s();
            var i = j.g4();
            var h = j.g4();
            var k = Packet(64);
            k.member1067(j.getData(), j.getPos(), 64);
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