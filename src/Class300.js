import { Class182 } from 'Class182.js';
export var Class300 = function () {
    var c = false;
    var h = false;
    var t = false;
    var n = {
        id: 0,
        name: false ? {} : '',
        member584: function (v, u) {
            v.readFile(u.filename, u.onSuccess, u.onError);
        }
    };
    var o = {
        id: 1,
        name: false ? {} : '',
        member584: function (v, u) {
            v.writeFile(u.filename, u.data, u.append, u.onSuccess, u.onError);
            u.data = undefined;
            u.append = undefined;
        }
    };
    var m = {
        id: 2,
        name: false ? {} : '',
        member584: function (v, u) {
            v.deleteFile(u.filename, u.onSuccess, u.onError);
        }
    };
    var e = {
        id: 3,
        name: false ? {} : '',
        member584: function (v, u) {
            v.member301(u.onSuccess, u.onError);
        }
    };
    var j = {
        id: 4,
        name: false ? {} : ''
    };
    var k = {
        id: 5,
        name: false ? {} : '',
        member584: function (v, u) {
            v.member3586(u.onSuccess, u.onError);
        }
    };
    var b = [];
    var q = function () {
        var u = b.pop();
        if (u === undefined) {
            return {
                requestType: undefined,
                filename: undefined,
                onSuccess: undefined,
                onError: undefined
            };
        } else {
            return u;
        }
    };
    var d = function (u) {
        b.push(u);
    };
    var i = [];
    var g = function () {
        var u = i.pop();
        if (u === undefined) {
            return {
                filename: undefined,
                state: undefined
            };
        } else {
            return u;
        }
    };
    var s = function (u) {
        i.push(u);
    };
    var a = {};
    if (false) {
    }
    var r = function (K) {
        var D = {};
        var I;
        var G;
        var u = [];
        var v = false;
        var J = false;
        var B = 'Wait...';
        D.member3266 = function () {
            return B;
        };
        D.member3587 = function () {
            I.member3587();
            B = (G === undefined ? '' : 'FQ:' + G.getSize()) + ', ' + I.member3266();
        };
        var E = function (M, N, P, O) {
            if (false) {
            }
            var Q = q();
            Q.requestType = M;
            Q.filename = N;
            Q.onSuccess = P;
            Q.onError = O;
            u.push(Q);
            return Q;
        };
        var C = function () {
            var O = u.length;
            for (var M = 0; M < O; M++) {
                var N = u.shift();
                z(N);
            }
        };
        var A = function (N) {
            var O = u.length;
            for (var M = 0; M < O; M++) {
                var P = u[M];
                if (P.filename === N || P.filename === undefined && M === 0) {
                    u.splice(M, 1);
                    z(P);
                    break;
                } else if (P.filename === undefined) {
                    break;
                }
            }
        };
        var z = function (M) {
            if (M.requestType.member584 === undefined) {
                throw new Error('1097 ' + M.requestType.id);
            }
            M.requestType.member584(D, M);
            d(M);
        };
        var H = function () {
            G = Class182();
        };
        var F = function (M, O) {
            for (var N = G.member776(); N !== undefined; N = G.member777()) {
                if (N.filename === M) {
                    if (O === undefined) {
                        G.remove();
                        s(N);
                    } else {
                        N.state = O;
                    }
                    return;
                }
            }
            if (O !== undefined) {
                var N = g();
                N.filename = M;
                N.state = O;
                G.member2038(N);
            }
        };
        var y = function (M) {
            for (var N = G.member776(); N !== undefined; N = G.member777()) {
                if (N.filename === M) {
                    return N.state;
                }
            }
            return undefined;
        };
        D.member3588 = function () {
            return G.getSize();
        };
        if (K === undefined) {
            throw new Error('1098 ');
        }
        I = K;
        I.member3589 = C;
        H();
        D.readyanim = function () {
            return I.readyanim() && !v;
        };
        var L = D.readyanim;
        var x = function (M) {
            F(M, undefined);
            A(M);
        };
        D.getFileStatus = function (M) {
            if (!L()) {
                return j;
            }
            return y(M);
        };
        D.member3591 = function (O, N) {
            if (y(O) === N) {
                return true;
            }
            for (var M = 0; M < u.length; M++) {
                if (u[M].filename === O && u[M].requestType === N) {
                    return true;
                }
            }
            return false;
        };
        D.writeFile = function (N, Q, M, R, O) {
            if (false) {
            }
            var P = y(N);
            if (!L() || P !== undefined) {
                var S = E(o, N, R, O);
                S.data = Q;
                S.append = M;
                return;
            }
            if (false) {
            }
            if (false) {
            }
            F(N, o);
            I.writeFile(N, Q, M, function (T) {
                if (false) {
                }
                if (false) {
                }
                x(T);
                if (R !== undefined) {
                    R(T);
                }
            }, function (T, U) {
                if (false) {
                }
                x(T);
                if (O !== undefined) {
                    O(T, false ? {} : '');
                }
            });
        };
        D.readFile = function (M, P, N) {
            if (false) {
            }
            var O = y(M);
            if (!L() || O !== undefined) {
                E(n, M, P, N);
                return;
            }
            if (false) {
            }
            if (false) {
            }
            if (false) {
            }
            F(M, n);
            I.readFile(M, function (Q, R) {
                if (false) {
                }
                if (false) {
                }
                x(Q);
                if (P !== undefined) {
                    P(Q, R);
                }
            }, function (Q, R) {
                if (false) {
                }
                if (false) {
                }
                x(Q);
                if (N !== undefined) {
                    N(Q, false ? {} : '');
                }
            });
        };
        D.deleteFile = function (M, O, N) {
            if (false) {
            }
            if (!L() || y(M) !== undefined) {
                E(m, M, O, N);
                return;
            }
            if (false) {
            }
            if (false) {
            }
            F(M, m);
            I.deleteFile(M, function (P) {
                if (false) {
                }
                if (false) {
                }
                x(P);
                if (O !== undefined) {
                    O(P);
                }
            }, function (P) {
                if (false) {
                }
                x(P);
                if (N !== undefined) {
                    N(P, false ? {} : '');
                }
            });
        };
        D.member301 = function (N, M) {
            v = true;
            if (!I.readyanim()) {
                var O = q();
                O.requestType = e;
                O.filename = undefined;
                O.onSuccess = N;
                O.onError = M;
                u.unshift(O);
                return;
            } else if (J || G.getSize() > 0) {
                E(e, undefined, N, M);
                return;
            }
            J = true;
            I.member301(function () {
                H();
                J = false;
                v = false;
                C();
                if (N !== undefined) {
                    N();
                }
            }, M);
        };
        D.member3586 = function (N, M) {
            if (!L()) {
                E(k, undefined, N, M);
                return;
            }
            I.member3586(N, M);
        };
        return D;
    };
    r.printStacks = function () {
        if (false) {
        }
    };
    r.member3592 = n;
    r.WRITE = o;
    r.DELETE = m;
    r.RESET = e;
    r.member3593 = k;
    r.BUSY = j;
    return r;
}();