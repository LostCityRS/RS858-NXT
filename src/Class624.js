export var Class624 = function () {
    var c = {};
    c.member9303 = function (m, j) {
        if (m.length < 6) {
            throw new Error();
        }
        if (m.length % 2 !== 0) {
            throw new Error();
        }
        var i = new Array(0);
        for (var h = 0; h < m.length; h += 2) {
            i.push({
                x: m[h],
                y: m[h + 1],
                member8568: h / 2
            });
        }
        if (i[0].x === i[i.length - 1].x && i[0].y === i[i.length - 1].y) {
            throw new Error('1817 ');
        }
        var k = b(i);
        if (j === undefined) {
            j = new Array(0);
        }
        var g;
        while ((g = a(i, j, k)) === true) {
        }
        if (g === undefined) {
            throw new Error('1818 ');
        }
        return j;
    };
    var a = function (i, s, m) {
        for (var n = 0; n < i.length; n++) {
            var r = n - 1;
            var q = n;
            var o = n + 1;
            if (r < 0) {
                r = i.length - 1;
            }
            if (o >= i.length) {
                o = 0;
            }
            var g = e(i, r, q, o);
            if (!m) {
                g = -g;
            }
            if (g < 0) {
                var h = true;
                for (var k = 0; k < i.length && h; k++) {
                    if (k !== r && k !== q && k !== o) {
                        h = !d(i, k, r, q, o);
                    }
                }
                if (h) {
                    if (m) {
                        s.push(i[o].member8568);
                        s.push(i[q].member8568);
                        s.push(i[r].member8568);
                    } else {
                        s.push(i[r].member8568);
                        s.push(i[q].member8568);
                        s.push(i[o].member8568);
                    }
                    i.splice(n, 1);
                    return i.length > 2;
                }
            }
        }
        return undefined;
    };
    var b = function (n) {
        var i = 0;
        var h = 0;
        for (var g = 0; g < n.length; g++) {
            var m = g - 1;
            var k = g;
            var j = g + 1;
            if (m < 0) {
                m = n.length - 1;
            }
            if (j >= n.length) {
                j = 0;
            }
            if (e(n, m, k, j) < 0) {
                h++;
            } else {
                i++;
            }
        }
        if (h > i) {
            return true;
        } else {
            false;
        }
    };
    var d = function (o, h, n, m, k) {
        var j = e(o, h, n, m) < 0;
        var i = e(o, h, m, k) < 0;
        var g = e(o, h, k, n) < 0;
        return j === i && j === g;
    };
    var e = function (j, i, h, g) {
        return (j[i].x - j[g].x) * (j[h].y - j[g].y) - (j[h].x - j[g].x) * (j[i].y - j[g].y);
    };
    return c;
}();