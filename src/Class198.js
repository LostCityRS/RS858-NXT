export var Class198 = function () {
    var d = {};
    d.member2330 = 0;
    d.member2331 = 1;
    d.member2332 = 2;
    d.member2333 = 3;
    d.member2334 = 9;
    d.member2335 = 4;
    d.member2336 = 5;
    d.member2337 = 6;
    d.member2338 = 7;
    d.member2339 = 8;
    d.member2340 = 12;
    d.member2341 = 13;
    d.member2342 = 14;
    d.member2343 = 15;
    d.member2344 = 16;
    d.member2345 = 17;
    d.member2346 = 18;
    d.member2347 = 19;
    d.member2348 = 20;
    d.member2349 = 21;
    d.member2350 = 10;
    d.member2351 = 11;
    d.member2352 = 22;
    d.member2353 = function (g) {
        return g >= d.member2330 && g <= d.member2333 || g === d.member2334;
    };
    d.member2354 = function (g) {
        return g >= d.member2335 && g <= d.member2339;
    };
    d.member2355 = function (g) {
        return g >= d.member2340 && g <= d.member2349;
    };
    d.member2356 = function (g) {
        return g >= d.member2346 && g <= d.member2349;
    };
    d.member2357 = function (g) {
        return g === d.member2336 || g === d.member2337;
    };
    d.member2358 = function (g) {
        return g === d.member2339 || g === d.member2338 || g === d.member2337;
    };
    d.member2359 = function (g) {
        return g === d.member2350 || g === d.member2351;
    };
    d.member2360 = function (g) {
        if (g <= d.member2333) {
            return 0;
        }
        if (g <= d.member2339) {
            return 1;
        }
        if (g <= d.member2349) {
            return 2;
        }
        return 3;
    };
    var b = [
            1,
            0,
            -1,
            0
        ], e = [
            0,
            -1,
            0,
            1
        ];
    var c = [
            1,
            -1,
            -1,
            1
        ], a = [
            -1,
            -1,
            1,
            1
        ];
    d.member2361 = function (n, k, t, s, u) {
        if (u === undefined) {
            u = {};
        }
        var h = 0, g = 0;
        var j = 0, i = 0;
        var r = 0;
        var m = k * Math.PI / 2;
        if (d.member2354(n)) {
            if (n === d.member2336) {
                if (t !== -1) {
                    r = t + 1;
                } else {
                    r = 65;
                }
                h = r * b[k];
                g = r * e[k];
            } else if (n === d.member2337 || s) {
                if (t !== -1) {
                    r = t / 2 + 1;
                } else {
                    r = 33;
                }
                h = r * c[k];
                g = r * a[k];
            }
            if (d.member2358(n)) {
                if (n === d.member2338) {
                    m += Math.PI;
                }
                var q = 180, o = -180;
                j = q * Math.cos(-m) - o * Math.sin(-m);
                i = q * Math.sin(-m) + o * Math.cos(-m);
                m += Math.PI / 4;
            }
        }
        if (n === d.member2351) {
            m += Math.PI / 4;
        }
        u.member2362 = m;
        u.member2363 = h + j;
        u.member2364 = g + i;
        return u;
    };
    return d;
}();