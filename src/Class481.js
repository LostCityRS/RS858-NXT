export var Class481 = function (a) {
    var d = {};
    var c;
    d.member2794 = function () {
        return c;
    };
    var i;
    d.member7679 = function () {
        return i;
    };
    var h;
    d.member7680 = function () {
        return h;
    };
    var e;
    d.member7681 = function () {
        return e;
    };
    var g;
    d.getStickTime = function () {
        return g;
    };
    d.replace = function (j) {
        if (j.type !== undefined && j.member3323 !== undefined && j.member7683 !== undefined && j.member7684 !== undefined && j.duration !== undefined) {
            c = j.type;
            i = j.member3323;
            h = j.member7683;
            e = j.member7684;
            g = j.duration;
        } else {
            throw new Error('1217 ');
        }
    };
    var b = d.replace;
    b(a);
    a = undefined;
    return d;
};