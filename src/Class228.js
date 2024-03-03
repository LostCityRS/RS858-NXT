export var Class228 = function (h) {
    var t = {};
    var j = 1;
    if (h !== undefined && h.member2750 !== undefined) {
        j = h.member2750;
    }
    var k = 'next';
    var v = 'prev';
    var s = 'unlink';
    if (j !== 1) {
        k = k + j;
        v = v + j;
        s = s + j;
    }
    var n = {};
    n[v] = n;
    n[k] = n;
    var m = n;
    var c = 0;
    var i = -1;
    if (h !== undefined && h.member2751 !== undefined) {
        i = h.member2751;
    }
    var o = function (A, z) {
        var x = n;
        for (var B = e(); B !== null; B = b()) {
            if (z > B.priority) {
                d(A, B, z);
                if (i !== -1 && c > i) {
                    var y = a();
                    if (y.member2752 !== undefined) {
                        y.member2752();
                    }
                    y[s]();
                }
                return true;
            }
        }
        if (i === -1 || c < i) {
            d(A, n, z);
            return true;
        } else {
            return false;
        }
    };
    t.add = o;
    var d = function (x, z, y) {
        z[v][k] = x;
        x[v] = z[v];
        z[v] = x;
        x[k] = z;
        x.priority = y;
        r(x);
        c++;
    };
    var u = function () {
        for (var x = e(); x !== null; x = b()) {
            x[s]();
        }
        n[k] = n;
        n[v] = n;
        c = 0;
    };
    t.member301 = u;
    var g = function () {
        return c;
    };
    t.member890 = g;
    t.member2753 = function () {
        return c === i;
    };
    t.member2754 = function (y) {
        if (c === i) {
            var x = a();
            if (x !== null) {
                return y > x.priority;
            }
        } else {
            return true;
        }
    };
    var e = function () {
        if (n[k] === n) {
            return null;
        } else {
            m = n[k][k];
            return n[k];
        }
    };
    t.member776 = e;
    var b = function () {
        if (m === n) {
            return null;
        } else {
            var x = m;
            m = m[k];
            return x;
        }
    };
    t.member777 = b;
    var a = function () {
        if (n[v] === n) {
            return null;
        } else {
            return n[v];
        }
    };
    t.member891 = a;
    var r = function (x) {
        if (x[s] !== undefined) {
            throw new Error('891 ');
        }
        x[s] = q;
    };
    var q = function () {
        this[v][k] = this[k];
        this[k][v] = this[v];
        this[v] = undefined;
        this[k] = undefined;
        c--;
        this[s] = undefined;
    };
    h = undefined;
    return t;
};