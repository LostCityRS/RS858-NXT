import { Class410 } from 'Class410.js';
export var Class736 = function (k) {
    var e = {};
    var c;
    var g = -1;
    if (k.member625 !== undefined && k.member2896 !== undefined) {
        g = k.member625;
        c = k.member2896;
    } else {
        throw new Error('1752 ');
    }
    var h = Class410.member4704;
    e.member4748 = function () {
        return h;
    };
    var d = 0;
    e.member2968 = function () {
        return d;
    };
    var j = 2048;
    e.member4749 = function () {
        return j;
    };
    var i = 2048;
    e.member4750 = function () {
        return i;
    };
    var b = function (n) {
        while (true) {
            var m = n.member609();
            if (m === undefined) {
                throw new Error('1753 ');
                break;
            }
            if (m === 0) {
                break;
            }
            a(n, m);
        }
    };
    e.decode = b;
    var a = function (n, m) {
        if (m === 1) {
            h = n.member609();
        } else if (m === 2) {
            i = n.member608();
        } else if (m === 3) {
            j = n.member608();
        } else if (m === 4) {
            d = n.member1071();
        } else if (false) {
        }
    };
    k = undefined;
    return e;
};