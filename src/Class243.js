export var Class243 = function () {
    var a = {};
    a.member2836 = function (b) {
        var c = '';
        c += 'uniform vec4 _cp;\n';
        c += 'uniform vec3 _cr;\n';
        c += 'uniform vec3 _ct;\n';
        c += 'uniform vec3 _cv;\n';
        c += 'uniform vec4 _cw;\n';
        return c;
    };
    a.member2837 = function (b) {
        var c = '';
        c += 'varying vec3 _rk;\n';
        c += 'varying vec3 _rl;\n';
        return c;
    };
    a.member2838 = function (b) {
        var c = '\n';
        c += 'float _rm(float _rn) {\n';
        c += '\treturn 1.0 + (_rn * _rn);\n';
        c += '}\n';
        c += '\n';
        c += 'float _ro(float _rn, vec4 _rq) {\n';
        c += '\tfloat _rr = inversesqrt(_rq.z - _rq.w * _rn);\n';
        c += '\treturn _rq.y * (_rr * _rr * _rr);\n';
        c += '}\n';
        c += '\n';
        c += 'vec3 _rv(float _rt, vec3 _rw) {\n';
        c += '\treturn vec3(exp(-_rw * _rt).x);\n';
        c += '}\n';
        c += '\n';
        c += 'vec3 _ry(vec3 _rz, vec3 _sa, vec3 _sc, vec3 _sd, vec3 _sf, vec3 _sh, vec4 _si) {\n';
        c += '\tfloat _rn=dot(_sa, _sc);\n';
        c += '\tfloat _sj=_rm(_rn);\n';
        c += '\tfloat _sk=_ro(_rn, _si);\n';
        c += '\t//Not using _sj will make that scattering look the same in all directions\n';
        c += '\tvec3 _sm=_sd * (1.0 - _rz.xyz) * (/*_sf * _sj + _sh **/ _sk);\n';
        c += '\treturn _sm;\n';
        c += '}\n';
        c += '\n';
        c += 'void ComputeInOutScattering(vec3 _iz, float _py, vec3 _sn, out vec3 _so, out vec3 _sm) {\n';
        c += '\tvec3 _sq=normalize(_iz);\n';
        c += '\t\n';
        c += '\t_so=_rv(_py, _cv);\n';
        c += '\t_sm=_ry(_so, _sq, _sn, _cp.xyz, _cr, _ct, _cw);\n';
        c += '}\n\n';
        return c;
    };
    a.member2839 = function (b) {
        var c = '\n';
        c += 'vec3 _ss(vec3 _ix, vec3 _ja, vec3 _sm) {\n';
        c += '\treturn vec3(_ix*_ja+_sm);\n';
        c += '}\n\n';
        return c;
    };
    return a;
}();