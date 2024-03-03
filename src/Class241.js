export var Class241 = function () {
    var a = {};
    a.member284 = function (b) {
        var c = '';
        c += 'float _bbb(vec4 _bbc) {\n';
        c += '\tconst vec4 _wp=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);\n';
        c += '\treturn dot(_bbc,_wp);\n';
        c += '}\n';
        c += 'vec3 _bbd(float _mg) {\n';
        c += '    vec3 _bbf;\n';
        c += '    _bbf.r=floor(_mg/256.0/256.0);\n';
        c += '    _bbf.g=floor((_mg-_bbf.r*256.0*256.0)/256.0);\n';
        c += '    _bbf.b=floor(_mg-_bbf.r*256.0*256.0-_bbf.g*256.0);\n';
        c += '    return _bbf/256.0;\n';
        c += '}\n';
        return c;
    };
    return a;
}();