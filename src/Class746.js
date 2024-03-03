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
        var o = n.member608();
        var r = n.member1089();
        var m = n.member608();
        var q = n.member608();
        var k = n.member609() === 1;
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
            var o = v.member609();
            var r = (o & 1) !== 0;
            var A = v.member1108();
            var u = v.member1118();
            var I = v.member1108();
            var m = v.member1109();
            if (m === a) {
                D = Class392.member4534;
            } else if (m === j) {
                D = Class392.member4535;
            } else if (m === d) {
                D = Class392.member4536;
            } else if (m === i) {
                D = Class392.member4537;
            }
            var t = v.member608();
            if (I !== 3) {
                throw new Error('1615 ' + I);
            }
            b.member6450.member10202(A);
            var C = Math.floor(b.member6101.member8498() / Class86.member717);
            var K = {
                x: (u - Math.floor(C / 2)) * 8,
                member756: (t - Math.floor(C / 2)) * 8
            };
            var H = v.member608();
            var E = v.member608();
            var B = v.member609();
            var J = v.member609();
            var n = Class291(0, H << 3, E << 3);
            v.member1096();
            var G = new Array(Class86.member414);
            for (var k = 0; k < Class86.member414; k++) {
                G[k] = new Array(B);
                for (var s = 0; s < B; s++) {
                    G[k][s] = new Array(J);
                    for (var q = 0; q < J; q++) {
                        var y = v.member1098(1);
                        if (y === 1) {
                            G[k][s][q] = v.member1098(26);
                        } else {
                            G[k][s][q] = -1;
                        }
                    }
                }
            }
            v.member1100();
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
            var o = m.member1118();
            var s = m.member1108();
            var n = m.member1118();
            var x = m.member1108();
            var u = m.member1108() === 1;
            var k = m.member609();
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
            var m = o > 2 ? k.member1089() : h;
            var n = o > 0 ? k.member608() : -1;
            if (n === 65535) {
                n = -1;
            }
            b.member9179.member9839(m, n);
        };
        Class433.member6262.member6428 = function (m, s) {
            var r = m.member1107();
            var k = m.member609();
            var q, n;
            if (r === 255) {
                q = -1;
                n = -1;
            } else {
                var o = b.member6101.member6430();
                q = (o.x + r) * Class86.member718;
                n = (o.member756 + k) * Class86.member718;
            }
            b.member7620.member9533(true, q, n);
        };
    } else {
    }
    var e = 0;
    Class433.member6318.member6428 = function (o, r) {
        var m = o.member1089();
        var q = {};
        q.member6801 = new Array(m.length);
        b.member7620.member9780();
        for (var s = q.member6801.length - 1; s >= 0; s--) {
            if (m.charAt(s) === 's') {
                q.member6801[s] = {
                    isObject: true,
                    isInteger: false,
                    value: o.member1089()
                };
            } else {
                q.member6801[s] = {
                    isObject: false,
                    isInteger: true,
                    value: o.member1074()
                };
            }
        }
        q.scriptID = o.member1073();
        var k = Class564(q, e++);
        b.member7887.member9276(k);
    };
    Class433.member6359.member6428 = function (k, n) {
        var m = k.member608();
        if (b.member8233() === Class453.member7199) {
            m *= 2.5;
        } else {
            m *= 30;
        }
        b.member8782().member10050(m);
    };
    Class433.member6383.member6428 = function (n, o) {
        var m = n.member1139();
        var k = b.member7135();
        if (k !== undefined) {
            if (k.member8201() !== m) {
                k.member8202(m);
                b.member7887.member9765(Class467.member7417, -1, -1);
            }
        }
    };
    Class433.member6384.member6428 = function (n, o) {
        var m = n.member1138();
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