import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
export var Class490 = function () {
    var d = [
        4294902015,
        4278190335,
        16711935,
        16777215,
        4278255615,
        4294967295
    ];
    var c = {
        x: new Array(500),
        y: new Array(500)
    };
    var a = new Array(4);
    var b = function (q) {
        var m = {};
        var e = undefined;
        var o = undefined;
        m.member3637 = function () {
            return o;
        };
        var k = undefined;
        m.member7891 = function () {
            return k;
        };
        var j = undefined;
        m.member941 = function () {
            return j;
        };
        var h = 0;
        m.member7827 = function () {
            return h;
        };
        var g = undefined;
        var i = 0;
        if (q.text !== undefined && q.member7892 !== undefined && q.member7893 !== undefined && q.member7894 !== undefined && q.member7710 !== undefined) {
            o = q.text;
            k = q.member7892;
            j = q.member7893;
            h = q.member7894;
            e = q.member7710;
        } else {
            throw new Error('1317 ');
        }
        var n = function (F, D, s, t, G) {
            if (g === undefined) {
                g = Date.now();
            }
            if (e.member6116.member6117().member7895()) {
                var E = 4294902015;
                if (k < 6) {
                    E = d[k];
                }
                switch (k) {
                case 6:
                    E = i % 20 < 10 ? 4278190335 : 4294902015;
                    break;
                case 7:
                    E = i % 20 < 10 ? 65535 : 16777215;
                    break;
                case 8:
                    E = i % 20 < 10 ? 11534591 : 2164228351;
                    break;
                case 9:
                    var C = 150 - Math.floor((Date.now() - g) / (h - g) * 150);
                    if (C < 50) {
                        E = 4278190335 + 327680 * C;
                    } else if (C < 100) {
                        E = 4294902015 - 83886080 * (C - 50);
                    } else if (C < 150) {
                        E = 16711935 + 1280 * (C - 100);
                    }
                    break;
                case 10:
                    var C = 150 - Math.floor((Date.now() - g) / (h - g) * 150);
                    if (C < 50) {
                        E = 4278190335 + 1280 * C;
                    } else if (C < 100) {
                        E = 4278255615 - 83886080 * (C - 50);
                    } else if (C < 150) {
                        E = 65535 + 83886080 * (C - 100) - 1280 * (C - 100);
                    }
                    break;
                case 11:
                    var C = 150 - Math.floor((Date.now() - g) / (h - g) * 150);
                    if (C < 50) {
                        E = 4294967295 - 83887360 * C;
                    } else if (C < 100) {
                        E = 16711935 + 83887360 * (C - 50);
                    } else if (C < 150) {
                        E = 4294967295 - 83886080 * (C - 100);
                    }
                    break;
                default:
                    break;
                }
                switch (j) {
                case 1:
                    for (var B = 0; B < o.length; B++) {
                        c.x[B] = 1;
                        c.y[B] = Math.floor(Math.sin(B / 2 + i / 5) * 5);
                    }
                    Class302.member3605(o, F, D, t, s, Class301.member3595, E, 255, undefined, undefined, c);
                    break;
                case 2:
                    for (var B = 0; B < o.length; B++) {
                        c.x[B] = Math.floor(Math.sin(B / 5 + i / 5) * 5);
                        c.y[B] = Math.floor(Math.sin(B / 3 + i / 5) * 5);
                    }
                    Class302.member3605(o, F, D, t, s, Class301.member3595, E, 255, undefined, undefined, c);
                    break;
                case 3:
                    var v = 7 - Math.floor((Date.now() - g) / (h - g) * 7);
                    for (var B = 0; B < o.length; B++) {
                        c.x[B] = 1;
                        c.y[B] = Math.floor(Math.sin(B / 1.5 + i) * v);
                    }
                    Class302.member3605(o, F, D, t, s, Class301.member3595, E, 255, undefined, undefined, c);
                    break;
                case 4:
                    var z = s + 50;
                    var C = 2 * z - Math.floor((Date.now() - g) / (h - g) * 2 * z);
                    var A = C - z;
                    e.member433.member1342();
                    e.member433.member3859(F - 50, D - t.member3598().member3603(), F + 50, D + t.member3598().member3599());
                    Class302.member3601(o, F + A, D, t, s, Class301.member3595, E, 255, undefined, undefined);
                    e.member433.member1343();
                    break;
                case 5:
                    var C = 150 - Math.floor((Date.now() - g) / (h - g) * 150);
                    var r = t.member3598().member3603() + t.member3598().member3599();
                    var u = 0;
                    if (C < 25) {
                        u = (25 - C) / -25 * r;
                    } else if (C > 125) {
                        u = (C - 125) / 25 * r;
                    }
                    e.member433.member1342();
                    e.member433.member3859(F - s, D, F + s, D + r);
                    Class302.member3601(o, F, D + u, t, s, Class301.member3595, E, 255, undefined, undefined);
                    e.member433.member1343();
                    break;
                default:
                    Class302.member3601(o, F, D, t, s, Class301.member3595, E, 255, undefined, undefined);
                    break;
                }
                i++;
            } else {
                Class302.member3601(o, F, D, t, s, Class301.member3595, 4294902015, 255, undefined, undefined);
            }
        };
        m.member486 = n;
        return m;
    };
    return b;
}();