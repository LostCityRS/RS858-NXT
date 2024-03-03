import { Class126 } from 'Class126.js';
import { Class125 } from 'Class125.js';
import { Class88 } from 'Class88.js';
import { Class127 } from 'Class127.js';
export var Class128 = function () {
    var a = {
        member1161: Class126({ id: 0 }),
        member1162: Class125({
            id: 1,
            member1154: false,
            member1155: true,
            member1156: false,
            member1157: true
        }),
        member1163: Class125({
            id: 2,
            member1154: undefined,
            member1155: false,
            member1156: false,
            member1157: true,
            member1159: 1
        }),
        member1164: Class125({
            id: 3,
            member1154: undefined,
            member1155: false,
            member1156: true,
            member1157: false,
            member1159: 1
        }),
        member1165: Class125({
            id: 4,
            member1154: undefined,
            member1155: true,
            member1156: true,
            member1157: false,
            member1159: 1
        }),
        member1166: Class125({
            id: 5,
            member1154: undefined,
            member1155: true,
            member1156: false,
            member1157: true,
            member1159: 1
        }),
        member1167: Class88({ id: 6 }),
        member1168: Class127({
            id: 7,
            member1160: true
        }),
        member1169: Class127({
            id: 8,
            member1160: false
        }),
        member1170: Class125({
            id: 9,
            member1154: true,
            member1155: false,
            member1156: false,
            member1157: true,
            member1158: -0.5,
            member1159: 0.5
        }),
        member1171: Class125({
            id: 10,
            member1154: false,
            member1155: true,
            member1156: true,
            member1157: false,
            member1158: -0.5,
            member1159: 0.5
        }),
        member1172: Class125({
            id: 11,
            member1154: false,
            member1155: true,
            member1156: false,
            member1157: false
        })
    };
    a.getByID = function (d) {
        for (var c in a) {
            var b = a[c];
            if (b.id === d) {
                return b;
            }
        }
        return undefined;
    };
    return a;
}();