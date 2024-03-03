import { Class7 } from 'Class7.js';
export var Class17 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform vec2 _ew;\nuniform vec4 _eu;\n\nvoid main(void) {\n\tfloat _tn=_rt(gl_FragCoord.xy,_eu.xy);\n\tfloat _to=_tn-_eu.z;\n\tfloat _tp=clamp(((_eu.w-abs(_to))/_eu.w),0.0,1.0);\n\tvec4 _ou=vec4(0.0,0.0,0.0,0.0);\n\tif (_to>-_eu.w && _to<_eu.w) {\n\t\tvec2 _tq=_tp*_ew;\n   \t_ou+=texture2D(_dc,_jf)*0.091396265;\n   \t_ou+=texture2D(_dc,_jf+(-1.0*_tq))*0.088584304;\n   \t_ou+=texture2D(_dc,_jf+( 1.0*_tq))*0.088584304;\n   \t_ou+=texture2D(_dc,_jf+(-2.0*_tq))*0.08065692;\n   \t_ou+=texture2D(_dc,_jf+( 2.0*_tq))*0.08065692;\n   \t_ou+=texture2D(_dc,_jf+(-3.0*_tq))*0.068989515;\n   \t_ou+=texture2D(_dc,_jf+( 3.0*_tq))*0.068989515;\n   \t_ou+=texture2D(_dc,_jf+(-4.0*_tq))*0.055434637;\n   \t_ou+=texture2D(_dc,_jf+( 4.0*_tq))*0.055434637;\n   \t_ou+=texture2D(_dc,_jf+(-5.0*_tq))*0.04184426;\n   \t_ou+=texture2D(_dc,_jf+( 5.0*_tq))*0.04184426;\n   \t_ou+=texture2D(_dc,_jf+(-6.0*_tq))*0.029672023;\n   \t_ou+=texture2D(_dc,_jf+( 6.0*_tq))*0.029672023;\n   \t_ou+=texture2D(_dc,_jf+(-7.0*_tq))*0.019765828;\n   \t_ou+=texture2D(_dc,_jf+( 7.0*_tq))*0.019765828;\n   \t_ou+=texture2D(_dc,_jf+(-8.0*_tq))*0.012369139;\n   \t_ou+=texture2D(_dc,_jf+( 8.0*_tq))*0.012369139;\n\t}\n\tgl_FragColor=(1.0-_tp)*texture2D(_dc,_jf)+_tp*_ou;\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member218);
        c.push(Class7.member217);
        return c;
    };
    return a;
}();