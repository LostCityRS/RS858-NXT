import { Class421 } from 'Class421.js';
import { Class654 } from 'Class654.js';
import { BaseVarType } from 'Class462.js';
export var Class656 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member6013.member867 = function (h) {
        var g = h.member6100[--h.member6099];
        for (var i in Class654) {
            if (Class654[i].id === g) {
                var j = Class654[i];
                var e = [];
                for (var d = j.params.length - 1; d > -1; d--) {
                    switch (j.params[d].baseVarType) {
                    case BaseVarType.INTEGER:
                        e.push(h.member6100[--h.member6099]);
                        break;
                    case BaseVarType.LONG:
                        e.push(h.member8877[--h.member8878]);
                        break;
                    case BaseVarType.STRING:
                        e.push(h.member6142[--h.member6143]);
                        break;
                    default:
                        throw new Error('1413 ' + j);
                    }
                }
                e.reverse();
                j.member867(e);
                return;
            }
        }
        throw new Error('1414 ' + g);
    };
    return b;
}();