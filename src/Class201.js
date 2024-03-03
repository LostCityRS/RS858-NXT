export var Class201 = function () {
    var a = {};
    a.member2390 = function (c) {
        var b = '';
        b += 'uniform vec4 _cj;\n';
        b += 'uniform vec3 _ck;\n';
        b += 'uniform vec3 _cm;\n';
        b += 'uniform vec3 _cn;\n';
        b += 'uniform vec4 _co;\n';
        return b;
    };
    a.member2391 = function (c) {
        var b = '';
        b += 'varying vec3 _zt;\n';
        b += 'varying vec3 _zv;\n';
        return b;
    };
    a.member2392 = function (c) {
        var b = '\n';
        b += 'float _zx(float _zz) {\n';
        b += '\treturn 1.0 + (_zz * _zz);\n';
        b += '}\n';
        b += '\n';
        b += 'float _bab(float _zz, vec4 _bac) {\n';
        b += '\tfloat _bad = inversesqrt(_bac.z - _bac.w * _zz);\n';
        b += '\treturn _bac.y * (_bad * _bad * _bad);\n';
        b += '}\n';
        b += '\n';
        b += 'vec3 _bah(float _baf, vec3 _bai) {\n';
        b += '\treturn vec3(exp(-_bai * _baf).x);\n';
        b += '}\n';
        b += '\n';
        b += 'vec3 _bak(vec3 _bal, vec3 _ban, vec3 _bao, vec3 _bap, vec3 _baq, vec3 _bas, vec4 _bau) {\n';
        b += '\tfloat _zz=dot(_ban, _bao);\n';
        b += '\tfloat _bav=_zx(_zz);\n';
        b += '\tfloat _bax=_bab(_zz, _bau);\n';
        b += '\t//Not using _bav will make that scattering look the same in all directions\n';
        b += '\tvec3 _baz=_bap * (1.0 - _bal.xyz) * (/*_baq * _bav + _bas **/ _bax);\n';
        b += '\treturn _baz;\n';
        b += '}\n';
        b += '\n';
        b += 'void ComputeInOutScattering(vec3 _io, float _yb, vec3 _bba, out vec3 _bbb, out vec3 _baz) {\n';
        b += '\tvec3 _bbd=normalize(_io);\n';
        b += '\t\n';
        b += '\t_bbb=_bah(_yb, _cn);\n';
        b += '\t_baz=_bak(_bbb, _bbd, _bba, _cj.xyz, _ck, _cm, _co);\n';
        b += '}\n\n';
        return b;
    };
    a.member2393 = function (c) {
        var b = '\n';
        b += 'vec3 _bbf(vec3 _ik, vec3 _iq, vec3 _baz) {\n';
        b += '\treturn vec3(_ik*_iq+_baz);\n';
        b += '}\n\n';
        return b;
    };
    return a;
}();