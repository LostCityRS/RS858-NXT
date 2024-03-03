import { Class49 } from 'Class49.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
export var Class186 = function (b) {
    var d = {};
    var h = new Float32Array(3);
    var e;
    d.member2063 = function () {
        return e;
    };
    var i, g, a;
    d.member2064 = function () {
        return i;
    };
    d.member2065 = function () {
        return g;
    };
    d.member2066 = function () {
        return a;
    };
    var c = undefined;
    d.member2067 = function () {
        return c;
    };
    if (b.member2068 !== undefined && b.member1594 !== undefined && b.member1595 !== undefined && b.member1596 !== undefined) {
        e = b.member2068;
        i = b.member1594;
        g = b.member1595;
        a = b.member1596;
        c = b.member1704;
    } else if (b.member1524 !== undefined) {
        e = b.member1524.g2();
        i = {
            member2069: new Float32Array([
                b.member1524.gFloat(),
                b.member1524.gFloat(),
                b.member1524.gFloat()
            ]),
            member2011: b.member1524.g2s()
        };
        g = {
            member2069: new Float32Array([
                b.member1524.gFloat(),
                b.member1524.gFloat(),
                b.member1524.gFloat()
            ]),
            member2011: b.member1524.g2s()
        };
        a = {
            member2069: new Float32Array([
                b.member1524.gFloat(),
                b.member1524.gFloat(),
                b.member1524.gFloat()
            ]),
            member2011: b.member1524.g2s()
        };
        if (i.member2011 === -1) {
            i.member2011 = undefined;
        }
        if (g.member2011 === -1) {
            g.member2011 = undefined;
        }
        if (a.member2011 === -1) {
            a.member2011 = undefined;
        }
        c = b.member1524.g4();
    } else {
        throw new Error('1492 ');
    }
    d.member681 = function () {
        return {
            member2068: e,
            member1594: {
                member2069: new Float32Array(i.member2069.buffer.slice(0)),
                member2011: i.member2011 === undefined ? -1 : i.member2011
            },
            member1595: {
                member2069: new Float32Array(g.member2069.buffer.slice(0)),
                member2011: g.member2011 === undefined ? -1 : g.member2011
            },
            member1596: {
                member2069: new Float32Array(a.member2069.buffer.slice(0)),
                member2011: a.member2011 === undefined ? -1 : a.member2011
            },
            member1704: c
        };
    };
    d.member1318 = function (j) {
        j.p2(e);
        j.pFloat(i.member2069[0]);
        j.pFloat(i.member2069[1]);
        j.pFloat(i.member2069[2]);
        j.p2(i.member2011 === undefined ? -1 : i.member2011);
        j.pFloat(g.member2069[0]);
        j.pFloat(g.member2069[1]);
        j.pFloat(g.member2069[2]);
        j.p2(g.member2011 === undefined ? -1 : g.member2011);
        j.pFloat(a.member2069[0]);
        j.pFloat(a.member2069[1]);
        j.pFloat(a.member2069[2]);
        j.p2(a.member2011 === undefined ? -1 : a.member2011);
        j.p4(c);
    };
    d.transform = function (j) {
        Class49.member318(j, i.member2069);
        Class49.member318(j, g.member2069);
        Class49.member318(j, a.member2069);
    };
    d.translate = function (j) {
        Class41.add(i.member2069, j);
        Class41.add(g.member2069, j);
        Class41.add(a.member2069, j);
    };
    d.rotate = function (j) {
        Class140.member318(j, i.member2069);
        Class140.member318(j, g.member2069);
        Class140.member318(j, a.member2069);
    };
    d.member1668 = function (j) {
        h[0] = i.member2069[0];
        h[2] = i.member2069[2];
        if (j == 1) {
            i.member2069[0] = h[2];
            i.member2069[2] = -h[0];
        } else if (j == 2) {
            i.member2069[0] = -h[0];
            i.member2069[2] = -h[2];
        } else if (j == 3) {
            i.member2069[0] = -h[2];
            i.member2069[2] = h[0];
        }
        h[0] = g.member2069[0];
        h[2] = g.member2069[2];
        if (j == 1) {
            g.member2069[0] = h[2];
            g.member2069[2] = -h[0];
        } else if (j == 2) {
            g.member2069[0] = -h[0];
            g.member2069[2] = -h[2];
        } else if (j == 3) {
            g.member2069[0] = -h[2];
            g.member2069[2] = h[0];
        }
        h[0] = a.member2069[0];
        h[2] = a.member2069[2];
        if (j == 1) {
            a.member2069[0] = h[2];
            a.member2069[2] = -h[0];
        } else if (j == 2) {
            a.member2069[0] = -h[0];
            a.member2069[2] = -h[2];
        } else if (j == 3) {
            a.member2069[0] = -h[2];
            a.member2069[2] = h[0];
        }
    };
    b = undefined;
    return d;
};