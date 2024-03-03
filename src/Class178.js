import { Class177 } from 'Class177.js';
export var Class178 = function () {
    var a = 1;
    var c = function (h, n, i, j, m, k, o, e) {
        this.member1994 = undefined;
        this.member1995 = undefined;
        this.member1996 = -1;
        this.member1838 = false;
        if (h !== undefined && n !== undefined && i !== undefined && j !== undefined) {
            this.member1994 = h;
            d.call(this, n, i, j);
        } else if (h !== undefined && m !== undefined && k !== undefined) {
            this.member1994 = h;
            b.call(this, m, k);
        } else if (h !== undefined && o === true) {
            this.member1994 = h;
            this.member1995 = [];
        } else if (h !== undefined && e !== undefined) {
            this.member1994 = h;
            this.member1995 = new Array(e.member1997.length);
            for (var g = 0; g < this.member1995.length; g++) {
                this.member1995[g] = Class177(undefined, undefined, undefined, undefined, undefined, e.member1997[g]);
            }
            this.member1996 = e.member1996;
            this.member1838 = e.member1838;
        } else {
            throw new Error('895 ');
        }
    };
    var d = function (g, i, e) {
        this.member1995 = new Array(g.length);
        var h = 0;
        for (var j = 0; j < g.length; j++) {
            h += i[j];
            this.member1995[j] = Class177(g[j], h, e);
            if (this.member1995[j] !== undefined && this.member1995[j].member1843()) {
                this.member1838 = true;
            }
        }
        this.member1996 = h;
    };
    var b = function (i, h) {
        var e = i.member609();
        if (e !== a) {
            throw new Error('896 ' + e);
        }
        var g = i.member1078();
        this.member1995 = new Array(g);
        for (var j = 0; j < g; j++) {
            this.member1995[j] = Class177(undefined, undefined, undefined, i, h);
            if (this.member1995[j].member1843()) {
                this.member1838 = true;
            }
        }
        this.member1996 = member1995[g - 1].member1965();
    };
    c.prototype.member1843 = function () {
        return this.member1838;
    };
    c.prototype.member1998 = function (g, e, h) {
        if (this.member1995 === undefined || this.member1995.length === 0) {
            e.member843(this.member1994, -1, -1, -1, null, null, false, h);
            return;
        }
        if (g.member1999()) {
            var i;
            if (this.member1995.length === 1) {
                i = 0;
            } else {
                i = this.member1995[this.member1995.length - 2].member1965();
            }
            e.member843(this.member1994, i, i, this.member1996, this.member1995[this.member1995.length - 1], this.member1995[this.member1995.length - 1], this.member1838, h);
            return;
        }
        if (g.member2000()) {
            e.member843(this.member1994, 0, 0, this.member1996, this.member1995[0], this.member1995[0], this.member1838, h);
            return;
        }
        var i;
        if (g.member2001() === 0) {
            i = 0;
        } else {
            i = this.member1995[g.member2001() - 1].member1965();
        }
        e.member843(this.member1994, i + g.member2002(), i, this.member1996, this.member1995[g.member2001()], this.member1995[g.member2003()], this.member1838, h);
    };
    c.prototype.member2004 = function () {
        var h = new Array(this.member1995.length);
        var g = 0;
        for (var i = 0; i < this.member1995.length; i++) {
            var e = this.member1995[i].member1965();
            h[i] = e - g;
            g = e;
        }
        return h;
    };
    c.prototype.member681 = function (h) {
        var e = new Array(this.member1995.length);
        for (var g = 0; g < this.member1995.length; g++) {
            e[g] = this.member1995[g].member681(h);
        }
        return {
            member1997: e,
            member1996: this.member1996,
            member1838: this.member1838
        };
    };
    return function (n, h, m, i, j, k, g, e) {
        return new c(n, h, m, i, j, k, g, e);
    };
}();