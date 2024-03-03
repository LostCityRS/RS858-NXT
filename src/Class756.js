import { Class755 } from 'Class755.js';
import { Class433 } from 'Class433.js';
import { Class718 } from 'Class718.js';
import { Class443 } from 'Class443.js';
import { Class501 } from 'Class501.js';
import { Packet } from 'Class124.js';
export var Class756 = function () {
    var o = {};
    var x;
    var g = false;
    var n = 100;
    var s = function (C) {
        x = C;
    };
    o.member25 = s;
    var y;
    o.member8287 = function () {
        return y;
    };
    var A;
    o.member8289 = function () {
        return A;
    };
    var b;
    o.member8290 = function () {
        return b;
    };
    var r;
    o.member8288 = function () {
        return r;
    };
    var j;
    o.member8291 = function () {
        return j;
    };
    var h = 0;
    o.member8286 = function () {
        return h;
    };
    var B = null;
    o.member10216 = function (C) {
        B = C;
    };
    o.member8285 = function () {
        return y !== undefined;
    };
    var e = o.member8285;
    var z = function () {
        y = undefined;
        A = undefined;
        h = 0;
        j = undefined;
    };
    o.member301 = z;
    var k = null;
    o.member10217 = function (C) {
        k = C;
    };
    o.member10182 = function (C) {
        if (k !== null) {
            k(C);
        }
    };
    var a = null;
    o.member10218 = function (C) {
        a = C;
    };
    o.member10183 = function (C) {
        if (a !== null) {
            a(C);
        }
    };
    var m = null;
    o.member9879 = function (C) {
        m = C;
    };
    o.member9880 = function (C) {
        if (m !== null) {
            m(C);
        }
    };
    var i = null;
    o.member10219 = function (C) {
        i = C;
    };
    o.member10184 = function (C) {
        if (i !== null) {
            i(C);
        }
    };
    var d = null;
    o.member10220 = function (C) {
        d = C;
    };
    o.member10185 = function (C) {
        if (d !== null) {
            d(C);
        }
    };
    var c = function (E, J) {
        x.member7187.member9154();
        if (J === 0) {
            z();
            return;
        }
        A = E.gjstr();
        if (E.g1() === 1) {
            E.gjstr();
        }
        y = E.gjstr();
        r = E.g1s();
        if (false) {
        }
        var H = E.g1();
        if (H === 255) {
            return;
        }
        h = H;
        if (false) {
        }
        j = [];
        for (var C = 0; C < h; C++) {
            var G = E.gjstr();
            if (E.g1() == 1) {
                E.gjstr();
            }
            var I = E.g2();
            var D = E.g1s();
            var F = E.gjstr();
            j[C] = Class755(G, I, D, F);
            if (G === x.member7135().member3009()) {
                b = D;
            }
        }
        j.sort(function (L, K) {
            return L.member10215().localeCompare(K.member10215());
        });
        if (B !== null) {
            B();
        }
        if (false) {
        }
    };
    Class433.member6273.member6428 = c;
    var v = function (E, J) {
        x.member7187.member9154();
        var H = E.gjstr();
        if (E.g1() === 1) {
            E.gjstr();
        }
        var D = E.g2();
        var C = E.g1s();
        var L = false;
        if (C === -128) {
            L = true;
        }
        if (L) {
            if (h === 0) {
                return;
            }
            var K;
            for (K = 0; K < h; K++) {
                if (j[K].member3009() === H && j[K].member4085() === D) {
                    break;
                }
            }
            if (K < h) {
                j.splice(K, 1);
                h--;
            }
            if (B !== null) {
                B();
            }
        } else {
            var G = E.gjstr();
            var M = Class755(H, D, C, G);
            if (H === x.member7135().member3009()) {
                b = C;
            }
            if (h === 0) {
                if (j === undefined) {
                    j = [];
                }
                j[0] = M;
                h = 1;
            } else {
                var I;
                for (I = 0; I < h; I++) {
                    var F = j[I].member10215().localeCompare(M.member10215());
                    if (F === 0) {
                        j[I] = M;
                        if (B !== null) {
                            B();
                        }
                        return;
                    } else if (F > 0) {
                        break;
                    }
                }
                if (h >= n) {
                    return;
                }
                j.splice(I, 0, M);
                h++;
            }
            if (B !== null) {
                B();
            }
        }
    };
    Class433.member6274.member6428 = v;
    var u = function (E) {
        if (E === '' || E === undefined) {
            o.member10182({
                member8871: Class718.member10015.id,
                member3492: Class443.member6887[x.clientParameters.member7138.value.id]
            });
            return;
        }
        var D = x.member8252.member8259();
        var C = D.member8260(Class501.member8121);
        C.packet.p1(Packet.member1152(E));
        C.packet.pjstr(E);
        D.member8261(C);
    };
    o.member8293 = u;
    var t = function (E) {
        if (!e()) {
            o.member10184({
                member8871: Class718.member10026.id,
                member3492: Class443.member6903[x.clientParameters.member7138.value.id]
            });
            return;
        }
        if (E === '' || E === undefined) {
            o.member10184({
                member8871: Class718.member6903.id,
                member3492: Class443.member6903[x.clientParameters.member7138.value.id]
            });
            return;
        }
        var D = x.member8252.member8259();
        var C = D.member8260(Class501.member8122);
        C.packet.p1(Packet.member1152(E));
        C.packet.pjstr(E);
        D.member8261(C);
    };
    o.member8294 = t;
    var q = function () {
        var D = x.member8252.member8259();
        var C = D.member8260(Class501.member8121);
        C.packet.p1(0);
        D.member8261(C);
    };
    o.member8295 = q;
    return o;
}();