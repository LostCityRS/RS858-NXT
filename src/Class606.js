import { Class598 } from 'Class598.js';
import { Class602 } from 'Class602.js';
import { CoordFine } from 'Class290.js';
import { Class86 } from 'Class86.js';
import { Class604 } from 'Class604.js';
import { Class605 } from 'Class605.js';
export var Class606 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        member46(this, Class598, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class598, a);
    a.prototype.member6811 = function (h, c, b, g) {
        if (!c.member9171.member9172()) {
            c.member433.member3640.member3796(b, g, this.member6752(), this.member6754(), 255, false);
            return;
        }
        c.member433.member3640.member1630();
        c.member433.member3644();
        if (this.member9173 === undefined) {
            this.member9173 = Class602({
                member433: c.member433,
                member2970: c.member2970,
                member9099: this.member6752(),
                member9100: this.member6754(),
                member9174: null,
                member9101: c.member6116.member6117().member8775()
            });
            this.member9175 = CoordFine();
        } else {
            this.member9173.member9102(this.member6752(), this.member6754());
        }
        if (h.member9176()) {
            this.member9173.member9097();
        }
        var d = c.member6444.member6445();
        if (d === null || c.member6101.member9080(this.member9175) === null) {
            return;
        }
        var e = this.member9173.member486(d, this.member9175, -c.member6101.member8939(), 1, c.member9171.member9177);
        c.member433.member3645();
        c.member433.member3640.member3627(b, g, b + e.member556(), g + e.member557(), 4294967295, 0, 0, 1, 1, e, false);
        if (false) {
        }
    };
    a.prototype.member6458 = function () {
        return true;
    };
    a.prototype.member6812 = function (E, y, d, c, b, C, q, n, D, v, j, i, g, e) {
        if (this.member9173 === undefined) {
            return;
        }
        if (y.member9171.member9178()) {
            return;
        }
        if (b && !y.member9179.isOpen()) {
            var o = C.x - d;
            var m = C.y - c;
            o -= this.member6752() / 2;
            m -= this.member6754() / 2;
            var s = -y.member6101.member8939();
            var r = -Math.sin(s), k = Math.cos(s);
            var z = m * r + o * k;
            var u = m * k - o * r;
            var x = 0, t = 0;
            var B = y.member7135().member6453();
            if (B !== undefined) {
                var h = (B.member7795() - 1) * Class86.member718 / 2;
                var A = B.member3320().member4099();
                x = Math.floor((A[0] - h) / Class86.member718 + z / this.member9173.member9095);
                t = Math.floor((A[2] - h) / Class86.member718 - u / this.member9173.member9095);
            }
            if (E.member8851() && (E.member9180() & Class604.member9167) !== 0) {
            } else {
                y.member9179.member9181(x, t, Class605.INTERFACE);
            }
        }
    };
    return a;
}();