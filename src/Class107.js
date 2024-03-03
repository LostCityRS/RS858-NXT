import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class7 } from 'Class7.js';
export var Class107 = function () {
    var a = function (d) {
        var g = null;
        var i;
        var h;
        var e;
        var b;
        var j = false;
        var c = null;
        if (d.member433 !== undefined) {
            g = Class74({ member526: Class72.member504 });
            i = d.member433;
        } else {
            throw new Error('1212 ');
        }
        g.member514 = function () {
            j = false;
        };
        g.member515 = function () {
            j = false;
        };
        g.member523 = function () {
            c = null;
            j = false;
        };
        g.member583 = function () {
            c = null;
            j = false;
        };
        g.member912 = function (k) {
            if (h !== k) {
                h = k;
                j = false;
            }
        };
        g.member913 = function (m, k) {
            if (e !== m || b !== k) {
                e = m;
                b = k;
                j = false;
            }
        };
        g.bind = function (k) {
            if (g.member291()) {
                if (k !== c || !j) {
                    i.gl.uniform3f(k.member457(Class7.member210.id), (h >> 16 & 255) / 255, (h >> 8 & 255) / 255, (h & 255) / 255);
                    i.gl.uniform1f(k.member457(Class7.member211.id), e);
                    i.gl.uniform1f(k.member457(Class7.member212.id), b);
                    c = k;
                    j = true;
                }
            } else if (k !== c || !j) {
                i.gl.uniform1f(k.member457(Class7.member211.id), -999999999);
                i.gl.uniform1f(k.member457(Class7.member212.id), -999999999);
                c = k;
                j = true;
            }
        };
        d = undefined;
        return g;
    };
    return a;
}();