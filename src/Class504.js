import { Class420 } from 'Class420.js';
export var Class504 = function () {
    var b = {};
    var a = new Array(300);
    var d = 0;
    var c = function (h, i, g) {
        var e;
        if (d === 0) {
            e = Class420();
            e.member1816 = function () {
                if (d < a.length) {
                    a[d++] = e;
                }
            };
        } else {
            e = a[--d];
        }
        e.setup(h, i, g);
        return e;
    };
    b.member8229 = c;
    return b;
}();