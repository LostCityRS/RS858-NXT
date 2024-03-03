import { Class598 } from 'Class598.js';
export var Class610 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        member46(this, Class598, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class598, a);
    a.prototype.member6811 = function (k, b, j, i) {
        var e = b.member6444.member6445();
        if (e === null) {
            return;
        }
        var d = e.member4695().member4696(b.member433);
        if (d === NULL || d === undefined) {
            return;
        }
        var h = d.texture.member556();
        var c = d.texture.member557();
        var g = this.member6752() / h;
        if (c * g > this.member6754()) {
            g = this.member6754() / c;
        }
        h *= g;
        c *= g;
        b.member433.member3640.member3796(j, i, this.member6752(), this.member6754(), 255, false);
        b.member433.member3640.member3623(j + (this.member6752() - h) / 2, i + (this.member6754() - c) / 2, h, c, 4294967295, 0, 0, 1, 1, d.texture, false);
    };
    return a;
}();