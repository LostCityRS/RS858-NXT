import { Packet } from 'Class124.js';
export var Class420 = function (b) {
    var d = {};
    var e;
    var g;
    var h;
    var c;
    d.member4868 = function () {
        return c;
    };
    d.member4869 = function (i) {
        c = i;
    };
    var a = function (k, j, i) {
        e = k;
        g = j;
        if (g === -1) {
            h = Packet(260, undefined, i);
        } else if (g === -2) {
            h = Packet(10000, undefined, i);
        } else if (g <= 18) {
            h = Packet(20, undefined, i);
        } else if (g <= 98) {
            h = Packet(100, undefined, i);
        } else {
            h = Packet(260, undefined, i);
        }
        d.packet = h;
        c = 0;
        if (i !== undefined) {
            h.p1enc(e);
        } else {
            h.p1(e);
        }
    };
    d.setup = a;
    b = undefined;
    return d;
};