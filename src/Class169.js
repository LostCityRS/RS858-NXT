import { Class168 } from 'Class168.js';
import { Class124 } from 'Class124.js';
import { Class167 } from 'Class167.js';
export var Class169 = function () {
    var b = function (d, e, c) {
        this.member1836;
        this.member1828 = 0;
        this.member1837 = undefined;
        this.member1838 = false;
        this.member1839 = false;
        this.member1840 = false;
        if (d !== undefined && e !== undefined) {
            a.call(this, d, e);
        } else if (c !== undefined) {
            this.member1836 = Class168(undefined, undefined, c.member1841);
            this.member1828 = c.member1828;
            this.member1837 = c.member1837;
            this.member1838 = c.member1838;
            this.member1839 = c.member1839;
            this.member1840 = c.member1840;
        } else {
            throw new Error('904 ');
        }
    };
    b.prototype.member1842 = function () {
        return this.member1836;
    };
    b.prototype.member1843 = function () {
        return this.member1838;
    };
    b.prototype.member1832 = function () {
        return this.member1837.length / 6;
    };
    b.prototype.member1844 = function (c) {
        return this.member1837[c * 6 + 0];
    };
    b.prototype.member1845 = function (c) {
        return this.member1837[c * 6 + 1];
    };
    b.prototype.member1846 = function (c) {
        return this.member1837[c * 6 + 2];
    };
    b.prototype.member1847 = function (c) {
        return this.member1837[c * 6 + 3];
    };
    b.prototype.member1848 = function (c) {
        return this.member1837[c * 6 + 4];
    };
    b.prototype.member1849 = function (c) {
        return this.member1837[c * 6 + 5];
    };
    b.prototype.member681 = function (d) {
        var c = new Int32Array(this.member1837.buffer.slice(0));
        d.push(c.buffer);
        return {
            member1841: this.member1836.member681(),
            member1828: this.member1828,
            member1837: c,
            member1850: this.member1838,
            member1851: this.member1839,
            member1840: this.member1840
        };
    };
    var a = function (u, h) {
        this.member1836 = u;
        var j = h.member609();
        var v = h.member608();
        var t = h.member608();
        for (var d = 0; d < t; d++) {
            if (h.member609() > 0) {
                this.member1828++;
            }
        }
        h.member607(5);
        this.member1837 = new Int32Array(this.member1828 * 6);
        this.member1828 = 0;
        var g = Class124(undefined, h.getData());
        g.member607(h.member1047() + t);
        var i = -1, c = -1;
        for (var d = 0; d < t; d++) {
            var e = this.member1836.member1833(d);
            if (e === Class167.member1817) {
                i = d;
            }
            var k = h.member609();
            if (k > 0) {
                if (e === Class167.member1817) {
                    c = d;
                }
                var o = 0;
                var s, r, q;
                if (e === Class167.member1820 || e === Class167.member1826) {
                    o = 128;
                }
                if (j >= 2 && e === Class167.member1823) {
                    if ((k & 1) !== 0) {
                        g.member1080();
                        s = g.member1080();
                    } else {
                        s = o;
                    }
                    if ((k & 2) !== 0) {
                        g.member1080();
                        r = g.member1080();
                    } else {
                        r = o;
                    }
                    if ((k & 4) !== 0) {
                        g.member1080();
                        q = g.member1080();
                    } else {
                        q = o;
                    }
                } else {
                    if ((k & 1) !== 0) {
                        s = g.member1080();
                    } else {
                        s = o;
                    }
                    if ((k & 2) !== 0) {
                        r = g.member1080();
                    } else {
                        r = o;
                    }
                    if ((k & 4) !== 0) {
                        q = g.member1080();
                    } else {
                        q = o;
                    }
                }
                var n = k >>> 3 & 3;
                if (e === Class167.member1819) {
                    s = -s << 2 & 16383;
                    r = r << 2 & 16383;
                    q = q << 2 & 16383;
                } else if (e === Class167.member1825) {
                    s = -s / 8;
                    r = r / 8;
                    q = q / 8;
                } else if (e === Class167.member1818 || e === Class167.member1817) {
                    r = -r;
                }
                var m = -1;
                if (e === Class167.member1818 || e === Class167.member1819 || e === Class167.member1820) {
                    if (i > c) {
                        m = i;
                        c = i;
                    }
                } else if (e === Class167.member1821) {
                    this.member1838 = true;
                } else if (e === Class167.member1823) {
                    this.member1839 = true;
                } else if (e === Class167.member1825 || e === Class167.member1826 || e === Class167.member1824) {
                    this.member1840 = true;
                }
                this.member1837[this.member1828 * 6 + 0] = d;
                this.member1837[this.member1828 * 6 + 1] = s;
                this.member1837[this.member1828 * 6 + 2] = r;
                this.member1837[this.member1828 * 6 + 3] = q;
                this.member1837[this.member1828 * 6 + 4] = n;
                this.member1837[this.member1828 * 6 + 5] = m;
                this.member1828++;
            }
        }
        if (g.member1047() !== h.getSize()) {
            throw new Error('905 ');
        }
    };
    return function (d, e, c) {
        return new b(d, e, c);
    };
}();