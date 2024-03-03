import { Class7 } from 'Class7.js';
export var Class56 = function () {
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
        c += 'attribute vec4 _ho;\n';
        c += 'uniform mat4 _c;\n';
        c += 'varying vec4 _la;\n';
        c += 'void main(void) {\n';
        c += 'gl_Position=_c*vec4(_hl,-1.0,1.0);\n';
        c += '_la=_ho/255.0;\n';
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        c.push(Class7.member265);
        c.push(Class7.member142);
        return c;
    };
    return a;
}();