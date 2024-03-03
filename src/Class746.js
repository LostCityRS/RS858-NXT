import { Class443 } from 'Class443.js';
import { Class433 } from 'Class433.js';
import { Class453 } from 'Class453.js';
import { Class392 } from 'Class392.js';
import { Class86 } from 'Class86.js';
import { Class291 } from 'Class291.js';
import { Class148 } from 'Class148.js';
import { Class513 } from 'Class513.js';
import { Class564 } from 'Class564.js';
import { Class467 } from 'Class467.js';
export var Class746 = function () {
    var g = {};
    var b;
    var h;
    var c = function (k) {
        b = k;
        h = Class443.member6948[b.clientParameters.member7138.value.id];
    };
    g.member25 = c;
    Class433.member6360.member6428 = function (k, m) {
        b.member8234.member9722(b.member8234.member10200());
    };
    Class433.member6361.member6428 = function (k, m) {
        b.member8234.member9722(false);
    };
    Class433.member6368.member6428 = function (n, s) {
        var o = n.g2();
        var r = n.gjstr();
        var m = n.g2();
        var q = n.g2();
        var k = n.g1() === 1;
        b.member7140.member10103(k);
        b.member7140.member10101();
        b.member7140.member9666(o, r, m, q);
        b.member8236(Class453.member7204);
    };
    if (true) {
        var a = 1;
        var j = 2;
        var d = 3;
        var i = 4;
        Class433.member6362.member6428 = function (v, z) {
            if (b.member8252.member10201()) {
                b.member6452.member8460(v, z);
            }
            var D;
            var o = v.g1();
            var r = (o & 1) !== 0;
            var A = v.g1_alt2();
            var u = v.g2_alt3();
            var I = v.g1_alt2();
            var m = v.g1_alt3();
            if (m === a) {
                D = Class392.member4534;
            } else if (m === j) {
                D = Class392.member4535;
            } else if (m === d) {
                D = Class392.member4536;
            } else if (m === i) {
                D = Class392.member4537;
            }
            var t = v.g2();
            if (I !== 3) {
                throw new Error('1615 ' + I);
            }
            b.member6450.member10202(A);
            var C = Math.floor(b.member6101.member8498() / Class86.member717);
            var K = {
                x: (u - Math.floor(C / 2)) * 8,
                member756: (t - Math.floor(C / 2)) * 8
            };
            var H = v.g2();
            var E = v.g2();
            var B = v.g1();
            var J = v.g1();
            var n = Class291(0, H << 3, E << 3);
            v.enterBitMode();
            var G = new Array(Class86.member414);
            for (var k = 0; k < Class86.member414; k++) {
                G[k] = new Array(B);
                for (var s = 0; s < B; s++) {
                    G[k][s] = new Array(J);
                    for (var q = 0; q < J; q++) {
                        var y = v.gBit(1);
                        if (y === 1) {
                            G[k][s][q] = v.gBit(26);
                        } else {
                            G[k][s][q] = -1;
                        }
                    }
                }
            }
            v.leaveBitMode();
            var F = b.member6444.member6445();
            if (D === Class392.member4534 || D === Class392.member4536 || F === null) {
                if (!b.member6444.member8391(n, B, J, G, b.member6101.member6102(), D)) {
                    return true;
                }
            } else {
                b.member6444.member6445().member8363(G, D);
                b.member7619.member9239();
            }
            Class148.member1499();
            b.member6101.member9067().setPosition(new Float32Array([
                K.x * 512 + 52 * 512,
                5000,
                K.member756 * 512 + 52 * 512
            ]));
            if (false) {
            }
            b.member6101.member9077(D, K);
            if (b.member8252.member10201()) {
                b.member8252.member10203();
            }
        };
        Class433.member6363.member6428 = function (m, q) {
            if (b.member8252.member10201()) {
                b.member6452.member8460(m, q);
            }
            var o = m.g2_alt3();
            var s = m.g1_alt2();
            var n = m.g2_alt3();
            var x = m.g1_alt2();
            var u = m.g1_alt2() === 1;
            var k = m.g1();
            if (k !== 3) {
                throw new Error('1616 ' + k);
            }
            b.member6450.member10202(s);
            var v = {
                x: (o - (b.member6101.member8498() >> 4)) * 8,
                member756: (n - (b.member6101.member8498() >> 4)) * 8
            };
            var y = Class291(0, v.x + b.member6101.member8498() / 2, v.member756 + b.member6101.member8498() / 2);
            var r = b.member6444.member6445();
            var t = Class513.member8331(y);
            if (r === null || r.member4695() !== t) {
                if (!b.member6444.member8390(y, b.member6101.member6102())) {
                    return true;
                }
                Class148.member1499();
                b.member6101.member9067().setPosition(new Float32Array([
                    v.x * 512 + b.member6101.member8498() / 2 * 512,
                    5000,
                    v.member756 * 512 + b.member6101.member8498() / 2 * 512
                ]));
            }
            if (false) {
            }
            b.member6101.member9077(Class392.member1448, v);
            if (b.member8252.member10201()) {
                b.member8252.member10203();
            }
        };
        Class433.member6294.member6428 = function (k, o) {
            var m = o > 2 ? k.gjstr() : h;
            var n = o > 0 ? k.g2() : -1;
            if (n === 65535) {
                n = -1;
            }
            b.member9179.member9839(m, n);
        };
        Class433.member6262.member6428 = function (m, s) {
            var r = m.g1_alt1();
            var k = m.g1();
            var q, n;
            if (r === 255) {
                q = -1;
                n = -1;
            } else {
                var o = b.member6101.member6430();
                q = (o.x + r) * Class86.member718;
                n = (o.member756 + k) * Class86.member718;
            }
            b.delayedStateChange.member9533(true, q, n);
        };
    } else {
    }
    var e = 0;
    Class433.member6318.member6428 = function (o, r) {
        var m = o.gjstr();
        var q = {};
        q.member6801 = new Array(m.length);
        b.delayedStateChange.incrementVerifyID();
        for (var s = q.member6801.length - 1; s >= 0; s--) {
            if (m.charAt(s) === 's') {
                q.member6801[s] = {
                    isObject: true,
                    isInteger: false,
                    value: o.gjstr()
                };
            } else {
                q.member6801[s] = {
                    isObject: false,
                    isInteger: true,
                    value: o.g4s()
                };
            }
        }
        q.scriptID = o.g4();
        var k = Class564(q, e++);
        b.member7887.member9276(k);
    };
    Class433.member6359.member6428 = function (k, n) {
        var m = k.g2();
        if (b.member8233() === Class453.member7199) {
            m *= 2.5;
        } else {
            m *= 30;
        }
        b.member8782().member10050(m);
    };
    Class433.member6383.member6428 = function (n, o) {
        var m = n.g4s_alt3();
        var k = b.member7135();
        if (k !== undefined) {
            if (k.member8201() !== m) {
                k.member8202(m);
                b.member7887.member9765(Class467.member7417, -1, -1);
            }
        }
    };
    Class433.member6384.member6428 = function (n, o) {
        var m = n.g4s_alt2();
        var k = b.member7135();
        if (k !== undefined) {
            if (k.member8203() !== m) {
                k.member8204(m);
                b.member7887.member9765(Class467.member7419, -1, -1);
            }
        }
    };
    return g;
}();