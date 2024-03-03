import { Packet } from 'Class124.js';
export var Class212 = function () {
    var j = Packet(10 * 1024);
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
            return Packet(a);
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
            n.setPos(0);
            n.p4(-1);
            this.member2586(n.getData());
        }
    };
    b.prototype.member2599 = function () {
        if (this.member2600.getPos() === i) {
            return;
        }
        if (this.member2589 === this.member2588 - 1) {
            var n = this.member2600.getPos() - i;
            this.member2600.setPos(0);
            this.member2600.p4(n);
            this.member2600.setPos(i + n);
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
        var n = Packet(undefined, o);
        var q = n.g4s();
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
    b.prototype.getPos = function () {
        return this.member2593;
    };
    b.prototype.setPos = function (n) {
        this.member2605(n - this.member2593);
    };
    b.prototype.member2606 = function () {
        return this.member2593;
    };
    b.prototype.member2605 = function (o) {
        this.member2593 += o;
        if (o < 0) {
            while (true) {
                var r = this.member2600.getPos() - i;
                if (r > -o) {
                    this.member2600.setPos(this.member2600.getPos() + o);
                    return;
                } else {
                    o += r;
                    this.member2600.setPos(i);
                    this.member2589--;
                    this.member2591();
                }
            }
        } else {
            while (true) {
                var q = this.member2600.getPos();
                var n;
                if (this.member2589 === this.member2588 - 1) {
                    n = a - i;
                } else {
                    this.member2600.setPos(0);
                    n = this.member2600.g4();
                }
                var r = n - (q - i);
                if (r >= o) {
                    this.member2600.setPos(q + o);
                    return;
                } else {
                    this.member2600.setPos(i + n);
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
        this.member2587[this.member2588].setPos(i);
        this.member2588++;
    };
    b.prototype.member2591 = function () {
        this.member2600 = this.member2587[this.member2589];
    };
    b.prototype.member2608 = function (n) {
        var r = this.member2595 - (this.member2596.getPos() - i);
        if (r >= n) {
            this.member2609(n);
            this.member2596.setPos(this.member2596.getPos() + n);
            return;
        } else {
            var q = 0;
            while (true) {
                var o = n - q;
                var s = r > o ? o : r;
                this.member2609(s);
                this.member2596.setPos(this.member2596.getPos() + s);
                q += s;
                if (q === n) {
                    return;
                }
                this.member2610(n - q);
                r = this.member2595 - (this.member2596.getPos() - i);
            }
        }
    };
    b.prototype.member2611 = function (n) {
        this.member2593 += n;
        if (this.member2600.getPos() + n >= a) {
            this.member2599();
        }
    };
    b.prototype.p1 = function (n) {
        this.member2611(1);
        this.member2600.p1(n);
    };
    b.prototype.p2 = function (n) {
        this.member2611(2);
        this.member2600.p2(n);
    };
    b.prototype.p3 = function (n) {
        this.member2611(3);
        this.member2600.p3(n);
    };
    b.prototype.p4 = function (n) {
        this.member2611(4);
        this.member2600.p4(n);
    };
    b.prototype.pFloat = function (n) {
        this.member2611(4);
        this.member2600.pFloat(n);
    };
    b.prototype.pjstr = function (o) {
        var n = Packet.member1152(o);
        this.member2611(n + 2);
        this.member2600.p2(n);
        this.member2600.pjstr(o);
    };
    b.prototype.member1067 = function (u, t, r) {
        var o = this.member2600.getRemaining();
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
                o = this.member2600.getRemaining();
            }
        }
        this.member2593 += r;
    };
    b.prototype.member2609 = function (n) {
        if (this.member2596.getPos() - i + n > this.member2595) {
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
            this.member2596.setPos(0);
            this.member2595 = this.member2596.g4();
        } else {
            this.member2596 = this.member2595 = undefined;
        }
    };
    b.prototype.g1 = function () {
        this.member2609(1);
        return this.member2596.g1();
    };
    b.prototype.g1s = function () {
        this.member2609(1);
        return this.member2596.g1s();
    };
    b.prototype.g2 = function () {
        this.member2609(2);
        return this.member2596.g2();
    };
    b.prototype.g2s = function () {
        this.member2609(2);
        return this.member2596.g2s();
    };
    b.prototype.g3 = function () {
        this.member2609(3);
        return this.member2596.g3();
    };
    b.prototype.g3s = function () {
        this.member2609(3);
        return this.member2596.g3s();
    };
    b.prototype.g4 = function () {
        this.member2609(4);
        return this.member2596.g4();
    };
    b.prototype.g4s = function () {
        this.member2609(4);
        return this.member2596.g4s();
    };
    b.prototype.gFloat = function () {
        this.member2609(4);
        return this.member2596.gFloat();
    };
    b.prototype.gjstr = function () {
        this.member2609(2);
        var n = this.member2596.g2();
        this.member2609(n);
        return this.member2596.gjstr();
    };
    b.prototype.gdata = function (u, t, n) {
        var r = this.member2595 - (this.member2596.getPos() - i);
        if (r >= n) {
            this.member2609(n);
            this.member2596.gdata(u, t, n);
            return;
        } else {
            var q = 0;
            while (true) {
                var o = n - q;
                var s = r > o ? o : r;
                this.member2609(s);
                this.member2596.gdata(u, t + q, s);
                q += s;
                if (q === n) {
                    return;
                }
                this.member2610(n - q);
                r = this.member2595 - (this.member2596.getPos() - i);
            }
        }
    };
    var h = function (n) {
        return new b(n);
    };
    h.member1152 = function (n) {
        return Packet.member1152(n) + 2;
    };
    return h;
}();