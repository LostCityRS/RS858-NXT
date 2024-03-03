export var Class4 = function () {
    var c = {};
    c.member60 = 1;
    c.member61 = 2;
    c.member62 = 3;
    c.member63 = 10;
    c.member64 = 11;
    c.member65 = 20;
    var g = false;
    var d = 1;
    var e = 0;
    c.member66 = function () {
        return e;
    };
    var h = null;
    c.member67 = function () {
        return h !== null;
    };
    var b = {
        member68: 0,
        member69: 0,
        member70: 0,
        member71: 0,
        member72: 0,
        member73: 0,
        member74: 0,
        member75: 0,
        member76: 0,
        member77: 0
    };
    c.member25 = function (i) {
        h = new Array(10000);
    };
    var a = function () {
    };
    c.member78 = a;
    c.member79 = function (i) {
        h[d] = i;
        e++;
        return d++;
    };
    c.member80 = function (i) {
        h[i] = undefined;
        e--;
    };
    c.member81 = function () {
        b.member82 = e;
        b.member69 = 0;
        b.member70 = 0;
        b.member71 = 0;
        b.member72 = 0;
        b.member73 = 0;
        b.member74 = 0;
        b.member75 = 0;
        b.member76 = 0;
        b.member77 = 0;
        b.member83 = 0;
        for (var i = 0; i < d; i++) {
            var k = h[i];
            if (k !== undefined) {
                var m = k.member84();
                var n = k.member85();
                var j = k.member86();
                b.member70 += m;
                if (k.member87() === c.member63) {
                    b.member71 += m;
                } else if (k.member87() === c.member64) {
                    b.member72 += m;
                }
                b.member73 += n;
                if (k.member87() === c.member60) {
                    b.member74 += n;
                } else if (k.member87() === c.member61) {
                    b.member75 += n;
                } else if (k.member87() === c.member62) {
                    b.member76 += n;
                }
                if (k.member87() === c.member65) {
                    b.member83++;
                }
                b.member77 += j;
                b.member69 += m + n + j;
            }
        }
        return b;
    };
    return c;
}();