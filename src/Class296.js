export var Class296 = function () {
    var m = {};
    var a = 0.2;
    m.member3493 = function () {
        return a;
    };
    m.member3494 = 0;
    m.member3495 = 1;
    m.member3496 = 2;
    m.member3497 = 3;
    m.member3498 = 4;
    m.member3499 = 32767;
    m.member3500 = -32768;
    m.member3501 = m.member3499 / 5;
    m.member3502 = 0;
    m.member3503 = 1;
    m.member3504 = 2;
    m.member3505 = 255;
    m.member3506 = 0;
    m.member3507 = 1;
    m.member3508 = 2;
    m.member3509 = 3;
    m.member3510 = 4;
    m.member3511 = 5;
    m.member3512 = 6;
    m.member3513 = 7;
    m.member3514 = 8;
    m.member3515 = 9;
    m.member3516 = 10;
    m.member3517 = 11;
    m.member3518 = 12;
    m.member3519 = 13;
    m.member3520 = 14;
    m.member3521 = 15;
    m.member3522 = 16;
    m.member3523 = 12;
    m.member3524 = 13;
    m.member3525 = 14;
    m.member3526 = 15;
    m.member3527 = 8;
    m.member3528 = 9;
    m.member3529 = 5;
    m.member3530 = 4;
    m.member3531 = 6;
    m.member3532 = 7;
    m.member3533 = 0;
    m.member3534 = 1;
    m.member3535 = 2;
    m.member3536 = 3;
    m.member3537 = 16;
    var d = function () {
        window.gamepadconnected = r;
        window.gamepaddisconnected = o;
    };
    m.member25 = d;
    var j = new Array(m.member3522);
    m.member3538 = function (t) {
        if (t !== undefined) {
            return j[t];
        }
        return j;
    };
    var q = new Array(m.member3498);
    m.member3539 = function (t) {
        if (t !== undefined) {
            return q[t] / m.member3499;
        }
        return q;
    };
    var n = new Array(m.member3504);
    m.member3540 = function (t) {
        if (t !== undefined) {
            return n[t];
        }
        return n;
    };
    var g = function (t) {
        if (t === m.member3506) {
            return m.member3523;
        }
        if (t === m.member3507) {
            return m.member3524;
        }
        if (t === m.member3508) {
            return m.member3525;
        }
        if (t === m.member3509) {
            return m.member3526;
        }
        if (t === m.member3510) {
            return m.member3527;
        }
        if (t === m.member3511) {
            return m.member3528;
        }
        if (t === m.member3514) {
            return m.member3529;
        }
        if (t === m.member3515) {
            return m.member3530;
        }
        if (t === m.member3516) {
            return m.member3531;
        }
        if (t === m.member3517) {
            return m.member3532;
        }
        if (t === m.member3518) {
            return m.member3533;
        }
        if (t === m.member3519) {
            return m.member3534;
        }
        if (t === m.member3520) {
            return m.member3535;
        }
        if (t === m.member3521) {
            return m.member3536;
        }
    };
    var b = function () {
        var y = navigator.getGamepads();
        var x = y[0];
        if (x !== undefined) {
            for (var u = 0; u < x.buttons.length; u++) {
                var v = x.buttons[u].value;
                if (u === m.member3512) {
                    n[m.member3502] = v * m.member3505;
                } else if (u === m.member3513) {
                    n[m.member3503] = v * m.member3505;
                } else if (v !== j[u]) {
                    h(g(u), v);
                    j[u] = v;
                }
            }
            for (var t = 0; t < x.axes.length; t++) {
                var v = x.axes[t];
                if (t === m.member3495 || t === m.member3497) {
                    v = -v;
                }
                q[t] = v * m.member3499;
            }
        }
    };
    m.member78 = b;
    var k = 0;
    m.member3541 = function () {
        return k;
    };
    var s = new Array(m.member3522);
    m.member3542 = function () {
        return s;
    };
    var c = new Array(m.member3522);
    var i = 0;
    var e = 0;
    var h = function (t, u) {
        k += u > 0 ? 1 : -1;
        s[t] = u;
        if (c[i] === undefined) {
            c[i] = {};
        }
        c[i].member3543 = t;
        c[i].value = u;
        i++;
        if (i >= c.length) {
            i = 0;
        }
        if (i === e) {
            e++;
            if (e >= c.length) {
                e = 0;
            }
        }
    };
    m.member3544 = function () {
        if (e === i) {
            return undefined;
        } else {
            return c[e];
        }
    };
    m.member3545 = function () {
        if (e !== i) {
            e++;
            if (e >= c.length) {
                e = 0;
            }
        }
    };
    var r = function (t) {
        if (false) {
        }
    };
    var o = function (t) {
        if (false) {
        }
    };
    return m;
}();