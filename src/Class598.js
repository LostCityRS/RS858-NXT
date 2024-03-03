import { Class473 } from 'Class473.js';
export var Class598 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        member46(this, Class473, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class473, a);
    a.prototype.member6811 = function (j, c, b, i) {
        var e = b - this.member6809();
        var d = i - this.member6810();
        var h = this.member7457();
        if (h !== null) {
            j.member9087(h, e, d, b, i, this.member6752(), this.member6754());
        }
        var g = this.member7456();
        if (g !== null) {
            j.member9087(g, e, d, b, i, this.member6752(), this.member6754());
        }
        j.member9088(this.member6721(), e, d, b, i, this.member6752(), this.member6754());
    };
    return a;
}();