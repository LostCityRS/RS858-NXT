import { Class5 } from 'Class5.js';
import { Class239 } from 'Class239.js';
import { Class237 } from 'Class237.js';
import { Class240 } from 'Class240.js';
import { Class7 } from 'Class7.js';
export var Class43 = function () {
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
        if (b.member291(Class5.member109)) {
            c += 'varying vec4 _la;\n';
        }
        if (b.member291(Class5.member89)) {
            c += 'varying vec3 _lc;\n';
        }
        if (b.member291(Class5.member95)) {
            c += 'varying vec4 _le;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'varying vec4 _lb;\n';
            c += 'varying vec4 _wj;\n';
            c += 'varying vec4 _wl;\n';
            c += 'varying vec3 _wn;\n';
        }
        if (b.member291(Class5.member101)) {
            c += 'varying vec4 _pv;\n';
        }
        if (b.member291(Class5.member89)) {
            c += 'uniform vec3 _m;\n';
            c += 'uniform vec3 _o;\n';
            c += 'uniform vec3 _p;\n';
            c += 'uniform vec3 _r;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'uniform sampler2D _w;\n';
            c += 'uniform vec3 _y;\n';
            if (b.member291(Class5.member94)) {
                c += 'uniform sampler2D _z;\n';
                c += 'uniform vec3 _ba;\n';
            }
        }
        if (b.member291(Class5.member95)) {
            c += 'uniform sampler2D _bp;\n';
            c += 'uniform float _bm;\n';
            c += 'uniform vec4 _bq;\n';
            c += 'const vec4 _wp=vec4(1.0 / (256.0 * 256.0 * 256.0),1.0 / (256.0 * 256.0),1.0 / 256.0,1.0);\n';
        }
        if (b.member291(Class5.member96)) {
            c += 'uniform sampler2D _wr;\n';
            c += 'uniform vec2 _ws;\n';
        }
        if (b.member291(Class5.member100)) {
            c += 'uniform vec4 _cj;\n';
            c += 'uniform float _cl;\n';
            c += 'uniform float _cn;\n';
        }
        if (b.member291(Class5.member102)) {
            c += 'uniform vec4 _eu;\n';
        }
        if (b.member291(Class5.member110)) {
            c += 'const vec4 _wg=vec4(256*256*256,256*256,256,1.0);\n';
            c += 'const vec4 _wh=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n';
        }
        if (b.member291(Class5.member93)) {
            c += Class239.member284(b);
        }
        if (b.member291(Class5.member95)) {
            c += Class237.member284(b);
        }
        if (b.member291(Class5.member100)) {
            c += Class240.member284(b);
        }
        c += 'void main(void) {\n';
        if (b.member291(Class5.member102)) {
            c += 'float _li=_rt(gl_FragCoord.xy,_eu.xy);\n';
            c += 'if (_li<_eu.z && (1.0/gl_FragCoord.w)<_eu.w) {\n';
            c += '   discard;\n';
            c += '   return;\n';
            c += '}\n';
        }
        if (b.member291(Class5.member93)) {
            if (b.member291(Class5.member94)) {
                c += 'vec4 _pz=_lb;\n';
                c += 'float _qb=step(32768.0,_pz.w);\n';
                c += '_pz.w=_pz.w-_qb*65536.0;\n';
                c += 'vec4 _qc=_wc(_pz,_w,_z,_qb,_y,_ba);\n';
                c += 'vec4 _qe=_wj;\n';
                c += 'float _qf=step(32768.0,_qe.w);\n';
                c += '_qe.w=_qe.w-_qf*65536.0;\n';
                c += 'vec4 _qg=_wc(_qe,_w,_z,_qf,_y,_ba);\n';
                c += 'vec4 _qi=_wl;\n';
                c += 'float _qj=step(32768.0,_qi.w);\n';
                c += '_qi.w=_qi.w-_qj*65536.0;\n';
                c += 'vec4 _ql=_wc(_qi,_w,_z,_qj,_y,_ba);\n';
            } else {
                c += 'vec4 _qc=_wc(_lb,_w,_y);\n';
                c += 'vec4 _qg=_wc(_wj,_w,_y);\n';
                c += 'vec4 _ql=_wc(_wl,_w,_y);\n';
            }
            c += 'vec4 _qn=vec4(_qc*_wn.x+_qg*_wn.y+_ql*_wn.z);\n';
            c += 'vec4 _ix=vec4(_qn.rgb*_la.rgb,_la.a);\n';
        } else if (b.member291(Class5.member109)) {
            c += 'vec4 _ix=_la;\n';
        } else if (b.member291(Class5.member110)) {
            c += 'vec4 _ix=fract(gl_FragCoord.z*_wg);\n';
            c += '_ix-=_ix.xxyz*_wh;\n';
        }
        if (b.member291(Class5.member89)) {
            c += 'float _lm=max(dot(_lc,_o),0.0);\n';
            c += 'vec3 _pm=_m+_p*_lm-_r*_lm;\n';
        } else if (b.member291(Class5.member88)) {
            c += 'vec3 _pm=vec3(1.0,1.0,1.0);\n';
        }
        if (b.member291(Class5.member95)) {
            c += '_pm*=_kp(_le,_bp,_bm,_bq,vViewSpaceDepth);\n';
        }
        if (b.member291(Class5.member96)) {
            c += '_pm*=texture2D(_wr,gl_FragCoord.xy*_ws).x;\n';
        }
        if (b.member291(Class5.member89) || b.member291(Class5.member88)) {
            c += '_ix=vec4(_lc.xzy*0.5+0.5,_ix.a);\n';
        }
        if (b.member291(Class5.member100)) {
            c += '_ix=_zs(_ix,_cj,_cn,_cl);\n';
        }
        if (b.member291(Class5.member101)) {
            c += '_ix=_ix*(1.0-_pv.w)+vec4(_pv.rgb,1.0)*_pv.w;\n';
        }
        c += 'gl_FragColor=_ix;\n';
        c += '}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        if (b.member291(Class5.member89)) {
            c.push(Class7.member149);
            c.push(Class7.member150);
            c.push(Class7.member151);
            c.push(Class7.member152);
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member155);
            c.push(Class7.member156);
            if (b.member291(Class5.member94)) {
                c.push(Class7.member157);
                c.push(Class7.member158);
            }
        }
        if (b.member291(Class5.member95)) {
            c.push(Class7.member166);
            c.push(Class7.member164);
            c.push(Class7.member167);
        }
        if (b.member291(Class5.member100)) {
            c.push(Class7.member179);
            c.push(Class7.member180);
            c.push(Class7.member181);
        }
        if (b.member291(Class5.member102)) {
            c.push(Class7.member217);
        }
        return c;
    };
    return a;
}();