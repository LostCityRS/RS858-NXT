import { Class131 } from 'Class131.js';
export var Class526 = function () {
    var a = function (q) {
        var h = {};
        var o;
        var m;
        var n = new Array(0);
        var i = new Array(0);
        if (q.member2970 !== undefined && q.member8468 !== undefined) {
            o = q.member2970;
            m = q.member8468;
        } else {
            throw new Error('1356 ');
        }
        h.member8469 = function (r) {
            if (r < 0 || r > n.length) {
                return -1;
            } else if (n[r] === undefined) {
                return -1;
            } else {
                return n[r];
            }
        };
        var k = h.member8469;
        h.member8470 = function (r) {
            if (r < 0 || r > i.length) {
                return 0;
            } else if (i[r] === undefined) {
                return 0;
            } else {
                return i[r];
            }
        };
        var j = h.member8470;
        h.member8471 = function (u) {
            var s = 0;
            var t = true;
            for (var v = 0; v < n.length; v++) {
                if (n[v] === -1 || n[v] === undefined) {
                    continue;
                }
                var r = o.member3227(Class131.member1214.member1204, n[v]);
                if (r === member47) {
                    t = false;
                    continue;
                }
                if (r.member8472() === u) {
                    s += i[v];
                }
            }
            if (!t) {
                return member47;
            }
            return s;
        };
        var g = h.member8471;
        h.member8473 = function (t, s) {
            var u = 0;
            var v = true;
            var z = o.member3227(Class131.member1215.member1204, t);
            if (z === member47) {
                return member47;
            }
            for (var y = 0; y < n.length; y++) {
                if (n[y] === -1 || n[y] === undefined) {
                    continue;
                }
                var r = o.member3227(Class131.member1214.member1204, n[y]);
                if (r === member47) {
                    v = false;
                    continue;
                }
                var x = r.getParam(t, z.member6145());
                if (x !== undefined) {
                    if (s) {
                        u += x * i[y];
                    } else {
                        u += x;
                    }
                }
            }
            if (!v) {
                return member47;
            }
            return u;
        };
        var e = h.member8473;
        h.member8474 = function (r) {
            var s = 0;
            for (var t = 0; t < n.length; t++) {
                if (n[t] === -1 || n[t] === undefined) {
                    s++;
                }
            }
            s += r.getSize() - n.length;
            return s;
        };
        var d = h.member8474;
        h.member8475 = function () {
            var r = 0;
            for (var s = 0; s < n.length; s++) {
                if (n[s] !== -1 && n[s] !== undefined) {
                    r++;
                }
            }
            return r;
        };
        h.member8476 = function (r) {
            if (r === -1) {
                return 0;
            }
            var s = 0;
            for (var t = 0; t < i.length; t++) {
                if (n[t] === r) {
                    s += i[t];
                }
            }
            return s;
        };
        var c = h.member8476;
        h.member8477 = function (t, s, r) {
            n[t] = s;
            i[t] = r;
        };
        var b = h.member8477;
        h.member7546 = function (u, v) {
            var x = true;
            for (var s = 0; s < objTypeIDs.length; s++) {
                if (objTypeIDs[s] === undefined || objTypeIDs[s] === -1) {
                    continue;
                }
                var r = o.member3227(Class131.member1214.groupid, objTypeIDs[s]);
                if (r === member47 || !r.member7662(u, 0, null)) {
                    x = false;
                    continue;
                }
            }
            if (!x) {
                return null;
            }
            var t = [];
            for (var s = 0; s < objTypeIDs.length; s++) {
                if (objTypeIDs[s] === undefined || objTypeIDs[s] === -1) {
                    continue;
                }
                var r = o.member3227(Class131.member1214.groupid, objTypeIDs[s]);
                t.push(r.member7546(u, 0, null));
            }
            var y = ModelRaw({ member1876: t });
            if (v !== undefined && v !== null) {
                v.member7919(y);
                v.member7922(y);
            }
            return y;
        };
        q = undefined;
        return h;
    };
    return a;
}();