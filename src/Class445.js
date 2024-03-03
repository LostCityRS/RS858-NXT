import { Class49 } from 'Class49.js';
import { Class292 } from 'Class292.js';
import { Class41 } from 'Class41.js';
import { Class37 } from 'Class37.js';
import { Class307 } from 'Class307.js';
import { Class442 } from 'Class442.js';
import { Class444 } from 'Class444.js';
import { Class148 } from 'Class148.js';
import { Class132 } from 'Class132.js';
import { Class443 } from 'Class443.js';
import { Class7 } from 'Class7.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class86 } from 'Class86.js';
import { Class415 } from 'Class415.js';
import { Class70 } from 'Class70.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class120 } from 'Class120.js';
export var Class445 = function () {
    var D = 36;
    var g = 32;
    var s = 100000;
    var J = 10000000;
    var q;
    var u = Class49.create();
    var F = Class49.member313();
    var L = Class292(Class49.member356(16, 16, 512, 512, 50, 2147483647, D, g), Class49.create(), Class41.create(), Class41.create());
    var H = Class37.member313();
    var G = Class307();
    G.member3651(L.member1624);
    G.member3649(L.member3464);
    G = undefined;
    var c = Class41.create();
    var t = new Float32Array(4);
    var k;
    var e;
    var d;
    var A;
    var o = Class49.create();
    var r;
    var y = function (P, O, V, W, Q, R, S, M, U, N, T) {
        this.member7002();
        member46(this, Class442, P, O, V, W, Q, R, S, M, U, N, T);
    };
    member45(Class442, y);
    y.prototype.member7003 = function (M, O, Q, P, N) {
        this.member6680(M, O, Q, P, N);
    };
    y.prototype.member7002 = function () {
        this.graphic = -1;
        this.member7005 = 0;
        this.member7006 = false;
        this.member7007 = 0;
        this.member7008 = 0;
        this.member7009 = false;
        this.member7010 = false;
        this.member7011 = false;
        this.member7012 = false;
        this.member7013 = -1;
        this.member7014 = 0;
        this.member7015 = Class444.member7001;
        this.member7016 = false;
        this.member7017 = -1;
        this.member7018 = 0;
        this.member7019 = 0;
        this.member7020 = 0;
        this.member7021 = 0;
        this.member7022 = 0;
        this.member7023 = -1;
        this.member7024 = undefined;
        this.member1280 = undefined;
        this.member7025();
    };
    y.prototype.member7026 = function () {
        this.member7002();
        this.member6681();
    };
    y.prototype.member6797 = function (O, M) {
        this.graphic = O.g4s();
        this.member7005 = O.g2();
        var Q = O.g1();
        this.member7006 = (Q & 1) !== 0;
        this.member7011 = (Q & 2) !== 0;
        var P = 255 - O.g1();
        this.member7007 = O.g1();
        this.member7008 = O.g4();
        this.member7009 = O.g1() === 1;
        this.member7010 = O.g1() === 1;
        var N = O.g4();
        if (M >= 3) {
            this.member7012 = O.g1() === 1;
        }
        return {
            member4638: N,
            alpha: P
        };
    };
    y.prototype.member7027 = function () {
        return this.graphic;
    };
    y.prototype.member6808 = function (M) {
        this.graphic = M;
        this.member1280 = undefined;
    };
    y.prototype.member7028 = function () {
        return this.member7005;
    };
    y.prototype.member7029 = function (M) {
        this.member7005 = M;
    };
    y.prototype.member7030 = function () {
        return this.member7006;
    };
    y.prototype.member7031 = function (M) {
        this.member7006 = M;
    };
    y.prototype.member7032 = function (M) {
        this.member7007 = M;
        this.member1280 = undefined;
    };
    y.prototype.member7033 = function () {
        return this.member7007;
    };
    y.prototype.member7034 = function () {
        return this.member7008;
    };
    y.prototype.member7035 = function (M) {
        this.member7008 = M;
        this.member1280 = undefined;
    };
    y.prototype.member7036 = function () {
        return this.member7009;
    };
    y.prototype.member7037 = function (M) {
        this.member7009 = M;
    };
    y.prototype.member7038 = function () {
        return this.member7010;
    };
    y.prototype.member7039 = function (M) {
        this.member7010 = M;
    };
    y.prototype.member7040 = function (M) {
        this.member7011 = M;
        this.member1280 = undefined;
    };
    y.prototype.member7041 = function () {
        return this.member7012;
    };
    y.prototype.member7042 = function (M) {
        this.member7012 = M;
    };
    y.prototype.member6807 = function () {
        return this.member7013;
    };
    y.prototype.member7043 = function (M) {
        this.member7013 = M;
    };
    y.prototype.member7044 = function () {
        return this.member7014;
    };
    y.prototype.member7045 = function (M) {
        this.member7014 = M;
    };
    y.prototype.member7046 = function (M) {
        this.member7015 = M;
    };
    y.prototype.member7047 = function () {
        return this.member7015;
    };
    y.prototype.member7048 = function () {
        return this.member7016;
    };
    y.prototype.member7049 = function (M) {
        this.member7016 = M;
    };
    y.prototype.member7050 = function () {
        return this.member7017;
    };
    y.prototype.member3225 = function (M) {
        this.member7051 = M;
    };
    y.prototype.member7052 = function (M) {
        this.member7053 = M;
    };
    y.prototype.member7054 = function (M) {
        this.member7055 = M;
    };
    y.prototype.member7056 = function () {
        return this.member7053;
    };
    y.prototype.member7057 = function () {
        return this.member7055;
    };
    y.prototype.member7058 = function (M) {
        this.member7020 = M;
    };
    y.prototype.member7059 = function () {
        return this.member7020;
    };
    y.prototype.member7060 = function (M) {
        this.member7021 = M;
    };
    y.prototype.member7061 = function () {
        return this.member7021;
    };
    y.prototype.member7062 = function (M) {
        this.member7022 = M;
    };
    y.prototype.member7063 = function () {
        return this.member7022;
    };
    y.prototype.member7064 = function () {
        return this.member7023;
    };
    y.prototype.member7065 = function (M) {
        this.member7023 = M;
    };
    y.prototype.member7066 = function () {
        return this.member7024;
    };
    y.prototype.member7067 = function (M) {
        this.member7024 = M;
    };
    y.prototype.member7068 = function () {
        if (this.graphic === -1) {
            return undefined;
        }
        if (this.member1280 === undefined) {
            this.member7025();
            this.member1280 = this.graphic + ((this.member7011 ? 1 : 0) << 16) + (this.member7007 << 17) + this.member7008 * Math.pow(2, 19);
        }
        if (this.member7069 === undefined) {
            this.member7069 = Class148.member1491(this.member1280);
        }
        if (this.member7069.member1540()) {
            return this.member7069;
        } else {
            return NULL;
        }
    };
    y.prototype.member7070 = function () {
        if (this.member7069 === undefined) {
            this.member7068();
            if (this.member7069 === undefined) {
                return NULL;
            }
        }
        if (!this.member7069.member1540()) {
            return NULL;
        }
        var M = this.member7069.member1539();
        var N = M.member1285(this.member7069.member1494());
        return N.member1292;
    };
    y.prototype.member7071 = function () {
        if (this.member7069 === undefined) {
            this.member7068();
            if (this.member7069 === undefined) {
                return NULL;
            }
        }
        if (!this.member7069.member1540()) {
            return NULL;
        }
        var M = this.member7069.member1539();
        var N = M.member1285(this.member7069.member1494());
        return N.member1293;
    };
    y.prototype.member7025 = function () {
        if (this.member7069 !== undefined) {
            this.member7069.member512();
            this.member7069 = undefined;
        }
    };
    y.prototype.member512 = function () {
        this.member7025();
        if (this.member7024 !== undefined && this.member7024 !== NULL) {
            this.member7024.texture.member512();
        }
        this.member7024 = undefined;
    };
    var n = function (N, M) {
        var O = false;
        if (r === undefined) {
            r = N.member580(D, g, true, false, false);
            r.member510();
            O = true;
        }
        N.member3644();
        N.member581(r);
        Class132.member1267(M);
        N.member582(0, 0, D, g);
        N.member1344(0, 0, D, g);
        if (!O) {
            r.member3828();
        }
        N.gl.clear(N.gl.DEPTH_BUFFER_BIT | N.gl.COLOR_BUFFER_BIT);
    };
    var x = {
        texture: undefined,
        width: undefined,
        height: undefined,
        member495: undefined,
        member496: undefined
    };
    var j = function (M) {
        M.member581(null);
        M.member3645();
        Class132.member1267(Class132.member1265());
        x.texture = r.member575();
        x.width = r.member556();
        x.height = r.member557();
        x.member495 = 1;
        x.member496 = 1;
        return x;
    };
    var z = function (M) {
        return '<col=' + M.toString(16) + '>';
    };
    var E = function (M, N, O) {
        if (M < s) {
            return z(O.member7072()) + M + '</col>';
        }
        if (M < J) {
            return z(O.member7073()) + Math.floor(M / 1000) + Class443.member6959[N.id] + '</col>';
        }
        return z(O.member7074()) + Math.floor(M / 1000000) + Class443.member6957[N.id] + '</col>';
    };
    var I = function (P, M, O, N) {
        return P.member1630(N, L, O, H, undefined, false, undefined, M);
    };
    var K = function (M, Q, N, V, O, P, U, R) {
        M.member581(N);
        var T, S;
        if (N !== null) {
            T = V === null ? N.member556() : V;
            S = O === null ? N.member557() : O;
        } else {
            T = M.viewportWidth;
            S = M.viewportHeight;
        }
        M.member582(0, 0, T, S);
        if (R) {
            M.gl.clear(M.gl.COLOR_BUFFER_BIT);
        }
        M.member590(true);
        M.gl.bindBuffer(M.gl.ARRAY_BUFFER, U.member491);
        M.gl.bindBuffer(M.gl.ELEMENT_ARRAY_BUFFER, U.member492);
        M.gl.uniformMatrix4fv(Q.member457(Class7.member142.id), false, P);
        M.gl.vertexAttribPointer(Q.member459(Class7.member262.id), 2, M.gl.FLOAT, false, 16, 0);
        M.gl.vertexAttribPointer(Q.member459(Class7.member270.id), 2, M.gl.FLOAT, false, 16, 8);
        M.gl.drawElements(M.gl.TRIANGLES, 6, M.gl.UNSIGNED_SHORT, 0);
    };
    var C = function (M, V, O, U, R, S, Q, T) {
        var P = Class68.member421(Class63.member403.id, undefined);
        Class68.member483(P, true);
        var N = M.bindTexture(Class75.member539, V.member558(), M.gl.TEXTURE_2D);
        M.gl.uniform1i(P.member457(Class7.member189.id), N);
        M.gl.uniform2f(P.member457(Class7.member220.id), S, Q);
        P.member467(Class7.member221, T);
        K(M, P, O, U, R, o, A, false);
        M.member587();
    };
    var i = function (T, P, R, M, O, Q) {
        var N = Class68.member421(Class63.member404.id, undefined);
        Class68.member483(N, true);
        var S = T.bindTexture(Class75.member539, P.member558(), T.gl.TEXTURE_2D);
        T.gl.uniform1i(N.member457(Class7.member189.id), S);
        T.gl.uniform2f(N.member457(Class7.member223.id), 1 / M, 0);
        T.gl.uniform2f(N.member457(Class7.member224.id), 0, 1 / O);
        T.gl.uniform4f(N.member457(Class7.member225.id), Q[0], Q[1], Q[2], Q[3]);
        K(T, N, R, M, O, o, A, false);
        T.member587();
    };
    var v = function (Z, ab, ae, ad, O, M, R, Q, aa, U, W, V) {
        var Y = ab.member7075(Z, Q);
        if (Y === NULL || Y === undefined) {
            throw new Error('1199 ');
        }
        var S = ab.getDescription();
        if (M) {
            S = Math.floor(S * 1.5);
        } else if (ad === 2) {
            S = Math.floor(S * 1.04);
        }
        S = S << Class86.member719;
        var T = Y.member2098();
        var X = ab.get2dAngle();
        var ac = ab.get2dOffset();
        var N = ac[1] << Class86.member719;
        c[0] = ac[0] << Class86.member719;
        c[1] = -(T.member1793()[1] / 2 + N);
        c[2] = N;
        Class49.member345(F, -Class415.member4773(X[0]), u);
        Class49.translate(u, c);
        Class49.member346(u, Class415.member4773(X[1]));
        Class49.member347(u, Class415.member4773(X[2]));
        u[14] += S;
        if (k === undefined) {
            k = Z.member580(D, g, true, false, false);
            k.member510();
            Z.member581(k);
            d = k.member575();
            d.member510();
            k.member3828();
            e = k.member575();
            e.member510();
            A = Class70.member490(Z, 0, 0, D, g);
            Class49.member351(0, D, 0, g, 0.1, 5000, o);
        }
        t[3] = 1;
        if (O !== 0) {
            Z.member581(k);
            k.member1340(e);
            Z.gl.clear(Z.gl.DEPTH_BUFFER_BIT | Z.gl.COLOR_BUFFER_BIT);
            t[0] = t[1] = t[2] = ad === 2 ? 1 : -1;
            var af = I(Y, t, u, U);
            if (af) {
                Z.member585();
                k.member1340(d);
                Z.gl.clear(Z.gl.DEPTH_BUFFER_BIT | Z.gl.COLOR_BUFFER_BIT);
                t[0] = t[1] = t[2] = ad === 2 ? 1 : 0;
                i(Z, e, k, D, g, t);
                k.member1340(e);
                Z.gl.clear(Z.gl.DEPTH_BUFFER_BIT | Z.gl.COLOR_BUFFER_BIT);
                t[0] = t[1] = t[2] = 1;
                t[3] = 0.5;
                C(Z, d, k, D, g, 1 / g, 0, t);
                C(Z, e, r, D, g, 0, 1 / g, t);
                t[3] = 1;
                Z.member586();
            }
            Z.member581(r);
            if (!af) {
                return false;
            }
        }
        if (ad >= 1) {
            Z.member581(k);
            k.member1340(e);
            Z.gl.clear(Z.gl.DEPTH_BUFFER_BIT | Z.gl.COLOR_BUFFER_BIT);
            var af = I(Y, undefined, u, U);
            if (af) {
                Z.member585();
                var P = r;
                if (ad >= 2) {
                    P = k;
                    k.member1340(d);
                    Z.gl.clear(Z.gl.DEPTH_BUFFER_BIT | Z.gl.COLOR_BUFFER_BIT);
                }
                t[0] = t[1] = t[2] = -1;
                i(Z, e, P, D, g, t);
                if (ad >= 2) {
                    t[0] = t[1] = t[2] = 1;
                    i(Z, d, r, D, g, t);
                }
                Z.member586();
            }
            Z.member581(r);
            if (!af) {
                return false;
            }
        } else if (!I(Y, undefined, u, U)) {
            return false;
        }
        if (R === Class444.member7000 || R === Class444.member7001 && (ab.getStackable() === 1 || ae !== 1) && ae !== -1) {
            Class302.member3601(E(ae, aa, V), 0, 0, W, undefined, Class301.member3594, 4294902015, 511);
            Z.member585();
            Z.member3640.member1630();
            Z.member586();
        }
        return true;
    };
    var B = [undefined];
    if (false) {
    }
    var m = function (U, R, P, N, O, T) {
        var V = U;
        var Q = 20;
        var M = 0;
        var S = 0;
        if (T === Class444.member7000 || T === Class444.member7001 && R !== -1) {
            if (R < s) {
                S = R;
                M = 1;
            } else if (R < J) {
                S = Math.floor(R / 1000);
                M = 2;
            } else {
                S = Math.floor(R / 1000000);
                M = 3;
            }
            V += Math.pow(2, Q) * S;
            Q += 17;
            V += Math.pow(2, Q) * M;
            Q += 2;
        } else {
            Q += 19;
        }
        V += Math.pow(2, Q) * N;
        Q += 2;
        V += Math.pow(2, Q++) * (O !== 0 ? 1 : 0);
        V += Math.pow(2, Q++) * (P ? 1 : 0);
        if (false) {
        }
        return V;
    };
    var b;
    var a;
    var h;
    y.prototype.member7080 = function (ac, aa, N, P, ad, T, Y, W) {
        var X = this.member6682().member7081();
        if (!this.member7048()) {
            P = undefined;
        }
        if (b !== undefined && P !== null && P !== undefined && P !== b) {
            X.member301();
            if (false) {
            }
        }
        if (a !== undefined && Y !== null && Y !== undefined && Y !== a) {
            X.member301();
            if (false) {
            }
        }
        if (h !== undefined && ad !== null && ad !== undefined && ad !== h) {
            X.member301();
            if (false) {
            }
        }
        var af = this.member7033();
        var O = 255 | this.member7034() << 8;
        var Q = this.member7047();
        var aj = m(this.member6807(), this.member7044(), P !== undefined, af, O, Q);
        if (aj !== 0) {
            var R = X.find(aj);
            if (R !== null) {
                return R;
            }
        }
        var ag = this.member7044();
        var ae = N.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, this.member6807());
        if (ae === NULL) {
            return NULL;
        }
        ae = ae.getCountObj(ag);
        if (ae === NULL) {
            return NULL;
        }
        var U = ae.member7075(ac, P);
        var S = U !== NULL && U.member2130();
        var ab = -1;
        var Z = true;
        if (ae.getCertTemplate() !== -1) {
            ab = ae.getCertLink();
            Z = false;
        } else if (ae.getShardTemplate() !== -1) {
            ab = ae.getShardLink();
            Z = false;
        } else if (ae.getLentTemplate() !== -1) {
            ab = ae.getLentLink();
        } else if (ae.getBoughtTemplate() !== -1) {
            ab = ae.getBoughtLink();
        }
        var ah = undefined;
        if (ab !== -1) {
            ah = N.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, ab);
            if (ah === NULL) {
                return NULL;
            }
            ah = ah.getCountObj(ag);
            if (ah === NULL) {
                return NULL;
            }
            var M = ah.member7075(ac, P);
            S = M !== NULL && M.member2130() && S;
        }
        S = S && Y !== null;
        if (!S) {
            return NULL;
        }
        if (q === undefined) {
            q = Class120({
                member433: ac,
                member995: aa
            });
            q.member1009([
                0.6,
                0.6,
                0.6
            ], 0);
            q.member1010([
                0.5,
                0.5,
                0.5
            ], 0);
            q.member1012([
                -50,
                10,
                -50
            ], 0);
            q.member1008([
                0,
                0,
                0,
                0
            ], 0);
        }
        ac.member3640.member1630();
        ac.member586();
        n(ac, q);
        var ai = true;
        if (ah !== undefined && Z) {
            ai = v(ac, ah, ag, af, O, false, Class444.member6999, P, ad, T, Y, W);
        }
        if (ai) {
            ai = v(ac, ae, ag, af, O, false, Q, P, ad, T, Y, W);
        }
        if (ai && ah !== undefined && !Z) {
            ai = v(ac, ah, 10, 1, 0, true, Class444.member6999, P, ad, T, Y, W);
        }
        ac.member585();
        var V = j(ac);
        if (!ai) {
            return NULL;
        }
        var R = {
            texture: V.texture,
            member495: V.member495,
            member496: V.member496,
            member1295: {
                left: 0,
                member596: 0,
                top: 0,
                member597: 0
            }
        };
        X.put(R, 1, aj);
        return R;
    };
    return y;
}();