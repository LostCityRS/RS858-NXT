import { CoordFine } from 'Class290.js';
export var BaseVarType = function () {
    var a = {
        INTEGER: {
            serialID: 0,
            decode: function (packet) {
                return packet.g4s();
            }
        },
        LONG: {
            serialID: 1,
            decode: function (packet) {
                return packet.g8();
            }
        },
        STRING: {
            serialID: 2,
            decode: function (packet) {
                return packet.gjstr(true);
            }
        },
        COORDFINE: {
            serialID: 3,
            decode: function (packet) {
                return CoordFine({ member3456: packet });
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