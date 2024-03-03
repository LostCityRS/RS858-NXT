import { Class5 } from 'Class5.js';
import { Class239 } from 'Class239.js';
import { Class238 } from 'Class238.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class62 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'precision mediump float;\n';
        c += 'varying vec4 _la;\n';
        if (b.member291(Class5.member93)) {
            c += 'varying vec4 _lb;\n';
            c += 'varying float _ly;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'uniform sampler2D _w;\n';
            c += 'uniform vec3 _y;\n';
            if (b.member291(Class5.member94)) {
                c += 'uniform sampler2D _z;\n';
                c += 'uniform vec3 _ba;\n';
            }
        }
        if (!b.member291(Class5.member117) && b.member291(Class5.member100)) {
            c += 'uniform vec4 _cj;\n';
            c += 'uniform float _cl;\n';
            c += 'uniform float _cn;\n';
        }
        if (b.member291(Class5.member121)) {
            c += 'uniform float _ex;\n';
        }
        if (b.member291(Class5.member93)) {
            c += Class239.member284(b, Class238.member287);
        }
        if (b.member291(Class5.member100)) {
            c += Class240.member284(b);
        }
        c += 'void main(void) {\n';
        if (b.member291(Class5.member93)) {
            if (b.member291(Class5.member94)) {
                c += 'vec4 _ma=_wc(_lb,_w,_z,_ly,_y,_ba);\n';
            } else {
                c += 'vec4 _ma=_wc(_lb,_w,_y);\n';
            }
            c += 'vec4 _ix=_la*clamp(_ma,0.0,1.0);\n';
        } else {
            c += 'vec4 _ix=_la;\n';
        }
        if (b.member291(Class5.member121)) {
            c += 'if (_ix.a<=_ex) {\n';
            c += '\tdiscard;\n';
            c += '\treturn;\n';
            c += '}\n';
        }
        if (!b.member291(Class5.member117) && b.member291(Class5.member100)) {
            c += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
        }
        if (b.member291(Class5.member117)) {
            c += '_ix.rgb=vec3(1.0, 1.0, 1.0);\n';
        }
        c += 'gl_FragColor=_ix;\n';
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        if (b.member291(Class5.member93)) {
            c.push(Class7.member155);
            c.push(Class7.member156);
            if (b.member291(Class5.member94)) {
                c.push(Class7.member157);
                c.push(Class7.member158);
            }
        }
        if (!b.member291(Class5.member117) && b.member291(Class5.member100)) {
            c.push(Class7.member179);
            c.push(Class7.member180);
            c.push(Class7.member181);
        }
        if (b.member291(Class5.member121)) {
            c.push(Class7.member219);
        }
        return c;
    };
    return a;
}();