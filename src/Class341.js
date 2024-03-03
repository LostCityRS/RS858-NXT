import { Class49 } from 'Class49.js';
import { Class295 } from 'Class295.js';
import { Class71 } from 'Class71.js';
import { Class4 } from 'Class4.js';
import { Class68 } from 'Class68.js';
import { Class83 } from 'Class83.js';
import { Class161 } from 'Class161.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class185 } from 'Class185.js';
import { Class174 } from 'Class174.js';
import { Class132 } from 'Class132.js';
import { Class338 } from 'Class338.js';
import { Class191 } from 'Class191.js';
import { Class130 } from 'Class130.js';
import { Class340 } from 'Class340.js';
import { Class63 } from 'Class63.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
import { Class76 } from 'Class76.js';
export var Class341 = function () {
    var aH = {};
    var aa = null;
    var R = undefined;
    var O = undefined;
    var N = undefined;
    var L = undefined;
    var K = undefined;
    var ao = undefined;
    var an = undefined;
    var am = undefined;
    var H = undefined;
    var F = undefined;
    var B = undefined;
    var A = -1;
    var z = -1;
    var aF = null;
    var aw = null;
    var at = null;
    var af = false;
    var ah;
    var aJ = undefined;
    aH.member3832 = function () {
        return ah.data.extensions.OES_vertex_array_object !== undefined;
    };
    aH.member1190 = function () {
        return aJ;
    };
    var E = undefined;
    aH.member3833 = function () {
        return ah.data.extensions.OES_element_index_uint !== undefined;
    };
    aH.member553 = function () {
        return ah.data.extensions.OES_texture_float !== undefined && ah.data.extensions.OES_texture_float_linear !== undefined;
    };
    var aE = aH.member553;
    aH.member3776 = function () {
        return aE() && ah.data.extensions.WEBGL_color_buffer_float !== undefined;
    };
    var aD = aH.member3776;
    aH.member860 = function () {
        return ah.data.extensions.WEBKIT_WEBGL_depth_texture !== undefined || ah.data.extensions.WEBGL_depth_texture !== undefined;
    };
    var aB = aH.member860;
    var ar = null;
    var ay = 1;
    var b = ay;
    var n = ay;
    var m = false;
    aH.member565 = function () {
        return ar !== null;
    };
    aH.member567 = function () {
        return ay;
    };
    aH.member3834 = function () {
        return b;
    };
    aH.member571 = function () {
        return n;
    };
    aH.member3835 = function (aK) {
        n = Math.max(ay, Math.min(b, aK));
        ab();
    };
    aH.member564 = function () {
        return m;
    };
    aH.member3836 = function (aK) {
        m = aK;
        ab();
    };
    aH.member566 = function () {
        return ar;
    };
    var az = undefined;
    aH.member3837 = function () {
        return ah.data.extensions.WEBGL_lose_context !== undefined;
    };
    aH.member3838 = function () {
        if (az !== undefined) {
            az.member3838();
        } else {
            throw new Error('1336 ');
        }
    };
    aH.member3839 = function () {
        if (az !== undefined) {
            az.member3839();
        } else {
            throw new Error('1337 ');
        }
    };
    var u = undefined;
    aH.member3762 = function () {
        return ah.data.params.maxTextureSize;
    };
    var Y = false;
    var ak = new Array();
    aH.member3840 = -1;
    aH.member3841 = -1;
    aH.viewportWidth = -1;
    aH.viewportHeight = -1;
    var aC = false;
    var s = new Array();
    aH.member3842 = -1;
    aH.member3843 = -1;
    aH.member3844 = -1;
    aH.member3845 = -1;
    aH.member2287 = -1;
    aH.member2288 = -1;
    var aA = false;
    var k = false;
    var q = 0;
    var a = 0;
    var Q = 0;
    var g = 0;
    var r = 0;
    var j = 0;
    var o = 0;
    var ad = 0;
    var X = 0;
    var aq = 0;
    var D = 0;
    var i = 0;
    var ag = 0;
    var t = -1;
    var aG = -1;
    var h = Class49.create();
    var au = undefined;
    aH.member1198 = 0;
    aH.setWireframe = function (aK) {
        aH.member1198 = aK ? at.LINE_STRIP : at.TRIANGLES;
    };
    aH.member3846 = function () {
        return aH.member1198 === at.LINE_STRIP;
    };
    aH.member3847 = false;
    aH.member3848 = function (aK) {
        aH.member3847 = aK;
    };
    aH.member1625 = function () {
        return aH.member3847;
    };
    aH.member25 = function (aK) {
        aa = aK.member995;
        R = aK.member1543;
        O = aK.member1544;
        N = aK.member3849;
        L = aK.member1545;
        K = aK.member3850;
        ao = aK.member3851;
        an = aK.member2140;
        am = aK.member2141;
        H = aK.member1478;
        F = aK.member1897;
        B = aK.member2047;
        A = aK.member2048;
        z = aK.member2049;
        u = aK.member3852;
        var aL = {
            alpha: false,
            depth: true,
            stencil: false,
            antialias: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false
        };
        if (aK.member3853) {
            aL.alpha = true;
        }
        if (aK.antialias) {
            aL.antialias = true;
        }
        ah = Class295.testWebGL(aL);
        if (!ah.supported) {
            throw new Error('1338 ');
        }
        aF = document.getElementById(aK.canvasContainerElementID);
        aw = document.getElementById(aK.canvasElementID);
        at = aw.getContext('webgl', aL) || aw.getContext('experimental-webgl', aL);
        aw.width = aF.offsetWidth;
        aw.height = aF.offsetHeight;
        aH.gl = at;
        aw.addEventListener('webglcontextlost', d);
        aw.addEventListener('webglcontextrestored', ae);
        aH.member582(0, 0, aw.width, aw.height);
        if (false) {
        }
        aJ = at.getExtension('OES_vertex_array_object');
        if (aJ === null) {
            aJ = undefined;
        }
        at.getExtension('OES_element_index_uint');
        at.getExtension('OES_texture_float');
        at.getExtension('OES_texture_float_linear');
        at.getExtension('WEBGL_color_buffer_float');
        at.getExtension('OES_standard_derivatives');
        at.getExtension('WEBKIT_WEBGL_depth_texture');
        at.getExtension('WEBGL_depth_texture');
        az = at.getExtension('WEBGL_lose_context');
        if (az === null) {
            az = undefined;
        }
        if (false) {
        }
        if (ah.data.params.anisotropyMax !== undefined) {
            b = ah.data.params.anisotropyMax;
            ar = at.getExtension('EXT_texture_filter_anisotropic') || at.getExtension('MOZ_EXT_texture_filter_anisotropic') || at.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
            if (b > 1) {
                m = true;
                ay = Math.min(ay, b);
                if (false) {
                }
            } else {
                m = false;
                if (false) {
                }
            }
        } else if (false) {
        }
        au = Class71(this);
        Class4.member25();
        Class68.member25({
            member433: aH,
            member472: aK.member472,
            member473: aK.member473,
            member474: aK.member474
        });
        Class83.member25();
        Class161.member25();
        Class147.member25({
            member995: aa,
            member1478: H
        });
        Class154.member25({
            member433: aH,
            member995: aa,
            member1543: R,
            member1544: O,
            member1545: L
        });
        Class185.member25({
            member995: aa,
            member2047: B,
            member2048: A,
            member2049: z
        });
        Class174.member25({
            member995: aa,
            member1897: F
        });
        Class132.member25({
            member433: aH,
            member995: aa
        });
        Class338.member25({
            member433: aH,
            member1300: Class154
        });
        aH.member3640 = Class338;
        Class191.member25({
            member995: aa,
            member2140: an,
            member2141: am
        });
        Class130.member25({ member433: aH });
        aH.member1198 = at.TRIANGLES;
        at.enable(at.CULL_FACE);
        at.cullFace(at.BACK);
        at.depthMask(false);
        at.disable(at.DEPTH_TEST);
        aA = false;
        k = false;
        this.member3836(false);
        S();
    };
    aH.member475 = function () {
        Class83.member475();
        Class161.member475();
        Class68.member475();
    };
    aH.member487 = function () {
        Class4.member78();
        if (aw.width !== aF.offsetWidth) {
            aw.width = aF.offsetWidth;
        }
        if (aw.height !== aF.offsetHeight) {
            aw.height = aF.offsetHeight;
        }
        Class68.member487();
        Class147.member487();
        Class154.member487();
        Class185.member487();
        Class174.member487();
    };
    aH.member486 = function () {
        Class83.member617();
        Class161.member618();
        Class68.member486();
        Class154.member486();
    };
    aH.member3854 = function () {
        q = 0;
        a = 0;
        Q = 0;
        g = 0;
        r = 0;
        j = 0;
        o = 0;
        ad = 0;
        X = 0;
        aq = 0;
        D = 0;
        i = 0;
        ag = 0;
    };
    aH.member3855 = function () {
        if (af) {
            if (u !== undefined) {
                u();
            } else {
                throw new Error('1339 ');
            }
        }
    };
    var d = function (aK) {
        aK.preventDefault();
        af = true;
    };
    var ae = function (aK) {
    };
    var aj = function () {
        if (t !== -1) {
            return t;
        }
        return aw.width;
    };
    aH.member588 = aj;
    var ai = function () {
        if (aG !== -1) {
            return aG;
        }
        return aw.height;
    };
    aH.member589 = ai;
    aH.member3644 = function () {
        aH.member3856();
        aH.member1342();
    };
    aH.member3645 = function () {
        aH.member1343();
        aH.member3857();
    };
    aH.member1730 = function () {
        return Y;
    };
    aH.member590 = function (aK) {
        if (Y !== aK) {
            if (aK) {
                at.enable(at.BLEND);
                at.blendEquationSeparate(at.FUNC_ADD, at.FUNC_ADD);
                at.blendFuncSeparate(at.SRC_ALPHA, at.ONE_MINUS_SRC_ALPHA, at.ONE, at.ONE_MINUS_SRC_ALPHA);
            } else {
                at.disable(at.BLEND);
            }
            Y = aK;
        }
    };
    aH.member582 = function (aL, aN, aM, aK) {
        aH.member3840 = aL;
        aH.member3841 = aN;
        aH.viewportWidth = aM;
        aH.viewportHeight = aK;
        aN = ai() - (aN + aK);
        aH.gl.viewport(aL, aN, aM, aK);
    };
    var ac = aH.member582;
    aH.member3856 = function () {
        ak.push([
            aH.member3840,
            aH.member3841,
            aH.viewportWidth,
            aH.viewportHeight
        ]);
    };
    aH.member3857 = function () {
        var aK = ak.pop();
        aH.member582(aK[0], aK[1], aK[2], aK[3]);
    };
    aH.member3858 = function () {
        return aH.viewportWidth / aH.viewportHeight;
    };
    var av = {
        width: 0,
        height: 0
    };
    aH.member1945 = function () {
        av.width = aH.viewportWidth;
        av.height = aH.viewportHeight;
        return av;
    };
    var Z = function (aL, aK, aO, aM, aN) {
        if (aN || aL !== aH.member3842 || aK !== aH.member3843 || aO !== aH.member2287 || aM !== aH.member2288) {
            if (aN || aH.member3842 === -1) {
                aH.member3842 = aL;
                aH.member3843 = aK;
                aH.member3844 = aL + aO;
                aH.member3845 = aK + aM;
            } else {
                aH.member3842 = Math.max(aH.member3842, aL);
                aH.member3843 = Math.max(aH.member3843, aK);
                aH.member3844 = Math.min(aH.member3844, aL + aO);
                aH.member3845 = Math.min(aH.member3845, aK + aM);
            }
            aH.member2287 = aH.member3844 - aH.member3842;
            aH.member2288 = aH.member3845 - aH.member3843;
        }
    };
    aH.member1344 = function (aL, aK, aN, aM) {
        Z(aL, aK, aN, aM, true);
    };
    aH.member3859 = function (aL, aK, aN, aM) {
        Z(aL, aK, aN, aM, false);
    };
    aH.member3815 = function (aK) {
        aK[0] = aH.member3842;
        aK[1] = aH.member3843;
        aK[2] = aH.member3844;
        aK[3] = aH.member3845;
    };
    aH.getClippingAspectRatio = function () {
        return aH.member2287 / aH.member2288;
    };
    aH.member1342 = function () {
        s.push([
            aH.member3842,
            aH.member3843,
            aH.member2287,
            aH.member2288
        ]);
    };
    aH.member1343 = function () {
        var aK = s.pop();
        Z(aK[0], aK[1], aK[2], aK[3], true);
    };
    aH.member3814 = function (aN, aK, aL, aM) {
        if (aH.member3842 === -1) {
            return true;
        }
        if (aN > aH.member3844 || aL < aH.member3842 || aK > aH.member3845 || aM < aH.member3843) {
            return false;
        }
        return true;
    };
    aH.enableScissorTest = function () {
        if (!aC) {
            at.enable(at.SCISSOR_TEST);
            aC = true;
        }
        at.scissor(aH.member3842, ai() - aH.member3845, aH.member2287, aH.member2288);
    };
    var aI = aH.enableScissorTest;
    aH.member978 = function () {
        if (aC) {
            at.disable(at.SCISSOR_TEST);
            aC = false;
        }
    };
    var W = aH.member978;
    aH.member586 = function () {
        T();
        M();
    };
    var V = aH.member586;
    aH.member585 = function () {
        P();
        J();
    };
    var U = aH.member585;
    aH.member3860 = function () {
        if (!k) {
            k = true;
            at.enable(at.DEPTH_TEST);
        }
    };
    var T = aH.member3860;
    aH.member3861 = function () {
        if (k) {
            k = false;
            at.disable(at.DEPTH_TEST);
        }
    };
    var P = aH.member3861;
    aH.member944 = function () {
        if (!aA) {
            aA = true;
            at.depthMask(true);
        }
    };
    var M = aH.member944;
    aH.member942 = function () {
        if (aA) {
            aA = false;
            at.depthMask(false);
        }
    };
    var J = aH.member942;
    aH.member1731 = function () {
        return aA;
    };
    var I = aH.member1731;
    aH.member1732 = function (aK) {
        if (aA !== aK) {
            aA = aK;
            at.depthMask(aK);
        }
    };
    var G = aH.member1732;
    var y = function (aP, aK, aO, aL, aN, aQ) {
        if (aN && !aD()) {
            throw new Error('1340 ');
        }
        var aM = true;
        if (aQ) {
            aM = false;
        }
        return Class340({
            member433: aH,
            member552: aN,
            width: aP,
            height: aK,
            member3825: aM,
            member3817: aO,
            member3818: aL
        });
    };
    aH.member580 = y;
    var ax = function (aO, aK, aL, aN, aM, aP) {
        if (aO === null || aO === undefined) {
            return;
        }
        x(aO.member575(), aK, aL, aN, aM, aP);
    };
    aH.member3247 = ax;
    var x = function (aO, aS, aP, aQ, aT, aK) {
        aH.member585();
        var aL = aO.member556() / aQ;
        var aZ = aO.member557() / aQ;
        aH.member581(aS);
        var aY = aj();
        var aN = ai();
        if (aK !== undefined) {
            if (aQ !== 1) {
                aK[0] /= aQ;
                aK[1] /= aQ;
                aK[2] /= aQ;
                aK[3] /= aQ;
            }
            aK[1] = aN - (aK[1] + aK[3]);
            if (aT !== undefined && (aT[0] !== 0 || aT[1] !== 0 || aT[2] !== aO.member556() || aT[3] !== aO.member557())) {
                aT[1] = aO.member557() - (aT[1] + aT[3]);
                var aX = aT[0] / aO.member556();
                var aV = aT[1] / aO.member557();
                var aU = (aT[0] + aT[2]) / aO.member556();
                var aR = (aT[1] + aT[3]) / aO.member557();
                au.set(aK[0], aK[1], aK[2], aK[3], aX, aV, aU, aR);
            } else {
                au.set(aK[0], aK[1], aK[2], aK[3]);
            }
        } else {
            au.set(0, 0, aL, aZ);
        }
        au.bind();
        var aW = Class68.member421(Class63.member394.id, undefined);
        Class68.member483(aW, true);
        Class49.member351(0, aY, 0, aN, 0.1, 5000, h);
        var aM = aH.bindTexture(Class75.member539, aO.member558(), at.TEXTURE_2D);
        at.uniform1i(aW.member457(Class7.member189.id), aM);
        ac(0, 0, aY, aN);
        if (aP) {
            aH.gl.clear(aH.gl.COLOR_BUFFER_BIT);
        }
        aH.member590(false);
        aH.gl.uniformMatrix4fv(aW.member457(Class7.member142.id), false, h);
        aH.gl.vertexAttribPointer(aW.member459(Class7.member262.id), 2, aH.gl.FLOAT, false, 16, 0);
        aH.gl.vertexAttribPointer(aW.member459(Class7.member270.id), 2, aH.gl.FLOAT, false, 16, 8);
        aH.gl.drawElements(aH.gl.TRIANGLES, 6, aH.gl.UNSIGNED_SHORT, 0);
        aH.member586();
        aH.member587();
    };
    aH.member1341 = x;
    var v = function (aK) {
        if (aK !== null) {
            t = aK.member556();
            aG = aK.member557();
            at.bindFramebuffer(at.FRAMEBUFFER, aK.member1502());
        } else {
            t = aG = -1;
            at.bindFramebuffer(at.FRAMEBUFFER, null);
        }
    };
    aH.member581 = v;
    var al = undefined;
    var e = new Array(Class75.member527);
    var C = new Array(Class75.member527);
    var c = new Array(Class75.member527);
    var S = function () {
        var aL = Class76(aH, 1, 1, new Uint32Array([1]).buffer, false);
        aL.member563();
        for (var aK = 0; aK < Class75.member527; aK++) {
            at.activeTexture(at.TEXTURE0 + aK);
            at.bindTexture(at.TEXTURE_2D, aL.member558());
        }
    };
    aH.bindTexture = function (aN, aL, aM) {
        var aO = aN.member530;
        if (C[aO] === aL && c[aO] === aM) {
            if (aL === undefined) {
                e[aO] = undefined;
            } else if (aN.member534 !== true) {
                e[aO] = false;
            }
            if (al !== aO && aN.member535) {
                at.activeTexture(at.TEXTURE0 + aO);
                al = aO;
            }
            return aO;
        }
        for (var aK = 0; aK < Class75.member527; aK++) {
            if (C[aK] === aL && c[aK] === aM) {
                if (aL === undefined) {
                    e[aK] = undefined;
                } else if (aN.member534 !== true) {
                    e[aK] = false;
                }
                if (al !== aK && aN.member535) {
                    at.activeTexture(at.TEXTURE0 + aK);
                    al = aK;
                }
                return aK;
            }
        }
        if (e[aO] === undefined) {
            at.activeTexture(at.TEXTURE0 + aO);
            al = aO;
            at.bindTexture(aM, aL);
            C[aO] = aL;
            c[aO] = aM;
            if (aL === undefined) {
                e[aO] = undefined;
            } else if (aN.member534 !== true) {
                e[aO] = false;
            }
            aH.member3862();
            return aO;
        }
        if (false) {
        }
        for (var aK = Class75.member528; aK < Class75.member527; aK++) {
            if (e[aK] === undefined) {
                at.activeTexture(at.TEXTURE0 + aK);
                al = aK;
                at.bindTexture(aM, aL);
                C[aK] = aL;
                c[aK] = aM;
                if (aL === undefined) {
                    e[aO] = undefined;
                } else if (aN.member534 !== true) {
                    e[aK] = false;
                }
                aH.member3862();
                return aK;
            }
        }
        throw new Error('1341 ');
    };
    aH.member587 = function () {
        for (var aK = 0; aK < Class75.member527; aK++) {
            e[aK] = undefined;
        }
    };
    var ab = function () {
        Class154.member1347();
    };
    aH.member2127 = function () {
        q++;
    };
    aH.member3863 = function () {
        return q;
    };
    aH.member468 = function () {
        a++;
    };
    aH.member3864 = function () {
        return a;
    };
    aH.member3862 = function () {
        Q++;
    };
    aH.member3865 = function () {
        return Q;
    };
    aH.member1632 = function () {
        g++;
    };
    aH.member3866 = function () {
        return g;
    };
    aH.member3816 = function () {
        r++;
    };
    aH.member3867 = function () {
        return r;
    };
    aH.member1633 = function (aK) {
        j += aK;
    };
    aH.member3868 = function () {
        return j;
    };
    aH.member3450 = function (aK) {
        o += aK;
    };
    aH.member2062 = function () {
        return o;
    };
    aH.member3451 = function () {
        ad++;
    };
    aH.member3869 = function () {
        return ad;
    };
    aH.member3448 = function (aK) {
        X += aK;
    };
    aH.member3870 = function () {
        return X;
    };
    aH.member3447 = function () {
        aq++;
    };
    aH.member3871 = function () {
        return aq;
    };
    aH.member3449 = function () {
        D++;
    };
    aH.member1892 = function () {
        return D;
    };
    aH.member2046 = function () {
        return Class185.member2046();
    };
    aH.member482 = function () {
        i++;
    };
    aH.member481 = function () {
        ag++;
    };
    aH.member3872 = function () {
        return i;
    };
    aH.member3873 = function () {
        return ag;
    };
    var ap = new Array(0);
    aH.member3874 = function (aK) {
        ap.push(aK);
    };
    aH.member3875 = function () {
        ap.length = 0;
    };
    aH.member3876 = function () {
        return ap;
    };
    return aH;
}();