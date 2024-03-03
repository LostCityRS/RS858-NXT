import { Class82 } from 'Class82.js';
export var Class83 = function () {
    var b = {};
    var a = new Array(Class82.member616);
    b.member25 = function (d) {
        for (var c = 0; c < a.length; c++) {
            a[c] = {
                data: new Array(),
                size: 0,
                member32: 0
            };
        }
    };
    b.member475 = function () {
    };
    b.member617 = function () {
        for (var c = 0; c < a.length; c++) {
            a[c].member32 = 0;
        }
    };
    b.member618 = function (c) {
        a[c].member32 = 0;
    };
    b.member619 = function (e, c) {
        var d = a[e];
        if (d.member32 < d.size) {
            return d.data[d.member32++];
        }
        d.data[d.size++] = c();
        return d.data[d.member32++];
    };
    return b;
}();