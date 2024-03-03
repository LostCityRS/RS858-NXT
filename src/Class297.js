export var Class297 = function () {
    var c = {};
    c.member3546 = 0;
    c.member3547 = 1;
    c.member3548 = 2;
    c.member3549 = 3;
    c.member3550 = 4;
    var d = function (m, g, k, h) {
        var e = false;
        var i = undefined;
        var n;
        var j = new XMLHttpRequest();
        if (k !== undefined && k > 0) {
            n = setTimeout(b, k, j);
        }
        if (h !== undefined) {
            j.responseType = h;
        }
        j.onreadystatechange = function () {
            if (this.readyState === c.member3550) {
                e = true;
                if (n !== undefined) {
                    clearTimeout(n);
                }
                if (i !== undefined) {
                    i(j);
                }
            }
        };
        if (g !== undefined) {
            j.open('POST', m, true);
            j.send(g);
        } else {
            j.open('GET', m, true);
            j.send();
        }
        return function (o) {
            i = o;
            if (e === true) {
                i(j);
            }
        };
    };
    c.get = function (i, n, j, m, h) {
        var k = i;
        var e;
        if (j) {
            e = a(n);
        } else {
            var g = k.indexOf('?') !== -1;
            if (n !== undefined && n !== null) {
                k += (g ? '&' : '?') + a(n);
                g = false;
            }
            k += (g ? '&' : '?') + 'antiCachingTimestamp=' + Date.now();
        }
        return d(k, e, m, h);
    };
    var a = function (i) {
        var h = '';
        var g = true;
        if (i !== undefined && i !== null) {
            for (var e in i) {
                h += (g ? '' : '&') + encodeURIComponent(e) + '=' + encodeURIComponent(i[e]);
                g = false;
            }
        }
        return h;
    };
    var b = function (e) {
        if (false) {
        }
        e.abort();
    };
    return c;
}();