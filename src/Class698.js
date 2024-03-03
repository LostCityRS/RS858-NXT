import { Class672 } from 'Class672.js';
import { Class299 } from 'Class299.js';
import { Class212 } from 'Class212.js';
import { Class147 } from 'Class147.js';
import { Class174 } from 'Class174.js';
import { Class185 } from 'Class185.js';
import { Class137 } from 'Class137.js';
import { Class211 } from 'Class211.js';
import { Class154 } from 'Class154.js';
import { Class150 } from 'Class150.js';
import { Class380 } from 'Class380.js';
import { Class379 } from 'Class379.js';
export var Class698 = function () {
    var a = function (d, c) {
        member46(this, Class672, d, c);
        this.member9910 = {};
        this.member9911 = new Worker(Class299.member3584().member3476() + 'g.js?1445359120716');
        this.member9911.postMessage = member55(this.member9911, 'postMessage');
        var b = this;
        this.member9911.onmessage = function (e) {
            b.member9912(e);
        };
        this.member9911.onerror = function (e) {
            b.member9913(e);
        };
        var b = this;
        this.member9914 = Class212(function (e) {
            b.member9911.postMessage(e, [e]);
        });
        this.member9915 = undefined;
        this.member9916 = undefined;
        this.member9917 = false;
    };
    member45(Class672, a);
    a.prototype.member4589 = function (b) {
        this.member9914.member2604();
        this.member9914.p1(b.member4238());
        this.member9914.member2605(4);
        var d = this.member9914.member2606();
        this.member9914.p2(b.member4239());
        b.member2560(this.member9914);
        var c = this.member9914.member2606() - d;
        this.member9914.member2605(-(c + 4));
        this.member9914.p4(c);
        this.member9914.member2605(c);
        this.member9914.member2607();
        this.member9910[b.member4239()] = b;
        this.member9785(b);
    };
    a.prototype.member78 = function () {
        if (!this.member9917) {
            this.member9918();
            if (!this.member9917) {
                return;
            }
        }
        this.member9919();
        this.member9914.member78();
        this.member9914.member2599();
    };
    a.prototype.member9918 = function () {
        if (!Class147.member1483() || !Class174.member1900() || !Class185.member2055() || !Class137.member1310()) {
            return;
        }
        this.member9911.postMessage({
            member59: Class211.member2315,
            member2377: Class147.member681(),
            member1546: Class154.member553()
        });
        this.member9911.postMessage({
            member59: Class211.member2318,
            member2378: Class174.member681()
        });
        this.member9911.postMessage({
            member59: Class211.member2321,
            member2379: Class185.member681()
        });
        this.member9911.postMessage({
            member59: Class211.member2322,
            member2380: Class137.member681()
        });
        this.member9917 = true;
    };
    a.prototype.member9919 = function () {
        while (true) {
            if (this.member9915 === undefined) {
                if (!this.member9914.member2603(5)) {
                    break;
                }
                this.member9915 = this.member9914.g1();
                this.member9916 = this.member9914.g4();
            }
            if (!this.member9914.member2603(this.member9916)) {
                break;
            }
            if (this.member9915 === Class211.LOG) {
                console.log('%c' + this.member9914.gjstr(), 'color:#bada55');
            } else if (this.member9915 === Class211.member2316) {
                var g = this.member9914.g2();
                var c = new Uint16Array(this.member9914.g2());
                for (var b = 0; b < c.length; b++) {
                    c[b] = this.member9914.g2();
                }
                var e = Class150.member1513(c);
                this.member9910[g].member2884(e);
                this.member9914.member2604();
                this.member9914.p1(Class211.member2316);
                this.member9914.member2605(4);
                var i = this.member9914.member2606();
                this.member9914.p2(g);
                e.member1318(this.member9914, true, true);
                var h = this.member9914.member2606() - i;
                this.member9914.member2605(-(h + 4));
                this.member9914.p4(h);
                this.member9914.member2605(h);
                this.member9914.member2607();
            } else if (this.member9915 === Class211.COMPLETE) {
                var g = this.member9914.g2();
                if (this.member9910[g].member2723() === Class380.member2861) {
                    var d = this.member9910[g].member4244(this.member9914, this.member9916 - 2);
                    this.member9786(this.member9910[g], Class379.member4231, d);
                } else {
                    this.member9914.member2608(this.member9916 - 2);
                    this.member9786(this.member9910[g], Class379.member4232);
                }
                this.member9910[g] = undefined;
            } else if (this.member9915 === Class211.ERROR) {
                var g = this.member9914.g2();
                this.member9786(this.member9910[g], Class379.member4232);
                this.member9910[g] = undefined;
            } else {
                throw new Error('1717 ' + member59);
            }
            this.member9915 = undefined;
            this.member9916 = undefined;
        }
    };
    a.prototype.member9912 = function (b) {
        this.member9914.member2602(b.data);
    };
    a.prototype.member9913 = function () {
    };
    return function (c, b) {
        return new a(c, b);
    };
}();