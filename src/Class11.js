import { Class7 } from 'Class7.js';
export var Class11 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform sampler2D _de;\nuniform vec2 _hc;\nuniform vec2 _hd;\nuniform float _hf;\nuniform float _hg;\n\nvoid main(void) {\n\tvec2 _qy=_hc/_hd;\n\t_qy=vec2(_jf.x*_qy.x, _jf.y*_qy.y+1.0-_qy.y);\n\tvec2 _qz=vec2(1.0,1.0)/_hd;\n\tvec2 _rb=_qz*0.5;\n\tvec4 _rd=vec4(0,0,0,0);\n\t_rd+=texture2D(_dc,_qy-_rb*_hf)*8.0;\n\t_rd+=texture2D(_dc,_qy-_rb*_hf+_qz*vec2(-1.0,0.0))*(-1.0);\n\t_rd+=texture2D(_dc,_qy-_rb*_hf+_qz*vec2(1.0,0.0))*(-1.0);\n\t_rd+=texture2D(_dc,_qy-_rb*_hf+_qz*vec2(0.0,-1.0))*(-1.0);\n\t_rd+=texture2D(_dc,_qy-_rb*_hf+_qz*vec2(0.0,1.0))*(-1.0);\n\t_rd/=4.0;\n\tvec4 _rf=vec4(0,0,0,0);\n\t_rf+=texture2D(_de,_qy+_rb*_hf)*8.0;\n\t_rf+=texture2D(_de,_qy+_rb*_hf+_qz*vec2(-1.0,0.0))*(-1.0);\n\t_rf+=texture2D(_de,_qy+_rb*_hf+_qz*vec2(1.0,0.0))*(-1.0);\n\t_rf+=texture2D(_de,_qy+_rb*_hf+_qz*vec2(0.0,-1.0))*(-1.0);\n\t_rf+=texture2D(_de,_qy+_rb*_hf+_qz*vec2(0.0,1.0))*(-1.0);\n\t_rf/=4.0;\n\tgl_FragColor=vec4(mix(_rd.rgb, _rf.rgb, _hg),1.0);\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member190);
        c.push(Class7.member256);
        c.push(Class7.member257);
        c.push(Class7.member258);
        c.push(Class7.member259);
        return c;
    };
    return a;
}();