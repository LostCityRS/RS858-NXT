import { Class5 } from 'Class5.js';
import { Class243 } from 'Class243.js';
import { Class7 } from 'Class7.js';
export var Class22 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = 'precision mediump float;\n\nvarying vec3 _iq;\n\n';
        if (b.member291(Class5.member118)) {
            c += 'varying vec3 _ir;\nuniform vec3 _fm;\nuniform vec3 _o;\n';
        }
        c += 'uniform samplerCube _dt;\nuniform samplerCube _du;\nuniform bool _dx;\nuniform bool _dz;\nuniform float _dw;\n';
        if (b.member291(Class5.member118)) {
            c += Class243.member2836(b);
        }
        if (b.member291(Class5.member118)) {
            c += Class243.member2838(b);
            c += Class243.member2839(b);
        }
        c += '\nvoid main(void) {\n\tvec3 _it=normalize(_iq);\n\tvec4 _iu=textureCube(_dt,_it,0.0);\n\tvec4 _iw=textureCube(_du,_it,0.0);\n\tif (!_dx) {\n\t\t_iu=vec4(_iw.xyz,0.0);\n\t}\n\tif (!_dz) {\n\t\t_iw=vec4(_iu.xyz,0.0);\n\t}\n\tvec4 _ix=mix(_iu,_iw,_dw);\n';
        if (b.member291(Class5.member118)) {
            c += '\tconst vec3 _iy=vec3(0.0, 1.0, 0.0);\n\tvec3 _iz=_ir-_fm;\n\tvec3 _ja, _sm;\n\t//Compute cosine between world up and world pos view vector.\n\t//Subtracting 1.0 from the cosine gives us the sine (_nh.e. height).\n\tfloat _jc=1.0-max(0.0, dot(_iy, normalize(_iz)));\n\t_jc=max(0.0, pow(_jc, _cp.w));\n\tComputeInOutScattering(_iz, length(_iz), _o, _ja, _sm);\n\tvec3 _je=_ss(_ix.xyz, _ja, _sm)*_jc;\n\t_ix.xyz=mix(_ix.xyz, _je, _jc);\n';
        }
        c += '\tgl_FragColor=_ix;\n';
        c += '}\n';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        if (b.member291(Class5.member118)) {
            c.push(Class7.member229);
            c.push(Class7.member150);
        }
        c.push(Class7.member201);
        c.push(Class7.member202);
        c.push(Class7.member204);
        c.push(Class7.member205);
        c.push(Class7.member203);
        if (b.member291(Class5.member118)) {
            c.push(Class7.member182);
            c.push(Class7.member183);
            c.push(Class7.member184);
            c.push(Class7.member185);
            c.push(Class7.member186);
        }
        return c;
    };
    return a;
}();