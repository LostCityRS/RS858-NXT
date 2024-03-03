import { Class7 } from 'Class7.js';
export var Class25 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec2 _jf;\n\nuniform sampler2D _dc;\nuniform sampler2D _de;\nuniform float _dj;\nuniform float _dk;\n\nconst vec3 _jh=vec3(0.2126,0.7152,0.0722);\n\nvoid main(void) {\n\tvec4 _jj=texture2D(_dc,_jf);\n\tvec4 _jk=texture2D(_de,_jf);\n\tfloat _jm=0.99*dot(_jh,_jk.rgb)+0.01;\n\tfloat _jn=_jm*(1.0+(_jm/_dk))/(_jm+1.0);\n\tgl_FragColor=_jk*(_jn/_jm)+_jj*_dj;\n}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member190);
        c.push(Class7.member193);
        c.push(Class7.member194);
        return c;
    };
    return a;
}();