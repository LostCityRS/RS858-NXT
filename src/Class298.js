export var Class298 = function () {
    var D = {};
    var H;
    D.member3551 = 0;
    D.member3552 = 1;
    D.member3553 = 2;
    var s = -1, r = -1;
    var J = [
        false,
        false,
        false
    ];
    var F, E;
    var I = D.member3552;
    D.member3554 = function (L) {
        I = L;
    };
    var t = 0;
    var u = new Array(10);
    var A = 0;
    var G = 0;
    var C = new Array(100);
    var q = 0;
    var m = 0;
    D.member25 = function (L) {
        H = document;
        if (L !== undefined) {
            H = document.getElementById(L);
        }
        if (H === undefined) {
            throw new Error('1191 ' + L);
        }
        H.onmousedown = o;
        H.onmouseup = i;
        H.onmousemove = y;
        H.onmousewheel = v;
        H.member3555 = x;
        H.oncontextmenu = B;
        if (H.addEventListener) {
            H.addEventListener('touchstart', g, false);
            H.addEventListener('touchend', b, false);
            H.addEventListener('touchcancel', b, false);
            H.addEventListener('touchleave', n, false);
            H.addEventListener('touchmove', j, false);
        }
    };
    D.member475 = function () {
        H.onmousedown = null;
        H.onmouseup = null;
        H.onmousemove = null;
        H.onmousewheel = null;
        H.member3555 = null;
        H.oncontextmenu = null;
        if (H.removeEventListener) {
            H.removeEventListener('touchstart', null, false);
            H.removeEventListener('touchend', null, false);
            H.removeEventListener('touchcancel', null, false);
            H.removeEventListener('touchleave', null, false);
            H.removeEventListener('touchmove', null, false);
        }
    };
    D.member3556 = function (L) {
        if (J[L]) {
            return true;
        } else {
            return false;
        }
    };
    var k = D.member3556;
    D.member3557 = function () {
        for (var L = 0; L < J.length; L++) {
            if (J[L]) {
                return true;
            }
        }
        return false;
    };
    var h = D.member3557;
    D.member3558 = function () {
        return {
            x: s,
            y: r
        };
    };
    var e = D.member3558;
    D.member3559 = function () {
        if (G === A) {
            return undefined;
        }
        return u[G];
    };
    var d = D.member3559;
    D.member3560 = function () {
        if (G !== A) {
            G++;
            if (G >= u.length) {
                G = 0;
            }
        }
    };
    var c = D.member3560;
    D.member3561 = function () {
        var L = {
            x: s - F,
            y: r - E
        };
        F = s;
        E = r;
        return L;
    };
    var a = D.member3561;
    D.member3562 = function () {
        var L = t;
        t = 0;
        return L;
    };
    var K = D.member3562;
    var o = function (L) {
        z(L.clientX, L.clientY, L.button);
        L.preventDefault();
        window.focus();
    };
    var i = function (L) {
        J[L.button] = false;
        L.preventDefault();
    };
    D.member3563 = function () {
        if (m === q) {
            return undefined;
        }
        var L = C[m];
        m++;
        if (m >= C.length) {
            m = 0;
        }
        return L;
    };
    var y = function (M) {
        var L = H.getBoundingClientRect();
        s = M.clientX - L.left;
        r = M.clientY - L.top;
        C[q] = {
            x: s,
            y: r,
            member3564: M.timeStamp
        };
        q++;
        if (q >= C.length) {
            q = 0;
        }
        if (q === m) {
            m++;
            if (m >= C.length) {
                m = 0;
            }
        }
        M.preventDefault();
    };
    var v = function (L) {
        t += L.wheelDelta;
        L.preventDefault();
    };
    var x = function (M) {
        for (var L = 0; L < J.length; L++) {
            J[L] = false;
        }
    };
    var B = function (L) {
        return false;
    };
    var g = function (L) {
        var M = L.targetTouches[0];
        z(M.pageX, M.pageY, I);
        s = M.pageX;
        r = M.pageY;
        L.preventDefault();
    };
    var b = function (L) {
        J[I] = false;
        L.preventDefault();
    };
    var n = function (L) {
    };
    var j = function (L) {
        var M = L.targetTouches[0];
        s = M.pageX;
        r = M.pageY;
        L.preventDefault();
    };
    var z = function (L, O, M) {
        var N = H.getBoundingClientRect();
        L -= N.left;
        O -= N.top;
        J[M] = true;
        F = L;
        E = O;
        u[A] = {
            position: {
                x: s,
                y: r
            },
            button: M,
            timeStamp: Date.now()
        };
        A++;
        if (A >= u.length) {
            A = 0;
        }
        if (A === G) {
            G++;
            if (G >= u.length) {
                G = 0;
            }
        }
    };
    return D;
}();