import { Class49 } from 'Class49.js';
import { Class70 } from 'Class70.js';
import { Class68 } from 'Class68.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class130 = function () {
    var I = {};
    var L;
    var K;
    var A = 0;
    var J = 2;
    var y = null;
    var R = undefined;
    var Q = undefined;
    var r = undefined;
    var d = false;
    var F = null;
    var G = null;
    var H = false;
    var N = null;
    var B = -1, j = -1;
    I.member1179 = function () {
        return B;
    };
    I.member1180 = function () {
        return j;
    };
    var v = null;
    var x = null;
    var E = false;
    var m = false;
    var u = 0;
    I.member1181 = function (T) {
        u = T;
    };
    I.member1182 = function () {
        return u;
    };
    var q = 0;
    I.member1183 = function (T) {
        q = T;
    };
    I.member1184 = function () {
        return q;
    };
    var C = 1;
    I.member1185 = function (T) {
        C = T;
    };
    I.member1186 = function () {
        return C;
    };
    I.member1187 = function (T) {
        J = parseInt(T);
        s();
    };
    I.member1188 = function () {
        return J;
    };
    var M = function (T) {
        L = T.member433;
    };
    I.member25 = M;
    var t = function (W, X) {
        var V = Math.floor(W / J);
        var U = Math.floor(X / J);
        if (B !== V || j !== U) {
            D();
            B = V;
            j = U;
            F = L.member580(B, j, true, false, false);
            F.member510();
            G = L.member580(B, j, true, false, false);
            G.member510();
            N = L.member580(B, j, true, false, false);
            N.member510();
            y = Class49.member351(0, B, 0, j, 0.1, 5000, y);
            var T = Class70.member490(L, 0, 0, B, j);
            R = T.member491;
            Q = T.member492;
        }
    };
    I.member1189 = t;
    var s = function () {
        D();
        d = false;
        H = false;
        B = j = -1;
        if (F !== null) {
            F.member511();
            F = null;
        }
        if (G !== null) {
            G.member511();
            G = null;
        }
        if (N !== null) {
            N.member511();
            N = null;
        }
        v = null;
        x = null;
    };
    I.member1022 = s;
    var D = function () {
        if (r !== undefined) {
            L.member1190().deleteVertexArrayOES(r);
            r = undefined;
        }
        if (R !== undefined) {
            L.gl.deleteBuffer(R);
            R = undefined;
        }
        if (Q !== undefined) {
            L.gl.deleteBuffer(Q);
            Q = undefined;
        }
    };
    I.member1021 = function () {
        d = true;
    };
    var n = function () {
        return d;
    };
    I.member1020 = n;
    var k = function () {
        L.member581(F);
        L.member582(0, 0, B, j);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT | L.gl.DEPTH_BUFFER_BIT);
        L.gl.cullFace(L.gl.FRONT);
        E = true;
    };
    I.member1191 = k;
    var i = function () {
        L.member581(N);
        L.member582(0, 0, B, j);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT | L.gl.DEPTH_BUFFER_BIT);
        L.gl.cullFace(L.gl.BACK);
        m = true;
    };
    I.member1192 = i;
    var h = function (V) {
        L.member585();
        var T = Class68.member421(Class63.member397.id, undefined);
        Class68.member483(T, true);
        var U = L.bindTexture(Class75.member539, V.member575().member558(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(T.member457(Class7.member189.id), U);
        L.gl.uniform2f(T.member457(Class7.member192.id), 0, 0);
        z(T, N, y);
        L.member586();
        L.member587();
    };
    I.member1193 = h;
    var g = function () {
        return E;
    };
    I.member1194 = g;
    var e = function () {
        return m;
    };
    I.member1195 = e;
    var c = function (T) {
        var U = L.bindTexture(Class75.member537, F.member575().member558(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(T.member457(Class7.member207.id), U);
    };
    I.member1196 = c;
    var b = function (T) {
        var U = L.bindTexture(Class75.member536, N.member575().member558(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(T.member457(Class7.member209.id), U);
    };
    I.member1197 = b;
    var o = function (X, Y, U, T) {
        var V = Class68.member421(Class63.member397.id, undefined);
        Class68.member483(V, true);
        var W = L.bindTexture(Class75.member539, X.member558(), L.gl.TEXTURE_2D);
        L.gl.uniform1i(V.member457(Class7.member189.id), W);
        L.gl.uniform2f(V.member457(Class7.member192.id), U, T);
        z(V, Y, y);
        L.member587();
    };
    var z = function (U, V, T) {
        L.member581(V);
        L.member582(0, 0, B, j);
        L.gl.clear(L.gl.COLOR_BUFFER_BIT);
        L.member590(false);
        L.gl.uniformMatrix4fv(U.member457(Class7.member142.id), false, y);
        var W = L.member1190();
        if (r !== undefined) {
            W.bindVertexArrayOES(r);
        } else {
            if (W !== undefined) {
                r = W.createVertexArrayOES();
                W.bindVertexArrayOES(r);
                L.gl.enableVertexAttribArray(U.member459(Class7.member262.id));
                L.gl.enableVertexAttribArray(U.member459(Class7.member270.id));
            }
            L.gl.bindBuffer(L.gl.ARRAY_BUFFER, R);
            L.gl.bindBuffer(L.gl.ELEMENT_ARRAY_BUFFER, Q);
            L.gl.vertexAttribPointer(U.member459(Class7.member262.id), 2, L.gl.FLOAT, false, 16, 0);
            L.gl.vertexAttribPointer(U.member459(Class7.member270.id), 2, L.gl.FLOAT, false, 16, 8);
        }
        L.gl.drawElements(L.member1198, 6, L.gl.UNSIGNED_SHORT, 0);
        if (W !== undefined) {
            W.bindVertexArrayOES(null);
        }
    };
    var a = function (T, U) {
        if (!E) {
            throw new Error('1110 ');
        }
        L.member581(null);
        L.gl.cullFace(L.gl.BACK);
        E = false;
        L.member585();
        o(F.member575(), G, C / T, 0);
        o(G.member575(), F, 0, C / U);
        L.member586();
    };
    I.member1199 = a;
    var S = function () {
        if (!m) {
            throw new Error('1111 ');
        }
        L.member581(null);
        L.gl.cullFace(L.gl.BACK);
        m = false;
    };
    I.member1200 = S;
    var P = function () {
        if (F !== null) {
            return F.member575();
        }
        return null;
    };
    I.member1201 = P;
    var O = function () {
        if (N !== null) {
            return N.member575();
        }
        return null;
    };
    I.member1202 = O;
    return I;
}();