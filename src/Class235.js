export var Class235 = function (c) {
    var e = {};
    e.member2812 = 24;
    var b = '';
    if (c !== undefined) {
        b = c;
    }
    var d = undefined;
    e.member2813 = function () {
        return d;
    };
    e.member2814 = function (i) {
        if (d === undefined) {
            d = new Array(e.member2812);
        }
        for (var h = 0; h < e.member2812; h++) {
            d[h] = i.g1();
        }
        localStorage[b + 'uid'] = a(d);
    };
    e.member2815 = function (i) {
        if (d === undefined) {
            return;
        }
        if (d.length !== e.member2812) {
            throw new Error('1185 ');
        }
        for (var h = 0; h < e.member2812; h++) {
            i.p1(d[h]);
        }
    };
    e.member2816 = function (i) {
        if (d === undefined) {
            d = new Array(e.member2812);
        }
        if (localStorage[b + 'uid'] !== undefined) {
            g(localStorage[b + 'uid']);
        } else {
            for (var h = 0; h < e.member2812; h++) {
                d[h] = 255;
            }
        }
        localStorage[b + 'uid'] = a(d);
    };
    var a = function (j) {
        var i = '';
        for (var h = 0; h < j.length; h++) {
            i = i.concat(String.fromCharCode(j[h]));
        }
        return i;
    };
    var g = function (i) {
        if (d === undefined) {
            d = new Array(e.member2812);
        }
        for (var h = 0; h < Math.min(e.member2812, i.length); h++) {
            d[h] = i.charCodeAt(h);
        }
    };
    return e;
};