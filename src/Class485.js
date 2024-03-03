import { Class484 } from 'Class484.js';
import { Class131 } from 'Class131.js';
import { Class482 } from 'Class482.js';
import { Class481 } from 'Class481.js';
import { Class103 } from 'Class103.js';
export var Class485 = function () {
    var a = function (b) {
        if (b === undefined) {
            throw new Error('1281 ');
        }
        this.member7710 = b;
        this.member7711 = new Array(this.member7710.member6116.member6117().member7712());
        this.member7713 = 0;
        this.member7714 = new Array(this.member7710.member6116.member6117().member7715());
    };
    a.prototype.member7716 = function () {
        return this.member7711;
    };
    a.prototype.member7717 = function () {
        this.member7718();
        return this.member7714;
    };
    a.prototype.member7719 = function () {
        return this.member7714[0] !== undefined;
    };
    a.prototype.member7720 = function (c, d, m, j, g, q) {
        var i = true;
        var k = true;
        var o = this.member7710.member6116.member6117().member7712();
        for (var h = 0; h < o; h++) {
            if (!this.member7711[h]) {
                k = false;
                continue;
            }
            if (this.member7711[h].member7685() > g) {
                i = false;
            } else {
                k = false;
            }
        }
        var b = Class484.member7702;
        var r = -1;
        var e = 0;
        if (c >= 0) {
            var s = this.member7710.member2970.member3227(Class131.member1234.member1204, c);
            if (s !== member47) {
                b = s.member7721();
                e = s.member7682();
            } else {
                b = Class484.member7702;
                e = Class484.member7706;
            }
        }
        if (k) {
            if (b === Class484.member7702) {
                return;
            }
            r = 0;
            var n = 0;
            if (b === Class484.member7703) {
                n = this.member7711[0].member7685();
            } else if (b === Class484.member7704) {
                n = this.member7711[0].getParam();
            }
            for (var h = 1; h < o; h++) {
                if (b === Class484.member7703) {
                    if (this.member7711[h].member7685() < n) {
                        r = h;
                        n = this.member7711[h].member7685();
                    }
                } else if (b === Class484.member7704) {
                    if (this.member7711[h].getParam() < n) {
                        r = h;
                        n = this.member7711[h].getParam();
                    }
                }
            }
            if (b === Class484.member7704 && n >= d) {
                return;
            }
        } else {
            if (i) {
                this.member7713 = 0;
            }
            for (var h = 0; h < o; h++) {
                var t = this.member7713;
                this.member7713 = (this.member7713 + 1) % o;
                if (!this.member7711[t] || this.member7711[t].member7685() <= g) {
                    r = t;
                    break;
                }
            }
        }
        if (r < 0) {
            return;
        }
        this.member7711[r] = Class482({
            id: c,
            param: d,
            member7688: g + e + q,
            member7689: m,
            member7690: j
        });
    };
    a.prototype.member7722 = function (c, d) {
        var h = null;
        var e = null;
        var b = 0;
        for (var g = d.member776(); g !== null; g = d.member777()) {
            b++;
            if (g.member7679() === c.member3323) {
                g.replace(c);
                return;
            }
            if (g.member7679() <= c.member3323) {
                e = g;
            }
        }
        if (e === null) {
            if (b < this.member7710.member6116.member6117().member7723()) {
                d.member886(Class481(c));
            }
        } else {
            d.member888(Class481(c), e);
            if (d.length > this.member7710.member6116.member6117().member7723()) {
                d.unlink(d.member776());
            }
        }
    };
    a.prototype.member7724 = function (c) {
        for (var b = c; b < this.member7714.length - 1; b++) {
            this.member7714[b] = this.member7714[b + 1];
        }
        this.member7714[this.member7714.length - 1] = undefined;
    };
    a.prototype.member7725 = function (c) {
        for (var b = 0; b < this.member7714.length; b++) {
            if (this.member7714[b] !== undefined && this.member7714[b].member776().member2794().member444() === c) {
                this.member7724(b);
                return;
            }
        }
    };
    a.prototype.member7726 = function (e) {
        var h = this.member7710.member2970.member3227(Class131.member1256.member1204, e.id);
        if (h === member47) {
            return;
        }
        e.type = h;
        var g = -1;
        var d = -1;
        var j = h.member2703();
        var c = 0;
        for (var b = 0; b < this.member7714.length; b++) {
            if (this.member7714[b] === undefined) {
                if (g < 0) {
                    g = b - 1;
                }
                break;
            }
            var h = this.member7714[b].member776().member2794();
            if (h.member444() === e.id) {
                var i = this.member7722(e, this.member7714[b]);
                return;
            }
            c++;
            if (h.member7727() <= h.member7727()) {
                g = b;
            }
            if (h.member2703() > j) {
                d = b;
                j = h.member2703();
            }
        }
        if (d < 0 && c >= this.member7710.member6116.member6117().member7715()) {
            return;
        }
        if (c === this.member7710.member6116.member6117().member7715()) {
            this.member7724(d);
            if (d <= g) {
                g--;
            }
        }
        for (var b = this.member7714.length - 2; b > g; b--) {
            this.member7714[b + 1] = this.member7714[b];
        }
        this.member7714[g + 1] = Class103();
        this.member7714[g + 1].member886(Class481(e));
    };
    a.prototype.member7718 = function () {
        var c = this.member7710.member6116.member7139();
        for (var b = this.member7714.length - 1; b >= 0; b--) {
            if (this.member7714[b] === undefined) {
                continue;
            }
            var d = this.member7714[b].member776();
            for (var e = this.member7714[b].member777(); e !== null; e = this.member7714[b].member777()) {
                if (e.member7679() <= c) {
                    this.member7714[b].unlink(d);
                    d = e;
                } else {
                    break;
                }
            }
            if (d.member7679() + d.member7682 + d.member2794().member7728() < c) {
                this.member7714[b].unlink(d);
            }
            if (this.member7714[b].member890() === 0) {
                this.member7724[b];
            }
        }
    };
    return function (b) {
        return new a(b);
    };
}();