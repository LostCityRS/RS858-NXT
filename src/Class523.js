import { Class433 } from 'Class433.js';
import { Class521 } from 'Class521.js';
import { Class522 } from 'Class522.js';
export var Class523 = function () {
    var b = {};
    var d;
    b.member8444 = function () {
        return d;
    };
    var a;
    var c;
    b.member25 = function (e) {
        a = e;
        c = {
            getVarPlayerTypeList: function () {
                return a.member2970.getVarPlayerTypeList();
            },
            getVarPlayerGroupTypeList: function () {
                return a.member2970.getVarPlayerGroupTypeList();
            },
            member3024: function () {
                return a.member6116.member3024();
            }
        };
    };
    b.member301 = function () {
        d = undefined;
    };
    b.member8445 = function () {
        if (d === undefined) {
            return undefined;
        }
        return d.member8412();
    };
    Class433.member6404.member6428 = function (e, h) {
        a.member7187.member8446();
        if (h === 0) {
            d = undefined;
        } else {
            var g = Class521();
            if (!g.decode(e, c)) {
                return true;
            }
            d = g;
        }
    };
    Class433.member6403.member6428 = function (e, g) {
        a.member7187.member8446();
        var h = Class522(e, c);
        h.member8434(d);
    };
    Class433.member6407.member6428 = function (k, n) {
        a.member7187.member8447();
        var g = k.getPos();
        var e = k.g2();
        var m = k.g1() === 1;
        var h = d.member8419(e);
        var i = h.member3020();
        if (i === undefined || m) {
            h.member3023();
            i = h.member3020();
        }
        while (n - (k.getPos() - g) > 0) {
            var j = a.member2970.getVarPlayerTypeList().member3026(k);
            if (j === NULL) {
                return true;
            }
            i.member2947(j.id, j.value);
        }
    };
    return b;
}();