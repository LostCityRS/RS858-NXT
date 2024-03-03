import { Class5 } from 'Class5.js';
export var Class30 = function () {
    var c = {};
    var b = 2;
    var a = b / 2 - 0.5;
    var d = 1 / (b * b);
    c.member309 = function (g) {
        var e = '\nfloat _jp(sampler2D _js, vec2 _jr) {\n';
        if (g.member291(Class5.member111)) {
            e += '\treturn texture2D(_js,_jr).r;\n';
        } else {
            e += '\treturn _ze(texture2D(_js,_jr));\n';
        }
        e += '}\n';
        return e;
    };
    c.member284 = function (i) {
        var h = '\n';
        h += 'precision mediump float;\nfloat _jt(vec2 _ju){\n    return fract(sin(dot(_ju.xy,vec2(12.9898,78.233)))*43758.5453);\n}\n' + c.member309(i) + 'float _jv(sampler2D _js, vec4 _kb, vec2 _jz, float _jx) {\n\tvec4 _kc = vec4(\n\t\t_kb.x + (_jz.x * _jx * _kb.w),\n\t\t_kb.y + (_jz.y * _jx * _kb.w),\n\t\t_kb.z, _kb.w);\n';
        if (i.member291(Class5.member111)) {
            h += '\treturn texture2DProj(_js, _kc).r;\n';
        } else {
            h += '\treturn _ze(texture2DProj(_js, _kc));\n';
        }
        h += '}\nfloat _ke(vec4 _ki, sampler2D _js, float _kf, vec2 _kg) {\n\tfloat _kj;\n\tvec3 _kb=_ki.xyz/_ki.w;\n\t_kb.z-=_kb.z*_kg.x;\n\tif (_kb.x<0.0 || _kb.x>1.0 || _kb.y<0.0 || _kb.y>1.0 || _kb.z<0.0 || _kb.z>0.45) {\n\t\t_kj=1.0;\n\t}\n\telse {\n\t\tfloat _kl=0.0, _kq = 0.0;\n\t\t_kl=_jp(_js,_kb.xy);\n';
        h += '\t\tfloat _km=30.0;\n\t\t_kq = clamp(exp(-_km * (_kb.z - _kl)), 0.0, 1.0);\n\t\t_kj=max(_kq, 0.0);\n\t}\n\treturn _kj;\n}\nfloat _ko(vec4 _ki, sampler2D _js, float _kf, vec2 _kg) {\n\tfloat _kj;\n\tvec3 _kb=_ki.xyz/_ki.w;\n\t_kb.z-=_kb.z*_kg.x;\n\tif (_kb.x<0.0 || _kb.x>1.0 || _kb.y<0.0 || _kb.y>1.0 || _kb.z<0.0 || _kb.z>0.45) {\n\t\t_kj=1.0;\n\t}\n\telse {\n\t\tfloat _kl=0.0, _kq = 0.0;\n\t\t_kl=_jp(_js,_kb.xy);\n\t\t_kq+=step(_kl,_kb.z)*_kf;\n\t\t_kj=max(1.0-_kq, 0.0);\n\t}\n\treturn _kj;\n}\nfloat _kp(vec4 _ki, sampler2D _js, float _kf, vec2 _kg) {\n\tfloat _kj;\n\tvec3 _kb=_ki.xyz/_ki.w;\n\t_kb.z-=_kb.z*_kg.x;\n\tif (_kb.x<0.0 || _kb.x>1.0 || _kb.y<0.0 || _kb.y>1.0 || _kb.z<0.0 || _kb.z>0.45) {\n\t\t_kj=1.0;\n\t}\n\telse {\n\t\tfloat _kq=0.0, _kl=0.0;\n\t\tvec2 _jr = vec2(_kb.xy);\n\t\t_kl=_jp(_js,_jr.xy);\n\t\t_kq+=step(_kl,_kb.z);\n\t\t_kl=_jp(_js,_jr.xy+(vec2(-1.0, -1.0)*_kg.y));\n\t\t_kq+=step(_kl,_kb.z);\n\t\t_kl=_jp(_js,_jr.xy+(vec2(0.0, -1.0)*_kg.y));\n\t\t_kq+=step(_kl,_kb.z);\n\t\t_kl=_jp(_js,_jr.xy+(vec2(-1.0, 0.0)*_kg.y));\n\t\t_kq+=step(_kl,_kb.z);\n\t\t_kj = max(1.0-((_kq*_kf)*0.25), 0.0);\n\t}\n\treturn _kj;\n}\nfloat _ks(vec4 _ki, sampler2D _js, float _kf, vec2 _kg) {\n\tfloat _kj;\n\tvec3 _kb=_ki.xyz/_ki.w;\n\t_kb.z-=_kb.z*_kg.x;\n\tif (_kb.x<0.0 || _kb.x>1.0 || _kb.y<0.0 || _kb.y>1.0 || _kb.z<0.0 || _kb.z>0.45) _kj=1.0;\n\telse {\n\t\tfloat _kq=0.0, _kl=0.0;\n\t\tvec2 _jr;\n';
        for (var g = -a; g <= a; g += 1) {
            for (var e = -a; e <= a; e += 1) {
                h += '\t\t_jr=_kb.xy+_kg.y*( vec2(cos(_jt(_ki.xy))+(' + g + '),sin(_jt(_ki.yx))+(' + e + ')) );\n\t\t_kl=_jp(_js,_jr);\n\t\t_kq+=step(_kl,_kb.z);\n';
            }
        }
        h += '\t\t_kj=max(1.0-((_kq*_kf)*' + d + '),0.0);\n\t}\n\treturn _kj;\n}\nfloat _ku(vec4 _ki, sampler2D _js, float _kf, vec4 _kx, float _kv) {\n';
        if (i.member291(Class5.member114)) {
            h += '\tfloat _kz=_ko(_ki,_js,_kf,_kx.zw);\n';
        } else if (i.member291(Class5.member116)) {
            h += '\tfloat _kz=_ks(_ki,_js,_kf,_kx.zw);\n';
        } else {
            h += '\tfloat _kz=_kp(_ki,_js,_kf,_kx.zw);\n';
        }
        h += '\tfloat _lb=clamp((_kv-_kx.x)*_kx.y,0.0,1.0);\n\t_kz=mix(_kz,1.0,_lb);\n\treturn _kz;\n}\n';
        return h;
    };
    return c;
}();