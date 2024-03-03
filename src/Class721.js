export var Class721 = function (d) {
    var e = {};
    var a;
    var b = false;
    e.member8786 = function () {
        return b;
    };
    e.member10049 = function (h) {
        b = h;
    };
    var g = 0;
    e.member8783 = function () {
        return g;
    };
    e.member10050 = function (h) {
        g = h;
        a.member7187.member9152();
    };
    var c = false;
    e.member8785 = function () {
        return c;
    };
    e.member10051 = function (h) {
        c = h;
        a.member2970.member8695(c);
    };
    if (d.member7710 !== undefined) {
        a = d.member7710;
    } else {
        throw new Error('869 ');
    }
    e.member487 = function () {
        if (g > 1) {
            g--;
            a.member7187.member9152();
        }
    };
    d = undefined;
    return e;
};