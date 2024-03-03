import { Class264 } from 'Class264.js';
export var Class265 = function (m) {
    var e = {};
    var a = -1;
    var j = 0;
    var c = 1;
    var k = 2;
    var d;
    var h;
    var i;
    if (m.member2698 !== undefined) {
        d = m.member2698.member609();
        h = m.member2698.member609();
        var b = m.member2698.member609();
        i = new Array(b);
        for (var g = 0; g < b; g++) {
            i[g] = m.member2698.member609();
        }
    } else {
        throw new Error('1016 ');
    }
    e.eventOccurred = function (r, o, q) {
        if (r === undefined) {
            if (d !== a) {
                return false;
            }
        } else {
            if (d !== r.button) {
                return false;
            }
            for (var n = 0; n < i.length; n++) {
                if (!Class264.member3129(i[n])) {
                    return false;
                }
            }
        }
        return true;
    };
    m = undefined;
    return e;
};