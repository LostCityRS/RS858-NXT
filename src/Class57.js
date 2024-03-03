import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class32 } from 'Class32.js';
import { Class242 } from 'Class242.js';
import { Class241 } from 'Class241.js';
import { Class239 } from 'Class239.js';
import { Class238 } from 'Class238.js';
import { Class237 } from 'Class237.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class57 = function () {
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
            c += '_kw=_bt[' + d + '].xyz-_pw.xyz;\n';
            c += '_kx=clamp(dot(_lk,normalize(_kw)),0.0,1.0);\n';
            c += '_kx*=1.0-clamp(length(_kw)*_bt[' + d + '].w,0.0,1.0);\n';
            c += '_kx*=clamp(_bs-' + d + '.0, 0.0, 1.0);\n';
            c += '_pm=_pm+_bbd(float(_bu[' + d + ']))*_kx;\n';
        }
    };
    b.member284 = function (d) {
        var g = '';
        g += 'precision mediump float;\n';
        if (d.member291(Class5.member96)) {
            g += 'varying vec4 _lc;\n';
            if (d.member291(Class5.member102)) {
                g += 'uniform vec4 _eu;\n';
            }
            g += 'void main(void) {\n';
            if (d.member291(Class5.member102)) {
                g += 'float _li=_rt(gl_FragCoord.xy,_eu.xy);\n';
                g += 'if (_li<_eu.z && (1.0/gl_FragCoord.w)<_eu.w) {\n';
                g += '   discard;\n';
                g += '   return;\n';
            }
            g += 'gl_FragColor=_lc*0.5+0.5;\n';
            g += '}\n';
        } else {
            if (d.member291(Class5.member109)) {
                g += 'varying vec4 _la;\n';
            }
            var e = false;
            if (d.member291(Class5.member89)) {
                e = true;
            }
            if (d.member291(Class5.member93)) {
                g += 'varying mat4 _lb;\n';
            }
            if (d.member291(Class5.member101)) {
                g += 'varying vec4 _pv;\n';
            }
            if (d.member291(Class5.member118)) {
                g += Class243.member2837(d);
            }
            var h = false;
            if (d.member291(Class5.member95)) {
                h = true;
            }
            if (e || h) {
                g += 'varying vec3 _lc;\n';
                g += 'varying vec4 _pw;\n';
            }
            if (d.member291(Class5.member89)) {
                g += 'uniform vec3 _m;\n';
                g += 'uniform vec3 _o;\n';
                g += 'uniform vec3 _p;\n';
                g += 'uniform vec3 _r;\n';
                if (d.member291(Class5.member91)) {
                    g += 'uniform vec4 _bt[' + Class32.member311 + '];\n';
                    g += 'uniform int _bu[' + Class32.member311 + '];\n';
                    g += 'uniform float _bs;\n';
                }
            }
            if (d.member291(Class5.member93)) {
                g += 'uniform sampler2D _w;\n';
                g += 'uniform vec3 _y;\n';
                if (d.member291(Class5.member94)) {
                    g += 'uniform sampler2D _z;\n';
                    g += 'uniform vec3 _ba;\n';
                }
            }
            if (d.member291(Class5.member95)) {
                g += 'uniform sampler2D _bp;\n';
                g += 'uniform float _bm;\n';
                g += 'uniform mat4 _bo;\n';
                g += 'uniform vec4 _bq;\n';
                g += 'const mat4 _ow=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n';
            }
            if (d.member291(Class5.member100)) {
                g += 'uniform vec4 _cj;\n';
                g += 'uniform float _cl;\n';
                g += 'uniform float _cn;\n';
            }
            if (d.member291(Class5.member102)) {
                g += 'uniform vec4 _eu;\n';
            }
            g += Class242.member284(d);
            g += Class241.member284(d);
            if (d.member291(Class5.member93)) {
                g += Class239.member284(d, Class238.member288);
            }
            if (d.member291(Class5.member95)) {
                g += Class237.member284(d);
            }
            if (d.member291(Class5.member100)) {
                g += Class240.member284(d);
            }
            if (d.member291(Class5.member118)) {
                g += Class243.member2839(d);
            }
            g += 'void main(void) {\n';
            if (d.member291(Class5.member102)) {
                g += 'float _li=_rt(gl_FragCoord.xy,_eu.xy);\n';
                g += 'if (_li<_eu.z && (1.0/gl_FragCoord.w)<_eu.w) {\n';
                g += '   discard;\n';
                g += '   return;\n';
                g += '}\n';
            }
            if (d.member291(Class5.member93)) {
                if (d.member291(Class5.member94)) {
                    g += 'vec4 _pz=_lb[0];\n';
                    g += 'float _qb=step(32768.0,_pz.w);\n';
                    g += '_pz.w=_pz.w-_qb*65536.0;\n';
                    g += 'vec4 _qc=_wc(_pz,_w,_z,_qb,_y,_ba);\n';
                    g += 'vec4 _qe=_lb[1];\n';
                    g += 'float _qf=step(32768.0,_qe.w);\n';
                    g += '_qe.w=_qe.w-_qf*65536.0;\n';
                    g += 'vec4 _qg=_wc(_qe,_w,_z,_qf,_y,_ba);\n';
                    g += 'vec4 _qi=_lb[2];\n';
                    g += 'float _qj=step(32768.0,_qi.w);\n';
                    g += '_qi.w=_qi.w-_qj*65536.0;\n';
                    g += 'vec4 _ql=_wc(_qi,_w,_z,_qj,_y,_ba);\n';
                } else {
                    g += 'vec4 _qc=_wc(_lb[0],_w,_y);\n';
                    g += 'vec4 _qg=_wc(_lb[1],_w,_y);\n';
                    g += 'vec4 _ql=_wc(_lb[2],_w,_y);\n';
                }
                g += 'vec4 _qn=vec4(_qc*_lb[3].x+_qg*_lb[3].y+_ql*_lb[3].z);\n';
                g += 'vec4 _ix=vec4(_qn.rgb*_la.rgb,_la.a);\n';
            } else if (d.member291(Class5.member109)) {
                g += 'vec4 _ix=_la;\n';
            } else if (d.member291(Class5.member117)) {
                g += 'vec4 _ix=vec4(1.0,1.0,1.0,1.0);\n';
            } else if (d.member291(Class5.member110)) {
                if (d.member291(Class5.member111)) {
                    g += 'vec4 _ix=vec4(0.0,0.0,0.0,1.0);\n';
                } else {
                    g += 'vec4 _ix=_wf(gl_FragCoord.z);\n';
                }
            }
            if (d.member291(Class5.member89)) {
                g += 'vec3 _lk=normalize(_lc);\n';
                g += 'float _lm=dot(_lk,_o);\n';
                g += 'vec3 _pm=_m+_p*clamp(_lm,0.0,1.0)+_r*clamp(_lm,-1.0,0.0);\n';
                if (d.member291(Class5.member91)) {
                    if (c.length === 0) {
                        a(Class32.member311);
                    }
                    g += c;
                }
            } else if (d.member291(Class5.member88)) {
                g += 'vec3 _pm=vec3(1.0,1.0,1.0);\n';
            }
            if (d.member291(Class5.member95)) {
                g += 'float _qo = _kp(_ow*_bo*vec4(_pw.xyz,1.0),_bp,_bm,_bq,_pw.w);\n';
                g += '_pm*=_qo;\n';
            }
            if (d.member291(Class5.member96)) {
                g += '_pm*=texture2D(_wr,gl_FragCoord.xy*_ws).x;\n';
            }
            if (d.member291(Class5.member89) || d.member291(Class5.member88)) {
                g += '_ix=vec4(_ix.rgb*_pm,_ix.a);\n';
            }
            if (d.member291(Class5.member118)) {
                g += '_ix.xyz=_ss(_ix.xyz, _rk, _rl);\n';
            }
            if (d.member291(Class5.member100)) {
                g += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
            }
            if (d.member291(Class5.member101)) {
                g += '_ix=_ix*(1.0-_pv.w)+vec4(_pv.rgb,1.0)*_pv.w;\n';
            }
            g += 'gl_FragColor=_ix;\n';
            g += '}\n';
        }
        return g;
    };
    b.member285 = function (d) {
        var e = new Array(0);
        if (d.member291(Class5.member102)) {
            e.push(Class7.member217);
        }
        if (d.member291(Class5.member96)) {
        } else {
            if (d.member291(Class5.member89)) {
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
            if (d.member291(Class5.member93)) {
                e.push(Class7.member155);
                e.push(Class7.member156);
                if (d.member291(Class5.member94)) {
                    e.push(Class7.member157);
                    e.push(Class7.member158);
                }
            }
            if (d.member291(Class5.member95)) {
                e.push(Class7.member166);
                e.push(Class7.member164);
                e.push(Class7.member165);
                e.push(Class7.member167);
            }
            if (d.member291(Class5.member100)) {
                e.push(Class7.member179);
                e.push(Class7.member180);
                e.push(Class7.member181);
            }
        }
        return e;
    };
    return b;
}();