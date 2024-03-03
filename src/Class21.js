export var Class21 = function () {
    var a = {};
    a.member292 = function (c) {
        var b = '';
        b += 'uniform vec4 _cm;\n';
        b += 'uniform vec3 _co;\n';
        b += 'uniform vec3 _cp;\n';
        b += 'uniform vec3 _cq;\n';
        b += 'uniform vec4 _cr;\n';
        return b;
    };
    a.member293 = function (c) {
        var b = '';
        b += 'varying vec3 _bal;\n';
        b += 'varying vec3 _bam;\n';
        return b;
    };
    a.member294 = function (c) {
        var b = '\n';
        b += 'float _bao(float _bap) {\n';
        b += '\treturn 1.0 + (_bap * _bap);\n';
        b += '}\n';
        b += '\n';
        b += 'float _bar(float _bap, vec4 _bas) {\n';
        b += '\tfloat _bat = inversesqrt(_bas.z - _bas.w * _bap);\n';
        b += '\treturn _bas.y * (_bat * _bat * _bat);\n';
        b += '}\n';
        b += '\n';
        b += 'vec3 _baw(float _bav, vec3 _bay) {\n';
        b += '\treturn vec3(exp(-_bay * _bav).x);\n';
        b += '}\n';
        b += '\n';
        b += 'vec3 _baz(vec3 _bbb, vec3 _bbd, vec3 _bbe, vec3 _bbg, vec3 _bbh, vec3 _bbi, vec4 _bbj) {\n';
        b += '\tfloat _bap=dot(_bbd, _bbe);\n';
        b += '\tfloat _bbk=_bao(_bap);\n';
        b += '\tfloat _bbl=_bar(_bap, _bbj);\n';
        b += '\t//Not using _bbk will make that scattering look the same in all directions\n';
        b += '\tvec3 _bbm=_bbg * (1.0 - _bbb.xyz) * (/*_bbh * _bbk + _bbi **/ _bbl);\n';
        b += '\treturn _bbm;\n';
        b += '}\n';
        b += '\n';
        b += 'void ComputeInOutScattering(vec3 _iv, float _ys, vec3 _bbn, out vec3 _bbo, out vec3 _bbm) {\n';
        b += '\tvec3 _bbq=normalize(_iv);\n';
        b += '\t\n';
        b += '\t_bbo=_baw(_ys, _cq);\n';
        b += '\t_bbm=_baz(_bbo, _bbq, _bbn, _cm.xyz, _co, _cp, _cr);\n';
        b += '}\n\n';
        return b;
    };
    a.member295 = function (c) {
        var b = '\n';
        b += 'vec3 _bbs(vec3 _ir, vec3 _ix, vec3 _bbm) {\n';
        b += '\treturn vec3(_ir*_ix+_bbm);\n';
        b += '}\n\n';
        return b;
    };
    return a;
}();