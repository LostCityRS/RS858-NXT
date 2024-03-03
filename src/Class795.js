export var Class795 = function (j) {
    var d = {};
    var c;
    var g = -1;
    if (j.member625 !== undefined && j.member2896 !== undefined) {
        g = j.member625;
        c = j.member2896;
    } else {
        throw new Error('911 ');
    }
    var e = 0;
    d.member8561 = function () {
        return e;
    };
    var i = 0;
    d.member9256 = function () {
        return i;
    };
    var h = 0;
    d.member9257 = function () {
        return h;
    };
    var b = function (m) {
        while (true) {
            var k = m.member609();
            if (k === undefined) {
                throw new Error('912 ');
                break;
            }
            if (k === 0) {
                break;
            }
            a(m, k);
        }
    };
    d.decode = b;
    var a = function (m, k) {
        if (k === 1) {
            e = m.member1086();
        } else if (k === 2) {
            i = m.member609();
            h = m.member609();
        } else if (false) {
        }
    };
    j = undefined;
    return d;
};