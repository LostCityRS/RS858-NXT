import { Class202 } from 'Class202.js';
import { Class5 } from 'Class5.js';
export var Class203 = function () {
    var b = {};
    var a = 0.5;
    b.member2395 = function (c) {
        a = c;
    };
    b.member2396 = function () {
        return a;
    };
    b.member284 = function (e, c) {
        var d = '\n';
        d += '#extension GL_OES_standard_derivatives : enable\n';
        d += 'const float _mh=' + a.toFixed(3) + ';\n';
        d += 'float _mj(float _ml, float _mm, float _mo) {\n';
        d += '\treturn (clamp(_mo,_ml,_mm)-_ml)/(_mm-_ml);\n';
        d += '}\n';
        d += 'float _mp(vec2 _mr) {\n';
        d += '\tvec2 _ms = dFdx(_mr);\n';
        d += '\tvec2 _mt = dFdy(_mr);\n';
        d += '\tfloat _mv = max(dot(_ms,_ms),dot(_mt,_mt));\n';
        d += '\treturn 0.5 * log2(_mv);\n';
        d += '}\n';
        d += 'float _mx(vec2 _mz, float _js) {\n';
        d += '\tfloat _nb=0.0;\n';
        d += '\t_nb+=1.0-_mj(0.0, _js, _mz.x);\n';
        d += '\t_nb+=1.0-_mj(0.0, _js, _mz.y);\n';
        d += '\t_nb+=_mj(1.0-_js, 1.0, _mz.x);\n';
        d += '\t_nb+=_mj(1.0-_js, 1.0, _mz.y);\n';
        d += '\treturn 1.0+clamp(_nb,0.0,1.0);\n';
        d += '}\n';
        if (c === Class202.member287) {
            d += 'vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n';
            d += '\tfloat _nn = 0.5/_nl;\n';
            d += '\tvec2 _no = vec2(1,1);\n';
            d += '\tvec2 _nq = vec2(_nn,_nn);\n';
            d += '\tvec2 _mz = clamp(vec2(_nd, _nf), _nq, _no - _nq);\n';
            d += '\tfloat _ns=_mx(_mz,_nn*2.0);\n';
            d += '\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n';
            d += '\tfloat _nt = _mp(_mz)*_ns;\n';
            d += '\treturn vec3(_mz.xy/_nj, _nt);\n';
            d += '}\n';
        } else if (c === Class202.member288) {
            d += 'vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n';
            d += '\tvec2 _no = vec2(1,1);\n';
            d += '\tvec2 _mz = mod(vec2(_nd, _nf), _no);\n';
            d += '\tfloat _ns=_mx(_mz,2.0/_nl);\n';
            d += '\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n';
            d += '\tfloat _nt = _mp(_mz)*_ns;\n';
            d += '\treturn vec3(_mz.xy/_nj, _nt);\n';
            d += '}\n';
        } else {
            d += 'varying vec4 _nu;\n';
            d += 'vec3 _nm(float _nd, float _nf, float _nh, float _ni, float _nj, float _nk, float _nl) {\n';
            d += '\tfloat _nn = 0.5/_nl;\n';
            d += '\tvec2 _no = vec2(1,1);\n';
            d += '\tvec2 _nv = vec2(0.5,0.5);\n';
            d += '\tvec2 _nx = vec2(2.0,2.0);\n';
            d += '\tvec2 _nq = vec2(_nn,_nn);\n';
            d += '\tvec2 _mz = vec2(_nd, _nf);\n';
            d += '\tvec2 _ny = clamp(_mz, _nq, _no - _nq);\n';
            d += '\tvec2 _oa = mod(_mz, _no);\n';
            d += '\tvec2 _oc = _mz - _nx * floor(_nv * _mz);\n';
            d += '\tvec2 _oe = _no - abs(_no - _oc);\n';
            d += '\t_mz = _nu.xy * _ny + _nu.zw * _oa + (_no - _nu.xy - _nu.zw) * _oe;\n';
            d += '\tfloat _ns=_mx(_mz,_nn*4.0);\n';
            d += '\t_mz = vec2(_nh, _ni) * vec2(_nk,_nk) + _mz * vec2(_nl,_nl);\n';
            d += '\tfloat _nt = _mp(_mz)*_ns;\n';
            d += '\treturn vec3(_mz.xy/_nj, _nt);\n';
            d += '}\n';
        }
        if (e.member291(Class5.member94)) {
            d += 'vec4 _om(vec4 _on, sampler2D _oo, sampler2D _op, float _og, vec3 _oj, vec3 _ol, float _oh) {\n';
        } else {
            d += 'vec4 _om(vec4 _on, sampler2D _oo, vec3 _oj, float _oh) {\n';
        }
        d += '\tfloat _oq=_on.z;\n';
        d += '\tfloat _nl=_on.w;\n';
        d += '\tfloat _or;\n';
        d += '\tfloat _nk;\n';
        d += '\tfloat _nj;\n';
        if (e.member291(Class5.member94)) {
            d += '\tif (_og>0.5) {\n';
            d += '\t\t_or=_ol.x;\n';
            d += '\t\t_nk=_ol.y;\n';
            d += '\t\t_nj=_ol.z;\n';
            d += '\t}\n';
            d += '\telse {\n';
            d += '\t\t_or=_oj.x;\n';
            d += '\t\t_nk=_oj.y;\n';
            d += '\t\t_nj=_oj.z;\n';
            d += '\t}\n';
        } else {
            d += '\t_or=_oj.x;\n';
            d += '\t_nk=_oj.y;\n';
            d += '\t_nj=_oj.z;\n';
        }
        d += '\tif (fract(_oq)>0.99) _oq=ceil(_oq);\n';
        d += '\telse _oq=floor(_oq);\n';
        d += '\tfloat _ot=mod(_oq,_or);\n';
        d += '\tfloat _ou=floor(_oq/_or);\n';
        d += '\tvec3 _ow=_nm(_on.s,_on.t,_ot,_ou,_nj,_nk,_nl);\n';
        if (e.member291(Class5.member94)) {
            d += '\tif (_og>0.5) {\n';
            d += '   \treturn texture2D(_op,_ow.xy,-_ow.z*_oh);\n';
            d += '\t} else {\n';
            d += '   \treturn texture2D(_oo,_ow.xy,-_ow.z*_oh);\n';
            d += '\t}\n';
        } else {
            d += '\treturn texture2D(_oo,_ow.xy,-_ow.z*_oh);\n';
        }
        d += '}\n';
        if (e.member291(Class5.member94)) {
            d += 'vec4 _oy(vec4 _on, sampler2D _oo, sampler2D _op, float _og, vec3 _oj, vec3 _ol) { \n';
            d += '\treturn _om(_on, _oo, _op, _og, _oj, _ol, _mh);\n';
            d += '}\n';
        } else {
            d += 'vec4 _oy(vec4 _on, sampler2D _oo, vec3 _oj) {\n';
            d += '\treturn _om(_on, _oo, _oj, _mh);\n';
            d += '}\n';
        }
        return d;
    };
    return b;
}();