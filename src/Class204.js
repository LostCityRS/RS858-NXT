export var Class204 = function () {
    var a = {};
    a.member284 = function (c) {
        var b = '';
        b += 'float _yn(vec4 _yp) {\n';
        b += '\tconst vec4 _qv=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);\n';
        b += '\treturn dot(_yp,_qv);\n';
        b += '}\n';
        b += 'vec3 _yq(float _px) {\n';
        b += '    vec3 _yr;\n';
        b += '    _yr.r=floor(_px/256.0/256.0);\n';
        b += '    _yr.g=floor((_px-_yr.r*256.0*256.0)/256.0);\n';
        b += '    _yr.b=floor(_px-_yr.r*256.0*256.0-_yr.g*256.0);\n';
        b += '    return _yr/256.0;\n';
        b += '}\n';
        return b;
    };
    return a;
}();