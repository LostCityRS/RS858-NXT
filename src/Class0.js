export var Class0 = function () {
    var b = {};
    var j = false;
    var i = {};
    var h = false;
    var c = false;
    var a = function () {
        var k = self;
        if (k === undefined) {
            k = window;
        }
        if (k.performance !== undefined) {
            if (k.performance.now !== undefined && k.performance.timing !== undefined) {
                return k.performance.now() + k.performance.timing.navigationStart;
            }
            if (k.performance.webkitNow !== undefined && k.performance.timing !== undefined) {
                return k.performance.webkitNow() + k.performance.timing.navigationStart;
            }
        }
        if (!h) {
            if (false) {
            }
            h = true;
        }
        return Date.now();
    };
    var e = false;
    var d = function (k, m) {
        return k + (m !== undefined ? '(' + m + ')' : '');
    };
    var g = function (k, m) {
        var n = i[k];
        if (n === undefined) {
            n = i[k] = {
                name: k,
                member0: 0,
                member1: 0,
                member2: false,
                member3: 0,
                member4: {}
            };
        }
        var o = n;
        if (m !== undefined) {
            if (n[m] !== undefined) {
                o = n[m];
            } else {
                o = n[m] = {
                    member2: false,
                    member3: 0
                };
            }
        }
        return o;
    };
    b.member5 = function (k, m) {
        if (e && console.member2790) {
            console.member2790(d(k, m));
        }
        var n = g(k, m);
        if (n.member2) {
            throw new Error('1402 ' + k + '1402 ');
        }
        n.member2 = true;
        n.member3 = a();
    };
    b.member6 = function (k, n) {
        if (e && console.timeEnd) {
            console.timeEnd(d(k, n));
        }
        var o = i[k];
        if (o === undefined) {
            throw new Error('1403 ' + k + '1403 ');
        }
        var q = o;
        if (n !== undefined) {
            q = o[n];
        }
        if (q === undefined) {
            throw new Error('1404 ' + k + '1404 ' + n + '1404 ');
        }
        if (!q.member2) {
            throw new Error('1405 ' + k + (n !== undefined ? '1405 ' + n : '1405 ') + '1405 ');
        }
        q.member2 = false;
        var r = a() - q.member3;
        o.member0 += r;
        o.member1++;
        if (c) {
            var m = 10 * Math.floor(r / 10);
            if (o.member4[m] === undefined) {
                o.member4[m] = 1;
            } else {
                o.member4[m]++;
            }
        }
        if (n !== undefined) {
            delete o[n];
        }
    };
    b.member7 = function (k, m) {
        var n = i[k];
        if (n === undefined) {
            return false;
        }
        var o = n;
        if (m !== undefined) {
            o = n[m];
        }
        if (o === undefined) {
            return false;
        }
        return o.member2;
    };
    b.member8 = function (k, o) {
        var n = g(k);
        n.member1++;
        n.member0 += o;
        if (c) {
            var m = 10 * Math.floor(o / 10);
            if (n.member4[m] === undefined) {
                n.member4[m] = 1;
            } else {
                n.member4[m]++;
            }
        }
    };
    b.member9 = function () {
        if (false) {
        }
    };
    return b;
}();