import { Class251 } from 'Class251.js';
export var Class488 = function (n) {
    var g = {};
    var h;
    var d = Class251({});
    if (n.member4179 !== undefined && n.member4179 !== null) {
        h = n.member4179;
    } else {
        throw new Error('1668 ');
    }
    var r = function (s) {
        return true;
    };
    g.member7740 = r;
    var o = function (s) {
        return true;
    };
    g.member7741 = o;
    var k = function (s) {
    };
    g.member7742 = k;
    var j = function (s) {
        return d.getVarInt(s);
    };
    g.getVarInt = j;
    var e = function (s, t) {
        d.member2945(s, t);
    };
    g.member2945 = e;
    var c = function (s) {
        return d.getVarBit(s);
    };
    g.getVarBit = c;
    var b = function (t, s) {
        d.member2952(t, s);
    };
    g.member2952 = b;
    var q = function (s) {
        return d.member2946(s);
    };
    g.member2946 = q;
    var m = function (t, s) {
        d.member2947(t, s);
    };
    g.member2947 = m;
    var a = function () {
        return h.member7743();
    };
    g.member7743 = a;
    var i = function () {
        d.clear();
    };
    g.clear = i;
    n = undefined;
    return g;
};