export var Class779 = function (a) {
    var d = {};
    var b = -1;
    d.member10418 = function () {
        return b;
    };
    if (a.data !== undefined) {
        var e = a.data;
        while (true) {
            var c = e.g1();
            if (c === 0) {
                break;
            } else if (c === 1) {
                b = e.g2();
            } else {
                throw new Error('1715 ' + c);
            }
        }
    } else {
        throw new Error('1716 ');
    }
    a = undefined;
    return d;
};