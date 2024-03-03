import { Class309 } from 'Class309.js';
import { Class311 } from 'Class311.js';
import { Class262 } from 'Class262.js';
import { Priority } from 'Class96.js';
import { Class93 } from 'Class93.js';
export var Class330 = function () {
    var a = function (q, b, o, h, c) {
        var i = {};
        var k = [];
        var e = Class309.member3660;
        i.member3665 = function () {
            return e;
        };
        var j;
        i.getData = function () {
            if (j !== null && j !== undefined) {
                return j.data;
            } else {
                return undefined;
            }
        };
        var n = function () {
            if (j !== null && j !== undefined && j.data !== undefined && j.data !== null) {
                return j.data.byteLength;
            } else {
                return undefined;
            }
        };
        i.member3685 = n;
        var g = function () {
            var r = Class311(h);
            r.member3331(i);
            return r;
        };
        i.member3686 = g;
        i.member3680 = function () {
            return false;
        };
        i.member2794 = function () {
            return Class262.member3036;
        };
        i.member3687 = function () {
            return o;
        };
        i.member3295 = function () {
            m();
        };
        var m = function () {
            if (e === Class309.member3660) {
                j = q.getFile(b, o, 0, Priority.member841, Class93.member797);
                if (j === undefined) {
                    e = Class309.member3304;
                    return;
                }
                if (j !== NULL) {
                    d();
                    e = Class309.member3661;
                    if (c !== undefined) {
                        c(i, n(), o, false);
                    }
                }
            }
        };
        i.member3359 = function (s, r) {
            if (k.length <= s || k[s] === null) {
                k.push(r);
            }
        };
        i.member3329 = function (r) {
            if (k.length > r) {
                return k[r];
            }
            return undefined;
        };
        i.member3779 = function () {
            var s = 0;
            for (var r = 0; r < k.length; r++) {
                s += k[r].length * k[r].sampleRate * k[r].numberOfChannels * 2;
            }
            return s;
        };
        i.member3780 = function (s) {
            if (k.length <= s) {
                return undefined;
            }
            var r = k[s].length * k[s].sampleRate * k[s].numberOfChannels * 2;
            return r;
        };
        var d = function () {
        };
        return i;
    };
    return a;
}();