import { Class437 } from 'Class437.js';
import { Class438 } from 'Class438.js';
import { Class421 } from 'Class421.js';
export var Class469 = function () {
    var r = {};
    var h;
    var k;
    var n;
    var c;
    var s = function (z, y, x) {
        h = z;
        k = y;
        n = x;
        c = n.member7432();
    };
    r.member25 = s;
    var b = function (x, A) {
        var y = x.member7433 ? x.member7434 : x.member7435;
        var B = y.member7105();
        var z = y.member7106();
        if (A(B, z, x)) {
            return true;
        }
    };
    r.member7436 = b;
    var g = function (x, B) {
        var z = x.member7433 ? x.member7434 : x.member7435;
        var C = z.member7105();
        var A = z.member7106();
        var y = C.member6792();
        if (y === undefined) {
            y = Class437();
            C.member6793(y);
        }
        if (B(C, y, A, x)) {
            return true;
        }
    };
    r.member7437 = g;
    var a = function (x, A) {
        var y = x.member6100[--x.member6099];
        var B = k.member7438(y);
        if (B === null) {
            x.member6099++;
            return true;
        } else {
            var z = k.member7439(y >> 16, true, n.member7440);
            if (A(B, z, x)) {
                x.member6099++;
                return true;
            }
        }
    };
    r.member7441 = a;
    var e = function (x, B) {
        var z = x.member6100[--x.member6099];
        var C = k.member7438(z);
        if (C === null) {
            x.member6099++;
            return true;
        } else {
            var A = k.member7439(z >> 16, true, n.member7440);
            var y = C.member6792();
            if (y === undefined) {
                y = Class437();
                C.member6793(y);
            }
            if (B(C, y, A, x)) {
                x.member6099++;
                return true;
            }
        }
    };
    r.member7442 = e;
    var v = function (x) {
        var y = x.member6100[--x.member6099];
        var z = k.member7438(y);
        if (z === null) {
            x.member6099++;
            return null;
        } else {
            return z;
        }
    };
    r.member7443 = v;
    var u = function (C, B, D, z, E, x) {
        if (D === Class438.member6632) {
            throw new Error('1139 ');
        }
        var A = C.member7444()[B];
        if (A.member7445 === undefined) {
            return;
        }
        A.member7446(z, c);
        var y = c.member7105(k, C.member6719(), A.member6720(), A.member6720(), z, D);
        A.member7447(z, y);
        var F;
        if (E) {
            F = x.member7434;
        } else {
            F = x.member7435;
        }
        F.member7448(C);
        F.member7107(y);
    };
    r.member7449 = u;
    Class421.member4912.member867 = function (y) {
        y.member6099 -= 3;
        var B = y.member6100[y.member6099];
        var z = y.member6100[y.member6099 + 1];
        var x = y.member6100[y.member6099 + 2];
        var A = k.member7439(B >>> 16, false, n.member7440);
        if (A === null) {
            y.member6099 += 3;
            return true;
        }
        u(A, B & 65535, z, x, y.member7433, y);
    };
    Class421.member4913.member867 = function (x) {
        var y = x.member7433 ? x.member7434 : x.member7435;
        if (y.member7105().member6722() === -1) {
            if (x.member7433) {
                throw new Error('1140 ');
            } else {
                throw new Error('1141 ');
            }
        }
        var z = y.member7450();
        z.member7446(y.member7105().member6722(), c);
    };
    Class421.member4914.member867 = function (x) {
        var y = k.member7438(x.member6100[--x.member6099]);
        if (y === null) {
            x.member6099++;
            return true;
        }
        if (y.member7451 === undefined || y.member7452 === undefined) {
            return;
        }
        y.member7453(c);
    };
    Class421.member5481.member867 = function (x) {
        var z = k.member7438(x.member6100[--x.member6099]);
        if (z === null) {
            x.member6099++;
            return true;
        }
        if (z.member7445 === undefined) {
            x.member6100[x.member6099++] = 0;
            return;
        }
        var B = z.member7445();
        if (B === null) {
            x.member6100[x.member6099++] = 0;
            return;
        }
        var y = B.length;
        for (var A = 0; A < B.length; A++) {
            if (B[A] === undefined) {
                y = A;
                break;
            }
        }
        x.member6100[x.member6099++] = y;
    };
    Class421.member5446.member867 = function (x) {
        var y = x.member7433 ? x.member7434 : x.member7435;
        x.member6100[x.member6099++] = y.member7105().member6722();
    };
    Class421.member5415.member867 = function (y) {
        y.member6099 -= 2;
        var A = y.member6100[y.member6099];
        var x = y.member6100[y.member6099 + 1];
        var z;
        if (y.member7433) {
            z = y.member7434;
        } else {
            z = y.member7435;
        }
        if (x === -1) {
            y.member6100[y.member6099++] = 0;
        } else {
            var B = z.member7454(k, A, x);
            if (B === null) {
                if (false) {
                }
            }
            y.member6100[y.member6099++] = B ? 1 : 0;
        }
    };
    Class421.member5416.member867 = function (x) {
        var z = x.member6100[--x.member6099];
        var y;
        if (x.member7433) {
            y = x.member7434;
        } else {
            y = x.member7435;
        }
        var A = y.member7455(k, z);
        if (A === null) {
            x.member6099++;
            return true;
        } else {
            x.member6100[x.member6099++] = A ? 1 : 0;
        }
    };
    var j = function (z, y, x) {
        q(z, y, m);
    };
    var t = function (z, y, x) {
        q(z, y, d);
    };
    var q = function (C, B, A) {
        if (C !== null) {
            var y = B.member7438(C.member6723());
            if (C.member6722() !== -1) {
                A(C, C.member6722(), y.member7445(), y.member7456(), y, y.member7452);
            } else if (y !== undefined) {
                var x = 0;
                var z = y.member7457();
                for (; x < z.length; x++) {
                    if (z[x] === C) {
                        break;
                    }
                }
                if (x >= z.length) {
                    return;
                }
                A(C, x, y.member7458(), z, y, y.member7459);
            } else {
                var x = 0;
                var z = B.member7460();
                for (; x < z.length; x++) {
                    if (z[x] === C) {
                        break;
                    }
                }
                if (x >= z.length) {
                    return;
                }
                A(C, x, B.member7461(), z, B, B.member7462);
            }
        }
    };
    var m = function (D, x, A, z, C, B) {
        if (A === z) {
            z = new Array();
            z = z.concat(A.slice(0, x));
            z = z.concat(A.slice(x + 1, A.length));
            z.push(D);
            B.call(C, z);
        } else {
            var y = 0;
            for (; y < z.length; y++) {
                if (z[y] === D) {
                    break;
                }
            }
            if (y >= z.length) {
                return;
            }
            z.splice(y, 1);
            z.push(D);
        }
    };
    var d = function (D, x, A, z, C, B) {
        if (A === z) {
            z = new Array();
            z.push(D);
            z = z.concat(A.slice(0, x));
            z = z.concat(A.slice(x + 1, A.length));
            B.call(C, z);
        } else {
            var y = 0;
            for (; y < z.length; y++) {
                if (z[y] === D) {
                    break;
                }
            }
            if (y >= z.length) {
                return;
            }
            z.unshift(D);
            z.splice(y + 1, 1);
        }
    };
    Class421.member4916.member867 = function (x) {
        return a(x, j);
    };
    Class421.member4918.member867 = function (x) {
        return b(x, j);
    };
    Class421.member4917.member867 = function (x) {
        return a(x, t);
    };
    Class421.member4919.member867 = function (x) {
        return b(x, t);
    };
    Class421.member4920.member867 = function (x) {
        var y = x.member6100[--x.member6099];
        var z = k.member7438(y);
        if (z === null) {
            x.member6099++;
            return true;
        } else {
            i(z);
        }
    };
    Class421.member4921.member867 = function (x) {
        var y = x.member7433 ? x.member7434 : x.member7435;
        var z = y.member7105();
        i(z);
    };
    var i = function (x) {
        if (n.member7463() === null) {
            n.member7464(x);
            n.member7465();
        }
    };
    Class421.member5457.member867 = function (x) {
        var y = v(x);
        if (y === null) {
            return true;
        } else {
            x.member6100[x.member6099++] = y.member6724();
        }
    };
    Class421.member5422.member867 = function (x) {
        var y = x.member7433 ? x.member7434 : x.member7435;
        x.member6100[x.member6099++] = y.member7105().member6724();
    };
    var o = function (A, z, y) {
        var x = n.member7466(A, z);
        if (x === null) {
            return true;
        }
        if (x === undefined) {
            y.member6100[y.member6099++] = -1;
        } else {
            y.member6100[y.member6099++] = x.member6721();
        }
    };
    Class421.member5458.member867 = function (x) {
        return a(x, o);
    };
    Class421.member5423.member867 = function (x) {
        return b(x, o);
    };
    return r;
}();