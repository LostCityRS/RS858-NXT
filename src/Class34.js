import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class34 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'attribute vec3 _hl;\n';
        c += 'attribute vec4 _ho;\n';
        if (b.member291(Class5.member93)) {
            c += 'attribute vec4 _hx;\n';
            c += 'attribute vec4 _il;\n';
        }
        c += 'uniform mat4 _d;\n';
        c += 'uniform mat4 _c;\n';
        c += 'const float _pp=3.14159265358979323846264;\n';
        c += 'varying vec4 _la;\n';
        if (b.member291(Class5.member93)) {
            c += 'varying vec4 _lb;\n';
            c += 'varying float _ly;\n';
        }
        c += 'void main(void) {\n';
        c += 'vec4 _ps=_d*vec4(_hl.xyz,1.0);\n';
        if (b.member291(Class5.member93)) {
            c += 'float _rg=(_il.y*2.0*_pp)/256.0;\n';
            c += 'float _ri=_hx.x*cos(_rg);\n';
            c += 'float _rj=_hx.y*sin(_rg);\n';
            c += '_ps.x-=_ri;\n';
            c += '_ps.y-=_rj;\n';
            c += '_lb=_hx;\n';
            c += '_lb.x=_il.z;\n';
            c += '_lb.y=_il.w;\n';
            c += '_ly=_il.x;\n';
        }
        c += 'gl_Position=_c*_ps;\n';
        c += '_la=_ho;\n';
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        c.push(Class7.member265);
        if (b.member291(Class5.member93)) {
            c.push(Class7.member270);
            c.push(Class7.member279);
        }
        c.push(Class7.member143);
        c.push(Class7.member142);
        return c;
    };
    return a;
}();