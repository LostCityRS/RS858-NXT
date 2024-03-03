export var Class240 = function () {
    var a = {};
    a.member284 = function (b) {
        return '\nvec4 _zs(vec4 _zu, vec4 _zw, float _zo, float _zq) {\n\tfloat _zy=gl_FragCoord.z/gl_FragCoord.w;\n\tfloat _zz=(_zq-_zy)/(_zq-_zo);\n\t_zz=1.0-clamp(_zz,0.0,1.0);\n\treturn vec4(_zu.rgb*(1.0-_zz*_zw.a)+_zw.rgb*(_zz*_zw.a),_zu.a*(1.0-(_zz*(1.0-_zw.a))));\n}\n';
    };
    return a;
}();