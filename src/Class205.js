import { Class5 } from 'Class5.js';
export var Class205 = function () {
    var c = {};
    var b = 2;
    var a = b / 2 - 0.5;
    var d = 1 / (b * b);
    c.member2397 = function (g) {
        var e = '\nfloat _jh(sampler2D _jk, vec2 _ji) {\n';
        if (g.member291(Class5.member111)) {
            e += '\treturn texture2D(_jk,_ji).r;\n';
        } else {
            e += '\treturn _yn(texture2D(_jk,_ji));\n';
        }
        e += '}\n';
        return e;
    };
    c.member284 = function (i) {
        var h = '\n';
        h += 'precision mediump float;\nfloat _jl(vec2 _jm){\n    return fract(sin(dot(_jm.xy,vec2(12.9898,78.233)))*43758.5453);\n}\n' + c.member2397(i) + 'float _jo(sampler2D _jk, vec4 _ju, vec2 _js, float _jq) {\n\tvec4 _jv = vec4(\n\t\t_ju.x + (_js.x * _jq * _ju.w),\n\t\t_ju.y + (_js.y * _jq * _ju.w),\n\t\t_ju.z, _ju.w);\n';
        if (i.member291(Class5.member111)) {
            h += '\treturn texture2DProj(_jk, _jv).r;\n';
        } else {
            h += '\treturn _yn(texture2DProj(_jk, _jv));\n';
        }
        h += '}\nfloat _jw(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _kd=0.0, _ki = 0.0;\n\t\t_kd=_jh(_jk,_ju.xy);\n';
        h += '\t\tfloat _ke=30.0;\n\t\t_ki = clamp(exp(-_ke * (_ju.z - _kd)), 0.0, 1.0);\n\t\t_kb=max(_ki, 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kf(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _kd=0.0, _ki = 0.0;\n\t\t_kd=_jh(_jk,_ju.xy);\n\t\t_ki+=step(_kd,_ju.z)*_jx;\n\t\t_kb=max(1.0-_ki, 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kg(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) {\n\t\t_kb=1.0;\n\t}\n\telse {\n\t\tfloat _ki=0.0, _kd=0.0;\n\t\tvec2 _ji = vec2(_ju.xy);\n\t\t_kd=_jh(_jk,_ji.xy);\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(-1.0, -1.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(0.0, -1.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kd=_jh(_jk,_ji.xy+(vec2(-1.0, 0.0)*_jz.y));\n\t\t_ki+=step(_kd,_ju.z);\n\t\t_kb = max(1.0-((_ki*_jx)*0.25), 0.0);\n\t}\n\treturn _kb;\n}\nfloat _kj(vec4 _ka, sampler2D _jk, float _jx, vec2 _jz) {\n\tfloat _kb;\n\tvec3 _ju=_ka.xyz/_ka.w;\n\t_ju.z-=_ju.z*_jz.x;\n\tif (_ju.x<0.0 || _ju.x>1.0 || _ju.y<0.0 || _ju.y>1.0 || _ju.z<0.0 || _ju.z>0.45) _kb=1.0;\n\telse {\n\t\tfloat _ki=0.0, _kd=0.0;\n\t\tvec2 _ji;\n';
        for (var g = -a; g <= a; g += 1) {
            for (var e = -a; e <= a; e += 1) {
                h += '\t\t_ji=_ju.xy+_jz.y*( vec2(cos(_jl(_ka.xy))+(' + g + '),sin(_jl(_ka.yx))+(' + e + ')) );\n\t\t_kd=_jh(_jk,_ji);\n\t\t_ki+=step(_kd,_ju.z);\n';
            }
        }
        h += '\t\t_kb=max(1.0-((_ki*_jx)*' + d + '),0.0);\n\t}\n\treturn _kb;\n}\nfloat _kl(vec4 _ka, sampler2D _jk, float _jx, vec4 _kp, float _kn) {\n';
        if (i.member291(Class5.member114)) {
            h += '\tfloat _kr=_kf(_ka,_jk,_jx,_kp.zw);\n';
        } else if (i.member291(Class5.member116)) {
            h += '\tfloat _kr=_kj(_ka,_jk,_jx,_kp.zw);\n';
        } else {
            h += '\tfloat _kr=_kg(_ka,_jk,_jx,_kp.zw);\n';
        }
        h += '\tfloat _ks=clamp((_kn-_kp.x)*_kp.y,0.0,1.0);\n\t_kr=mix(_kr,1.0,_ks);\n\treturn _kr;\n}\n';
        return h;
    };
    return c;
}();