import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class42 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform sampler2D _de;\nvoid main(void) {\n\tvec4 _no=texture2D(_dc,_jf);\n\tvec4 _nq=texture2D(_de,_jf);\n';
        if (b.member291(Class5.member97)) {
            c += '\tgl_FragColor=vec4(_nq.rgb, 1.0);\n';
        } else {
            c += '\tgl_FragColor=vec4(_no.rgb*_nq.rgb, 1.0);\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member190);
        return c;
    };
    return a;
}();