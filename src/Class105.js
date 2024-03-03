import { Class103 } from 'Class103.js';
export var Class105 = function () {
    var a = function (b) {
        this.member895 = 0;
        this.member896 = 0;
        this.member897 = null;
        this.member898 = null;
        this.data = {};
        this.member899 = Class103();
        this.member900 = 0;
        if (b.member895 !== undefined) {
            this.member895 = b.member895;
            this.member896 = this.member895;
            if (b.member897 !== undefined && b.member897 !== null) {
                this.member897 = b.member897;
            }
            if (b.member898 !== undefined && b.member898 !== null) {
                this.member898 = b.member898;
            }
        } else {
            throw new Error('1524 ');
        }
    };
    a.prototype.find = function (c) {
        var b = this.data[c];
        if (b !== undefined && b !== null) {
            this.member899.unlink(b);
            this.member899.member887(b);
            b.member901 = this.member900;
        }
        if (b === undefined) {
            return null;
        } else {
            return b;
        }
    };
    a.prototype.remove = function (b) {
        this.member902(this.find(b));
    };
    a.prototype.member902 = function (b) {
        if (b !== null) {
            this.data[b.member903] = null;
            this.member899.unlink(b);
            if (this.member897 !== null) {
                this.member897(b);
            }
            this.member896 += b.member904;
        }
    };
    a.prototype.put = function (b, d, e) {
        if (d > this.member895) {
            throw new Error('1525 ' + d + '1525 ');
        }
        this.remove(e);
        this.member896 -= d;
        while (this.member896 < 0) {
            var c = this.member899.member776();
            this.member902(c);
        }
        b.member903 = e;
        b.member904 = d;
        b.member901 = this.member900;
        this.data[e] = b;
        this.member899.member887(b);
        if (this.member898 !== null) {
            this.member898(b);
        }
    };
    a.prototype.member905 = function (b) {
        this.member900++;
        for (var c = this.member899.member776(); c !== null; c = this.member899.member777()) {
            if (this.member900 - c.member901 > b) {
                this.member902(c);
            } else {
                break;
            }
        }
    };
    a.prototype.member301 = function () {
        for (var b = this.member899.member776(); b !== null; b = this.member899.member777()) {
            this.member902(b);
        }
        this.member899.member301();
        this.member896 = this.member895;
    };
    a.prototype.getRemaining = function () {
        return this.member896;
    };
    a.prototype.member907 = function () {
        return this.member895;
    };
    a.prototype.member427 = function () {
        return this.member899;
    };
    return function (b) {
        return new a(b);
    };
}();