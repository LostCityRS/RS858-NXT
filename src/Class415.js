import { Class414 } from 'Class414.js';
import { Class394 } from 'Class394.js';
export var Class415 = function () {
    var c = {};
    c.member4772 = function (e) {
        e = e % Class414.member4770;
        if (e < 0) {
            e += Class414.member4770;
        }
        if (e <= Class414.member4769) {
            return e * Math.PI / Class414.member4769;
        } else {
            return (e - Class414.member4770) * Math.PI / Class414.member4769;
        }
    };
    var a = c.member4772;
    c.member4773 = function (e) {
        return a(e << Class414.member4771);
    };
    var d = c.member4773;
    c.member4774 = function (e) {
        e = e % (2 * Math.PI);
        if (e < 0) {
            e += 2 * Math.PI;
        }
        return Math.floor(e * Class414.member4770 / (2 * Math.PI));
    };
    var b = c.member4774;
    c.member4775 = function (e) {
        return b(e) >> Class414.member4771;
    };
    c.member4776 = function (g) {
        var e = g * Math.PI / 4;
        e = Class394.member4544(e);
        if (e > 0) {
            e -= Math.PI;
        } else {
            e += Math.PI;
        }
        return e;
    };
    return c;
}();