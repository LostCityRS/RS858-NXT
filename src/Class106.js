import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
export var Class106 = function () {
    var a = function (c) {
        var e = null;
        var j;
        if (c.member433 !== undefined) {
            e = Class74({ member526: Class72.member505 });
            j = c.member433;
        } else {
            throw new Error('941 ');
        }
        var i, g;
        var h = null;
        e.member908 = function () {
            return h;
        };
        var d = null;
        e.member909 = function () {
            return d;
        };
        var b = new Float32Array([
            0,
            0,
            0
        ]);
        e.member910 = function () {
            b[0]++;
            if (b[0] === 255) {
                b[0] = 0;
                b[1]++;
                if (b[1] === 255) {
                    b[1] = 0;
                    b[2]++;
                }
            }
            return b;
        };
        e.member514 = function () {
        };
        e.member515 = function () {
            e.member523();
        };
        e.member523 = function () {
            h.member511();
            h = null;
        };
        e.member583 = function () {
        };
        e.member519 = function (k) {
            if (!e.member291()) {
                throw new Error('942 ');
            }
            i = Math.floor(j.viewportWidth / 4);
            g = Math.floor(j.viewportHeight / 4);
            if (h === null || h.member556() !== i || h.member557() !== g) {
                if (h !== null) {
                    h.member511();
                }
                h = j.member580(i, g, true, false, false);
                h.member510();
                d = new Uint8Array(i * g * 4);
            }
            j.member581(h);
            j.member582(0, 0, h.member556(), h.member557());
            j.gl.clear(j.gl.COLOR_BUFFER_BIT | j.gl.DEPTH_BUFFER_BIT);
            b[0] = 0;
            b[1] = 0;
            b[2] = 0;
        };
        e.member521 = function () {
            if (!e.member291()) {
                throw new Error('943 ');
            }
            j.gl.readPixels(0, 0, i, g, j.gl.RGBA, j.gl.UNSIGNED_BYTE, d);
            j.member581(null);
        };
        e.member911 = function () {
            if (h === null) {
                return null;
            } else {
                return h.member575();
            }
        };
        c = undefined;
        return e;
    };
    return a;
}();