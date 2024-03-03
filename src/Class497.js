import { ObjWearModels } from 'Class252.js';
export var Class497 = function (h) {
    var n = {};
    var u = 1 << 0;
    var c = 1 << 1;
    var t = 1 << 2;
    var v = 1 << 3;
    var e = null;
    n.getManWear = function () {
        return e;
    };
    var r = null;
    n.getWomanWear = function () {
        return r;
    };
    var b = null;
    n.getRecolD = function () {
        return b;
    };
    var i = null;
    n.getRetexD = function () {
        return i;
    };
    if (h.member7937 !== undefined && h.packet !== undefined) {
        var q = h.member7937;
        var m = h.packet;
        var s = q.getManWear();
        if (s !== null) {
            e = s.clone();
        } else {
            e = ObjWearModels({});
        }
        s = q.getWomanWear();
        if (s != null) {
            r = s.clone();
        } else {
            r = ObjWearModels({});
        }
        if (q.getRecolD() !== null) {
            b = q.getRecolD().slice(0);
        }
        if (q.getRetexD() !== null) {
            i = q.getRetexD().slice(0);
        }
        var d = m.g1();
        if ((d & u) !== 0) {
            e.setWear1(m.gSmart2or4null());
            r.setWear1(m.gSmart2or4null());
            if (q.getManWear().getWear2() !== -1 || q.getWomanWear().getWear2() !== -1) {
                e.setWear2(m.gSmart2or4null());
                r.setWear2(m.gSmart2or4null());
            }
            if (q.getManWear().getWear3() !== -1 || q.getWomanWear().getWear3() !== -1) {
                e.setWear3(m.gSmart2or4null());
                r.setWear3(m.gSmart2or4null());
            }
        }
        if ((d & c) !== 0) {
            e.setHead1(m.gSmart2or4null());
            r.setHead1(m.gSmart2or4null());
            if (q.getManWear().getHead2() !== -1 || q.getWomanWear().getHead2() !== -1) {
                e.setHead2(m.gSmart2or4null());
                r.setHead2(m.gSmart2or4null());
            }
        }
        if ((d & t) !== 0) {
            var k = m.g2();
            var g = new Array(4);
            g[0] = k & 15;
            g[1] = k >> 4 & 15;
            g[2] = k >> 8 & 15;
            g[3] = k >> 12 & 15;
            for (var o = 0; o < 4; o++) {
                if (g[o] !== 15) {
                    b[g[o]] = m.g2();
                }
            }
        }
        if ((d & v) !== 0) {
            var k = m.g1();
            var g = new Array(2);
            g[0] = k & 15;
            g[1] = k >> 4 & 15;
            for (var o = 0; o < 2; o++) {
                if (g[o] !== 15) {
                    i[g[o]] = m.g2();
                }
            }
        }
    } else {
        throw new Error('887 ');
    }
    var a = function (y, x) {
        if (y === undefined) {
            return x === undefined;
        }
        if (x === undefined) {
            return false;
        }
        if (y === null) {
            return x === null;
        }
        if (x === null) {
            return false;
        }
        if (y.length !== x.length) {
            return false;
        }
        for (var j = 0; j < y.length; j++) {
            if (y[j] !== x[j]) {
                return false;
            }
        }
        return true;
    };
    n.equals = function (j) {
        if (j === null || j === undefined) {
            return false;
        }
        if (!e.equals(j.getManWear())) {
            return false;
        }
        if (!r.equals(j.getWomanWear())) {
            return false;
        }
        if (!a(b, j.getRecolD())) {
            return false;
        }
        if (!a(i, j.getRetexD())) {
            return false;
        }
        return true;
    };
    h = undefined;
    return n;
};