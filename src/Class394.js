export var Class394 = function () {
    var a = {};
    a.member4539 = 14;
    a.member4540 = 16384;
    a.member4541 = 3;
    a.member4542 = a.member4540 >> a.member4541;
    a.member4543 = function (b, d) {
        if (b === 0 && d === 0) {
            return 0;
        }
        var c = Math.atan2(b, d);
        if (c > 0) {
            c -= Math.PI;
        } else {
            c += Math.PI;
        }
        return c;
    };
    a.member4544 = function (b) {
        while (b > Math.PI) {
            b -= 2 * Math.PI;
        }
        while (b <= -Math.PI) {
            b += 2 * Math.PI;
        }
        return b;
    };
    return a;
}();