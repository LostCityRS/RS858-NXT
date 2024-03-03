import { Class105 } from 'Class105.js';
import { Class244 } from 'Class244.js';
import { Class191 } from 'Class191.js';
import { Class249 } from 'Class249.js';
import { Class178 } from 'Class178.js';
export var SeqType = function () {
    var b = true;
    var a = function (d, c) {
        this.member2894 = Class105({ member895: 16 });
        this.member2895 = Class105({ member895: 2 });
        this.myList;
        this.member625;
        if (d !== undefined && c !== undefined) {
            this.member625 = d;
            this.myList = c;
        } else {
            throw new Error('1323 ');
        }
        this.member2897 = undefined;
        this.member1995 = null;
        this.member2898 = null;
        this.member2235 = null;
        this.member2899 = -1;
        this.member2900 = null;
        this.loop = -1;
        this.priority = 5;
        this.member2901 = -1;
        this.member2902 = -1;
        this.member2903 = 99;
        this.member2904 = 0;
        this.member2905 = -1;
        this.member2906 = -1;
        this.member2907 = 2;
        this.member2908 = false;
        this.member2909 = null;
        this.member2910 = null;
        this.member2911 = null;
        this.member2912 = -1;
        this.params = null;
    };
    a.prototype.getID = function () {
        return this.member625;
    };
    a.prototype.member2913 = function () {
        return this.member2897;
    };
    a.prototype.member2914 = function () {
        return this.member1995;
    };
    a.prototype.member2915 = function () {
        return this.member2898;
    };
    a.prototype.member2916 = function () {
        return this.member2235;
    };
    a.prototype.member2917 = function () {
        return this.member2904;
    };
    a.prototype.member2918 = function () {
        return this.member2899;
    };
    a.prototype.member2919 = function () {
        return this.member2920;
    };
    a.prototype.member2921 = function () {
        return this.member2900;
    };
    a.prototype.member2922 = function () {
        return this.loop;
    };
    a.prototype.getPriority = function () {
        return this.priority;
    };
    a.prototype.member2923 = function () {
        return this.member2901;
    };
    a.prototype.member2924 = function () {
        return this.member2902;
    };
    a.prototype.member2925 = function () {
        return this.member2903;
    };
    a.prototype.member2926 = function () {
        return this.member2905;
    };
    a.prototype.member2927 = function () {
        return this.member2906;
    };
    a.prototype.member2928 = function () {
        return this.member2907;
    };
    a.prototype.member2929 = function () {
        return this.member2909;
    };
    a.prototype.member2930 = function (e) {
        if (this.member2910 === null || this.member2910 === undefined || this.member2911 === null || this.member2911 === undefined || this.member2910.length <= e && this.member2911.length <= e) {
            return 255;
        }
        var g = this.member2910[e];
        var c = this.member2911[e];
        var h = c - g;
        var d = g + Math.floor(Math.random() * h);
        return d;
    };
    a.prototype.member2931 = function () {
        return this.member2912;
    };
    a.prototype.decode = function (d) {
        while (true) {
            var c = d.g1();
            if (c === undefined) {
                throw new Error('1324 ');
                break;
            }
            if (c === 0) {
                break;
            }
            if (this.decodeNext(d, c) === NULL) {
                return NULL;
            }
        }
        return undefined;
    };
    a.prototype.decodeNext = function (h, t) {
        if (t === 1) {
            var j = h.g2();
            this.member2235 = new Array(j);
            for (var i = 0; i < j; i++) {
                this.member2235[i] = h.g2();
            }
            this.member1995 = new Array(j);
            for (i = 0; i < j; i++) {
                this.member1995[i] = h.g2();
            }
            for (i = 0; i < j; i++) {
                this.member1995[i] = h.g2() << 16 | this.member1995[i];
            }
        } else if (t === 2) {
            this.loop = h.g2();
        } else if (t === 3) {
            var r = h.gSmart1or2();
            for (var k = 0; k < r; k++) {
                h.gSmart1or2();
            }
        } else if (t === 5) {
            this.priority = h.g1();
        } else if (t === 6) {
            this.member2901 = h.g2();
        } else if (t === 7) {
            this.member2902 = h.g2();
        } else if (t === 8) {
            this.member2903 = h.g1();
        } else if (t === 9) {
            this.member2905 = h.g1();
        } else if (t === 10) {
            this.member2906 = h.g1();
        } else if (t === 11) {
            this.member2907 = h.g1();
        } else if (t === 12 || t === 112) {
            var s;
            if (t === 12) {
                s = h.g1();
            } else {
                s = h.g2();
            }
            this.member2898 = new Array(s);
            for (var o = 0; o < s; o++) {
                this.member2898[o] = h.g2();
            }
            for (o = 0; o < s; o++) {
                this.member2898[o] = h.g2() << 16 | this.member2898[o];
            }
        } else if (t === 13) {
            var v = h.g2();
            this.member2900 = new Array(v);
            for (var u = 0; u < v; u++) {
                j = h.g1();
                if (j > 0) {
                    this.member2900[u] = new Array(j);
                    this.member2900[u][0] = h.g3();
                    for (var q = 1; q < j; q++) {
                        this.member2900[u][q] = h.g2();
                    }
                }
            }
        } else if (t === 14 || t === 15 || t === 16) {
        } else if (t === 18) {
            this.member2908 = true;
        } else if (t === 19 || t === 119) {
            if (this.member2909 === null) {
                this.member2909 = new Array(this.member2900.length);
                for (var u = 0; u < this.member2909.length; u++) {
                    this.member2909[u] = 255;
                }
            }
            var c;
            if (t === 19) {
                c = h.g1();
            } else {
                c = h.g2();
            }
            this.member2909[c] = h.g1();
        } else if (t === 20 || t === 120) {
            if (this.member2910 === null) {
                this.member2910 = new Array(this.member2900.length);
                this.member2911 = new Array(this.member2900.length);
                for (var u = 0; u < this.member2900.length; u++) {
                    this.member2910[u] = this.member2911[u] = 256;
                }
            }
            var u;
            if (t === 20) {
                u = h.g1();
            } else {
                u = h.g2();
            }
            this.member2910[u] = h.g2();
            this.member2911[u] = h.g2();
        } else if (t === 22) {
            this.member2912 = h.g1();
        } else if (t === 23) {
            this.member2899 = h.g2();
        } else if (t === 24) {
            var e = h.g2();
            this.member2897 = this.myList.getSeqGroupTypeList().list(e);
            if (this.member2897 === NULL) {
                return NULL;
            }
        } else if (t === 249) {
            var x = h.g1();
            if (this.params === null) {
                this.params = {};
            }
            for (var m = 0; m < x; m++) {
                var g = h.g1() === 1;
                var d = h.g3();
                if (g) {
                    this.params[d] = h.gjstr();
                } else {
                    this.params[d] = h.g4s();
                }
            }
        } else if (false) {
        }
        return undefined;
    };
    a.prototype.postDecode = function () {
        if (this.member2905 === -1) {
            if (this.member2897 !== undefined && this.member2897.member2919() !== undefined) {
                this.member2905 = Class244.member2843;
            } else {
                this.member2905 = Class244.member2841;
            }
        }
        if (this.member2906 === -1) {
            if (this.member2897 !== undefined && this.member2897.member2919() !== undefined) {
                this.member2906 = Class244.member2847;
            } else {
                this.member2906 = Class244.member2845;
            }
        }
        if (this.member2235 !== null) {
            for (var c = 0; c < this.member2235.length; c++) {
                this.member2904 += this.member2235[c];
            }
        }
    };
    if (true) {
        a.prototype.member2935 = function (o, t, e, s) {
            if (s === NULL) {
                throw new Error('1325 ');
            }
            var g = this.member2894.find(e);
            if (g !== null) {
                return g;
            }
            if (this.member2899 !== -1) {
                var i = Class191.member2142(this.member2899, s);
                if (i === NULL) {
                    return NULL;
                }
                this.member2894.put(i, 1, e);
                return i;
            } else {
                if (this.member1995 === null) {
                    return Class191.member2134();
                }
                if (!b) {
                    if (!this.member2936()) {
                        return NULL;
                    }
                    var m = new Array(this.member1995.length);
                    for (var d = 0; d < this.member1995.length; d++) {
                        var h = this.myList.member2937(this.member1995[d]);
                        m[d] = h;
                    }
                    s.member2938();
                    var i = Class191.member2144(m, this.member2235, s);
                    return i;
                } else {
                    var c = this.member2895.find(e);
                    if (c === null) {
                        this.member2895.member905(100);
                        if (this.member2895.getRemaining() > 0) {
                            if (!this.member2936()) {
                                return NULL;
                            }
                            var m = new Array(this.member1995.length);
                            var q = [];
                            for (var d = 0; d < this.member1995.length; d++) {
                                var h = this.myList.member2937(this.member1995[d]);
                                if (h !== undefined) {
                                    m[d] = h.member681(q);
                                }
                            }
                            var r = [];
                            var u = s.member681(true, r);
                            var n = Class249(t, u, r, m, q, this.member2235, this.loop);
                            if (o.member2939(n)) {
                                this.member2895.put(n, 1, e);
                            }
                            return NULL;
                        } else {
                            return NULL;
                        }
                    } else {
                        var j = c.member2723();
                        if (!j.member2859) {
                            return NULL;
                        } else {
                            this.member2895.remove(e);
                            if (!j.member2863) {
                                return NULL;
                            }
                            var k = c.member2893();
                            var i = Class191.member2134();
                            if (k !== NULL) {
                                i = Class178(Class191, undefined, undefined, undefined, undefined, undefined, undefined, k);
                                this.member2894.put(i, 1, e);
                            }
                            return i;
                        }
                    }
                }
            }
        };
        a.prototype.member2936 = function () {
            if (this.member1995 === null) {
                return true;
            }
            var c = true;
            for (var d = 0; d < this.member1995.length; d++) {
                if (this.myList.member2940(this.member1995[d] >>> 16) === null) {
                    c = false;
                }
            }
            return c;
        };
    } else {
    }
    a.prototype.getParam = function (e, d) {
        if (this.params === null) {
            return d;
        }
        var c = this.params[e];
        if (c === undefined) {
            return d;
        } else {
            return c;
        }
    };
    a.prototype.member2941 = function (e, d) {
        if (this.params === null) {
            return d;
        }
        var c = this.params[e];
        if (c === undefined) {
            return d;
        } else {
            return c;
        }
    };
    return function (d, c) {
        return new a(d, c);
    };
}();