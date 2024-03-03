import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class241 } from 'Class241.js';
import { Class7 } from 'Class7.js';
export var Class27 = function () {
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
        c += 'attribute vec4 _hl;\n';
        c += 'attribute vec4 _if;\n';
        c += 'attribute vec4 _ih;\n';
        c += 'attribute float _ij;\n';
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            c += 'uniform vec3 _fm;\n';
        }
        c += 'uniform mat4 _e;\n';
        c += 'uniform mat4 _d;\n';
        c += 'uniform mat3 _f;\n';
        c += 'uniform mat3 _i;\n';
        c += 'uniform mat4 _c;\n';
        c += 'uniform mat3 _k;\n';
        c += 'uniform float _hb;\n';
        c += 'uniform float _fh;\n';
        c += 'uniform vec4 _fo;\n';
        if (b.member291(Class5.member95)) {
            c += 'uniform mat4 _bo;\n';
            c += 'const mat4 _ow=mat4(0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.0,0.0,0.0,0.5,0.0,0.5,0.5,0.5,1.0);\n';
        }
        c += 'uniform vec2 _fp;\n';
        c += 'uniform float _fq;\n';
        c += 'uniform float _gh;\n';
        c += 'uniform int _fr;\n';
        c += 'uniform float _ft;\n';
        c += 'uniform float _fy;\n';
        c += 'uniform float _ga;\n';
        c += 'uniform float _gj;\n';
        c += 'uniform float _gy;\n';
        c += 'uniform vec4 _fv;\n';
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            if (b.member291(Class5.member118)) {
                c += 'uniform vec3 _o;\n';
                c += Class243.member2836(b);
            }
        }
        c += 'varying vec4 _wv;\n';
        c += 'varying vec4 _la;\n';
        c += 'varying vec3 _wx;\n';
        if (b.member291(Class5.member95)) {
            c += 'varying vec4 _le;\n';
        }
        c += 'varying vec4 _kz;\n';
        c += 'varying vec4 _wz;\n';
        if (b.member291(Class5.member118)) {
            c += Class243.member2837(b);
        }
        c += 'vec3 _bac(vec4 _pd, float _baa) {\n';
        c += 'float _bad=(_pd.x-_fp.x*_fh)*(_fp.x/_baa);\n';
        c += 'float _baf=(_pd.z-_fp.y*_fh)*(_fp.y/_baa);\n';
        c += 'float _bag=_fq*min((_pd.w/_gj),1.0);\n';
        c += 'float _bah=_pd.y+sin((_bad+_baf)/_gh)*_bag;\n';
        c += 'return vec3(_pd.x,_bah,_pd.z);\n';
        c += '}\n';
        if (b.member291(Class5.member118)) {
            c += Class243.member2838(b);
        }
        c += Class241.member284(b);
        c += 'void main(void) {\n';
        c += 'vec4 _baj=_hl*vec4(_ft,1.0,_ft,1.0);\n';
        c += '_baj.xyz=_k*_baj.xyz+vec3(0.0,_hb,0.0);\n';
        c += 'float _baa=length(_fp);\n';
        c += 'vec3 _bak=_bac(_baj,_baa);\n';
        c += '_kz=_e*vec4(_bak,1.0);\n';
        c += 'gl_Position=_c*_d*_kz;\n';
        if (b.member291(Class5.member95)) {
            c += '_le=_ow*_bo*_kz;\n';
        }
        c += 'vec3 _bal=_bac(vec4(_baj.x-_ft,_ih.z,_baj.z,_ih.w-_gy),_baa);\n';
        c += 'vec3 _ban=_bac(vec4(_baj.x+_ft,_if.z,_baj.z,_if.w-_gy),_baa);\n';
        c += 'vec3 _bap=_bac(vec4(_baj.x,_ih.x,_baj.z-_ft,_ih.y-_gy),_baa);\n';
        c += 'vec3 _baq=_bac(vec4(_baj.x,_if.x,_baj.z+_ft,_if.y-_gy),_baa);\n';
        c += 'float _bas=_bal.y-_ban.y;\n';
        c += 'float _bau=_bap.y-_baq.y;\n';
        c += 'vec3 _pl=normalize(vec3(_bas,_ft*2.0,_bau));\n';
        c += '_wx=_pl;\n';
        c += '_la=vec4(_bbd(float(_fr)),1.0);\n';
        c += 'float _baw=_baj.w+(_bak.y-_baj.y)-_gy;\n';
        c += '_la.a-=(1.0-min(_baw/_ga,1.0));\n';
        c += 'float _bay=smoothstep(0.0,_fy,_ij);\n';
        c += '_la.a*=_bay;\n';
        c += '_la+=_fo;\n';
        c += 'vec2 _qy=vec2(_baj.x/(_fv.x*_fv.w),_baj.z/(_fv.x*_fv.w));\n';
        c += 'vec3 _bba=_i*vec3(_qy.x+(_fh/_fv.x)*-_fp.x,0.0,_qy.y+(_fh/_fv.x)*-_fp.y);\n';
        c += '_wz=vec4(_qy.s,_qy.t,_bba.x,_bba.z);\n';
        c += '_kz.w=_baw;\n';
        c += '_wv.w=_fo.a+_bay;\n';
        c += '_wv.xyz=-_d[3].xyz*mat3(_d);\n';
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            if (b.member291(Class5.member118)) {
                c += 'vec3 _iz=_kz.xyz-_wv.xyz;\n';
                c += 'ComputeInOutScattering(_iz, length(_iz), _o, _rk, _rl);\n';
            }
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member262);
        c.push(Class7.member275);
        c.push(Class7.member276);
        c.push(Class7.member277);
        c.push(Class7.member229);
        c.push(Class7.member143);
        c.push(Class7.member144);
        c.push(Class7.member142);
        c.push(Class7.member145);
        c.push(Class7.member147);
        c.push(Class7.member148);
        c.push(Class7.member255);
        c.push(Class7.member231);
        c.push(Class7.member232);
        c.push(Class7.member243);
        c.push(Class7.member233);
        c.push(Class7.member234);
        c.push(Class7.member235);
        c.push(Class7.member238);
        c.push(Class7.member239);
        c.push(Class7.member244);
        c.push(Class7.member253);
        c.push(Class7.member230);
        if (b.member291(Class5.member95)) {
            c.push(Class7.member165);
        }
        if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
            if (b.member291(Class5.member118)) {
                c.push(Class7.member150);
                c.push(Class7.member182);
                c.push(Class7.member183);
                c.push(Class7.member184);
                c.push(Class7.member185);
                c.push(Class7.member186);
            }
        }
        c.push(Class7.member226);
        return c;
    };
    return a;
}();