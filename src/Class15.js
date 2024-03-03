import { Class13 } from 'Class13.js';
import { Class5 } from 'Class5.js';
export var Class15 = function () {
    var b = {};
    var a = 0.5;
    b.member289 = function (c) {
        a = c;
    };
    b.member290 = function () {
        return a;
    };
    b.member284 = function (e, c) {
        var d = '\n';
        d += '#extension GL_OES_standard_derivatives : enable\n';
        d += 'const float _ms=' + a.toFixed(3) + ';\n';
        d += 'float _mu(float _mw, float _my, float _mz) {\n';
        d += '\treturn (clamp(_mz,_mw,_my)-_mw)/(_my-_mw);\n';
        d += '}\n';
        d += 'float _na(vec2 _nc) {\n';
        d += '\tvec2 _ne = dFdx(_nc);\n';
        d += '\tvec2 _nf = dFdy(_nc);\n';
        d += '\tfloat _ng = max(dot(_ne,_ne),dot(_nf,_nf));\n';
        d += '\treturn 0.5 * log2(_ng);\n';
        d += '}\n';
        d += 'float _ni(vec2 _nk, float _jz) {\n';
        d += '\tfloat _nl=0.0;\n';
        d += '\t_nl+=1.0-_mu(0.0, _jz, _nk.x);\n';
        d += '\t_nl+=1.0-_mu(0.0, _jz, _nk.y);\n';
        d += '\t_nl+=_mu(1.0-_jz, 1.0, _nk.x);\n';
        d += '\t_nl+=_mu(1.0-_jz, 1.0, _nk.y);\n';
        d += '\treturn 1.0+clamp(_nl,0.0,1.0);\n';
        d += '}\n';
        if (c === Class13.member287) {
            d += 'vec3 _ny(float _nm, float _no, float _nq, float _ns, float _nu, float _nw, float _nx) {\n';
            d += '\tfloat _oa = 0.5/_nx;\n';
            d += '\tvec2 _oc = vec2(1,1);\n';
            d += '\tvec2 _od = vec2(_oa,_oa);\n';
            d += '\tvec2 _nk = clamp(vec2(_nm, _no), _od, _oc - _od);\n';
            d += '\tfloat _of=_ni(_nk,_oa*2.0);\n';
            d += '\t_nk = vec2(_nq, _ns) * vec2(_nw,_nw) + _nk * vec2(_nx,_nx);\n';
            d += '\tfloat _og = _na(_nk)*_of;\n';
            d += '\treturn vec3(_nk.xy/_nu, _og);\n';
            d += '}\n';
        } else if (c === Class13.member288) {
            d += 'vec3 _ny(float _nm, float _no, float _nq, float _ns, float _nu, float _nw, float _nx) {\n';
            d += '\tvec2 _oc = vec2(1,1);\n';
            d += '\tvec2 _nk = mod(vec2(_nm, _no), _oc);\n';
            d += '\tfloat _of=_ni(_nk,2.0/_nx);\n';
            d += '\t_nk = vec2(_nq, _ns) * vec2(_nw,_nw) + _nk * vec2(_nx,_nx);\n';
            d += '\tfloat _og = _na(_nk)*_of;\n';
            d += '\treturn vec3(_nk.xy/_nu, _og);\n';
            d += '}\n';
        } else {
            d += 'varying vec4 _oi;\n';
            d += 'vec3 _ny(float _nm, float _no, float _nq, float _ns, float _nu, float _nw, float _nx) {\n';
            d += '\tfloat _oa = 0.5/_nx;\n';
            d += '\tvec2 _oc = vec2(1,1);\n';
            d += '\tvec2 _oj = vec2(0.5,0.5);\n';
            d += '\tvec2 _ol = vec2(2.0,2.0);\n';
            d += '\tvec2 _od = vec2(_oa,_oa);\n';
            d += '\tvec2 _nk = vec2(_nm, _no);\n';
            d += '\tvec2 _om = clamp(_nk, _od, _oc - _od);\n';
            d += '\tvec2 _on = mod(_nk, _oc);\n';
            d += '\tvec2 _oo = _nk - _ol * floor(_oj * _nk);\n';
            d += '\tvec2 _oq = _oc - abs(_oc - _oo);\n';
            d += '\t_nk = _oi.xy * _om + _oi.zw * _on + (_oc - _oi.xy - _oi.zw) * _oq;\n';
            d += '\tfloat _of=_ni(_nk,_oa*4.0);\n';
            d += '\t_nk = vec2(_nq, _ns) * vec2(_nw,_nw) + _nk * vec2(_nx,_nx);\n';
            d += '\tfloat _og = _na(_nk)*_of;\n';
            d += '\treturn vec3(_nk.xy/_nu, _og);\n';
            d += '}\n';
        }
        if (e.member291(Class5.member94)) {
            d += 'vec4 _ox(vec4 _oz, sampler2D _pa, sampler2D _pc, float _or, vec3 _ou, vec3 _ow, float _ot) {\n';
        } else {
            d += 'vec4 _ox(vec4 _oz, sampler2D _pa, vec3 _ou, float _ot) {\n';
        }
        d += '\tfloat _pe=_oz.z;\n';
        d += '\tfloat _nx=_oz.w;\n';
        d += '\tfloat _pg;\n';
        d += '\tfloat _nw;\n';
        d += '\tfloat _nu;\n';
        if (e.member291(Class5.member94)) {
            d += '\tif (_or>0.5) {\n';
            d += '\t\t_pg=_ow.x;\n';
            d += '\t\t_nw=_ow.y;\n';
            d += '\t\t_nu=_ow.z;\n';
            d += '\t}\n';
            d += '\telse {\n';
            d += '\t\t_pg=_ou.x;\n';
            d += '\t\t_nw=_ou.y;\n';
            d += '\t\t_nu=_ou.z;\n';
            d += '\t}\n';
        } else {
            d += '\t_pg=_ou.x;\n';
            d += '\t_nw=_ou.y;\n';
            d += '\t_nu=_ou.z;\n';
        }
        d += '\tif (fract(_pe)>0.99) _pe=ceil(_pe);\n';
        d += '\telse _pe=floor(_pe);\n';
        d += '\tfloat _ph=mod(_pe,_pg);\n';
        d += '\tfloat _pj=floor(_pe/_pg);\n';
        d += '\tvec3 _pl=_ny(_oz.s,_oz.t,_ph,_pj,_nu,_nw,_nx);\n';
        if (e.member291(Class5.member94)) {
            d += '\tif (_or>0.5) {\n';
            d += '   \treturn texture2D(_pc,_pl.xy,-_pl.z*_ot);\n';
            d += '\t} else {\n';
            d += '   \treturn texture2D(_pa,_pl.xy,-_pl.z*_ot);\n';
            d += '\t}\n';
        } else {
            d += '\treturn texture2D(_pa,_pl.xy,-_pl.z*_ot);\n';
        }
        d += '}\n';
        if (e.member291(Class5.member94)) {
            d += 'vec4 _pn(vec4 _oz, sampler2D _pa, sampler2D _pc, float _or, vec3 _ou, vec3 _ow) { \n';
            d += '\treturn _ox(_oz, _pa, _pc, _or, _ou, _ow, _ms);\n';
            d += '}\n';
        } else {
            d += 'vec4 _pn(vec4 _oz, sampler2D _pa, vec3 _ou) {\n';
            d += '\treturn _ox(_oz, _pa, _ou, _ms);\n';
            d += '}\n';
        }
        return d;
    };
    return b;
}();