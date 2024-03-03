import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class119 = function () {
    var a = function (b) {
        var c = null;
        var e;
        var d = undefined;
        if (b.member433 !== undefined) {
            c = Class74({ member526: Class72.member501 });
            e = b.member433;
        } else {
            throw new Error('932 ');
        }
        c.member523 = function () {
            d = undefined;
        };
        c.member583 = function () {
        };
        c.member1005 = function (g) {
            if (d !== undefined) {
                d.member511();
            }
            d = g;
            if (d !== undefined) {
                d.member510();
            }
        };
        c.bind = function (g) {
            if (c.member291() && d !== undefined) {
                var h = e.bindTexture(Class75.member501, d.member558(), e.gl.TEXTURE_CUBE_MAP);
                g.member467(Class7.member188, h);
            } else {
                var h = e.bindTexture(Class75.member501, undefined, e.gl.TEXTURE_CUBE_MAP);
                g.member467(Class7.member188, h);
            }
        };
        b = undefined;
        return c;
    };
    return a;
}();