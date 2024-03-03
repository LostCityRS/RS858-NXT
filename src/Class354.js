import { Class232 } from 'Class232.js';
export var Class354 = function () {
    var c = {};
    var a = { data: null };
    var b = { data: null };
    Class232.member2770(function (e, d) {
        if (c.onmessage !== undefined) {
            b.data = e;
            c.onmessage(b);
        }
    });
    c.postMessage = function (e, d) {
        a.data = e;
        Class232.onmessage(a);
    };
    return c;
}();