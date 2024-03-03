import { Class7 } from 'Class7.js';
export var Class48 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform float _dm;\nuniform vec4 _dn;\n\nvec3 _me(vec3 _mg, float _mc, float _md) {\n\treturn clamp((_mg - _mc) / (_md - _mc),0.0,1.0);\n}\nvec3 _ml(vec3 _mg, float _mi, float _mj) {\n\treturn mix(vec3(_mi,_mi,_mi), vec3(_mj,_mj,_mj), _mg);\n}\nvec3 _mn(vec3 _mg, float _mm, float _mc, float _md, float _mi, float _mj) {\n\tvec3 _mo = _me(_mg, _mc, _md);\n\tvec3 _mp = clamp(pow(_mo, vec3(_mm,_mm,_mm)),0.0,1.0);\n\treturn _ml(_mp, _mi, _mj);\n}\n\nvoid main(void) {\n\tvec3 _mg=clamp(texture2D(_dc,_jf).rgb,0.0,1.0);\n\t_mg=_mn(_mg,_dm,_dn.x,_dn.y,_dn.z,_dn.w);\n\tgl_FragColor=vec4(_mg,1.0);\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member195);
        c.push(Class7.member196);
        return c;
    };
    return a;
}();