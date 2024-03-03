import { Class445 } from 'Class445.js';
import { Class226 } from 'Class226.js';
import { Class76 } from 'Class76.js';
import { Class423 } from 'Class423.js';
import { Class297 } from 'Class297.js';
import { Class448 } from 'Class448.js';
import { Class440 } from 'Class440.js';
export var Class449 = function () {
    var a = function (g, e, n, o, h, i, j, c, m, d, k) {
        member46(this, Class445, g, e, n, o, h, i, j, c, m, d, k);
    };
    member45(Class445, a);
    var b = -0.5;
    a.prototype.member7132 = function () {
    };
    a.prototype.member7133 = function (c) {
        var d = this;
        return function (e) {
            if (e.status === 200) {
                var h = Class226({
                    member2744: e.response,
                    member2745: false
                });
                var g = Class76(c.member433, h.member556(), h.member557(), h.member2743(), false);
                g.member563();
                d.member7067({
                    texture: g,
                    member495: 1,
                    member496: 1,
                    member1295: {
                        left: 0,
                        member596: 0,
                        top: 0,
                        member597: 0
                    }
                });
            } else {
                d.member7067(undefined);
            }
        };
    };
    a.prototype.member7134 = function (K, d, c) {
        var A = undefined;
        var o = undefined;
        if (this.member6807() !== -1) {
            if (true) {
                var k = undefined;
                var J = K.member7135();
                if (J !== undefined) {
                    var e = J.member6453();
                    if (e !== undefined) {
                        k = e.member7136();
                    }
                }
                var G = K.member7137.member3639(Class423.member6115.member6105.member1204);
                A = this.member7080(K.member433, K.member995, K.member2970, k, K.clientParameters.member7138.value, K.member6116.member7139(), G, K.member6116.member6117());
            } else {
            }
        } else if (this.member7064() !== -1) {
            A = this.member7066();
            if (A === undefined) {
                A = NULL;
                this.member7067(A);
                var D = Class297.get(K.member7140.member7141().member7142() + '/img/image_' + this.member7064() + '.png', undefined, false, 5000, 'arraybuffer');
                D(this.member7133(K));
            }
        } else {
            o = this.member7068(K.member433, K.member995);
        }
        if (o !== undefined && o !== NULL || A !== undefined && A !== NULL) {
            var i = this.member6765();
            if (this === Class448.member7105() && Class448.member7119() && Class448.member7105().member6787() === Class440.member6658) {
                i = Math.floor(i * b);
            }
            if (i === 0) {
                return;
            }
            var B = this.getDamageColour();
            if (B === 0) {
                B = 16777215;
            }
            var I = B << 8 | i;
            var u = 0, s = 0, r = 0, n = 0;
            var q, m, j, h;
            var C;
            if (o !== undefined && o !== NULL) {
                var x = o.member1539();
                var v = x.member1285(o.member1494());
                q = v.member493;
                m = v.member494;
                j = v.member495;
                h = v.member496;
                u = v.member1295.left;
                s = v.member1295.member596;
                r = v.member1295.top;
                n = v.member1295.member597;
                C = x.member1277();
            } else if (A !== undefined && A !== NULL) {
                u = A.member1295.left;
                s = A.member1295.member596;
                r = A.member1295.top;
                n = A.member1295.member597;
                q = 0;
                m = 0;
                j = A.member495;
                h = A.member496;
                C = A.texture;
            }
            if (this.member7038()) {
                var z = q;
                q = j;
                j = z;
                var z = u;
                u = s;
                s = z;
            }
            if (this.member7036()) {
                var z = m;
                m = h;
                h = z;
                var z = r;
                r = n;
                n = z;
            }
            var g = d + u;
            var H = d + this.member6752() - s;
            var F = c + this.member6754() - n;
            var E = c + r;
            var y = this.member7028();
            if (y !== 0) {
                K.member433.member3640.member1630();
                K.member433.enableScissorTest();
                y = -(y & 65535) * (Math.PI / 32768);
                K.member433.member3640.member3804(g, E, H, F, I, q, m, j, h, C, false, y);
                K.member433.member3640.member1630();
                K.member433.member978();
            } else if (this.member7030()) {
                K.member433.member1342();
                K.member433.member3859(g, E, this.member6697, this.member6698);
                K.member433.member3640.member3641(g, E, H, F, I, q, m, j, h, C, false);
                K.member433.member1343();
            } else {
                K.member433.member3640.member3627(g, E, H, F, I, q, m, j, h, C, false);
            }
        } else {
        }
    };
    a.prototype.member6811 = function (g, d, c, e) {
        if (this.member7050() !== -1) {
            this.member7132();
        } else {
            this.member7134(d, c, e);
        }
    };
    return a;
}();