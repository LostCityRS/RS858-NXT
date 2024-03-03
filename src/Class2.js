import { Class1 } from 'Class1.js';
import { Class0 } from 'Class0.js';
export var Class2 = function () {
    var a;
    if (self !== undefined) {
        a = self;
    } else {
        a = window;
    }
    a.member45 = function (b, d) {
        var c = function () {
        };
        c.prototype = b.prototype;
        d.prototype = new c();
        d.prototype.member11 = d;
    };
    a.member46 = function (c, b) {
        b.apply(c, Array.prototype.slice.call(arguments, 2));
    };
    a.member47 = null;
    a.member48 = false;
    a.member49 = true;
    a.member50 = true;
    a.member51 = true;
    a.member52 = true;
    if (self.location.href.indexOf('client') === -1 && self.location.href.indexOf('bestiary') === -1 && self.location.href.indexOf('worldviewer') === -1) {
        a.member50 = false;
        a.member51 = false;
        a.member52 = false;
    }
    if (true) {
        a.member53 = Class1;
        a.member54 = Class0;
    } else {
    }
    if (false) {
    }
    if (false) {
    }
    a.member55 = function (d, b) {
        var e = d[b];
        if (e) {
            return e;
        }
        var c = b.charAt(0).toUpperCase() + b.slice(1);
        e = d['webkit' + c];
        if (e) {
            return e;
        }
        e = d['moz' + c];
        if (e) {
            return e;
        }
        e = d['ms' + c];
        if (e) {
            return e;
        }
        return undefined;
    };
    String.prototype.member56 = function (b) {
        return this.indexOf(b, this.length - b.length) !== -1;
    };
    String.prototype.member57 = function (b) {
        return this.indexOf(b) === 0;
    };
    if (!ArrayBuffer.prototype.slice) {
        ArrayBuffer.prototype.slice = function (d, c) {
            if (d === void 0) {
                d = 0;
            }
            if (c === void 0) {
                c = this.byteLength;
            }
            d = Math.floor(d);
            c = Math.floor(c);
            if (d < 0) {
                d += this.byteLength;
            }
            if (c < 0) {
                c += this.byteLength;
            }
            d = Math.min(Math.max(0, d), this.byteLength);
            c = Math.min(Math.max(0, c), this.byteLength);
            if (c - d <= 0) {
                return new ArrayBuffer(0);
            }
            var b = new ArrayBuffer(c - d);
            var g = new Uint8Array(b);
            var e = new Uint8Array(this, d, c - d);
            g.set(e);
            return b;
        };
    }
}();