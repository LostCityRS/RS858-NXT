export var Class206 = function () {
    var a = {};
    a.member284 = function (b) {
        return '\nvec4 _ws(vec4 _wt, vec4 _wu, float _wo, float _wq) {\n\tfloat _wv=gl_FragCoord.z/gl_FragCoord.w;\n\tfloat _wx=(_wq-_wv)/(_wq-_wo);\n\t_wx=1.0-clamp(_wx,0.0,1.0);\n\treturn vec4(_wt.rgb*(1.0-_wx*_wu.a)+_wu.rgb*(_wx*_wu.a),_wt.a*(1.0-(_wx*(1.0-_wu.a))));\n}\n';
    };
    return a;
}();