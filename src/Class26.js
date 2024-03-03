export var Class26 = function () {
    var a = {};
    a.member284 = function (c) {
        var b = '';
        b += 'float _ze(vec4 _zf) {\n';
        b += '\tconst vec4 _ri=vec4(1.0/(256.0*256.0*256.0),1.0/(256.0*256.0),1.0/256.0,1.0);\n';
        b += '\treturn dot(_zf,_ri);\n';
        b += '}\n';
        b += 'vec3 _zg(float _qj) {\n';
        b += '    vec3 _zi;\n';
        b += '    _zi.r=floor(_qj/256.0/256.0);\n';
        b += '    _zi.g=floor((_qj-_zi.r*256.0*256.0)/256.0);\n';
        b += '    _zi.b=floor(_qj-_zi.r*256.0*256.0-_zi.g*256.0);\n';
        b += '    return _zi/256.0;\n';
        b += '}\n';
        return b;
    };
    return a;
}();