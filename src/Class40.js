import { Class7 } from 'Class7.js';
export var Class40 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform vec2 _fc;\nuniform vec2 _fe;\nuniform vec4 _fg;\n\nvoid main(void) {\n   vec4 _ot=texture2D(_dc,_jf);\n   float _su=_ot.a;\n   if (_su==0.0) {\n       _su+=texture2D(_dc,_jf+(1.0*_fc)).a;\n       _su+=texture2D(_dc,_jf+(-1.0*_fc)).a;\n       _su+=texture2D(_dc,_jf+(1.0*_fe)).a;\n       _su+=texture2D(_dc,_jf+(-1.0*_fe)).a;\n       if (_su!=0.0) {\n           _ot=_fg;\n       }\n   }\n   gl_FragColor=_ot;\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member223);
        c.push(Class7.member224);
        c.push(Class7.member225);
        return c;
    };
    return a;
}();