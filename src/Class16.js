import { Class5 } from 'Class5.js';
import { Class239 } from 'Class239.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class16 = function () {
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
        c += 'varying vec4 _lb;\n';
        if (b.member291(Class5.member94)) {
            c += 'varying float _ly;\n';
        }
        c += 'uniform sampler2D _w;\n';
        c += 'uniform vec3 _y;\n';
        if (b.member291(Class5.member94)) {
            c += 'uniform sampler2D _z;\n';
            c += 'uniform vec3 _ba;\n';
        }
        if (b.member291(Class5.member100)) {
            c += 'uniform vec4 _cj;\n';
            c += 'uniform float _cl;\n';
            c += 'uniform float _cn;\n';
        }
        if (b.member291(Class5.member121)) {
            c += 'uniform float _ex;\n';
        }
        c += Class239.member284(b);
        if (b.member291(Class5.member100)) {
            c += Class240.member284(b);
        }
        c += 'void main(void) {\n';
        if (b.member291(Class5.member94)) {
            c += 'vec4 _lj=_wc(_lb,_w,_z,_ly,_y,_ba);\n';
        } else {
            c += 'vec4 _lj=_wc(_lb,_w,_y);\n';
        }
        c += 'vec4 _ix=_lj*_la;\n';
        if (b.member291(Class5.member121)) {
            c += 'if (_ix.a<=_ex) {\n';
            c += '\tdiscard;\n';
            c += '\treturn;\n';
            c += '}\n';
            c += 'else _ix.a=1.0;\n';
        } else if (b.member291(Class5.member122)) {
            c += 'if (_ix.a<=0.0) {\n';
            c += '\tdiscard;\n';
            c += '\treturn;\n';
            c += '}\n';
        }
        if (b.member291(Class5.member117)) {
            c += '_ix.rgb=vec3(1.0,1.0,1.0);\n';
        } else if (b.member291(Class5.member100)) {
            c += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
        }
        c += 'gl_FragColor=_ix;\n';
        c += '}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member155);
        c.push(Class7.member156);
        if (b.member291(Class5.member94)) {
            c.push(Class7.member157);
            c.push(Class7.member158);
        }
        if (b.member291(Class5.member100)) {
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