import { Class238 } from 'Class238.js';
import { Class5 } from 'Class5.js';
export var Class239 = function () {
    var b = {};
    var a = 0.5;
    b.member2834 = function (c) {
        a = c;
    };
    b.member2835 = function () {
        return a;
    };
    b.member284 = function (d, c) {
        var e = '\n';
        e += '#extension GL_OES_standard_derivatives : enable\n';
        e += 'const float _tt=' + a.toFixed(3) + ';\n';
        e += 'float _tv(float _tx, float _tz, float _ua) {\n';
        e += '\treturn (clamp(_ua,_tx,_tz)-_tx)/(_tz-_tx);\n';
        e += '}\n';
        e += 'float _ub(vec2 _uc) {\n';
        e += '\tvec2 _ue = dFdx(_uc);\n';
        e += '\tvec2 _ug = dFdy(_uc);\n';
        e += '\tfloat _ui = max(dot(_ue,_ue),dot(_ug,_ug));\n';
        e += '\treturn 0.5 * log2(_ui);\n';
        e += '}\n';
        e += 'float _uk(vec2 _qy, float _jx) {\n';
        e += '\tfloat _ul=0.0;\n';
        e += '\t_ul+=1.0-_tv(0.0, _jx, _qy.x);\n';
        e += '\t_ul+=1.0-_tv(0.0, _jx, _qy.y);\n';
        e += '\t_ul+=_tv(1.0-_jx, 1.0, _qy.x);\n';
        e += '\t_ul+=_tv(1.0-_jx, 1.0, _qy.y);\n';
        e += '\treturn 1.0+clamp(_ul,0.0,1.0);\n';
        e += '}\n';
        if (c === Class238.member287) {
            e += 'vec3 _ut(float _um, float _un, float _uo, float _up, float _uq, float _ur, float _us) {\n';
            e += '\tfloat _uv = 0.5/_us;\n';
            e += '\tvec2 _uw = vec2(1,1);\n';
            e += '\tvec2 _ux = vec2(_uv,_uv);\n';
            e += '\tvec2 _qy = clamp(vec2(_um, _un), _ux, _uw - _ux);\n';
            e += '\tfloat _uy=_uk(_qy,_uv*2.0);\n';
            e += '\t_qy = vec2(_uo, _up) * vec2(_ur,_ur) + _qy * vec2(_us,_us);\n';
            e += '\tfloat _uz = _ub(_qy)*_uy;\n';
            e += '\treturn vec3(_qy.xy/_uq, _uz);\n';
            e += '}\n';
        } else if (c === Class238.member288) {
            e += 'vec3 _ut(float _um, float _un, float _uo, float _up, float _uq, float _ur, float _us) {\n';
            e += '\tvec2 _uw = vec2(1,1);\n';
            e += '\tvec2 _qy = mod(vec2(_um, _un), _uw);\n';
            e += '\tfloat _uy=_uk(_qy,2.0/_us);\n';
            e += '\t_qy = vec2(_uo, _up) * vec2(_ur,_ur) + _qy * vec2(_us,_us);\n';
            e += '\tfloat _uz = _ub(_qy)*_uy;\n';
            e += '\treturn vec3(_qy.xy/_uq, _uz);\n';
            e += '}\n';
        } else {
            e += 'varying vec4 _ox;\n';
            e += 'vec3 _ut(float _um, float _un, float _uo, float _up, float _uq, float _ur, float _us) {\n';
            e += '\tfloat _uv = 0.5/_us;\n';
            e += '\tvec2 _uw = vec2(1,1);\n';
            e += '\tvec2 _va = vec2(0.5,0.5);\n';
            e += '\tvec2 _vb = vec2(2.0,2.0);\n';
            e += '\tvec2 _ux = vec2(_uv,_uv);\n';
            e += '\tvec2 _qy = vec2(_um, _un);\n';
            e += '\tvec2 _vc = clamp(_qy, _ux, _uw - _ux);\n';
            e += '\tvec2 _vd = mod(_qy, _uw);\n';
            e += '\tvec2 _vf = _qy - _vb * floor(_va * _qy);\n';
            e += '\tvec2 _vh = _uw - abs(_uw - _vf);\n';
            e += '\t_qy = _ox.xy * _vc + _ox.zw * _vd + (_uw - _ox.xy - _ox.zw) * _vh;\n';
            e += '\tfloat _uy=_uk(_qy,_uv*4.0);\n';
            e += '\t_qy = vec2(_uo, _up) * vec2(_ur,_ur) + _qy * vec2(_us,_us);\n';
            e += '\tfloat _uz = _ub(_qy)*_uy;\n';
            e += '\treturn vec3(_qy.xy/_uq, _uz);\n';
            e += '}\n';
        }
        if (d.member291(Class5.member94)) {
            e += 'vec4 _vp(vec4 _pz, sampler2D _vr, sampler2D _vt, float _vi, vec3 _vm, vec3 _vo, float _vk) {\n';
        } else {
            e += 'vec4 _vp(vec4 _pz, sampler2D _vr, vec3 _vm, float _vk) {\n';
        }
        e += '\tfloat _vu=_pz.z;\n';
        e += '\tfloat _us=_pz.w;\n';
        e += '\tfloat _vv;\n';
        e += '\tfloat _ur;\n';
        e += '\tfloat _uq;\n';
        if (d.member291(Class5.member94)) {
            e += '\tif (_vi>0.5) {\n';
            e += '\t\t_vv=_vo.x;\n';
            e += '\t\t_ur=_vo.y;\n';
            e += '\t\t_uq=_vo.z;\n';
            e += '\t}\n';
            e += '\telse {\n';
            e += '\t\t_vv=_vm.x;\n';
            e += '\t\t_ur=_vm.y;\n';
            e += '\t\t_uq=_vm.z;\n';
            e += '\t}\n';
        } else {
            e += '\t_vv=_vm.x;\n';
            e += '\t_ur=_vm.y;\n';
            e += '\t_uq=_vm.z;\n';
        }
        e += '\tif (fract(_vu)>0.99) _vu=ceil(_vu);\n';
        e += '\telse _vu=floor(_vu);\n';
        e += '\tfloat _vx=mod(_vu,_vv);\n';
        e += '\tfloat _vz=floor(_vu/_vv);\n';
        e += '\tvec3 _wa=_ut(_pz.s,_pz.t,_vx,_vz,_uq,_ur,_us);\n';
        if (d.member291(Class5.member94)) {
            e += '\tif (_vi>0.5) {\n';
            e += '   \treturn texture2D(_vt,_wa.xy,-_wa.z*_vk);\n';
            e += '\t} else {\n';
            e += '   \treturn texture2D(_vr,_wa.xy,-_wa.z*_vk);\n';
            e += '\t}\n';
        } else {
            e += '\treturn texture2D(_vr,_wa.xy,-_wa.z*_vk);\n';
        }
        e += '}\n';
        if (d.member291(Class5.member94)) {
            e += 'vec4 _wc(vec4 _pz, sampler2D _vr, sampler2D _vt, float _vi, vec3 _vm, vec3 _vo) { \n';
            e += '\treturn _vp(_pz, _vr, _vt, _vi, _vm, _vo, _tt);\n';
            e += '}\n';
        } else {
            e += 'vec4 _wc(vec4 _pz, sampler2D _vr, vec3 _vm) {\n';
            e += '\treturn _vp(_pz, _vr, _vm, _tt);\n';
            e += '}\n';
        }
        return e;
    };
    return b;
}();