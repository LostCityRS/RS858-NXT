import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class47 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nattribute vec2 _hl;\nattribute vec3 _hn;\n';
        if (b.member291(Class5.member118)) {
            c += 'attribute vec3 _ho;\n';
        }
        c += '\nuniform mat4 _c;\n\nvarying vec3 _iq;\n';
        if (b.member291(Class5.member118)) {
            c += 'varying vec3 _ir;\n';
        }
        c += '\nvoid main(void) {\n\tgl_Position=_c*vec4(_hl,-9999.99,1.0);\n\t_iq=_hn;\n\t//World _pd is actually stored in vertex _mg attribute\n';
        if (b.member291(Class5.member118)) {
            c += '_ir=_ho.xyz;\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        c.push(Class7.member264);
        if (b.member291(Class5.member118)) {
            c.push(Class7.member265);
        }
        c.push(Class7.member142);
        return c;
    };
    return a;
}();