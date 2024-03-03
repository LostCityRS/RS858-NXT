import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class32 } from 'Class32.js';
import { Class242 } from 'Class242.js';
import { Class241 } from 'Class241.js';
import { Class239 } from 'Class239.js';
import { Class237 } from 'Class237.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class33 = function () {
    var b = {};
    b.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    var c = '';
    var a = function (e) {
        c += 'vec3 _kw;\n';
        c += 'float _kx;\n';
        for (var d = 0; d < e; ++d) {
            c += '_kw=_bt[' + d + '].xyz-_kz.xyz;\n';
            c += '_kx=clamp(dot(_lk,normalize(_kw)),0.0,1.0);\n';
            c += '_kx*=1.0-clamp(length(_kw)*_bt[' + d + '].w,0.0,1.0);\n';
            c += '_kx*=clamp(_bs-' + d + '.0, 0.0, 1.0);\n';
            c += '_ln=_ln+_bbd(float(_bu[' + d + ']))*_kx;\n';
        }
    };
    b.member284 = function (d) {
        var e = '';
        e += 'precision mediump float;\n';
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && (d.member291(Class5.member91) || d.member291(Class5.member101))) {
            e += 'varying vec4 _kz;\n';
        }
        if (d.member291(Class5.member109)) {
            e += 'varying vec4 _la;\n';
        }
        var g = false;
        if (d.member291(Class5.member93)) {
            e += 'varying vec4 _lb;\n';
            if (d.member291(Class5.member94)) {
                g = true;
            }
        }
        if (d.member291(Class5.member96)) {
            e += 'varying vec4 _lc;\n';
        } else if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && (d.member291(Class5.member89) || d.member291(Class5.member103))) {
            e += 'varying vec3 _lc;\n';
        }
        var i = false;
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member89) && d.member291(Class5.member90)) {
            i = true;
        }
        var h = false;
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member95)) {
            e += 'varying vec4 _le;\n';
            h = true;
        }
        if (g || i || h) {
            e += 'varying vec3 _lg;\n';
        }
        if (d.member291(Class5.member118)) {
            e += Class243.member2837(d);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member89)) {
            e += 'uniform vec3 _m;\n';
            e += 'uniform vec3 _o;\n';
            e += 'uniform vec3 _p;\n';
            e += 'uniform vec3 _r;\n';
            if (d.member291(Class5.member91)) {
                e += 'uniform vec4 _bt[' + Class32.member310 + '];\n';
                e += 'uniform int _bu[' + Class32.member310 + '];\n';
                e += 'uniform float _bs;\n';
            }
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && (d.member291(Class5.member90) || d.member291(Class5.member103))) {
            e += 'uniform vec3 _fj;\n';
        }
        if (d.member291(Class5.member93)) {
            e += 'uniform sampler2D _w;\n';
            e += 'uniform vec3 _y;\n';
            if (d.member291(Class5.member94)) {
                e += 'uniform sampler2D _z;\n';
                e += 'uniform vec3 _ba;\n';
            }
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member95)) {
            e += 'uniform sampler2D _bp;\n';
            e += 'uniform float _bm;\n';
            e += 'uniform vec4 _bq;\n';
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member100)) {
            e += 'uniform vec4 _cj;\n';
            e += 'uniform float _cl;\n';
            e += 'uniform float _cn;\n';
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member101)) {
            e += 'uniform vec4 _ei;\n';
            e += 'uniform float _ek;\n';
            e += 'uniform float _em;\n';
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member103)) {
            e += 'uniform samplerCube _da;\n';
        }
        if (d.member291(Class5.member102)) {
            e += 'uniform vec4 _eu;\n';
        }
        if (d.member291(Class5.member121)) {
            e += 'uniform float _ex;\n';
        }
        e += Class242.member284(d);
        e += Class241.member284(d);
        if (d.member291(Class5.member93)) {
            e += Class239.member284(d);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member95)) {
            e += Class237.member284(d);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member100)) {
            e += Class240.member284(d);
        }
        if (d.member291(Class5.member118)) {
            e += Class243.member2839(d);
        }
        e += 'void main(void) {\n';
        if (d.member291(Class5.member102)) {
            e += 'float _li=_rt(gl_FragCoord.xy,_eu.xy);\n';
            e += 'if (_li<_eu.z && (1.0/gl_FragCoord.w)<_eu.w) {\n';
            e += '\tdiscard;\n';
            e += '\treturn;\n';
            e += '}\n';
        }
        if (d.member291(Class5.member93)) {
            if (d.member291(Class5.member94)) {
                e += 'vec4 _lj=_wc(_lb,_w,_z,_lg.x,_y,_ba);\n';
            } else {
                e += 'vec4 _lj=_wc(_lb,_w,_y);\n';
            }
            if (d.member291(Class5.member109)) {
                e += 'vec4 _ix=_lj*_la;\n';
            } else {
                e += 'vec4 _ix=_lj;\n';
            }
        } else if (d.member291(Class5.member109)) {
            e += 'vec4 _ix=_la;\n';
        } else {
            e += 'vec4 _ix=vec4(0.0,0.0,0.0,1.0);\n';
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96)) {
            if (d.member291(Class5.member89) || d.member291(Class5.member103)) {
                e += 'vec3 _lk=normalize(_lc.xyz);\n';
            }
            if (d.member291(Class5.member89)) {
                e += 'float _lm=dot(_lk,_o);\n';
                e += 'vec3 _ln=_m+_p*clamp(_lm,0.0,1.0)+_r*clamp(_lm,-1.0,0.0);\n';
                if (d.member291(Class5.member90)) {
                    e += 'vec3 _lp=reflect(-_o,_lk);\n';
                    e += 'float _lr=pow(max(dot(_lp,-_fj),0.0),_lg.y)*_ix.a;\n';
                    e += 'vec3 _ls=_lr*_p;\n';
                    if (d.member291(Class5.member109)) {
                        e += '_ix.a=_la.a;\n';
                    }
                } else {
                    e += 'vec3 _ls=vec3(0.0,0.0,0.0);\n';
                }
                if (d.member291(Class5.member91)) {
                    if (c.length === 0) {
                        a(Class32.member310);
                    }
                    e += c;
                }
            } else {
                e += 'vec3 _ln=vec3(1.0,1.0,1.0);\n';
            }
            if (d.member291(Class5.member95)) {
                e += 'float _kg=_kp(_le,_bp,_bm,_bq,_lg.z);\n';
            } else {
                e += 'float _kg=1.0;\n';
            }
            if (d.member291(Class5.member103)) {
                e += 'vec3 _lu=reflect(-_fj,-_lk);\n';
                e += '_lu.x=-_lu.x;\n';
                e += '_lu.y=-_lu.y;\n';
                e += '_ix.rgb=textureCube(_da,_lu).rgb*_ix.a+_ix.rgb*(1.0-_ix.a);\n';
                if (d.member291(Class5.member109)) {
                    e += '_ix.a=_la.a;\n';
                }
            }
        }
        if (d.member291(Class5.member109) && d.member291(Class5.member123)) {
            e += '_ix.a=_la.a;\n';
        }
        if (d.member291(Class5.member121)) {
            e += 'if (_ix.a<=_ex) {\n';
            e += '\tdiscard;\n';
            e += '\treturn;\n';
            e += '}\n';
            e += 'else _ix.a=1.0;\n';
        } else if (d.member291(Class5.member122)) {
            e += 'if (_ix.a<=0.0) {\n';
            e += '\tdiscard;\n';
            e += '\treturn;\n';
            e += '}\n';
        }
        if (d.member291(Class5.member96)) {
            e += 'gl_FragColor=_lc*0.5+0.5;\n';
        } else if (d.member291(Class5.member117)) {
            e += '_ix.xyz=vec3(1.0,1.0,1.0);\n';
            e += 'gl_FragColor=_ix;\n';
        } else if (d.member291(Class5.member110)) {
            if (d.member291(Class5.member111)) {
                e += '_ix=vec4(0.0,0.0,0.0,1.0);\n';
            } else {
                e += '_ix=_wf(gl_FragCoord.z);\n';
            }
            e += 'gl_FragColor=_ix;\n';
        } else {
            if (d.member291(Class5.member89)) {
                e += '_ix=vec4(_ix.rgb*_ln*_kg+step(1.0,_kg)*_ls,_ix.a);\n';
            } else if (d.member291(Class5.member88)) {
                e += '_ix=vec4(_ix.rgb*_ln,_ix.a);\n';
            }
            if (d.member291(Class5.member118)) {
                e += '_ix.xyz=_ss(_ix.xyz, _rk, _rl);\n';
            }
            if (d.member291(Class5.member100)) {
                e += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
            }
            if (d.member291(Class5.member101)) {
                e += 'float _lv=_ek-_kz.y;\n';
                e += 'float _lx=0.0;\n';
                e += 'if (_lv>0.0) {\n';
                e += '\t_lx=_lv/(_ek-_em);\n';
                e += '\t_lx=clamp(_lx,0.0,1.0);\n';
                e += '\t_ix=_ix*(1.0-_lx)+vec4(_ei,1.0)*_lx;\n';
                e += '}\n';
            }
            e += 'gl_FragColor=_ix;\n';
        }
        e += '}\n';
        return e;
    };
    b.member285 = function (d) {
        var e = new Array(0);
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member89)) {
            e.push(Class7.member149);
            e.push(Class7.member150);
            e.push(Class7.member151);
            e.push(Class7.member152);
            if (d.member291(Class5.member91)) {
                e.push(Class7.member169);
                e.push(Class7.member170);
                e.push(Class7.member168);
            }
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && (d.member291(Class5.member90) || d.member291(Class5.member103))) {
            e.push(Class7.member227);
        }
        if (d.member291(Class5.member93)) {
            e.push(Class7.member155);
            e.push(Class7.member156);
            if (d.member291(Class5.member94)) {
                e.push(Class7.member157);
                e.push(Class7.member158);
            }
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member95)) {
            e.push(Class7.member166);
            e.push(Class7.member164);
            e.push(Class7.member167);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member100)) {
            e.push(Class7.member179);
            e.push(Class7.member180);
            e.push(Class7.member181);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member101)) {
            e.push(Class7.member210);
            e.push(Class7.member211);
            e.push(Class7.member212);
        }
        if (!d.member291(Class5.member117) && !d.member291(Class5.member110) && !d.member291(Class5.member96) && d.member291(Class5.member103)) {
            e.push(Class7.member188);
        }
        if (d.member291(Class5.member102)) {
            e.push(Class7.member217);
        }
        if (d.member291(Class5.member121)) {
            e.push(Class7.member219);
        }
        return e;
    };
    return b;
}();