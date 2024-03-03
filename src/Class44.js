import { Class241 } from 'Class241.js';
import { Class237 } from 'Class237.js';
import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class44 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nuniform mat4 _g;\nuniform float _hi;\nuniform vec4 _hj;//near start,near start _rt, far start, far start distance\nvarying vec2 _jf;\n\n';
        c += Class241.member284(b);
        c += Class237.member2829(b);
        c += 'uniform sampler2D _dc;\nuniform sampler2D _de;\nuniform sampler2D _dq;\nvoid main(void) {\n\tvec4 _oh=texture2D(_dc,_jf);\n\tvec4 _oj=texture2D(_de,_jf);\n\tvec4 _ol=vec4(_jf.x*2.0-1.0,_jf.y*2.0-1.0,_jo(_dq,_jf)*2.0-1.0,1.0);\n\t_ol=_g*_ol;\n\t_ol.z=-_ol.z/_ol.w;\n   float _om = _ol.z-_hi;\n   float _oo = (_om-_hj.z)/_hj.w;\n   float _oq = (-_om-_hj.x)/_hj.y;\n   float _os = ( _om > 0.0) ? _oo : _oq;\n';
        if (b.member291(Class5.member98)) {
            c += '\tgl_FragColor=vec4(_oh.rgb*(1.0-min(_os, 1.0)), 1.0);\n';
        } else {
            c += '\tgl_FragColor=vec4(mix(_oh.rgb, _oj.rgb, min(_os, 1.0)), 1.0);\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member190);
        c.push(Class7.member198);
        c.push(Class7.member146);
        c.push(Class7.member260);
        c.push(Class7.member261);
        return c;
    };
    return a;
}();