import { Class290 } from 'Class290.js';
export var Class462 = function () {
    var a = {
        member7281: {
            serialID: 0,
            decode: function (c) {
                return c.member1074();
            }
        },
        member7282: {
            serialID: 1,
            decode: function (c) {
                return c.member1077();
            }
        },
        member7283: {
            serialID: 2,
            decode: function (c) {
                return c.member1089(true);
            }
        },
        member7284: {
            serialID: 3,
            decode: function (c) {
                return Class290({ member3456: c });
            }
        }
    };
    a.getByID = function (e) {
        for (var c in a) {
            var d = a[c];
            if (d.serialID === e) {
                return d;
            }
        }
        return null;
    };
    var b = a.getByID;
    return a;
}();