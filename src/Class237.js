import { Class5 } from 'Class5.js';
export var Class237 = function () {
    var c = {};
    var b = 2;
    var a = b / 2 - 0.5;
    var d = 1 / (b * b);
    c.member2829 = function (e) {
        var g = '\nfloat _jo(sampler2D _jq, vec2 _jp) {\n';
        if (e.member291(Class5.member111)) {
            g += '\treturn texture2D(_jq,_jp).r;\n';
        } else {
            g += '\treturn _bbb(texture2D(_jq,_jp));\n';
        }
        g += '}\n';
        return g;
    };
    c.member284 = function (e) {
        var i = '\n';
        i += 'precision mediump float;\nfloat _js(vec2 _jt){\n    return fract(sin(dot(_jt.xy,vec2(12.9898,78.233)))*43758.5453);\n}\n' + c.member2829(e) + 'float _ju(sampler2D _jq, vec4 _jy, vec2 _jx, float _jv) {\n\tvec4 _ka = vec4(\n\t\t_jy.x + (_jx.x * _jv * _jy.w),\n\t\t_jy.y + (_jx.y * _jv * _jy.w),\n\t\t_jy.z, _jy.w);\n';
        if (e.member291(Class5.member111)) {
            i += '\treturn texture2DProj(_jq, _ka).r;\n';
        } else {
            i += '\treturn _bbb(texture2DProj(_jq, _ka));\n';
        }
        i += '}\nfloat _kb(vec4 _ke, sampler2D _jq, float _kc, vec2 _kd) {\n\tfloat _kg;\n\tvec3 _jy=_ke.xyz/_ke.w;\n\t_jy.z-=_jy.z*_kd.x;\n\tif (_jy.x<0.0 || _jy.x>1.0 || _jy.y<0.0 || _jy.y>1.0 || _jy.z<0.0 || _jy.z>0.45) {\n\t\t_kg=1.0;\n\t}\n\telse {\n\t\tfloat _kh=0.0, _km = 0.0;\n\t\t_kh=_jo(_jq,_jy.xy);\n';
        i += '\t\tfloat _ki=30.0;\n\t\t_km = clamp(exp(-_ki * (_jy.z - _kh)), 0.0, 1.0);\n\t\t_kg=max(_km, 0.0);\n\t}\n\treturn _kg;\n}\nfloat _kj(vec4 _ke, sampler2D _jq, float _kc, vec2 _kd) {\n\tfloat _kg;\n\tvec3 _jy=_ke.xyz/_ke.w;\n\t_jy.z-=_jy.z*_kd.x;\n\tif (_jy.x<0.0 || _jy.x>1.0 || _jy.y<0.0 || _jy.y>1.0 || _jy.z<0.0 || _jy.z>0.45) {\n\t\t_kg=1.0;\n\t}\n\telse {\n\t\tfloat _kh=0.0, _km = 0.0;\n\t\t_kh=_jo(_jq,_jy.xy);\n\t\t_km+=step(_kh,_jy.z)*_kc;\n\t\t_kg=max(1.0-_km, 0.0);\n\t}\n\treturn _kg;\n}\nfloat _kl(vec4 _ke, sampler2D _jq, float _kc, vec2 _kd) {\n\tfloat _kg;\n\tvec3 _jy=_ke.xyz/_ke.w;\n\t_jy.z-=_jy.z*_kd.x;\n\tif (_jy.x<0.0 || _jy.x>1.0 || _jy.y<0.0 || _jy.y>1.0 || _jy.z<0.0 || _jy.z>0.45) {\n\t\t_kg=1.0;\n\t}\n\telse {\n\t\tfloat _km=0.0, _kh=0.0;\n\t\tvec2 _jp = vec2(_jy.xy);\n\t\t_kh=_jo(_jq,_jp.xy);\n\t\t_km+=step(_kh,_jy.z);\n\t\t_kh=_jo(_jq,_jp.xy+(vec2(-1.0, -1.0)*_kd.y));\n\t\t_km+=step(_kh,_jy.z);\n\t\t_kh=_jo(_jq,_jp.xy+(vec2(0.0, -1.0)*_kd.y));\n\t\t_km+=step(_kh,_jy.z);\n\t\t_kh=_jo(_jq,_jp.xy+(vec2(-1.0, 0.0)*_kd.y));\n\t\t_km+=step(_kh,_jy.z);\n\t\t_kg = max(1.0-((_km*_kc)*0.25), 0.0);\n\t}\n\treturn _kg;\n}\nfloat _ko(vec4 _ke, sampler2D _jq, float _kc, vec2 _kd) {\n\tfloat _kg;\n\tvec3 _jy=_ke.xyz/_ke.w;\n\t_jy.z-=_jy.z*_kd.x;\n\tif (_jy.x<0.0 || _jy.x>1.0 || _jy.y<0.0 || _jy.y>1.0 || _jy.z<0.0 || _jy.z>0.45) _kg=1.0;\n\telse {\n\t\tfloat _km=0.0, _kh=0.0;\n\t\tvec2 _jp;\n';
        for (var h = -a; h <= a; h += 1) {
            for (var g = -a; g <= a; g += 1) {
                i += '\t\t_jp=_jy.xy+_kd.y*( vec2(cos(_js(_ke.xy))+(' + h + '),sin(_js(_ke.yx))+(' + g + ')) );\n\t\t_kh=_jo(_jq,_jp);\n\t\t_km+=step(_kh,_jy.z);\n';
            }
        }
        i += '\t\t_kg=max(1.0-((_km*_kc)*' + d + '),0.0);\n\t}\n\treturn _kg;\n}\nfloat _kp(vec4 _ke, sampler2D _jq, float _kc, vec4 _ks, float _kq) {\n';
        if (e.member291(Class5.member114)) {
            i += '\tfloat _kt=_kj(_ke,_jq,_kc,_ks.zw);\n';
        } else if (e.member291(Class5.member116)) {
            i += '\tfloat _kt=_ko(_ke,_jq,_kc,_ks.zw);\n';
        } else {
            i += '\tfloat _kt=_kl(_ke,_jq,_kc,_ks.zw);\n';
        }
        i += '\tfloat _kv=clamp((_kq-_ks.x)*_ks.y,0.0,1.0);\n\t_kt=mix(_kt,1.0,_kv);\n\treturn _kt;\n}\n';
        return i;
    };
    return c;
}();