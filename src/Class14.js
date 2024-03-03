export var Class14 = function () {
    var a = {};
    a.member284 = function (b) {
        return '\nvec4 _xk(vec4 _xm, vec4 _xo, float _xh, float _xi) {\n\tfloat _xp=gl_FragCoord.z/gl_FragCoord.w;\n\tfloat _xr=(_xi-_xp)/(_xi-_xh);\n\t_xr=1.0-clamp(_xr,0.0,1.0);\n\treturn vec4(_xm.rgb*(1.0-_xr*_xo.a)+_xo.rgb*(_xr*_xo.a),_xm.a*(1.0-(_xr*(1.0-_xo.a))));\n}\n';
    };
    return a;
}();