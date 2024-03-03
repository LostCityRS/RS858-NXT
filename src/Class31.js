export var Class31 = function () {
    var a = {};
    a.member284 = function (c) {
        var b = '';
        b += 'vec4 _qx(float _qv) {\n';
        b += 'const vec4 _qz=vec4(256*256*256,256*256,256,1.0);\n';
        b += 'const vec4 _rb=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n';
        b += 'vec4 _ir=fract(_qv*_qz);\n';
        b += 'return _ir-(_ir.xxyz*_rb);\n';
        b += '}\n';
        return b;
    };
    return a;
}();