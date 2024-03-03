import { Class470 } from 'Class470.js';
export var Class607 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        member46(this, Class470, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class470, a);
    a.prototype.member6811 = function (h, c, b, g) {
        var e = this.member600();
        var d = (e & 255) === 255;
        if (this.member7469()) {
            c.member433.member3640.member3796(b, g, this.member6752(), this.member6754(), e, d);
        } else {
            c.member433.member3640.member3800(b, g, this.member6752(), this.member6754(), 1, e, d);
        }
    };
    return a;
}();