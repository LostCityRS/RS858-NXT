import { Class122 } from 'Class122.js';
import { Class463 } from 'Class463.js';
export var Class784 = function (g) {
    var t = {};
    var x;
    var a = -1;
    if (g.member625 !== undefined && g.member2896 !== undefined) {
        a = g.member625;
        x = g.member2896;
    } else {
        throw new Error('1790 ');
    }
    var q;
    t.member9451 = function () {
        return q;
    };
    var m;
    t.member10442 = function () {
        return m;
    };
    var d;
    t.member9449 = function () {
        return d;
    };
    var v;
    t.member10443 = function () {
        return v;
    };
    var z = 0;
    var y = 'null';
    var u = null;
    var A = null;
    var c = 0;
    t.member9454 = function () {
        return c;
    };
    var r = null;
    var o = function (C) {
        while (true) {
            var B = C.member609();
            if (B === undefined) {
                throw new Error('1791 ');
                break;
            }
            if (B === 0) {
                break;
            }
            n(C, B);
        }
    };
    t.decode = o;
    var n = function (H, D) {
        if (D === 1) {
            m = Class122.member1036(H.member609());
        } else if (D === 2) {
            v = Class122.member1036(H.member609());
        } else if (D === 3) {
            y = H.member1089();
        } else if (D === 4) {
            z = H.member1074();
        } else if (D === 5 || D === 6) {
            c = H.member608();
            u = {};
            for (var G = 0; G < c; G++) {
                var F = H.member1074();
                var E;
                if (D === 5) {
                    E = H.member1089();
                } else {
                    E = H.member1074();
                }
                u[F] = E;
            }
        } else if (D === 7 || D === 8) {
            var B = H.member608();
            c = H.member608();
            A = new Array(B);
            for (var G = 0; G < c; G++) {
                var F = H.member608();
                if (D === 7) {
                    A[F] = H.member1089();
                } else {
                    A[F] = H.member1074();
                }
            }
        } else if (D === 101) {
            var C = H.member1078();
            q = Class463.getByID(C);
            if (q !== null) {
                m = q.member7286.charCodeAt(0);
            } else {
                console.log('Null input type: ' + C);
            }
        } else if (D === 102) {
            var C = H.member1078();
            d = Class463.getByID(C);
            if (d !== null) {
                v = d.member7286.charCodeAt(0);
            } else {
                console.log('Null output type: ' + C);
            }
        } else if (false) {
        }
    };
    var i = function (C) {
        var B = k(C);
        if (B === undefined) {
            return z;
        } else {
            return B;
        }
    };
    t.member9452 = i;
    var h = function (C) {
        var B = k(C);
        if (B === undefined) {
            return y;
        } else {
            return B;
        }
    };
    t.member9450 = h;
    var k = function (B) {
        if (A !== null) {
            if (B < 0 || B >= A.length) {
                return undefined;
            } else {
                return A[B];
            }
        } else if (u !== null) {
            return u[B];
        } else {
            return undefined;
        }
    };
    var e = function (B) {
        if (c === 0) {
            return false;
        }
        if (r === null) {
            s();
        }
        return r[B] !== undefined;
    };
    t.member9453 = e;
    var b = function (B) {
        if (c === 0) {
            return undefined;
        }
        if (r === null) {
            s();
        }
        return r[B];
    };
    t.member9455 = b;
    var j = function () {
        return c;
    };
    t.member9454 = j;
    var s = function () {
        r = {};
        if (A !== null) {
            for (var E = 0; E < A.length; E++) {
                if (A[E] === undefined) {
                    continue;
                }
                var C = A[E];
                var D = r[C];
                if (D === undefined) {
                    D = new Array(0);
                    r[C] = D;
                }
                D[D.length] = E;
            }
        } else if (u !== null) {
            for (var B in u) {
                var C = u[B];
                var D = r[C];
                if (D === undefined) {
                    D = new Array(0);
                    r[C] = D;
                }
                D[D.length] = B;
            }
        } else {
            throw new Error('1792 ');
        }
    };
    g = undefined;
    return t;
};