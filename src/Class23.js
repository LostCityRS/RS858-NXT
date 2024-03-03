import { Class7 } from 'Class7.js';
export var Class23 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform float _dg;\n\nconst vec3 _jh=vec3(0.2126,0.7152,0.0722);\n\nvoid main(void) {\n\tvec4 _of=texture2D(_dc,_jf);\n\tgl_FragColor=_of*step(_dg,dot(_jh,_of.rgb));\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member191);
        return c;
    };
    return a;
}();