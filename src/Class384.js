import { Class50 } from 'Class50.js';
export var Class384 = function () {
    var a = function (s) {
        var i = {};
        var k = null;
        var o = Class50.member368;
        var d = 0;
        var r = false;
        i.member4340 = function () {
            return r;
        };
        var q = 0;
        var c = 0;
        var t = false;
        i.member1999 = function () {
            return t;
        };
        var n = 0;
        i.member4341 = function () {
            return n;
        };
        i.member4342 = function (u) {
            n = u;
        };
        i.member2000 = function () {
            return n !== 0;
        };
        var g = -1;
        var b = 0;
        var h = 0;
        var m;
        i.member2001 = function () {
            return m;
        };
        var j;
        i.member2003 = function () {
            return j;
        };
        if (s.member4343 === undefined || s.member4344 === undefined || s.member4345 === undefined || s.member4346 === undefined || s.member4347 === undefined || s.member4348 === undefined || s.member4349 === undefined || s.member4350 === undefined) {
            throw new Error('1754 ');
        }
        k = s.member4343;
        o = s.member4344;
        n = s.member4345;
        h = s.member4346;
        b = h;
        d = s.member4348;
        c = s.member4349;
        r = s.member4350;
        if (s.member4347) {
            m = Math.floor(Math.random() * k.length);
            b -= Math.floor(Math.random() * k[m]);
        } else {
            m = 0;
        }
        j = m + 1;
        if (j >= k.length) {
            j = m;
        }
        i.member301 = function (v, u) {
            m = 0;
            j = k.length > 1 ? 1 : 0;
            b = v;
            q = 0;
            t = false;
            n = u === undefined ? 0 : u;
        };
        i.member4351 = function () {
            q = 0;
        };
        i.member4352 = function (u) {
            n = u - b;
        };
        i.member4224 = function (y) {
            if (y === h) {
                return;
            }
            if (t) {
                return;
            }
            h = y;
            var x = h - b;
            if (n > 0) {
                if (n >= x) {
                    n -= x;
                    b = h;
                    return;
                }
                x -= n;
                n = 0;
            }
            if (x > 100 && d > 0) {
                var v = k.length - d;
                while (m < v && x > k[m]) {
                    x -= k[m];
                    m++;
                }
                if (m >= v) {
                    var u = 0;
                    for (var z = v; z < k.length; z++) {
                        u += k[z];
                    }
                    if (o === Class50.member368) {
                        q += Math.floor(x / u);
                    }
                    x %= u;
                }
                e();
            }
            while (x > k[m]) {
                x -= k[m];
                m++;
                if (m >= k.length) {
                    if (d !== -1 && o !== Class50.member370) {
                        m -= d;
                        if (o === Class50.member368) {
                            q++;
                        }
                    }
                    if (q >= c || m < 0 || m >= k.length) {
                        t = true;
                        return;
                    }
                }
                e();
            }
            b = h - x;
        };
        var e = function () {
            j = m + 1;
            if (j >= k.length) {
                if (d === -1 && r) {
                    j = 0;
                } else {
                    j -= d;
                }
                if (j < 0 || j >= k.length) {
                    j = m;
                }
            }
        };
        i.member2002 = function () {
            return h - b;
        };
        s = undefined;
        return i;
    };
    return a;
}();