import { Class124 } from 'Class124.js';
export var Class225 = function (o) {
    var d = {};
    var e;
    var j;
    var a = 10;
    var h = 10000;
    var n = 100;
    var m = 0;
    var g = new Array(a);
    var i = new Array(a);
    var k = function () {
        for (var q = 0; q < i.length; q++) {
            var r = i[q];
            if (r !== undefined) {
                r.member2736 -= n;
                if (r.member2736 <= 0) {
                    i.splice(q, 1);
                    q--;
                    m--;
                }
            }
        }
    };
    d.member2737 = k;
    if (o.member2738 !== undefined && o.member2739 !== undefined) {
        e = o.member2738;
        j = o.member2739;
        setInterval(k, n);
    } else {
        throw new Error('1160 ');
    }
    d.member2740 = function (q) {
        e = q;
    };
    d.member2741 = function (u, C, t, s, r, q, A, B) {
        if (m >= a) {
            return false;
        }
        for (var y = 0; y < i.length; y++) {
            var v = i[y];
            if (v !== undefined) {
                if (v.member2693 === u && v.member1204 === C) {
                    return;
                }
            }
        }
        var z = new XMLHttpRequest();
        var v = {
            member2742: z,
            member2693: u,
            member1204: C,
            member2696: r,
            member2697: q,
            member2694: s,
            member2736: h
        };
        g.push(v);
        i.push(v);
        z.onreadystatechange = function () {
            if (z.readyState !== 4) {
                return;
            }
            if (z.status === 200) {
                b(v);
            } else {
                v.member2696(u, C, member47, s, q);
                c(v, false);
            }
        };
        var x;
        if (A !== undefined && B !== undefined) {
            x = '&c=' + A + '&v=' + B;
        } else {
            x = '&cb=' + Date.now();
        }
        z.open('GET', e + '/ms?m=' + j.id + '&a=' + u + '&g=' + C + x, true);
        z.overrideMimeType('text/plain;charset=x-user-defined');
        z.responseType = 'arraybuffer';
        z.send(null);
        m++;
        return true;
    };
    var b = function (r) {
        var q = r.member2742.response;
        if (q !== null && q !== undefined) {
            var s = Class124(undefined, q);
            r.member2696(r.member2693, r.member1204, s, r.member2694, r.member2697);
            c(r, true);
        } else {
            r.member2696(r.member2693, r.member1204, member47, r.member2694, r.member2697);
            c(r, false);
        }
    };
    var c = function (r, s) {
        if (s !== undefined && s === true) {
            for (var q = 0; q < i.length; q++) {
                if (r === i[q]) {
                    i.splice(q, 1);
                    break;
                }
            }
        }
        for (var q = 0; q < g.length; q++) {
            if (r === g[q]) {
                g.splice(q, 1);
                m--;
                return;
            }
        }
        throw new Error('1161 ');
    };
    o = undefined;
    return d;
};