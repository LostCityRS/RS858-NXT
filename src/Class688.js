import { Class649 } from 'Class649.js';
import { Class297 } from 'Class297.js';
import { Class124 } from 'Class124.js';
import { Class687 } from 'Class687.js';
import { Class500 } from 'Class500.js';
export var Class688 = function () {
    var i = {};
    var k = 2;
    var j;
    i.member9884 = 0;
    i.member9885 = 1;
    i.member9886 = 2;
    i.member9887 = 3;
    i.member9888 = 4;
    i.member9889 = 5;
    i.member9890 = 6;
    i.member9891 = 7;
    var e = i.member9884;
    var n = 5000;
    var q = 'arraybuffer';
    var b = 'WRONG';
    var c = 'RELOAD';
    var r = 'OFFLINE';
    var a = 'Not permitted for social network accounts.';
    var d;
    var g = 'm=accountappeal/login.ws';
    var s = 'secure';
    var h = 'services';
    var m = 'passwordchoice.ws';
    i.member25 = function () {
        if (location.protocol === 'https:') {
            d = Class649.member7142(s, true) + g;
        } else {
            d = Class649.member7142(h, false) + g;
        }
    };
    i.member9732 = function (t) {
        if (t !== j) {
            j = t;
            e = i.member9884;
        } else if (e !== i.member9885) {
            e = i.member9884;
        }
        if (j === undefined) {
            throw new Error('1780 ');
        }
        if (e === i.member9884) {
            var v = { member9892: 'req' };
            e = i.member9885;
            var u = Class297.get(d, v, true, n, q);
            u(o);
        }
        return e;
    };
    var o = function (z) {
        if (z.status === 0) {
            if (false) {
            }
            e = i.member9888;
            return;
        }
        if (z.status !== 200) {
            if (false) {
            }
            e = i.member9889;
            return;
        }
        if (z.response.byteLength !== 8) {
            if (false) {
            }
            e = i.member9889;
            return;
        }
        var y = Class124(undefined, z.response);
        var E = y.member1077();
        var B = Class124(128);
        var x = Class124(128);
        var I = new Array(4);
        I[0] = Math.floor(Class687.Math.random() * Math.pow(2, 32));
        I[1] = Math.floor(Class687.Math.random() * Math.pow(2, 32));
        I[2] = Math.floor(E.member1058);
        I[3] = Math.floor(E.member1059);
        B.member1051(10);
        for (var C = 0; C < 4; C++) {
            B.member1056(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        }
        for (var C = 0; C < 4; C++) {
            B.member1056(I[C]);
        }
        B.member1056(0);
        B.member1056(0);
        for (var C = 0; C < 4; C++) {
            B.member1056(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        }
        B.member1101(Class500.member8051, Class500.member8052);
        x.member1051(10);
        for (var C = 0; C < 3; C++) {
            x.member1056(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        }
        for (var C = 0; C < 3; C++) {
            x.member1056(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        }
        x.member1054(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        for (var C = 0; C < 24; C += 4) {
            x.member1056(-1);
        }
        for (var C = 0; C < 2; C++) {
            x.member1056(Math.floor(Class687.Math.random() * Math.pow(2, 32)));
        }
        x.member1101(Class500.member8051, Class500.member8052);
        var G = Class124.member1152(j);
        if (G % 8 !== 0) {
            G += 8 - G % 8;
        }
        var u = Class124(G);
        u.member1065(j);
        u.member1102(I, 0, G);
        var D = B.member1047();
        var A = x.member1047();
        var t = Class124(5 + D + A + G);
        t.member1051(k);
        t.member1051(D);
        t.member1067(B.getData(), 0, D);
        t.member1051(A);
        t.member1067(x.getData(), 0, A);
        t.member1054(G);
        t.member1067(u.getData(), 0, G);
        var H = String.fromCharCode.apply(undefined, new Uint8Array(t.getData()));
        H = window.btoa(H);
        var v = {
            member9893: H,
            member9894: m
        };
        var F = Class297.get(d, v, true, n, q);
        F(function (L) {
            if (L.status === 0) {
                if (false) {
                }
                e = i.member9888;
                return;
            }
            if (L.status !== 200) {
                if (false) {
                }
                e = i.member9889;
                return;
            }
            var J = L.response;
            var M = String.fromCharCode.apply(undefined, new Uint8Array(J, 0, J.byteLength - 1));
            if (M === r) {
                if (false) {
                }
                e = i.member9888;
                return;
            }
            if (M === c) {
                if (false) {
                }
                e = i.member9887;
                return;
            }
            if (M === b) {
                if (false) {
                }
                e = i.member9891;
                return;
            }
            if (M === a) {
                if (false) {
                }
                e = i.member9890;
                return;
            }
            var K = Class124(undefined, J);
            K.member1103(I, 0, J.byteLength);
            var N = K.member1089();
            Class649.member9629(N, true);
            e = i.member9886;
        });
    };
    return i;
}();