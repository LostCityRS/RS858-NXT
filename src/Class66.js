export var Class66 = function () {
    var b = {};
    var a;
    b.member431 = function (d, c) {
        return 'jagex.' + d.id + '.' + c + '.';
    };
    b.member25 = function (d, c) {
        a = b.member431(d, c);
    };
    b.member432 = function (c) {
        if (a === undefined) {
            throw new Error('1692 ');
        }
        if (c === undefined) {
            return a;
        }
        return a + c + '.';
    };
    return b;
}();