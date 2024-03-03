import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class427 } from 'Class427.js';
export var Class513 = function () {
    var d = {};
    var j;
    var k = null;
    var c = function (m) {
        j = m;
    };
    d.member25 = c;
    var e = function () {
        if (j.member1437(Class95.member823)) {
            var r = j.member1439(Class95.member823);
            if (r === member47) {
                return false;
            }
            var x = true;
            var u = 0;
            var n = r.member3263(u);
            for (var q = 0; q < n.length; q++) {
                var v = j.member1551(Class95.member823, u, n[q]);
                if (v === false) {
                    x = false;
                }
            }
            if (!x) {
                return false;
            }
            var t = 1;
            var o = r.member3263(t);
            for (var q = 0; q < o.length; q++) {
                var v = j.member1551(Class95.member823, t, o[q]);
                if (v === false) {
                    x = false;
                }
            }
            if (!x) {
                return false;
            }
            k = new Array(n.length);
            for (var q = 0; q < n.length; q++) {
                var m = j.getFile(Class95.member823, u, n[q], Class96.member840);
                var s = j.getFile(Class95.member823, t, o[q], Class96.member840);
                if (m !== undefined && s !== undefined) {
                    k[q] = Class427({
                        member6168: m,
                        member6154: s,
                        member625: n[q],
                        member995: j
                    });
                }
            }
            return true;
        } else {
            return false;
        }
    };
    var b = function () {
        if (k === null && !e()) {
            return member47;
        }
        return k;
    };
    d.member8329 = b;
    var a = function (o) {
        if (k === null && !e()) {
            return member47;
        }
        var n = new Array(0);
        for (var m = 0; m < k.length; m++) {
            if (k[m].member6201(o)) {
                n[n.length] = k[m];
            }
        }
        return n;
    };
    d.member8330 = a;
    var i = function (n) {
        if (k === null && !e()) {
            return member47;
        }
        for (var m = 0; m < k.length; m++) {
            if (k[m].member6196() && k[m].member6201(n)) {
                return k[m];
            }
        }
        return undefined;
    };
    d.member8331 = i;
    var h = function (m) {
        if (k === null && !e()) {
            return member47;
        }
        for (var n = 0; n < k.length; n++) {
            if (k[n].member6192() === m) {
                return k[n];
            }
        }
        return undefined;
    };
    d.member8332 = h;
    var g = function (m) {
        if (k === null && !e()) {
            return member47;
        }
        for (var n = 0; n < k.length; n++) {
            if (k[n].member6191() === m) {
                return k[n];
            }
        }
        return undefined;
    };
    d.member8333 = g;
    return d;
}();