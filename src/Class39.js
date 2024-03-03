import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class39 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'attribute vec2 _hl;\n';
        if (b.member291(Class5.member109)) {
            c += 'attribute vec4 _ho;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'attribute vec2 _hx;\n';
        }
        c += 'uniform mat4 _c;\n';
        if (b.member291(Class5.member109)) {
            c += 'varying vec4 _la;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'varying vec2 _lb;\n';
        }
        c += 'void main(void) {\n';
        c += 'gl_Position=_c*vec4(_hl,-1.0,1.0);\n';
        if (b.member291(Class5.member109)) {
            c += '_la=_ho/255.0;\n';
        }
        if (b.member291(Class5.member93)) {
            c += '_lb=_hx/32767.0;\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        if (b.member291(Class5.member109)) {
            c.push(Class7.member265);
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member270);
        }
        c.push(Class7.member142);
        return c;
    };
    return a;
}();