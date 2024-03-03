export var Class242 = function () {
    var a = {};
    a.member284 = function (b) {
        var c = '';
        c += 'vec4 _wf(float _wd) {\n';
        c += 'const vec4 _wg=vec4(256*256*256,256*256,256,1.0);\n';
        c += 'const vec4 _wh=vec4(0,1.0/256.0,1.0/256.0,1.0/256.0);\n';
        c += 'vec4 _ix=fract(_wd*_wg);\n';
        c += 'return _ix-(_ix.xxyz*_wh);\n';
        c += '}\n';
        return c;
    };
    return a;
}();