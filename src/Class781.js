import { Class251 } from 'Class251.js';
import { Class691 } from 'Class691.js';
import { BaseVarType } from 'Class462.js';
import { Class66 } from 'Class66.js';
import { VarDomainType } from 'Class465.js';
import { Class501 } from 'Class501.js';
export var Class781 = function (i) {
    var o = {};
    var q;
    var c;
    var b;
    o.member10421 = function () {
        return b;
    };
    var n;
    var x = 0;
    var g = [];
    var d = -1;
    var r = undefined;
    var a = 0;
    var v = function () {
        b = Class251();
        n = [];
        x = 0;
        g = [];
        d = -1;
        r = undefined;
    };
    o.member10422 = v;
    if (i.member7710 !== undefined && i.member2970 !== undefined) {
        q = i.member7710;
        c = i.member2970;
        v();
    } else {
        throw new Error('1742 ');
    }
    var m = function (y) {
        var z = y.getID();
        if (n[z] === undefined) {
            if (y.member9901() === Class691.PERMANENT) {
                var A = localStorage.getItem(t(z));
                if (A !== null) {
                    if (y.member8041().baseVarType === BaseVarType.INTEGER || y.member8041().baseVarType === BaseVarType.LONG) {
                        A = parseInt(A);
                    }
                    b.member2945(y, A);
                }
            }
            n[z] = true;
        }
        return b.getVarInt(y);
    };
    o.getVarInt = m;
    var j = function (y, z) {
        if (y.member9901() === Class691.PERMANENT) {
            localStorage.setItem(t(y.getID()), z);
        } else if (y.member9901() === Class691.member9898) {
            if (y.member7378.baseVarType === BaseVarType.STRING) {
                if (z.length > 80) {
                    z = z.substring(0, 80);
                }
            }
            if (!g[y.getID()] && b.getVarInt(y, z) !== z) {
                x++;
                g[y.getID()] = true;
            }
        }
        b.member2945(y, z);
    };
    o.member2945 = j;
    var t = function (y) {
        return Class66.member432('vt') + VarDomainType.CLIENT.serialID + '.' + y;
    };
    var h = function (y) {
        return y.member2948(m(y.member2949()));
    };
    o.getVarBit = h;
    var e = function (A, z) {
        var y = A.member2949();
        j(y, A.member2951(m(y), z));
    };
    o.member2952 = e;
    var u = function () {
        a = 0;
    };
    o.member10423 = u;
    var k = function () {
        if (Date.now() < d) {
            return;
        }
        if (r === undefined) {
            if (x === 0) {
                return;
            }
            r = new Array(x);
            var D = 0;
            var F = q.member2970.getVarClientTypeList();
            for (var B in g) {
                if (g.hasOwnProperty(B)) {
                    r[D++] = {
                        id: B,
                        value: b.member2946(B)
                    };
                }
            }
            a = 0;
            x = 0;
            g = [];
        }
        if (r !== undefined && a < r.length) {
            var A = q.member8252.member8259();
            if (A !== undefined) {
                var C = A.member10194();
                if (C > 1200) {
                    return;
                }
                var z = A.member8260(Class501.member8154);
                z.packet.p2(0);
                var E = z.packet.pos;
                z.packet.pos += 1;
                var F = q.member2970.getVarClientTypeList();
                while (a < r.length) {
                    var y = r[a];
                    if (C + z.packet.pos > 1500) {
                        break;
                    }
                    F.member10425(y, z.packet);
                    a++;
                }
                z.packet.member1069(z.packet.pos - E);
                if (a >= r.length) {
                    z.packet.arr[E] = 1;
                } else {
                    z.packet.arr[E] = 0;
                }
                A.member8261(z);
                d = Date.now() + 1000;
            }
        }
    };
    o.member78 = k;
    var s = function () {
        if (r !== undefined && a >= r.length) {
            r = undefined;
            a = 0;
        }
    };
    o.member10205 = s;
    i = undefined;
    return o;
};