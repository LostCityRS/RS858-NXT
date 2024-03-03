import { Class7 } from 'Class7.js';
export var Class24 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform sampler2D _dq;\nuniform sampler2D _dr;\nuniform sampler2D _ds;\nuniform vec4 _nr;\n\nvec3 _nt(sampler2D _nv, vec3 _nu) {\n\tvec2 _jx=vec2(0.5/256.0, 0.5/16.0);\n\tfloat _nx=15.0/16.0;\n\tfloat _ny=floor(_nu.b*14.9999)/16.0;\n\tfloat _nz=(_nu.b*15.0)-(_ny*16.0);\n\tfloat _oa=_ny+(_nu.r*_nx/16.0);\n\tfloat _ob=_nu.g*_nx;\n\tvec3 _oc=texture2D(_nv,_jx+vec2(_oa,_ob) ).rgb;\n\tvec3 _od=texture2D(_nv,_jx+vec2(_oa+(1.0/16.0),_ob) ).rgb;\n\treturn mix(_oc,_od,_nz);\n}\n\nvoid main(void) {\n\tvec3 _of=clamp(texture2D(_dc,_jf).rgb,0.0,1.0);\n\tvec3 _og=_of*_dp.x;\n\t_og+=_nt(_dq,_of)*_dp.y;\n\t_og+=_nt(_dr,_of)*_dp.z;\n\t_og+=_nt(_ds,_of)*_dp.w;\n\tgl_FragColor=vec4(_og,1.0);\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member198);
        c.push(Class7.member199);
        c.push(Class7.member200);
        c.push(Class7.member197);
        return c;
    };
    return a;
}();