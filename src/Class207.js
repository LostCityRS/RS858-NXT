export var Class207 = function () {
    var a = {};
    a.member284 = function (c) {
        var b = '';
        b += 'vec4 _ql(float _qj) {\n';
        b += 'const vec4 _qn=vec4(256*256*256,256*256,256,1.0);\n';
        b += 'const vec4 _qo=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n';
        b += 'vec4 _ik=fract(_qj*_qn);\n';
        b += 'return _ik-(_ik.xxyz*_qo);\n';
        b += '}\n';
        return b;
    };
    return a;
}();