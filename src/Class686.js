import { Class105 } from 'Class105.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { QuickChatPhraseType } from 'Class548.js';
export var QuickChatPhraseTypeList = function (i) {
    var r = {};
    var t;
    var s;
    var q;
    var g;
    var h = 0;
    r.member2975 = function () {
        return h;
    };
    var j = 0;
    r.member9881 = function () {
        return j;
    };
    var o = Class105({ member895: 512 });
    var m = 1;
    var a = 32768;
    r.member8729 = function () {
        return a;
    };
    var n = a - 1;
    var k = undefined;
    r.member9882 = function (z) {
        return k[z];
    };
    var c = 0;
    var b = function () {
        return c >= h + j && h !== 0 && j !== 0;
    };
    r.member9745 = b;
    var y = function () {
        if (k === undefined) {
            k = new Array(h + j);
        }
        if (c === h + j) {
            return;
        }
        for (var z = 0; z < 100 && c <= h + j; z++) {
            var B = c;
            if (B >= h) {
                B = c - h + a;
            }
            var A = u(B);
            if (A === NULL) {
                return;
            }
            if (A !== undefined) {
                k[c] = {
                    id: A.getID(),
                    text: A.member8731(),
                    member8722: A.member8723()
                };
            }
            c++;
        }
    };
    r.member9883 = y;
    var x;
    if (i.member2739 !== undefined && i.member3992 !== undefined && i.member995 !== undefined && i.member9746 !== undefined) {
        t = i.member2739;
        s = i.member3992;
        q = i.member995;
        x = i.member9746;
        h = q.member1439(Class95.member824).member1440(m);
        j = q.member1439(Class95.member825).member1440(m);
    } else {
        throw new Error('897 ');
    }
    var u = function (C) {
        var z = o.find(C);
        if (z === NULL) {
            var A = C >= a;
            var B;
            if (A) {
                B = q.getFile(Class95.member825, m, C & n, Priority.member840);
            } else {
                B = q.getFile(Class95.member824, m, C, Priority.member840);
            }
            if (B === NULL) {
                return NULL;
            }
            z = QuickChatPhraseType(C, r);
            if (B !== undefined) {
                z.decode(B);
                z.postDecode();
            }
            o.put(z, 1, C);
        }
        return z;
    };
    r.list = u;
    var v = function (C, A, B) {
        var z = x.member8730(C, A, B);
        if (z !== undefined) {
            return z;
        }
        return B.toString();
    };
    r.member8730 = v;
    var e = function () {
        o.member301();
    };
    r.member8696 = e;
    var d = function (z) {
        o.member905(z * 10);
    };
    r.member8697 = d;
    i = undefined;
    return r;
};