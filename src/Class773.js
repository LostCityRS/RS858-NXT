import { Class37 } from 'Class37.js';
import { Class41 } from 'Class41.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class209 } from 'Class209.js';
import { Class86 } from 'Class86.js';
import { Class188 } from 'Class188.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class49 } from 'Class49.js';
import { Class376 } from 'Class376.js';
import { Class291 } from 'Class291.js';
export var Class773 = function () {
    var a = Class37.create();
    var c = Class41.create();
    var b = function (h, e, i, d, g) {
        this.member7710;
        this.member10392 = 0;
        this.model;
        this.member7755;
        this.member10393;
        this.member10394;
        this.member10395 = Array(64);
        this.member10396 = Array(64);
        this.member10397 = Array(64);
        this.member2621 = NULL;
        this.member10398 = 0;
        this.member8577 = false;
        if (e !== undefined && i !== undefined && d !== undefined && g !== undefined) {
            member46(this, Class372, e, i, d, Class374.member4144, g);
            this.member7710 = h;
        } else {
            throw new Error('1048 ');
        }
    };
    member45(Class372, b);
    b.prototype.member4380 = function () {
        if (this.member2621 !== NULL) {
            return NULL;
        }
        var e = this.member7710.member995.getFile(Class95.member810, this.model, 0, Priority.member841);
        if (e === NULL) {
            return NULL;
        }
        var d = Class209(e);
        if (d.member2463() < 13) {
            d.member2495(Class86.member719);
        }
        this.member2621 = Class188(d, undefined, this.member7710.member433);
        this.member2621.member510();
    };
    b.prototype.member512 = function () {
        if (this.member2621 !== NULL) {
            this.member2621.member511();
            this.member2621 = NULL;
        }
        this.node.member4189();
    };
    b.prototype.member3437 = function (e, j, k, m, i) {
        if (this.member4103(e)) {
            if (!this.member8577) {
                for (var d = 0; d < this.member10398; d++) {
                    var h = this.member10399(d);
                    if (!h) {
                        this.member4105(false);
                        return;
                    }
                }
                this.member8577 = true;
            }
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        if (this.member2621 === NULL) {
            this.member4107(false);
            return;
        }
        var g = Class132.member1266();
        if (g.member522(Class72.member499)) {
            this.member4107(false);
            return;
        }
        if (Class130.member1194()) {
            this.member4107(false);
            return;
        }
        this.member4107(true);
    };
    b.prototype.member952 = function (k, j, i, h, g) {
        for (var e = 0; e < this.member10398; e++) {
            i[12] = this.member10395[e];
            i[13] = this.member10397[e];
            i[14] = this.member10396[e];
            var d = Class49.create(i);
            this.member2621.member952(k, h, j, d, a, undefined, false, g, undefined);
        }
    };
    b.prototype.member486 = function (i, h, g, e) {
        for (var d = 0; d < this.member10398; d++) {
            h[12] = this.member10395[d];
            h[13] = this.member10397[d];
            h[14] = this.member10396[d];
            this.member2621.member1630(g, i, h, a, undefined, false, e, undefined);
        }
    };
    b.prototype.member4102 = function () {
        this.member4101(Class376.member4169);
    };
    b.prototype.member10400 = function (i, g, k, j) {
        this.member10395 = new Array();
        this.member10396 = new Array();
        if (this.model !== i) {
            this.member2621 = NULL;
        }
        this.model = i;
        this.member7755 = g;
        this.member10393 = k;
        this.member10394 = j;
        var h = Class291(this.member4081(), this.member10393[0], this.member10394[0]);
        this.member10398 = 0;
        this.member8577 = true;
        for (var d = 0; d < this.member7755; d++) {
            var e = Class291(this.member4081(), this.member10393[d], this.member10394[d]);
            while (h.x !== e.x || h.member756 !== e.member756) {
                if (h.x < e.x) {
                    h.x++;
                } else if (h.x > e.x) {
                    h.x--;
                }
                if (h.member756 < e.member756) {
                    h.member756++;
                } else if (h.member756 > e.member756) {
                    h.member756--;
                }
                this.member10395[this.member10398] = h.x * Class86.member718 + Class86.member718 / 2;
                this.member10396[this.member10398] = h.member756 * Class86.member718 + Class86.member718 / 2;
                this.member10399(this.member10398);
                this.member10398++;
            }
            h = e;
        }
    };
    b.prototype.member10399 = function (g) {
        var h = this.member4081();
        var e = this.member4085().member4111();
        if (e.member4112(this.member10395[g] >> Class86.member720, this.member10396[g] >> Class86.member720)) {
            h++;
        }
        var d = this.member4070.member4114().member4115(h, this.member10395[g], this.member10396[g], true, true);
        if (d === -1) {
            this.member8577 = false;
        } else {
            this.member10397[g] = d;
        }
        return d !== -1;
    };
    return function (h, e, i, d, g) {
        return new b(h, e, i, d, g);
    };
}();