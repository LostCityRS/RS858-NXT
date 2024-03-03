import { Class317 } from 'Class317.js';
export var Class342 = function () {
    var b = 7;
    var a = function (c) {
        this.member2774;
        this.member3877 = null;
        this.member3878;
        this.member3879;
        this.member3880 = null;
        this.member3881 = null;
        this.member3882 = -1;
        this.member3883 = null;
        this.member3884 = null;
        this.member3885 = null;
        this.member3886 = null;
        this.member3887 = null;
        this.member3888 = null;
        this.member3889 = null;
        this.member3890 = null;
        this.member3891 = null;
        this.member3892 = null;
        this.member3893 = null;
        this.member3894 = null;
        this.member25(c);
    };
    a.prototype.member25 = function (n) {
        if (n.member2774 !== undefined && n.member3877 !== undefined && n.member3878 !== undefined && n.member2698 !== undefined) {
            this.member2774 = n.member2774;
            this.member3877 = n.member3877;
            this.member3878 = n.member3878;
            var e = n.member2698;
            e.member607(0);
            var g = e.member609();
            if (g < b || g > b) {
                throw new Error('1398 ' + g);
            }
            this.member3878 = e.member1074();
            var v = e.member609();
            var h = false;
            if ((v & 1) === 1) {
                h = true;
            }
            var k = false;
            if ((v & 2) === 2) {
                k = true;
            }
            var s = false;
            if ((v & 4) === 4) {
                s = true;
            }
            var r = false;
            if ((v & 8) === 8) {
                r = true;
            }
            this.member3879 = e.member1085();
            var u = 0, z = 0, t = 0;
            this.member3880 = new Uint32Array(this.member3879);
            for (z = 0; z < this.member3879; z++) {
                u += e.member1085();
                this.member3880[z] = u;
                if (u > this.member3882) {
                    this.member3882 = u;
                }
            }
            var o = this.member3882 + 1;
            this.member3883 = new Int32Array(o);
            if (r) {
                this.member3884 = new Int32Array(o);
            }
            if (k) {
                this.member3885 = new Array(o);
            }
            this.member3886 = new Int32Array(o);
            this.member3889 = new Int32Array(o);
            this.member3894 = new Int32Array(o);
            if (h) {
                this.member3881 = {};
                for (z = 0; z < this.member3879; z++) {
                    var c = e.member1074();
                    this.member3881[c.toString()] = this.member3880[z];
                }
            }
            for (z = 0; z < this.member3879; z++) {
                this.member3883[this.member3880[z]] = e.member1074();
            }
            if (r) {
                for (z = 0; z < this.member3879; z++) {
                    this.member3884[this.member3880[z]] = e.member1074();
                }
            }
            if (k) {
                throw new Error('1399 ');
            }
            if (s) {
                this.member3887 = new Int32Array(o);
                this.member3888 = new Int32Array(o);
                for (z = 0; z < this.member3879; z++) {
                    this.member3887[this.member3880[z]] = e.member1074();
                    this.member3888[this.member3880[z]] = e.member1074();
                }
            }
            for (var z = 0; z < o; z++) {
                this.member3886[z] = -1;
            }
            for (z = 0; z < this.member3879; z++) {
                this.member3886[this.member3880[z]] = e.member1074();
            }
            for (z = 0; z < this.member3879; z++) {
                this.member3889[this.member3880[z]] = e.member1085();
            }
            for (z = 0; z < this.member3879; z++) {
                var q = this.member3880[z], y = this.member3889[q];
                var x = 0, i = -1;
                var d = new Int32Array(y);
                var m = new Array(y);
                for (t = 0; t < y; t++) {
                    x += e.member1085();
                    d[t] = x;
                    m[x] = 1;
                    if (x > i) {
                        i = x;
                    }
                }
                this.member3894[q] = i + 1;
                if (i + 1 !== y) {
                    if (this.member3890 === null) {
                        this.member3890 = new Array(o);
                        this.member3891 = new Array(o);
                    }
                    this.member3890[q] = d;
                    this.member3891[q] = m;
                }
            }
            if (h) {
            }
        } else {
            throw new Error('1400 ');
        }
    };
    a.prototype.member3895 = function () {
        return this.member3878;
    };
    a.prototype.member3744 = function () {
        return this.member3879;
    };
    a.prototype.member3896 = function () {
        return this.member3882;
    };
    a.prototype.member3261 = function (c) {
        return this.member3889[c];
    };
    a.prototype.member1440 = function (c) {
        return this.member3894[c];
    };
    a.prototype.member3897 = function () {
        return this.member2774;
    };
    a.prototype.member3259 = function (c) {
        return this.member3883[c];
    };
    a.prototype.member3258 = function (c) {
        return this.member3886[c];
    };
    a.prototype.member3898 = function (c) {
        if (this.member3885 === null) {
            return null;
        } else {
            return this.member3885[c];
        }
    };
    a.prototype.member2700 = function (c) {
        return this.member3881[Class317.member3717(c)];
    };
    a.prototype.member3899 = function (c) {
        return this.member3881[c];
    };
    a.prototype.member3900 = function () {
        this.member3901 = null;
        this.member3881 = null;
    };
    a.prototype.member3902 = function () {
        return this.member3880;
    };
    a.prototype.member3263 = function (e) {
        if (!this.member3903(e)) {
            return undefined;
        }
        if (this.member3890 !== null && this.member3890[e] !== undefined && this.member3890[e] !== null) {
            return this.member3890[e];
        }
        var c = new Uint32Array(this.member3889[e]);
        for (var d = 0; d < c.length; d++) {
            c[d] = d;
        }
        return c;
    };
    a.prototype.member3262 = function (c) {
        if (!this.member3903(c)) {
            throw new Error('1401 ');
        }
        if (this.member3890 === null || this.member3890[c] === undefined || this.member3890[c] === null) {
            return true;
        }
        return false;
    };
    a.prototype.member3903 = function (c) {
        if (c === undefined || c < 0 || c > this.member3882) {
            return false;
        }
        if (this.member3886[c] === -1) {
            return false;
        }
        return true;
    };
    a.prototype.member3904 = function (e, c) {
        if (!this.member3903(e) || c === undefined) {
            return false;
        }
        var d = null;
        if (this.member3890 !== null) {
            d = this.member3890[e];
        }
        if (this.member3890 === null || d === undefined) {
            if (c >= 0 && c < this.member3894[e]) {
                return true;
            } else {
                return false;
            }
        } else {
            return this.member3891[e][c] === 1;
        }
    };
    return function (c) {
        return new a(c);
    };
}();