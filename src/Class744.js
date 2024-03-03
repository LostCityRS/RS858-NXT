import { Packet } from 'Class124.js';
import { Class223 } from 'Class223.js';
import { Class504 } from 'Class504.js';
export var Class744 = function (j) {
    var F = {};
    var E;
    var I = undefined;
    var n = 0;
    F.setTimeout = function (L) {
        n = L;
    };
    var G = 0;
    var C = undefined;
    var J = -1;
    var m = true;
    var H = false;
    var u = undefined;
    var a = new Array(100);
    var D = 0;
    var i = 0;
    F.member10194 = function () {
        return i;
    };
    var r = undefined;
    var v = Packet(15000);
    F.member8284 = function () {
        return v;
    };
    var c = undefined;
    var b = 0, q = 0;
    F.member10195 = function () {
        return b;
    };
    F.member10196 = function () {
        return q;
    };
    var K = 0, t = 0;
    if (j.member10197 !== undefined) {
        E = j.member10197;
    } else {
        throw new Error('971 ');
    }
    var B = function (L, N, M) {
        if (I !== undefined) {
            throw new Error('972 ');
        }
        if (false) {
        }
        I = Class223({
            inBufferSize: 1000000,
            outBufferSize: 100000,
            bufferWrites: true,
            url: (M ? 'wss://' : 'ws://') + L + ':' + N,
            protocol: 'jagex'
        });
    };
    F.member8267 = B;
    var A = function (M, L) {
        u = M;
        r = L;
        v.member1049(r);
    };
    F.member8283 = A;
    var z = function () {
        if (I === undefined) {
            return false;
        } else {
            return I.member2723() === I.member2721;
        }
    };
    F.member8239 = z;
    F.member8238 = function () {
        if (I === undefined) {
            return false;
        } else {
            return I.member2723() === I.member2720;
        }
    };
    var y = function () {
        if (I === undefined) {
            return -1;
        } else {
            return I.member2718();
        }
    };
    F.member8281 = y;
    var x = function (M) {
        v.setPos(0);
        var L = I.read(v, M);
        if (L < M) {
            throw new Error('973 ');
        } else {
            v.setPos(0);
            return v;
        }
    };
    F.member8282 = x;
    var s = function () {
        if (I === undefined) {
            return null;
        }
        if (!H) {
            if (C === undefined) {
                if (m) {
                    if (I.member2718() < 1) {
                        return null;
                    }
                    v.setPos(0);
                    I.read(v, 1);
                    q++;
                    n = 0;
                    m = false;
                }
                v.setPos(0);
                var L;
                if (r !== undefined) {
                    if (v.checkSmart1or2enc()) {
                        if (I.member2718() < 1) {
                            return null;
                        }
                        v.setPos(1);
                        I.read(v, 1);
                        q++;
                        n = 0;
                    }
                    m = true;
                    v.setPos(0);
                    L = v.gSmart1or2enc();
                } else {
                    if (v.checkSmart1or2()) {
                        if (I.member2718() < 1) {
                            return null;
                        }
                        v.setPos(1);
                        I.read(v, 1);
                        q++;
                        n = 0;
                    }
                    m = true;
                    v.setPos(0);
                    L = v.gSmart1or2();
                }
                C = E.member6097[L];
                if (C === undefined) {
                    throw new Error('974 ' + L + '974 ' + c);
                }
                J = C.member2819;
            }
            if (J === -1) {
                if (I.member2718() < 1) {
                    return null;
                }
                v.setPos(0);
                I.read(v, 1);
                v.setPos(0);
                J = v.g1();
                q++;
                n = 0;
            }
            if (J === -2) {
                if (I.member2718() < 2) {
                    return null;
                }
                v.setPos(0);
                I.read(v, 2);
                v.setPos(0);
                J = v.g2();
                q++;
                n = 0;
            }
            if (J > 0) {
                if (I.member2718() < J) {
                    return null;
                }
                v.setPos(0);
                I.read(v, J);
                v.setPos(0);
                q += J;
                n = 0;
                H = true;
            }
        } else {
            v.setPos(0);
        }
        return {
            member2818: C,
            member2819: J
        };
    };
    F.member10198 = s;
    var o = function () {
        if (C !== undefined) {
            c = C.member2818;
        }
        C = undefined;
        H = false;
    };
    F.member2599 = o;
    var k = function () {
        if (I !== undefined) {
            if (false) {
            }
            e();
            I.close();
            I = undefined;
        }
        b = 0;
        q = 0;
    };
    F.member8254 = k;
    F.member10199 = function () {
        if (I !== undefined) {
            I.member2725();
        }
    };
    var h = function (L) {
        return Class504.member8229(L.member2818, L.member2819, u);
    };
    F.member8260 = h;
    var g = function (L) {
        a[D++] = L;
        var M = L.packet.getPos();
        L.member4869(M);
        L.packet.setPos(0);
        i += M;
    };
    F.member8261 = g;
    var e = function () {
        if (I !== undefined && D > 0) {
            for (var L = 0; L < D; L++) {
                var M = a[L];
                I.member2724(M.packet.getData(), M.member4868());
                M.member1816();
            }
            I.member2601();
            b += i;
            D = 0;
            i = 0;
            G = 0;
        }
    };
    F.member8279 = e;
    var d = function () {
        D = 0;
        i = 0;
    };
    F.member8271 = d;
    j = undefined;
    return F;
};