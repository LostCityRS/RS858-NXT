import { Class297 } from 'Class297.js';
export var Class812 = function () {
    var g = {};
    var a;
    var d = '';
    g.member3010 = function (h) {
        d = h;
    };
    var b = '';
    var e = '';
    var c = '';
    g.member25 = function (k, h, j, i) {
        a = k;
        b = h;
        e = j;
        c = i;
    };
    g.member10534 = function (i, k) {
        var h = '';
        if (i.member3492 !== undefined && (i.stack === undefined || i.stack.indexOf(i.member3492) === -1)) {
            h += i.member3492 + '\n';
        }
        if (i.stack !== undefined) {
            h += i.stack;
        }
        if (k !== undefined) {
            h += ' | ' + k;
        }
        var j = {
            u: d,
            c: b,
            cs: e,
            n: c,
            uas: navigator.userAgent,
            e: h
        };
        Class297.get(a.member7140.member7141().member7142() + '/clienterror.ws', j);
    };
    return g;
}();