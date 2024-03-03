import { Class7 } from 'Class7.js';
export var Class60 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform vec2 _di;\n\nvoid main(void) {\n\tvec4 _ou=vec4(0.0,0.0,0.0,0.0);\n   _ou+=texture2D(_dc,_jf)*0.091396265;\n   _ou+=texture2D(_dc,_jf+(-1.0*_di))*0.088584304;\n   _ou+=texture2D(_dc,_jf+( 1.0*_di))*0.088584304;\n   _ou+=texture2D(_dc,_jf+(-2.0*_di))*0.08065692;\n   _ou+=texture2D(_dc,_jf+( 2.0*_di))*0.08065692;\n   _ou+=texture2D(_dc,_jf+(-3.0*_di))*0.068989515;\n   _ou+=texture2D(_dc,_jf+( 3.0*_di))*0.068989515;\n   _ou+=texture2D(_dc,_jf+(-4.0*_di))*0.055434637;\n   _ou+=texture2D(_dc,_jf+( 4.0*_di))*0.055434637;\n   _ou+=texture2D(_dc,_jf+(-5.0*_di))*0.04184426;\n   _ou+=texture2D(_dc,_jf+( 5.0*_di))*0.04184426;\n   _ou+=texture2D(_dc,_jf+(-6.0*_di))*0.029672023;\n   _ou+=texture2D(_dc,_jf+( 6.0*_di))*0.029672023;\n   _ou+=texture2D(_dc,_jf+(-7.0*_di))*0.019765828;\n   _ou+=texture2D(_dc,_jf+( 7.0*_di))*0.019765828;\n   _ou+=texture2D(_dc,_jf+(-8.0*_di))*0.012369139;\n   _ou+=texture2D(_dc,_jf+( 8.0*_di))*0.012369139;\n\tgl_FragColor=vec4(_ou.rgb,1.0);\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member192);
        return c;
    };
    return a;
}();