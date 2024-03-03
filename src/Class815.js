import { Class775 } from 'Class775.js';
import { Class453 } from 'Class453.js';
import { Class377 } from 'Class377.js';
import { Class499 } from 'Class499.js';
import { Class368 } from 'Class368.js';
import { Class800 } from 'Class800.js';
import { Class802 } from 'Class802.js';
import { Class623 } from 'Class623.js';
import { Class517 } from 'Class517.js';
import { Class814 } from 'Class814.js';
import { Class527 } from 'Class527.js';
import { ClientParameters } from 'Class766.js';
import { Class726 } from 'Class726.js';
import { Class669 } from 'Class669.js';
import { Class468 } from 'Class468.js';
import { Class505 } from 'Class505.js';
import { Class807 } from 'Class807.js';
import { Class688 } from 'Class688.js';
import { Class754 } from 'Class754.js';
import { Class452 } from 'Class452.js';
import { Class811 } from 'Class811.js';
import { Class685 } from 'Class685.js';
import { Class523 } from 'Class523.js';
import { Class756 } from 'Class756.js';
import { Class455 } from 'Class455.js';
import { Class708 } from 'Class708.js';
import { DelayedStateChange } from 'Class769.js';
import { Class603 } from 'Class603.js';
import { Class524 } from 'Class524.js';
import { Class679 } from 'Class679.js';
import { Class804 } from 'Class804.js';
import { Class697 } from 'Class697.js';
import { Class722 } from 'Class722.js';
import { Class774 } from 'Class774.js';
import { Class778 } from 'Class778.js';
import { Class813 } from 'Class813.js';
import { Class596 } from 'Class596.js';
import { Class689 } from 'Class689.js';
import { Class727 } from 'Class727.js';
import { Class771 } from 'Class771.js';
import { Class767 } from 'Class767.js';
import { Class626 } from 'Class626.js';
import { Class618 } from 'Class618.js';
import { Class810 } from 'Class810.js';
import { Class806 } from 'Class806.js';
import { Class782 } from 'Class782.js';
import { Class812 } from 'Class812.js';
import { Class291 } from 'Class291.js';
import { Class299 } from 'Class299.js';
import { Class723 } from 'Class723.js';
import { Class94 } from 'Class94.js';
import { Class315 } from 'Class315.js';
import { Class364 } from 'Class364.js';
import { Class233 } from 'Class233.js';
import { Class95 } from 'Class95.js';
import { Packet } from 'Class124.js';
import { Class236 } from 'Class236.js';
import { Class809 } from 'Class809.js';
import { Class556 } from 'Class556.js';
import { Class253 } from 'Class253.js';
import { Class700 } from 'Class700.js';
import { Class341 } from 'Class341.js';
import { Class768 } from 'Class768.js';
import { Class302 } from 'Class302.js';
import { Class642 } from 'Class642.js';
import { Class323 } from 'Class323.js';
import { Class535 } from 'Class535.js';
import { Class801 } from 'Class801.js';
import { Class764 } from 'Class764.js';
import { Class371 } from 'Class371.js';
import { Class235 } from 'Class235.js';
import { Class66 } from 'Class66.js';
import { Class501 } from 'Class501.js';
import { Class295 } from 'Class295.js';
import { Class553 } from 'Class553.js';
import { Class649 } from 'Class649.js';
export var Class815 = function () {
    var n = {};
    var v = undefined;
    var z = 1445356464;
    n.member10105 = function () {
        return z;
    };
    var s;
    n.member3565 = function () {
        return s;
    };
    var b;
    n.member3566 = function () {
        return b;
    };
    var h;
    n.member9854 = function () {
        return h;
    };
    var u = Class775.member10404;
    n.member10581 = function (A) {
        u = A;
    };
    n.member9733 = function () {
        return u;
    };
    var c = Class453.member7196;
    n.member8233 = function () {
        return c;
    };
    n.member8236 = function (A) {
        if (A === undefined) {
            throw new Error('906 ');
        }
        if (A === c) {
            return;
        }
        for (var C in o) {
            var B = o[C];
            if (B.member7183 !== undefined) {
                B.member7183(c, A);
            }
        }
        if (A === Class453.member7198) {
            i = undefined;
            k = [];
        }
        c = A;
        if (false) {
        }
    };
    var i = undefined;
    n.member7135 = function () {
        return i;
    };
    n.member8280 = function (A) {
        i = A;
    };
    var k = [];
    n.member9207 = function (A, B) {
        var D = k[A];
        if (B && D === undefined) {
            if (true) {
                var C = Class377();
                var D = Class499({
                    node: C,
                    parent: null,
                    member4070: null,
                    level: 0,
                    member7710: n,
                    slotID: A
                });
                k[A] = D;
            } else {
            }
        }
        return D;
    };
    n.member9855 = function (A) {
        delete k[A];
    };
    var m = null;
    n.getVarValueProvider = function () {
        return m;
    };
    n.member10429 = undefined;
    n.member8782 = function () {
        return n.member10429;
    };
    n.member10532 = function (A) {
        n.member10429 = A;
    };
    var r = null;
    n.member4480 = function () {
        return r;
    };
    var d = null;
    n.member8278 = function () {
        return d;
    };
    var j = null;
    n.member9258 = function () {
        return j;
    };
    n.member995 = Class368;
    n.member2970 = Class800;
    if (true) {
        n.member4409 = Class802;
        n.member8366 = undefined;
        n.member7137 = Class623;
        n.member6444 = Class517;
        n.member9216 = Class814;
    } else {
    }
    n.member9208 = Class527;
    var o = {};
    n.member10582 = o;
    n.clientParameters = o.clientParameters = ClientParameters;
    n.member7140 = o.member7140 = Class726;
    n.member7887 = o.member7887 = Class669;
    n.member9268 = o.member9268 = Class468;
    n.member8559 = o.member8559 = Class505;
    n.member8234 = o.member8234 = Class807;
    n.member9731 = o.member9731 = Class688;
    n.member8252 = o.member8252 = Class754;
    n.member8023 = o.member8023 = Class452;
    n.member9746 = o.member9746 = Class811;
    n.member9752 = o.member9752 = Class685;
    n.member8846 = o.member8846 = Class523;
    n.member8845 = o.member8845 = Class756;
    n.member7259 = o.member7259 = Class455;
    n.member9753 = o.member9753 = Class708;
    n.delayedStateChange = o.delayedStateChange = DelayedStateChange;
    n.member7187 = o.member7187 = Class603;
    n.member6452 = o.member6452 = Class524;
    if (true) {
        n.member9179 = o.member9179 = Class679;
        n.member6450 = o.member6450 = Class804;
        n.member6431 = o.member6431 = Class697;
        n.member6446 = o.member6446 = Class722;
        n.member8735 = o.member8735 = Class774;
        n.member8733 = o.member8733 = Class778;
        n.member9171 = o.member9171 = Class813;
        n.member6101 = o.member6101 = Class596;
        n.member6103 = o.member6103 = Class689;
        n.member9219 = o.member9219 = Class727;
        n.member9190 = o.member9190 = Class771;
        n.member9767 = o.member9767 = Class767;
        n.member9215 = o.member9215 = Class626;
        n.member7619 = o.member7619 = Class618;
        n.member10583 = o.member10583 = Class810;
    } else {
    }
    n.member9737 = o.member9737 = Class806;
    n.member6116 = o.member6116 = Class782;
    n.member8212 = o.member8212 = Class812;
    n.member9770 = function (B, D) {
        try {
            var A = '- ';
            A += '- ';
            var E = undefined;
            if (i !== undefined) {
                var F = i.member6453();
                if (F !== undefined) {
                    E = Class291();
                    F.member7836(E, false);
                }
            }
            if (E !== undefined) {
                A += E.level + ',' + E.x + ',' + E.member756 + ' ';
            } else {
                A += '0,0,0 ';
            }
            if (true) {
                A += '1 ' + r.member3940.getValue() + ' 1 ' + n.member433.member588() + ',' + n.member433.member589() + ' ';
                A += 'true ';
                A += r.member3949.getValue() + ' ';
                A += (r.member3955.getValue() === 1) + ' ';
                A += 'true ';
                A += r.member3942.getValue() + ' ';
                A += 'true ';
                A += 0 + ' ';
            } else {
            }
            A += c + ' ';
            A += -1;
            A += ' ';
            if (n.clientParameters.clientToken.value !== undefined) {
                A += n.clientParameters.clientToken.value;
            } else {
                A += ',';
            }
            Class812.member10534(B, D + '|' + A);
        } catch (C) {
            g();
            Class299.member3567();
        }
    };
    var g = function () {
        var B = t();
        var A = Class723({
            member8439: ClientParameters.member10328.value,
            member10059: B,
            member10060: ClientParameters.member10329.value,
            member10061: ClientParameters.member10330.value
        });
        Class726.member25(n, A, undefined, undefined);
        e('html5', 'ct=' + u);
    };
    n.member10584 = function (B) {
        if (window.clientParametersLocal !== undefined) {
            ClientParameters.member10585(window.clientParametersLocal);
        } else if (window.clientParametersObfuscated !== undefined) {
            ClientParameters.member10358(window.clientParametersObfuscated);
        } else {
            throw new Error('907 ');
        }
        B.member3475(Class94.member803 * 1024 * 1024);
        B.member3477('');
        B.member3479(ClientParameters.member10347.value);
        B.member3481(ClientParameters.member8025.value);
        B.member3485(ClientParameters.member10346.value.indexOf('https://') !== -1);
        B.member3489(ClientParameters.member10337.value);
        B.member3483(ClientParameters.member7256.value);
        var C = 'client';
        var A = ClientParameters.member10345.value;
        if (A === undefined) {
            throw new Error('908 ');
        }
        if (A !== '') {
            C += '-' + A;
        }
        B.member3487(C);
    };
    var t = function () {
        var A = ClientParameters.member10346.value;
        A = A.substring(A.indexOf('//') + 2);
        var C = A.indexOf('/');
        if (C !== -1) {
            A = A.substring(0, C);
        }
        var B = A.indexOf(':');
        if (B !== -1) {
            A = A.substring(0, B);
        }
        return A;
    };
    n.member25 = function (L, G, B, H) {
        s = L;
        b = G;
        if (ClientParameters.member8025.value === Class315.member3689) {
            z = (s << 8) + b;
        }
        var E = t();
        var I = Class723({
            member8439: ClientParameters.member10328.value,
            member10059: E,
            member10060: ClientParameters.member10329.value,
            member10061: ClientParameters.member10330.value
        });
        var K = Class723({
            member8439: ClientParameters.member10332.value,
            member10059: ClientParameters.member10333.value,
            member10060: ClientParameters.member10334.value,
            member10061: ClientParameters.member10335.value
        });
        var O = Class723({
            member8439: ClientParameters.member10348.value,
            member10059: ClientParameters.member10349.value,
            member10060: ClientParameters.member10350.value,
            member10061: ClientParameters.member10351.value
        });
        var D = Class723({
            member8439: ClientParameters.member10352.value,
            member10059: ClientParameters.member10353.value,
            member10060: ClientParameters.member10354.value,
            member10061: ClientParameters.member10355.value
        });
        Class726.member25(n, I, K, O);
        Class812.member25(n, s, b, Class299.member3584().member3486());
        if (!y()) {
            return false;
        }
        if (true) {
            r = Class364();
        } else {
        }
        d = Class233({});
        Class95.member774(r.member3388.getValue());
        var C = 4 + 4 + Packet.member1152(ClientParameters.clientToken.value);
        if (isNaN(C)) {
            throw new Error('909 ' + ClientParameters.clientToken.value);
        }
        var F = Packet(C + 2);
        F.p1(Class236.member2820.member2818);
        F.p1(C);
        F.p4(s);
        F.p4(b);
        F.pjstr(ClientParameters.clientToken.value);
        F.p1(ClientParameters.member7138.value.id);
        var J = ClientParameters.member7256.value.member7205;
        var P = ClientParameters.member10345.value;
        if (P !== '') {
            J += '-' + P;
        }
        var N = true ? D.member7142() : {};
        Class368.member25(J, O.member10062(), N, ClientParameters.member7256.value, F.getData(), Class809.member10533.length, Class95, ClientParameters.member7138.value);
        n.member9751 = Class556(Class368, Class95);
        m = Class253({ member2970: Class800 });
        Class811.member25(Class800);
        var M = member51;
        Class800.member25(Class368, ClientParameters.member7138.value, ClientParameters.member7256.value, false, m, undefined, M, Class811, M);
        if (true) {
            Class802.member25(Class368, Class800);
            n.member8366 = Class700(Class368, Class800, 2, 0, 20, 100);
        } else {
        }
        if (true) {
            j = document.getElementById(H);
            if (true) {
                n.member433 = Class341;
                Class341.member25({
                    canvasContainerElementID: B,
                    canvasElementID: H,
                    member3853: false,
                    antialias: false,
                    member995: Class368,
                    member1543: Class95.member838,
                    member1544: Class95.member839,
                    member3849: Class95.member810,
                    member1545: Class95.member811,
                    member3850: Class95.member806,
                    member10162: Class95.member805,
                    member1478: Class95.member826,
                    member1897: Class95.member829,
                    member2047: Class95.member827,
                    member2048: 0,
                    member2049: 1,
                    member472: true,
                    member473: Class768,
                    member474: r.member3974(),
                    member3852: n.member10586
                });
            } else {
            }
            var A = member50;
            Class623.member25(Class368, !A);
            Class302.member25(n.member433.member3640);
            Class517.member25(Class368, Class341, Class800, Class802, n.member8366, z, r);
            Class642.member9618(Class642.member9610, [
                n.member433.member588(),
                n.member433.member589(),
                Class323.member3756(),
                Class323.member3750()
            ]);
        } else {
        }
        Class527.member25(Class800);
        Class505.member25(n);
        Class807.member25(n);
        Class468.member25(n);
        Class754.member25(n);
        Class688.member25();
        Class452.member25(n);
        Class685.member25(n);
        Class756.member25(n);
        Class455.member25(n);
        Class708.member25(n);
        DelayedStateChange.member25(n);
        Class524.member25(n);
        if (true) {
            Class689.member25(n);
            Class679.member25(n);
            Class804.member25(n);
            Class774.member25(n);
            Class778.member25(n);
            Class697.member25(n);
            Class722.member25(n);
            Class813.member25(n);
            Class596.member25(n);
            Class814.member25(n);
            Class626.member25(n);
            Class727.member25(n);
            Class771.member25(n);
            Class767.member25(n);
            Class618.member25(n);
            Class535.member25(n);
            Class523.member25(n);
            n.member9078 = o.member9078 = Class801(n);
            n.member6429 = o.member6429 = Class764(n);
            Class810.member25(n);
        } else {
        }
        Class806.member25(Class368, Class95.member812, 'huffman');
        Class782.member25(n);
        d.member25(n);
        Class669.member25(n);
        if (true) {
            Class371.member25(100, 3 * 1024 * 1024, r, n.member10587, n.member10588);
            Class95.member772(function () {
                Class371.member4045(Class95.member836.member775() > 0);
            });
        } else {
        }
        h = Class235(Class66.member432('player'));
        h.member2816();
        return true;
    };
    n.member10587 = function (B) {
        if (B === undefined || n.member8252 === undefined) {
            return;
        }
        var C = n.member8252.member9083();
        if (C !== undefined) {
            var A = C.member8260(Class501.member8112);
            A.packet.p4(B);
            C.member8261(A);
        }
    };
    n.member10588 = function (B) {
        if (B === undefined || n.member8252 === undefined) {
            return;
        }
        var C = n.member8252.member8259();
        if (C !== undefined) {
            var A = C.member8260(Class501.member8111);
            A.packet.p4(B);
            C.member8261(A);
        }
    };
    var q = 2048;
    var a = 221;
    var x = 251;
    var y = function () {
        var C = false;
        var A = '';
        if (true) {
            if (!Class295.isWebGLSupported()) {
                e('webgl');
                return false;
            }
            var B = Class299.member3583().webGL;
            if (B.data.params.maxTextureSize < Class295.MIN_TEXTURE_SIZE) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.MAX_TEXTURE_SIZE.id + ',';
            }
            if (B.data.params.maxFragmentUniformVectors < Class295.MIN_FRAGMENT_UNIFORM_VECTORS) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.MAX_FRAGMENT_UNIFORM_VECTORS.id + ',';
            }
            if (B.data.params.maxVertexUniformVectors < Class295.MIN_VERTEX_UNIFORM_VECTORS) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.MAX_VERTEX_UNIFORM_VECTORS.id + ',';
            }
        } else {
        }
        if (C) {
            e('hardware', A);
            return false;
        }
        if (!Class295.isWebSocketsSupported()) {
            C = true;
            if (A.length <= 0) {
                A = 'fl=';
            }
            A += Class553.member8756.id + ',';
        }
        if (true) {
            if (!Class295.isRequestAnimationFrameSupported()) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.member8755.id + ',';
            }
            if (!Class295.isWebSocketsOnWebWorkersSupported()) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.member8758.id + ',';
            }
            if (!Class295.isWebWorkersSupported()) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.member8757.id + ',';
            }
        } else {
        }
        if (!Class295.isIndexedDBSupported() && !Class295.isWebSQLSupported()) {
            if (!Class295.isFileSystemSupported()) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.member8759.id + ',';
            }
            if (!Class295.isBlobSupported() && !Class295.isBlobBuilderSupported()) {
                C = true;
                if (A.length <= 0) {
                    A = 'fl=';
                }
                A += Class553.member8761.id + ',';
            }
        }
        if (!Class295.isLocalStorageSupported()) {
            C = true;
            if (A.length <= 0) {
                A = 'fl=';
            }
            A += Class553.member8762.id + ',';
        }
        if (!Class295.isSessionStorageSupported()) {
            C = true;
            if (A.length <= 0) {
                A = 'fl=';
            }
            A += Class553.member8763.id + ',';
        }
        if (C) {
            A += '&ct=' + u;
            e('html5', A);
        }
        return !C;
    };
    n.member10428 = function (C, B) {
        var A = Class726.member7141();
        v = A.member7142() + '/error_game_' + C + '.ws';
        if (B !== undefined) {
            v += '?' + B;
        }
    };
    var e = n.member10428;
    n.member10586 = function () {
        n.member10428('webgl_context');
        Class299.member3567();
    };
    n.member487 = function () {
        if (true) {
            Class341.member3855();
        } else {
        }
        Class782.member487();
    };
    n.member486 = function () {
        if (true) {
            Class341.member3855();
            Class810.member486();
        } else {
        }
    };
    n.member10367 = function () {
        if (true) {
            Class767.member10367();
            Class341.member475();
        } else {
        }
        Class368.member475();
        var A = v;
        if (A === undefined) {
            if (Class299.member3568()) {
                var B = Class299.member3584();
                if (B !== undefined) {
                    A = B.member3488();
                }
                if (A === undefined) {
                    A = Class649.member7142();
                }
            }
        }
        if (A !== undefined) {
            // Note: The 2 lines below were commented to prevent redirection when an error occurs.
            // window.onbeforeunload = null;
            // window.location = A;
        }
    };
    return n;
}();