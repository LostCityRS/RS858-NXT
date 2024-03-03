import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Class131 } from 'Class131.js';
import { Class443 } from 'Class443.js';
import { Class96 } from 'Class96.js';
import { Class543 } from 'Class543.js';
export var Class544 = function () {
    var a = function (g) {
        var s = {};
        var x = null;
        var v = null;
        var r;
        var o = null;
        var e = 0;
        s.member2975 = function () {
            return e;
        };
        var d = null;
        var m = null;
        var j = Class105({ member895: 64 });
        var F = Class105({
            member895: 50,
            member898: function (G) {
                G.member2621.member510();
            },
            member897: function (G) {
                G.member2621.member511();
            }
        });
        var q = Class105({ member895: 100 });
        var y = Class105({
            member895: 5,
            member898: function (G) {
                G.member510();
            },
            member897: function (G) {
                G.member511();
            }
        });
        var A = Class105({ member895: 5 });
        var B;
        if (g.member2739 !== undefined && g.member3992 !== undefined && g.member8693 !== undefined && g.member995 !== null && g.member2970 !== undefined && g.member8694 !== undefined) {
            x = g.member2739;
            v = g.member3992;
            r = g.member8693;
            o = g.member995;
            d = g.member2970;
            m = g.member8694;
            var z = o.member1439(Class95.member818).member3896();
            e = z * Class131.member1262(Class131.member1213.member1210) + o.member1439(Class95.member818).member1440(z);
            B = [
                null,
                null,
                null,
                null,
                null,
                Class443.member6944[v.id]
            ];
        } else {
            throw new Error('1783 ');
        }
        s.list = function (I) {
            var G = j.find(I);
            if (G === null) {
                var H = o.getFile(Class95.member818, Class131.member1263(I, Class131.member1213.member1210), Class131.member1264(I, Class131.member1213.member1210), Class96.member840, Class131.member1213.priority);
                if (H === null) {
                    return null;
                }
                G = Class543(I, s, B.slice(0));
                if (H !== undefined) {
                    G.decode(H);
                }
                G.member2934();
                j.put(G, 1, I);
            }
            return G;
        };
        var C = s.list;
        s.member8682 = function () {
            return r;
        };
        s.member8695 = function (G) {
            r = G;
        };
        var E = s.member8682;
        s.member7535 = function () {
            return o;
        };
        var i = s.member7535;
        s.member7539 = function () {
            return d;
        };
        var D = s.member7539;
        s.member8687 = function () {
            return m;
        };
        s.member8689 = function () {
            return F;
        };
        var u = s.member8689;
        s.member8690 = function () {
            return q;
        };
        var t = s.member8690;
        s.member8692 = function () {
            return y;
        };
        var n = s.member8692;
        s.member8691 = function () {
            return A;
        };
        var k = s.member8691;
        s.member8683 = function () {
            return x;
        };
        var h = s.member8683;
        s.member8696 = function () {
            j.member301();
            F.member301();
            q.member301();
            y.member301();
            A.member301();
        };
        var c = s.member8696;
        s.member8697 = function (G) {
            j.member905(G);
            F.member905(G);
            q.member905(G);
            y.member905(G);
            A.member905(G);
        };
        var b = s.member8697;
        g = undefined;
        return s;
    };
    return a;
}();