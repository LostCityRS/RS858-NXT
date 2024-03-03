import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class59 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nuniform sampler2D _dc;\nuniform vec4 _fb;\n\nvarying vec2 _jf;\n\nfloat _bbh[10];\n\n\nfloat _bbj ( float _bbk, float _bbl, float _bbn, float _bbo ) {\n\treturn ( _bbl + log( _bbk + (_bbn * exp(_bbo - _bbl) ) ) );\n}\n\nvec4 _bbq() {\n\t_bbh[0] = 0.0882357;\n\t_bbh[1] = 0.0957407;\n\t_bbh[2] = 0.101786;\n\t_bbh[3] = 0.106026;\n\t_bbh[4] = 0.108212;\n\t_bbh[5] = 0.108212;\n\t_bbh[6] = 0.106026;\n\t_bbh[7] = 0.101786;\n\t_bbh[8] = 0.0957407;\n\t_bbh[9] = 0.0882357;\n\n\tfloat _bbs[10];\n\n\tfor (int _nh = 0; _nh < 10; _nh++) {\n\t\tfloat _bbt = float(_nh) - 4.5;\n\t\tvec2 _bbv = vec2(_jf.x + _bbt * _fb.x, _jf.y + _bbt * _fb.y);\n';
        if (b.member291(Class5.member111)) {
            c += '\t\t_bbs[_nh] = texture2D(_dc, _bbv).r;\n';
        } else {
            c += '\t\t_bbs[_nh] = dot(texture2D(_dc, _bbv),_wp);\n';
        }
        c += '\t}\n\n\tfloat _bbw;\n\t_bbw = _bbj(_bbh[0], _bbs[0], _bbh[1], _bbs[1]);\n\tfor (int _nh = 2; _nh < 10; _nh++) {\n\t\t_bbw = _bbj(1.0, _bbw, _bbh[_nh], _bbs[_nh]);\n\t}\n\n\treturn vec4(_bbw, 0.0, 0.0, 0.0);\n}\n\nvoid main() {\n\tgl_FragColor = _bbq();\n}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        c.push(Class7.member189);
        c.push(Class7.member222);
        return c;
    };
    return a;
}();