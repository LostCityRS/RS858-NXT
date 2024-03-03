import { Class5 } from 'Class5.js';
import { Class7 } from 'Class7.js';
export var Class54 = function () {
    var a = {};
    a.member283 = function () {
        if (false) {
        } else {
            return '';
        }
    };
    a.member284 = function (b) {
        var c = '';
        c += 'precision mediump float;\n';
        if (b.member291(Class5.member109)) {
            c += 'varying vec4 _la;\n';
        }
        if (b.member291(Class5.member93)) {
            c += 'varying vec2 _lb;\n';
            c += 'uniform sampler2D _bc;\n';
        }
        c += 'void main(void) {\n';
        if (b.member291(Class5.member93)) {
            if (b.member291(Class5.member109)) {
                c += 'gl_FragColor=texture2D(_bc,vec2(_lb.s,_lb.t))*_la;\n';
            } else {
                c += 'gl_FragColor=texture2D(_bc,vec2(_lb.s,_lb.t));\n';
            }
        } else if (b.member291(Class5.member109)) {
            c += 'gl_FragColor=_la;\n';
        }
        c += '}';
        return c;
    };
    a.member285 = function (b) {
        var c = new Array(0);
        if (b.member291(Class5.member93)) {
            c.push(Class7.member159);
        }
        return c;
    };
    return a;
}();