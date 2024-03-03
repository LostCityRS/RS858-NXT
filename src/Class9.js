import { Class7 } from 'Class7.js';
export var Class9 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform sampler2D _de;\nuniform float _cc;\n\n#define SAMPLES 16\nconst float _mq = 1.38;\nconst float _mr = -_mq/16.0;\nconst float _jx = 18.0;\nconst float _mt = 0.007;\nconst float _mv = 0.0000002;\nconst float _mw = 40.;\nvoid main(void) {\n\tvec3 _my[16];\n\t\t_my[0]=vec3(0.53812504, 0.18565957, -0.43192);\n\t\t_my[1]=vec3(0.13790712, 0.24864247, 0.44301823);\n\t\t_my[2]=vec3(0.33715037, 0.56794053, -0.005789503);\n\t\t_my[3]=vec3(-0.6999805, -0.04511441, -0.0019965635);\n\t\t_my[4]=vec3(0.06896307, -0.15983082, -0.85477847);\n\t\t_my[5]=vec3(0.056099437, 0.006954967, -0.1843352);\n\t\t_my[6]=vec3(-0.014653638, 0.14027752, 0.0762037);\n\t\t_my[7]=vec3(0.010019933, -0.1924225, -0.034443386);\n\t\t_my[8]=vec3(-0.35775623, -0.5301969, -0.43581226);\n\t\t_my[9]=vec3(-0.3169221, 0.106360726, 0.015860917);\n\t\t_my[10]=vec3(0.010350345, -0.58698344, 0.0046293875);\n\t\t_my[11]=vec3(-0.08972908, -0.49408212, 0.3287904);\n\t\t_my[12]=vec3(0.7119986, -0.0154690035, -0.09183723);\n\t\t_my[13]=vec3(-0.053382345, 0.059675813, -0.5411899);\n\t\t_my[14]=vec3(0.035267662, -0.063188605, 0.54602677);\n\t\t_my[15]=vec3(-0.47761092, 0.2847911, -0.0271716);\n\tvec3 _mz = normalize((texture2D(_de,_jf*_jx).xyz*2.0) - vec3(1.0, 1.0, 1.0));\n\tvec4 _na=texture2D(_dc,_jf);\n\t_na.xyz=_na.xyz*2.0 - vec3(1.0, 1.0, 1.0);\n\tvec3 _nc=vec3(_jf.xy, _na.a);\n\tfloat _ne=_cc*_mw/_na.a;\n\tfloat _ng=0.0;\n\tfor(int _nh = 0; _nh < SAMPLES; ++_nh) {\n\t\tvec3 _nj=_ne*reflect(_my[_nh], _mz);\n\t\tvec4 _nl=texture2D(_dc, _nc.xy + sign(dot(_nj,_na.xyz) )*_nj.xy);\n\t\t_nl.xyz=_nl.xyz*2.0 - vec3(1.0, 1.0, 1.0);\n\t\tfloat _nn = _na.a-_nl.a;\n\t\t_ng+=step(_mv,_nn)*(1.0-dot(_nl.xyz,_na.xyz))*(1.0-smoothstep(_mv,_mt,_nn));\n\t}\n\t_ng=max(0.3, 1.0+_ng*_mr);\n\tgl_FragColor=vec4(_ng, _ng, _ng, 1.0);\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member190);
        c.push(Class7.member175);
        return c;
    };
    return a;
}();