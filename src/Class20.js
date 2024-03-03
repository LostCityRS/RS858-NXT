import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class20 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform float _fh;\nuniform sampler2D _dc;\nuniform sampler2D _de;\nconst float _sv=0.003;\nconst float _sx=100.0;\nconst float _sz=0.2;\nconst float _tb=0.003;\nconst float _td=13.0;\nconst float _tf=0.4;\nvoid main(void) {\n\tvec4 _tg=texture2D(_de,_jf);\n\tvec2 _qy=_jf;\n\tfloat _ti =  _sv * sin(_sx * _qy.x) * sin(_sz * _fh);\n\tfloat _tj =  _tb * sin(_td * _qy.y) * sin(_tf * _fh);\n\tvec2 _tl = _qy + vec2(_ti, _tj)*_tg.r*_tg.a;\n\tvec4 _oh=texture2D(_dc,_tl);\n';
        if (b.member291(Class5.member99)) {
            c += '\tgl_FragColor=vec4(_tg.rrr*_tg.a, 1.0);\n';
        } else {
            c += '\tgl_FragColor=vec4(_oh.rgb, 1.0);\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member226);
        c.push(Class7.member189);
        c.push(Class7.member190);
        return c;
    };
    return a;
}();