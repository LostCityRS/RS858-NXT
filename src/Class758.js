export var Class758 = function () {
    var a = function (c, b) {
        this.member2896 = undefined;
        this.member625 = undefined;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.member2896 = b;
        } else {
            throw new Error('1522 ');
        }
        this.member3590 = -1;
        this.member10223 = null;
        this.member10224 = null;
        this.member10225 = 0;
        this.member10226 = -1;
        this.member10227 = -1;
        this.member10228 = -1;
        this.member10229 = -1;
        this.member10230 = -1;
        this.member10231 = -1;
        this.member10232 = -1;
        this.member10233 = -1;
        this.member10234 = -1;
        this.member10235 = -1;
        this.member10236 = -1;
        this.member10237 = -1;
        this.member10238 = -1;
        this.member10239 = -1;
        this.member10240 = -1;
        this.member10241 = -1;
        this.member10242 = -1;
        this.member10243 = -1;
        this.member10244 = -1;
        this.member10245 = -1;
        this.member10246 = 0, this.member10247 = 0;
        this.member10248 = 0, this.member10249 = 0;
        this.member10250 = -1;
        this.member8681 = -1;
        this.member8608 = -1;
        this.member8636 = true;
    };
    a.prototype.member6148 = function () {
        return this.member3590;
    };
    a.prototype.member6146 = function () {
        return this.member10223;
    };
    a.prototype.member6147 = function () {
        return this.member10224;
    };
    a.prototype.member7859 = function () {
        return this.member10226;
    };
    a.prototype.member7860 = function () {
        return this.member10227;
    };
    a.prototype.member7861 = function () {
        return this.member10228;
    };
    a.prototype.member7862 = function () {
        return this.member10229;
    };
    a.prototype.member7863 = function () {
        return this.member10230;
    };
    a.prototype.member7864 = function () {
        return this.member10231;
    };
    a.prototype.member7873 = function () {
        return this.member10232;
    };
    a.prototype.member7874 = function () {
        return this.member10233;
    };
    a.prototype.member7865 = function () {
        return this.member10234;
    };
    a.prototype.member7866 = function () {
        return this.member10235;
    };
    a.prototype.member7867 = function () {
        return this.member10236;
    };
    a.prototype.member7868 = function () {
        return this.member10237;
    };
    a.prototype.member7875 = function () {
        return this.member10238;
    };
    a.prototype.member7876 = function () {
        return this.member10239;
    };
    a.prototype.member7869 = function () {
        return this.member10240;
    };
    a.prototype.member7870 = function () {
        return this.member10241;
    };
    a.prototype.member7871 = function () {
        return this.member10242;
    };
    a.prototype.member7872 = function () {
        return this.member10243;
    };
    a.prototype.member7877 = function () {
        return this.member10244;
    };
    a.prototype.member7878 = function () {
        return this.member10245;
    };
    a.prototype.member7854 = function () {
        return this.member10246;
    };
    a.prototype.member7855 = function () {
        return this.member10247;
    };
    a.prototype.member7857 = function () {
        return this.member10248;
    };
    a.prototype.member7858 = function () {
        return this.member10249;
    };
    a.prototype.member4121 = function () {
        return this.member8608;
    };
    a.prototype.decode = function (c) {
        while (true) {
            var b = c.member609();
            if (b === undefined) {
                throw new Error('1523 ');
                break;
            }
            if (b === 0) {
                break;
            }
            this.member2932(c, b);
        }
    };
    a.prototype.member2932 = function (h, c) {
        if (c === 1) {
            this.member3590 = h.member1086();
            this.member10228 = h.member1086();
        } else if (c === 2) {
            this.member10240 = h.member1086();
        } else if (c === 3) {
            this.member10241 = h.member1086();
        } else if (c === 4) {
            this.member10242 = h.member1086();
        } else if (c === 5) {
            this.member10243 = h.member1086();
        } else if (c === 6) {
            this.member10234 = h.member1086();
        } else if (c === 7) {
            this.member10235 = h.member1086();
        } else if (c === 8) {
            this.member10236 = h.member1086();
        } else if (c === 9) {
            this.member10237 = h.member1086();
        } else if (c === 26) {
            this.member10246 = h.member609() * 4;
            this.member10247 = h.member609() * 4;
        } else if (c === 27) {
            var b = h.member609();
            h.member607(h.member1047() + b * 2);
        } else if (c === 28) {
            b = h.member609();
            h.member607(h.member1047() + b);
        } else if (c === 29) {
            h.member609();
        } else if (c === 30) {
            h.member608();
        } else if (c === 31) {
            h.member609();
        } else if (c === 32) {
            h.member608();
        } else if (c === 33) {
            h.member1071();
        } else if (c === 34) {
            h.member609();
        } else if (c === 35) {
            h.member608();
        } else if (c === 36) {
            h.member1071();
        } else if (c === 37) {
            h.member609();
        } else if (c === 38) {
            this.member10226 = h.member1086();
        } else if (c === 39) {
            this.member10227 = h.member1086();
        } else if (c === 40) {
            this.member10229 = h.member1086();
        } else if (c === 41) {
            this.member10230 = h.member1086();
        } else if (c === 42) {
            this.member10231 = h.member1086();
        } else if (c === 43) {
            this.member10250 = h.member1086();
        } else if (c === 44) {
            this.member8681 = h.member1086();
        } else if (c === 45) {
            this.member8608 = h.member608();
        } else if (c === 46) {
            this.member10244 = h.member1086();
        } else if (c === 47) {
            this.member10245 = h.member1086();
        } else if (c === 48) {
            this.member10238 = h.member1086();
        } else if (c === 49) {
            this.member10239 = h.member1086();
        } else if (c === 50) {
            this.member10232 = h.member1086();
        } else if (c === 51) {
            this.member10233 = h.member1086();
        } else if (c === 52) {
            var g = h.member609();
            this.member10223 = new Array(g);
            this.member10224 = new Array(g);
            for (var e = 0; e < g; e++) {
                this.member10223[e] = h.member1086();
                var d = h.member609();
                this.member10224[e] = d;
                this.member10225 += d;
            }
        } else if (c === 53) {
            this.member8636 = false;
        } else if (c === 54) {
            this.member10248 = h.member609() << 2;
            this.member10249 = h.member609() << 2;
        } else if (c === 55) {
            h.member607(h.member1047() + 3);
        } else if (c === 56) {
            h.member607(h.member1047() + 1 + 3 * 2);
        } else if (false) {
        }
    };
    a.prototype.member7828 = function () {
        if (this.member3590 !== -1) {
            return this.member3590;
        }
        if (this.member10223 !== null) {
            var c = Math.floor(Math.random() * this.member10225);
            var b = 0;
            while (c >= this.member10224[b]) {
                c -= this.member10224[b];
                b++;
            }
            return this.member10223[b];
        }
        return -1;
    };
    return function (c, b) {
        return new a(c, b);
    };
}();