import { Class154 } from 'Class154.js';
import { Class716 } from 'Class716.js';
export var Class717 = function () {
    var c = {};
    var e = new Float32Array(4);
    var h;
    var i;
    var a;
    var j = false;
    var d = new Array();
    c.member3842 = -1;
    c.member3843 = -1;
    c.member3844 = -1;
    c.member3845 = -1;
    c.member2287 = -1;
    c.member2288 = -1;
    c.member25 = function (k) {
        h = document.getElementById(k.canvasContainerElementID);
        i = document.getElementById(k.canvasElementID);
        i.width = h.offsetWidth;
        i.height = h.offsetHeight;
        a = i.getContext('2d');
        Class154.member25({
            member433: c,
            member995: k.member995
        });
        Class716.member25({
            member433: c,
            member1300: Class154
        });
        c.member3640 = Class716;
        if (false) {
        }
    };
    c.member475 = function () {
    };
    c.member487 = function () {
        if (i.width !== h.offsetWidth) {
            i.width = h.offsetWidth;
        }
        if (i.height !== h.offsetHeight) {
            i.height = h.offsetHeight;
        }
    };
    c.member486 = function () {
        Class154.member486();
    };
    c.member3854 = function () {
    };
    c.member588 = function () {
        return i.width;
    };
    c.member589 = function () {
        return i.height;
    };
    c.member10001 = function (t, I, y, G, J, E, z, x, v, u, r) {
        v = 1 - v;
        r = 1 - r;
        c.member3815(e);
        if (e[0] !== -1) {
            var F = E - G;
            var C = z - J;
            var s = u - x;
            var n = r - v;
            if (G < e[0]) {
                x += (e[0] - G) / F * s;
                G = e[0];
            }
            if (J < e[1]) {
                r -= (e[1] - J) / C * n;
                J = e[1];
            }
            if (E > e[2]) {
                u -= (E - e[2]) / F * s;
                E = e[2];
            }
            if (z > e[3]) {
                v += (z - e[3]) / C * n;
                z = e[3];
            }
        }
        var o = Math.floor(I * x);
        var A = Math.floor(y * v);
        var D = Math.floor(I * u);
        var B = Math.floor(y * r);
        var k = D - o;
        var q = B - A;
        if (k === 0 || q === 0) {
            return;
        }
        var L = (E - G) / k;
        var K = (z - J) / q;
        a.save();
        var H = 1;
        var m = G;
        if (L < 0) {
            H = -1;
            m = -E;
        }
        var M = -1;
        var N = -z;
        if (K < 0) {
            M = 1;
            N = J;
        }
        a.scale(H, M);
        a.drawImage(t, o, A, k, q, m, N, k * L, q * K);
        a.restore();
    };
    c.fillRect = function (q, m, n, k, o) {
        c.member3815(e);
        if (e[0] !== -1) {
            if (q < e[0]) {
                n -= e[0] - q;
                q = e[0];
            }
            if (m < e[1]) {
                k -= e[1] - m;
                m = e[1];
            }
            if (q + n > e[2]) {
                n = e[2] - q;
            }
            if (m + k > e[3]) {
                k = e[3] - m;
            }
        }
        if (n <= 0 || k <= 0) {
            return;
        }
        a.save();
        a.fillStyle = 'rgba( ' + (o >> 24 & 255) + ', ' + (o >> 16 & 255) + ', ' + (o >> 8 & 255) + ', ' + (o & 255) / 255 + ' )';
        a.fillRect(q, m, n, k);
        a.restore();
    };
    c.member562 = function (n, v, u) {
        var q = document.createElement('canvas');
        q.width = n;
        q.height = v;
        var m = q.getContext('2d');
        var k = m.createImageData(n, v);
        var t = new Uint32Array(u);
        var s = new Uint32Array(k.data.buffer);
        for (var r = 0; r < v; r++) {
            for (var o = 0; o < n; o++) {
                s[(v - r - 1) * n + o] = t[r * n + o];
            }
        }
        m.putImageData(k, 0, 0);
        return q;
    };
    var b = function (m, k, q, n, o) {
        if (o || m !== c.member3842 || k !== c.member3843 || q !== c.member2287 || n !== c.member2288) {
            if (o || c.member3842 === -1) {
                c.member3842 = m;
                c.member3843 = k;
                c.member3844 = m + q;
                c.member3845 = k + n;
            } else {
                c.member3842 = Math.max(c.member3842, m);
                c.member3843 = Math.max(c.member3843, k);
                c.member3844 = Math.min(c.member3844, m + q);
                c.member3845 = Math.min(c.member3845, k + n);
            }
            c.member2287 = c.member3844 - c.member3842;
            c.member2288 = c.member3845 - c.member3843;
        }
    };
    c.member1344 = function (m, k, o, n) {
        b(m, k, o, n, true);
    };
    c.member3859 = function (m, k, o, n) {
        b(m, k, o, n, false);
    };
    c.member3815 = function (k) {
        k[0] = c.member3842;
        k[1] = c.member3843;
        k[2] = c.member3844;
        k[3] = c.member3845;
    };
    c.getClippingAspectRatio = function () {
        return c.member2287 / c.member2288;
    };
    c.member1342 = function () {
        d.push([
            c.member3842,
            c.member3843,
            c.member2287,
            c.member2288
        ]);
    };
    c.member1343 = function () {
        var k = d.pop();
        b(k[0], k[1], k[2], k[3], true);
    };
    c.member3644 = function () {
        c.member1342();
    };
    c.member3645 = function () {
        c.member1343();
    };
    c.member3814 = function (o, k, m, n) {
        if (c.member3842 === -1) {
            return true;
        }
        if (o > c.member3844 || m < c.member3842 || k > c.member3845 || n < c.member3843) {
            return false;
        }
        return true;
    };
    var g = new Array(0);
    c.member3874 = function (k) {
        g.push(k);
    };
    c.member3875 = function () {
        g.length = 0;
    };
    c.member3876 = function () {
        return g;
    };
    c.member3832 = function () {
        return false;
    };
    c.member1190 = function () {
        return undefined;
    };
    c.member3833 = function () {
        return false;
    };
    c.member553 = function () {
        return false;
    };
    c.member3776 = function () {
        return false;
    };
    c.member860 = function () {
        return false;
    };
    c.member565 = function () {
        return false;
    };
    c.member567 = function () {
        throw new Error('1442 ');
    };
    c.member3834 = function () {
        throw new Error('1443 ');
    };
    c.member571 = function () {
        throw new Error('1444 ');
    };
    c.member3835 = function () {
        throw new Error('1445 ');
    };
    c.member564 = function () {
        return false;
    };
    c.member3836 = function () {
    };
    c.member566 = function () {
        return undefined;
    };
    c.member3837 = function () {
        return false;
    };
    c.member3838 = function () {
        throw new Error('1446 ');
    };
    c.member3839 = function () {
        throw new Error('1447 ');
    };
    c.member3855 = function () {
    };
    c.member3762 = function () {
        return 0;
    };
    c.member3846 = function () {
        return false;
    };
    c.setWireframe = function () {
        throw new Error('1448 ');
    };
    c.member1730 = function () {
        return false;
    };
    c.member590 = function () {
        throw new Error('1449 ');
    };
    c.member586 = function () {
    };
    c.member585 = function () {
    };
    c.member3860 = function () {
        throw new Error('1450 ');
    };
    c.member944 = function () {
        throw new Error('1451 ');
    };
    c.member3861 = function () {
        throw new Error('1452 ');
    };
    c.member942 = function () {
        throw new Error('1453 ');
    };
    c.member1731 = function () {
        return false;
    };
    c.member1732 = function () {
        throw new Error('1454 ');
    };
    c.enableScissorTest = function () {
    };
    c.member978 = function () {
    };
    c.member582 = function () {
    };
    c.member3856 = function () {
        throw new Error('1455 ');
    };
    c.member3857 = function () {
        throw new Error('1456 ');
    };
    c.member3858 = function () {
        throw new Error('1457 ');
    };
    c.member1945 = function () {
        throw new Error('1458 ');
    };
    c.member580 = function () {
        throw new Error('1459 ');
    };
    c.member3247 = function () {
        throw new Error('1460 ');
    };
    c.member1341 = function () {
        throw new Error('1461 ');
    };
    c.member581 = function () {
        throw new Error('1462 ');
    };
    c.bindTexture = function () {
        throw new Error('1463 ');
    };
    c.member587 = function () {
        throw new Error('1464 ');
    };
    c.member2127 = function () {
        throw new Error('1465 ');
    };
    c.member3863 = function () {
        throw new Error('1466 ');
    };
    c.member468 = function () {
        throw new Error('1467 ');
    };
    c.member3864 = function () {
        throw new Error('1468 ');
    };
    c.member3862 = function () {
        throw new Error('1469 ');
    };
    c.member3865 = function () {
        throw new Error('1470 ');
    };
    c.member1632 = function () {
        throw new Error('1471 ');
    };
    c.member3866 = function () {
        throw new Error('1472 ');
    };
    c.member3816 = function () {
        throw new Error('1473 ');
    };
    c.member3867 = function () {
        throw new Error('1474 ');
    };
    c.member1633 = function () {
        throw new Error('1475 ');
    };
    c.member3868 = function () {
        throw new Error('1476 ');
    };
    c.member3450 = function () {
        throw new Error('1477 ');
    };
    c.member2062 = function () {
        throw new Error('1478 ');
    };
    c.member3451 = function () {
        throw new Error('1479 ');
    };
    c.member3869 = function () {
        throw new Error('1480 ');
    };
    c.member3448 = function () {
        throw new Error('1481 ');
    };
    c.member3870 = function () {
        throw new Error('1482 ');
    };
    c.member3447 = function () {
        throw new Error('1483 ');
    };
    c.member3871 = function () {
        throw new Error('1484 ');
    };
    c.member3449 = function () {
        throw new Error('1485 ');
    };
    c.member1892 = function () {
        throw new Error('1486 ');
    };
    c.member2046 = function () {
        throw new Error('1487 ');
    };
    c.member482 = function () {
        throw new Error('1488 ');
    };
    c.member481 = function () {
        throw new Error('1489 ');
    };
    c.member3872 = function () {
        throw new Error('1490 ');
    };
    c.member3873 = function () {
        throw new Error('1491 ');
    };
    return c;
}();