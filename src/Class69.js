export var Class69 = function () {
    var i = {};
    var m;
    var q;
    i.member25 = function (s, t) {
        q = s;
        m = new Array(q.length);
        for (var r = 0; r < q.length; r++) {
            m[r] = {
                cache: new Array(t[r]),
                available: 0
            };
        }
    };
    var c = i.member25;
    i.member488 = function (u) {
        if (q === undefined) {
            return new ArrayBuffer(u);
        }
        for (var r = 0; r < q.length; r++) {
            if (q[r] >= u) {
                var t = m[r];
                if (t.available > 0) {
                    var s = t.cache[--t.available];
                    delete t.cache[t.available];
                    return s;
                } else {
                    return new ArrayBuffer(q[r]);
                }
            }
        }
        throw new Error('1021 ' + u);
    };
    var g = i.member488;
    i.member489 = function (t) {
        if (q === undefined) {
            return;
        }
        for (var r = 0; r < q.length; r++) {
            if (t.byteLength === q[r]) {
                var s = m[r];
                if (s.available < s.cache.length) {
                    s.cache[s.available++] = t;
                }
                return;
            }
        }
        throw new Error('1022 ' + t.byteLength);
    };
    var e = i.member489;
    var a = null;
    var d = null;
    var b = 1000;
    var h = 1001;
    var k = function (r) {
        d = r;
    };
    var j = function (r) {
        if (a === null) {
            a = new Array(1);
            a[0] = r;
        } else {
            a[a.length] = r;
        }
    };
    var n = function (y) {
        var z = y.data.member59;
        if (z === b) {
        } else if (z === h) {
            var x = y.data.suppliedBuffers;
            for (var r = 0; r < x.length; r++) {
                var v = x[r].size;
                for (var u = 0; u < q.length; u++) {
                    if (v === q[u]) {
                        var t = m[u];
                        for (var s = 0; s < x[r].buffers.length; s++) {
                            t.cache[t.available++] = x[r].buffers[s];
                        }
                        break;
                    }
                }
            }
        } else {
            throw new Error('1023 ' + z);
        }
    };
    var o = function () {
    };
    return i;
}();