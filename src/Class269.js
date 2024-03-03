import { Class268 } from 'Class268.js';
import { Class265 } from 'Class265.js';
import { Class266 } from 'Class266.js';
import { Class267 } from 'Class267.js';
export var Class269 = function () {
    var a = {};
    var b = function (d) {
        var c = d.member609();
        if (c === Class268.MOUSE) {
            return Class265({ member2698: d });
        } else if (c === Class268.KEYPRESS) {
            return Class266({ member2698: d });
        } else if (c === Class268.KEYHELD) {
            return Class267({ member2698: d });
        }
    };
    a.member3142 = b;
    return a;
}();