import { Class124 } from 'Class124.js';
export var Class212 = function () {
    var j = Class124(10 * 1024);
    var a = 1 * 1024 * 1024;
    var i = 4;
    var d = 2;
    var e = new Array(10);
    var g = 0;
    var c = 0;
    var k = function () {
        if (g === 0) {
            if (false) {
            }
            c++;
            return Class124(a);
        } else {
            return e[--g];
        }
    };
    var m = function (n) {
        e[g++] = n;
    };
    var b = function (n) {
        this.member2586 = n;
        this.member2587 = new Array(10);
        this.member2588 = 0;
        this.member2589 = 0;
        this.member2590();
        this.member2591();
        this.member2592 = false;
        this.member2593 = 0;
        this.member2594 = 0;
        this.member2595 = undefined;
        this.member2596 = undefined;
        this.member2597 = new Array(10);
        this.member2598 = 0;
    };
    b.prototype.member78 = function () {
        if (g > c + d) {
            var n = k();
            n.member607(0);
            n.member1056(-1);
            this.member2586(n.getData());
        }
    };
    b.prototype.member2599 = function () {
        if (this.member2600.member1047() === i) {
            return;
        }
        if (this.member2589 === this.member2588 - 1) {
            var n = this.member2600.member1047() - i;
            this.member2600.member607(0);
            this.member2600.member1056(n);
            this.member2600.member607(i + n);
            if (this.member2592) {
                this.member2590();
                this.member2589++;
                this.member2591();
            } else {
                this.member2601();
            }
        } else {
            this.member2589++;
            this.member2591();
        }
    };
    b.prototype.member2601 = function () {
        this.member2586(this.member2600.getData());
        for (var n = 1; n < this.member2588; n++) {
            this.member2587[n - 1] = this.member2587[n];
        }
        this.member2588--;
        this.member2590();
        this.member2591();
    };
    b.prototype.member2602 = function (o) {
        var n = Class124(undefined, o);
        var q = n.member1074();
        if (q === -1) {
            m(n);
            return;
        }
        this.member2597[this.member2598++] = n;
        this.member2594 += q;
        if (this.member2596 === undefined) {
            this.member2596 = n;
            this.member2595 = this.member2594;
        }
    };
    b.prototype.member2603 = function (n) {
        if (n <= this.member2594) {
            return true;
        } else {
            return false;
        }
    };
    b.prototype.member2604 = function () {
        this.member2592 = true;
    };
    b.prototype.member1047 = function () {
        return this.member2593;
    };
    b.prototype.member607 = function (n) {
        this.member2605(n - this.member2593);
    };
    b.prototype.member2606 = function () {
        return this.member2593;
    };
    b.prototype.member2605 = function (o) {
        this.member2593 += o;
        if (o < 0) {
            while (true) {
                var r = this.member2600.member1047() - i;
                if (r > -o) {
                    this.member2600.member607(this.member2600.member1047() + o);
                    return;
                } else {
                    o += r;
                    this.member2600.member607(i);
                    this.member2589--;
                    this.member2591();
                }
            }
        } else {
            while (true) {
                var q = this.member2600.member1047();
                var n;
                if (this.member2589 === this.member2588 - 1) {
                    n = a - i;
                } else {
                    this.member2600.member607(0);
                    n = this.member2600.member1073();
                }
                var r = n - (q - i);
                if (r >= o) {
                    this.member2600.member607(q + o);
                    return;
                } else {
                    this.member2600.member607(i + n);
                    o -= r;
                    this.member2589++;
                    this.member2591();
                }
            }
        }
        throw new Error('1648 ');
    };
    b.prototype.member2607 = function () {
        this.member2592 = false;
        for (var n = 0; n < this.member2588 - 1; n++) {
            this.member2586(this.member2587[n].getData());
        }
        this.member2587[0] = this.member2587[this.member2588 - 1];
        this.member2588 = 1;
        this.member2589 = 0;
        this.member2591();
    };
    b.prototype.member2590 = function () {
        this.member2587[this.member2588] = k();
        this.member2587[this.member2588].member607(i);
        this.member2588++;
    };
    b.prototype.member2591 = function () {
        this.member2600 = this.member2587[this.member2589];
    };
    b.prototype.member2608 = function (n) {
        var r = this.member2595 - (this.member2596.member1047() - i);
        if (r >= n) {
            this.member2609(n);
            this.member2596.member607(this.member2596.member1047() + n);
            return;
        } else {
            var q = 0;
            while (true) {
                var o = n - q;
                var s = r > o ? o : r;
                this.member2609(s);
                this.member2596.member607(this.member2596.member1047() + s);
                q += s;
                if (q === n) {
                    return;
                }
                this.member2610(n - q);
                r = this.member2595 - (this.member2596.member1047() - i);
            }
        }
    };
    b.prototype.member2611 = function (n) {
        this.member2593 += n;
        if (this.member2600.member1047() + n >= a) {
            this.member2599();
        }
    };
    b.prototype.member1051 = function (n) {
        this.member2611(1);
        this.member2600.member1051(n);
    };
    b.prototype.member1054 = function (n) {
        this.member2611(2);
        this.member2600.member1054(n);
    };
    b.prototype.member1055 = function (n) {
        this.member2611(3);
        this.member2600.member1055(n);
    };
    b.prototype.member1056 = function (n) {
        this.member2611(4);
        this.member2600.member1056(n);
    };
    b.prototype.member1063 = function (n) {
        this.member2611(4);
        this.member2600.member1063(n);
    };
    b.prototype.member1065 = function (o) {
        var n = Class124.member1152(o);
        this.member2611(n + 2);
        this.member2600.member1054(n);
        this.member2600.member1065(o);
    };
    b.prototype.member1067 = function (u, t, r) {
        var o = this.member2600.member906();
        if (o >= r) {
            this.member2600.member1067(u, t, r);
            this.member2611(0);
        } else {
            var q = 0;
            while (q < r) {
                var s = r - q;
                var n = s > o ? o : s;
                this.member2600.member1067(u, t + q, n);
                this.member2611(0);
                q += n;
                o = this.member2600.member906();
            }
        }
        this.member2593 += r;
    };
    b.prototype.member2609 = function (n) {
        if (this.member2596.member1047() - i + n > this.member2595) {
            this.member2610(n);
        }
        this.member2594 -= n;
    };
    b.prototype.member2610 = function (o) {
        m(this.member2596);
        for (var n = 1; n < this.member2598; n++) {
            this.member2597[n - 1] = this.member2597[n];
        }
        this.member2598--;
        if (this.member2598 > 0) {
            this.member2596 = this.member2597[0];
            this.member2596.member607(0);
            this.member2595 = this.member2596.member1073();
        } else {
            this.member2596 = this.member2595 = undefined;
        }
    };
    b.prototype.member609 = function () {
        this.member2609(1);
        return this.member2596.member609();
    };
    b.prototype.member1070 = function () {
        this.member2609(1);
        return this.member2596.member1070();
    };
    b.prototype.member608 = function () {
        this.member2609(2);
        return this.member2596.member608();
    };
    b.prototype.member1071 = function () {
        this.member2609(2);
        return this.member2596.member1071();
    };
    b.prototype.g3 = function () {
        this.member2609(3);
        return this.member2596.g3();
    };
    b.prototype.member1072 = function () {
        this.member2609(3);
        return this.member2596.member1072();
    };
    b.prototype.member1073 = function () {
        this.member2609(4);
        return this.member2596.member1073();
    };
    b.prototype.member1074 = function () {
        this.member2609(4);
        return this.member2596.member1074();
    };
    b.prototype.member320 = function () {
        this.member2609(4);
        return this.member2596.member320();
    };
    b.prototype.member1089 = function () {
        this.member2609(2);
        var n = this.member2596.member608();
        this.member2609(n);
        return this.member2596.member1089();
    };
    b.prototype.member1092 = function (u, t, n) {
        var r = this.member2595 - (this.member2596.member1047() - i);
        if (r >= n) {
            this.member2609(n);
            this.member2596.member1092(u, t, n);
            return;
        } else {
            var q = 0;
            while (true) {
                var o = n - q;
                var s = r > o ? o : r;
                this.member2609(s);
                this.member2596.member1092(u, t + q, s);
                q += s;
                if (q === n) {
                    return;
                }
                this.member2610(n - q);
                r = this.member2595 - (this.member2596.member1047() - i);
            }
        }
    };
    var h = function (n) {
        return new b(n);
    };
    h.member1152 = function (n) {
        return Class124.member1152(n) + 2;
    };
    return h;
}();