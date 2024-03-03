import { Class29 } from 'Class29.js';
import { Class63 } from 'Class63.js';
export var Class65 = function () {
    var b = function (m) {
        this.list = new Array(0);
        if (m !== undefined) {
            try {
                var c = 0;
                while (true) {
                    var i = m.indexOf(':', c);
                    var j = parseInt(m.substring(c, i));
                    c = i + 1;
                    i = m.indexOf(':', c);
                    var d = Class29();
                    var n = d.member306(m.substring(c, i));
                    c = i + 1;
                    var g = m.indexOf(',', c);
                    var k = parseInt(m.substring(c, g));
                    c = g + 1;
                    if (!isNaN(j) && n) {
                        this.member422(Class63.member418(j), d, k);
                    }
                    if (c >= m.length) {
                        break;
                    }
                }
            } catch (h) {
                if (false) {
                }
            }
        }
    };
    var a = function (d, c, e) {
        this.member424 = d;
        this.member425 = c;
        this.member426 = e;
    };
    b.prototype.member427 = function () {
        return this.list;
    };
    b.prototype.getSize = function () {
        return this.list.length;
    };
    b.prototype.member422 = function (e, d, c) {
        this.list.push(new a(e, d, c));
    };
    b.prototype.member428 = function (d) {
        for (var c = 0; c < this.list.length; c++) {
            var e = this.list[c];
            if (e.member425.member291(d)) {
                this.list.splice(c, 1);
                c--;
            }
        }
    };
    b.prototype.member429 = function (e) {
        for (var c = 0; c < this.list.length; c++) {
            var d = this.list[c];
            if (d.member426 < e) {
                this.list.splice(c, 1);
                c--;
            }
        }
    };
    b.prototype.member430 = function () {
        var e = '';
        for (var c = 0; c < this.list.length; c++) {
            var d = this.list[c];
            e += d.member424.id + ':' + d.member425.toString() + ':' + d.member426 + ',';
        }
        return e;
    };
    if (false) {
    }
    return function (c) {
        return new b(c);
    };
}();