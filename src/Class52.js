import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class7 } from 'Class7.js';
export var Class52 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var d = '';
        d += 'precision mediump float;\n';
        if (b.member291(Class5.member96)) {
            d += 'attribute vec3 _hl;\n';
            d += 'attribute vec3 _hn;\n';
            d += 'uniform mat4 _e;\n';
            d += 'uniform mat4 _d;\n';
            d += 'uniform mat4 _c;\n';
            if (b.member291(Class5.member88) || b.member291(Class5.member89)) {
                d += 'uniform mat3 _f;\n';
            }
            if (b.member291(Class5.member107)) {
                d += 'uniform float _eo;\n';
            }
            if (b.member291(Class5.member108)) {
                d += 'uniform float _eq;\n';
            }
            d += 'varying vec4 _lc;\n';
            d += 'void main(void) {\n';
            d += 'vec4 _pt=_e*vec4(_hl,1.0);\n';
            if (b.member291(Class5.member107)) {
                d += '_pt.y=clamp(_pt.y,_eo,999999.99);\n';
            }
            if (b.member291(Class5.member108)) {
                d += '_pt.y=clamp(_pt.y,-999999.99,_eq);\n';
            }
            d += '_pt=_c*_d*_pt;\n';
            d += '_lc.xyz=_f*_hn;\n';
            d += '_lc=_d*_lc;\n';
            d += '_lc.w=_pt.z/_pt.w;\n';
            d += 'gl_Position=_pt;\n';
            d += '}\n';
        } else {
            d += 'attribute vec3 _hl;\n';
            if (b.member291(Class5.member109)) {
                d += 'attribute vec4 _ho;\n';
            }
            if (b.member291(Class5.member88) || b.member291(Class5.member89)) {
                d += 'attribute vec3 _hn;\n';
            }
            if (b.member291(Class5.member93)) {
                d += 'attribute vec4 _hx;\n';
                d += 'attribute vec4 _ib;\n';
                d += 'attribute vec4 _ie;\n';
                d += 'attribute vec3 _hu;\n';
            }
            if (b.member291(Class5.member101)) {
                d += 'attribute vec4 _ik;\n';
            }
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && b.member291(Class5.member118)) {
                d += 'uniform vec3 _fm;\n';
                d += 'uniform vec3 _o;\n';
            }
            d += 'uniform mat4 _e;\n';
            d += 'uniform mat4 _d;\n';
            d += 'uniform mat4 _c;\n';
            if (b.member291(Class5.member88) || b.member291(Class5.member89)) {
                d += 'uniform mat3 _f;\n';
            }
            if (b.member291(Class5.member109)) {
                d += 'uniform vec4 _fo;\n';
            }
            if (b.member291(Class5.member107)) {
                d += 'uniform float _eo;\n';
            }
            if (b.member291(Class5.member108)) {
                d += 'uniform float _eq;\n';
            }
            if (b.member291(Class5.member118)) {
                d += Class243.member2836(b);
            }
            if (b.member291(Class5.member109)) {
                d += 'varying vec4 _la;\n';
            }
            var c = false;
            if (b.member291(Class5.member89)) {
                c = true;
            }
            if (b.member291(Class5.member93)) {
                d += 'varying mat4 _lb;\n';
            }
            if (b.member291(Class5.member101)) {
                d += 'varying vec4 _pv;\n';
            }
            if (b.member291(Class5.member118)) {
                d += Class243.member2837(b);
            }
            var e = false;
            if (b.member291(Class5.member95)) {
                e = true;
            }
            if (c || e) {
                d += 'varying vec3 _lc;\n';
                d += 'varying vec4 _pw;\n';
            }
            if (b.member291(Class5.member118)) {
                d += Class243.member2838(b);
            }
            d += 'void main(void) {\n';
            d += 'vec4 _pt=_e*vec4(_hl,1.0);\n';
            if (b.member291(Class5.member89)) {
                d += '_lc=_f*_hn;\n';
                d += '_pw.xyz=_pt.xyz;\n';
            }
            if (b.member291(Class5.member109)) {
                d += '_la=_ho;\n';
                d += '_la+=_fo;\n';
            }
            if (b.member291(Class5.member107)) {
                d += '_pt.y=clamp(_pt.y,_eo,999999.99);\n';
            }
            if (b.member291(Class5.member108)) {
                d += '_pt.y=clamp(_pt.y,-999999.99,_eq);\n';
            }
            d += 'gl_Position=_c*_d*_pt;\n';
            if (b.member291(Class5.member93)) {
                d += '_lb=mat4(_hx,_ib,_ie,vec4(_hu,0));\n';
            }
            if (b.member291(Class5.member101)) {
                d += '_pv=_ik/256.0;\n';
            }
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && b.member291(Class5.member118)) {
                d += 'vec3 _iz=_pw.xyz-_fm;\n';
                d += 'ComputeInOutScattering(_iz, length(_iz), _o, _rk, _rl);\n';
            }
            if (b.member291(Class5.member110)) {
                d += 'const float _pn=-1.0;\n';
                d += 'gl_Position.z=max(_pn, gl_Position.z);\n';
            }
            if (b.member291(Class5.member95)) {
                d += 'float _py=length(_d*_pt);\n';
                d += '_pw.w=_py;\n';
            }
            d += '}\n';
        }
        return d;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        if (!b.member291(Class5.member96) && b.member291(Class5.member109)) {
            c.push(Class7.member265);
        }
        if (b.member291(Class5.member96) || b.member291(Class5.member88) || b.member291(Class5.member89)) {
            c.push(Class7.member264);
        }
        if (!b.member291(Class5.member96)) {
            if (b.member291(Class5.member93)) {
                c.push(Class7.member270);
                c.push(Class7.member272);
                c.push(Class7.member274);
                c.push(Class7.member268);
            }
            if (b.member291(Class5.member101)) {
                c.push(Class7.member278);
            }
        }
        if (!b.member291(Class5.member96) && !b.member291(Class5.member117) && !b.member291(Class5.member110) && b.member291(Class5.member118)) {
            c.push(Class7.member229);
            c.push(Class7.member150);
        }
        c.push(Class7.member143);
        c.push(Class7.member144);
        c.push(Class7.member142);
        if (b.member291(Class5.member96) || b.member291(Class5.member88) || b.member291(Class5.member89)) {
            c.push(Class7.member145);
        }
        if (!b.member291(Class5.member96) && b.member291(Class5.member109)) {
            c.push(Class7.member230);
        }
        if (b.member291(Class5.member107)) {
            c.push(Class7.member213);
        }
        if (b.member291(Class5.member108)) {
            c.push(Class7.member214);
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