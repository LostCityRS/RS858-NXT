import { Class5 } from 'Class5.js';
import { Class50 } from 'Class50.js';
import { Class243 } from 'Class243.js';
import { Class7 } from 'Class7.js';
export var Class51 = function () {
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
        c += 'attribute vec3 _hl;\n';
        if (b.member291(Class5.member109)) {
            c += 'attribute vec4 _ho;\n';
        }
        if (b.member291(Class5.member96) || !b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member88) || b.member291(Class5.member89) || b.member291(Class5.member103))) {
            c += 'attribute vec2 _hn;\n';
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member89) && b.member291(Class5.member90)) {
            c += 'attribute float _io;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'attribute vec2 _hv;\n';
            c += 'attribute vec4 _hx;\n';
            c += 'attribute vec4 _in;\n';
        }
        if (b.member291(Class5.member94) || b.member291(Class5.member104)) {
            c += 'attribute vec4 _hq;\n';
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            c += 'uniform vec3 _fm;\n';
        }
        c += 'uniform mat4 _e;\n';
        c += 'uniform mat4 _d;\n';
        c += 'uniform mat4 _c;\n';
        if (b.member291(Class5.member96) || !b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member88) || b.member291(Class5.member89) || b.member291(Class5.member103))) {
            c += 'uniform mat3 _f;\n';
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            if (b.member291(Class5.member118) || b.member291(Class5.member88)) {
                c += 'uniform vec3 _o;\n';
            }
            if (b.member291(Class5.member88) && !b.member291(Class5.member103)) {
                c += 'uniform vec3 _m;\n';
                c += 'uniform vec3 _p;\n';
                c += 'uniform vec3 _r;\n';
            }
        }
        if (b.member291(Class5.member109)) {
            c += 'uniform vec4 _fo;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'uniform float _be;\n';
        }
        if (b.member291(Class5.member104)) {
            c += 'uniform vec4 _bg[' + 3 * Class50.member361 + '];\n';
            if (b.member291(Class5.member109)) {
                c += 'uniform vec4 _bi[' + Class50.member362 + '];\n';
            }
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
            c += 'uniform mat4 _bo;\n';
            c += 'const mat4 _ow=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n';
        }
        if (b.member291(Class5.member106)) {
            c += 'uniform float _es;\n';
        }
        if (b.member291(Class5.member118)) {
            c += Class243.member2836(b);
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && (b.member291(Class5.member91) || b.member291(Class5.member101))) {
            c += 'varying vec4 _kz;\n';
        }
        if (b.member291(Class5.member109)) {
            c += 'varying vec4 _la;\n';
        }
        var d = false;
        if (b.member291(Class5.member93)) {
            c += 'varying vec4 _lb;\n';
            c += 'varying vec4 _ox;\n';
            if (b.member291(Class5.member94)) {
                d = true;
            }
        }
        if (b.member291(Class5.member96)) {
            c += 'varying vec4 _lc;\n';
        } else if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member89) || b.member291(Class5.member103))) {
            c += 'varying vec3 _lc;\n';
        }
        var g = false;
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member89) && b.member291(Class5.member90)) {
            g = true;
        }
        var e = false;
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
            c += 'varying vec4 _le;\n';
            e = true;
        }
        if (d || g || e) {
            c += 'varying vec3 _lg;\n';
        }
        if (b.member291(Class5.member118)) {
            c += Class243.member2837(b);
        }
        if (b.member291(Class5.member118)) {
            c += Class243.member2838(b);
        }
        c += 'void main(void) {\n';
        if (b.member291(Class5.member104)) {
            c += 'int _oz=int(_hq.y*3.0);\n';
            c += 'mat4 _pb=mat4(';
            c += 'vec4(_bg[_oz].xyz,0.0),';
            c += 'vec4(_bg[_oz].w,_bg[_oz+1].xy,0.0),';
            c += 'vec4(_bg[_oz+1].zw,_bg[_oz+2].x,0.0),';
            c += 'vec4(_bg[_oz+2].yzw,1.0));\n';
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && (b.member291(Class5.member91) || b.member291(Class5.member101))) {
                c += 'vec4 _pd=_e*_pb*vec4(_hl,1.0);\n';
                if (b.member291(Class5.member106)) {
                    c += '_pd.y=clamp(_pd.y,_es,999999.99);\n';
                }
                c += '_kz=_pd;\n';
                c += 'gl_Position=_c*_d*_pd;\n';
                if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
                    c += '_le=_ow*_bo*_pd;\n';
                }
            } else {
                c += 'vec4 _pd=_e*_pb*vec4(_hl,1.0);\n';
                if (b.member291(Class5.member106)) {
                    c += '_pd.y=clamp(_pd.y,_es,999999.99);\n';
                }
                c += 'gl_Position=_c*_d*_pd;\n';
                if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
                    c += '_le=_ow*_bo*_pd;\n';
                }
            }
        } else if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && (b.member291(Class5.member91) || b.member291(Class5.member101))) {
            c += 'vec4 _pd=_e*vec4(_hl,1.0);\n';
            if (b.member291(Class5.member106)) {
                c += '_pd.y=clamp(_pd.y,_es,999999.99);\n';
            }
            c += '_kz=_pd;\n';
            c += 'gl_Position=_c*_d*_pd;\n';
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
                c += '_le=_ow*_bo*_pd;\n';
            }
        } else {
            c += 'vec4 _pd=_e*vec4(_hl,1.0);\n';
            if (b.member291(Class5.member106)) {
                c += '_pd.y=clamp(_pd.y,_es,999999.99);\n';
            }
            c += 'gl_Position=_c*_d*_pd;\n';
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
                c += '_le=_ow*_bo*_pd;\n';
            }
        }
        if (b.member291(Class5.member109)) {
            c += '_la=_ho;\n';
            if (b.member291(Class5.member104)) {
                c += '_la.a+=_bi[int(_hq.z)].a;\n';
            }
            c += '_la+=_fo;\n';
        }
        if (b.member291(Class5.member96) || !b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member89) || b.member291(Class5.member88) || b.member291(Class5.member103))) {
            c += 'vec2 _pe=vec2(_hn.x,_hn.y)/16384.0-2.0;\n';
            c += 'float _pf=dot(_pe,_pe);\n';
            c += 'float _ph=sqrt(1.0-_pf/4.0);\n';
            c += 'vec3 _pj=vec3(_pe.xy*_ph,1.0-_pf/2.0);\n';
        }
        if (b.member291(Class5.member96)) {
            if (b.member291(Class5.member104)) {
                c += '_lc.xyz=_f*mat3(_pb)*_pj;\n';
            } else {
                c += '_lc.xyz=_f*_pj;\n';
            }
        } else if (!b.member291(Class5.member117) && !b.member291(Class5.member110)) {
            if (b.member291(Class5.member89) || b.member291(Class5.member103)) {
                if (b.member291(Class5.member104)) {
                    c += '_lc.xyz=_f*mat3(_pb)*_pj;\n';
                } else {
                    c += '_lc.xyz=_f*_pj;\n';
                }
            } else if (b.member291(Class5.member88)) {
                if (b.member291(Class5.member104)) {
                    c += 'vec3 _pl=_f*mat3(_pb)*_pj;\n';
                } else {
                    c += 'vec3 _pl=_f*_pj;\n';
                }
                c += 'float _lm=dot(_pl,_o);\n';
                c += 'vec3 _pm=_m+_p*clamp(_lm,0.0,1.0)+_r*clamp(_lm,-1.0,0.0);\n';
                c += '_la=vec4(_la.rgb*_pm,_la.a);\n';
            }
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member89) && b.member291(Class5.member90)) {
            c += '_lg.y=_io;\n';
        }
        if (b.member291(Class5.member93)) {
            c += '_lb.pq=_hx.st;\n';
            c += '_lb.st=_hv.st+((_hx.pq-32768.0)/8192.0*_be);\n';
            c += '_ox=_in;\n';
            if (b.member291(Class5.member94)) {
                c += '_lg.x=_hq.x;\n';
            }
        }
        if (b.member291(Class5.member96)) {
            c += '_lc=_d*_lc;\n';
            c += '_pd=_c*_d*_pd;\n';
            c += '_lc.w=_pd.z/_pd.w;\n';
        } else if (b.member291(Class5.member117) || b.member291(Class5.member110)) {
            c += 'const float _pn=-1.0;\n';
            c += 'gl_Position.z=max(_pn, gl_Position.z);\n';
        } else {
            if (b.member291(Class5.member91) || b.member291(Class5.member101)) {
                c += 'vec3 _iz=_kz.xyz-_fm;\n';
            } else {
                c += 'vec3 _iz=_pd.xyz-_fm;\n';
            }
            if (b.member291(Class5.member95)) {
                c += '_lg.z=length(_iz.xyz);\n';
            }
            if (b.member291(Class5.member118)) {
                c += 'ComputeInOutScattering(_iz, length(_iz), _o, _rk, _rl);\n';
            }
        }
        c += '}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        if (b.member291(Class5.member109)) {
            c.push(Class7.member265);
        }
        if (b.member291(Class5.member96) || !b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member88) || b.member291(Class5.member89) || b.member291(Class5.member103))) {
            c.push(Class7.member264);
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member89) && b.member291(Class5.member90)) {
            c.push(Class7.member281);
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member269);
            c.push(Class7.member270);
        }
        if (b.member291(Class5.member94) || b.member291(Class5.member104)) {
            c.push(Class7.member266);
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member280);
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            c.push(Class7.member229);
        }
        c.push(Class7.member143);
        c.push(Class7.member144);
        c.push(Class7.member142);
        if (b.member291(Class5.member96) || !b.member291(Class5.member117) && !b.member291(Class5.member110) && (b.member291(Class5.member88) || b.member291(Class5.member89))) {
            c.push(Class7.member145);
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            if (b.member291(Class5.member118) || b.member291(Class5.member88)) {
                c.push(Class7.member150);
            }
            if (b.member291(Class5.member88) && !b.member291(Class5.member103)) {
                c.push(Class7.member149);
                c.push(Class7.member151);
                c.push(Class7.member152);
            }
        }
        if (b.member291(Class5.member109)) {
            c.push(Class7.member230);
        }
        if (b.member291(Class5.member93)) {
            c.push(Class7.member160);
        }
        if (b.member291(Class5.member104)) {
            c.push(Class7.member161);
            if (b.member291(Class5.member109)) {
                c.push(Class7.member162);
            }
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member95)) {
            c.push(Class7.member165);
        }
        if (b.member291(Class5.member106)) {
            c.push(Class7.member215);
        }
        if (b.member291(Class5.member118)) {
            c.push(Class7.member182);
            c.push(Class7.member183);
            c.push(Class7.member184);
            c.push(Class7.member185);
            c.push(Class7.member186);
        }
        return c;
    };
    return a;
}();