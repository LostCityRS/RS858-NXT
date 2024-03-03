export var Class137 = function () {
    var d = {
        member797: 0,
        member881: 1,
        member796: 2
    };
    var c = {
        member1304: 1,
        member1305: 16,
        member1306: 256,
        member1307: 128
    };
    var e = {
        member1304: 0.75,
        member1305: 8,
        member1306: 256,
        member1307: 128
    };
    var b = {
        member1304: 0.5,
        member1305: 8,
        member1306: 256,
        member1307: 128
    };
    var a = undefined;
    d.member1308 = function (h, g) {
        var i;
        if (h === d.member796) {
            i = c;
        } else if (h === d.member881) {
            i = e;
        } else if (h === d.member797) {
            i = b;
        } else {
            throw new Error('1743 ' + h);
        }
        a = h;
        d.member1304 = i.member1304;
        d.member1305 = i.member1305;
        d.member1306 = i.member1306;
        d.member1307 = i.member1307;
        while (d.member1306 * d.member1305 > g || d.member1307 * d.member1305 > g) {
            d.member1306 /= 2;
            d.member1307 /= 2;
        }
    };
    d.member1309 = function () {
        return a;
    };
    d.member1310 = function () {
        return a !== undefined;
    };
    d.member681 = function () {
        return {
            member1311: a,
            member743: d.member1304,
            member1312: d.member1305,
            member1313: d.member1306,
            member1314: d.member1307
        };
    };
    d.member25 = function (g) {
        a = g.member1311;
        d.member1304 = g.member743;
        d.member1305 = g.member1312;
        d.member1306 = g.member1313;
        d.member1307 = g.member1314;
    };
    return d;
}();