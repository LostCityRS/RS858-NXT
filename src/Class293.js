export var Class293 = function () {
    var o = {};
    var i = 'debugMonitor.';
    var v = i + 'open';
    var s = i + 'top';
    var x = i + 'left';
    var r = i + 'width';
    var t = i + 'height';
    var u;
    var e, c, k, h;
    var m;
    var y = [];
    o.document = document;
    o.member3468 = function (z) {
        u = z;
    };
    var n = function () {
        for (var z = 0; z < y.length; z++) {
            y[z](o.document);
        }
    };
    var d = function () {
        o.document = m.document;
        n();
    };
    var q = function () {
        j();
        m = undefined;
        o.document = document;
        n();
    };
    var g = function (z) {
        if (z.data === 'loaded') {
            d();
        } else if (z.data === 'beforeUnload') {
            q();
        }
    };
    if (window.addEventListener) {
        window.addEventListener('message', g);
    }
    var j = function () {
        e = m.screenTop;
        c = m.screenLeft;
        k = m.innerWidth;
        h = m.innerHeight;
    };
    var b = function () {
        var z = '';
        if (e !== undefined) {
            z += ',top=' + e;
        }
        if (c !== undefined) {
            z += ',left=' + c;
        }
        if (k !== undefined) {
            z += ',width=' + k;
        }
        if (h !== undefined) {
            z += ',height=' + h;
        }
        return z;
    };
    o.open = function () {
        if (u === undefined) {
            throw new Error('860 ');
        }
        m = window.open(u.url, u.url, u.member3469 + b());
    };
    o.close = function () {
        if (m !== undefined) {
            m.close();
        }
    };
    o.member3470 = function () {
        if (m === undefined) {
            o.open();
        } else {
            o.close();
        }
    };
    o.isOpen = function () {
        return m !== undefined;
    };
    o.member3471 = function (z) {
        localStorage[z + v] = o.isOpen();
        if (o.isOpen()) {
            j();
            localStorage[z + s] = e;
            localStorage[z + x] = c;
            localStorage[z + r] = k;
            localStorage[z + t] = h;
        }
    };
    var a = function (z) {
        var A = localStorage[z];
        if (A === undefined || A === 'undefined') {
            return undefined;
        }
        return parseInt(A);
    };
    o.member3472 = function (A) {
        var z = localStorage[A + v] === 'true';
        e = a(A + s);
        c = a(A + x);
        k = a(A + r);
        h = a(A + t);
        if (z) {
            o.open();
        }
    };
    o.member3473 = function (z) {
        z(o.document);
        y.push(z);
    };
    return o;
}();