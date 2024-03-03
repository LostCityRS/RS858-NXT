import { Class248 } from 'Class248.js';
import { Class247 } from 'Class247.js';
import { Class197 } from 'Class197.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
export var Class542 = function () {
    var a = function (d, c, b) {
        if (d === undefined || c === undefined) {
            throw new Error('1168 ');
        }
        member46(this, Class248, Class247.member2869, Class197.member2329, d);
        this.member7613 = c;
        this.member8594 = b;
        this.member2613 = member47;
        this.member8595 = member47;
    };
    member45(Class248, a);
    a.prototype.member2889 = function (q, n) {
        var c = this.member7613.member7615();
        var h;
        var g;
        var e;
        if (this.member8594 !== undefined) {
            if (this.member8594.member4486() !== undefined) {
                c = this.member8594.member4486();
            }
            h = this.member8594.member7604();
            g = this.member8594.member7605();
            e = this.member8594.member7606();
        }
        if (c.length < 1) {
            return undefined;
        }
        var m = true;
        for (var k = 0; k < c.length; k++) {
            if (c[k] !== -1) {
                var o = q.member1551(Class95.member810, c[k], 0);
                if (o === undefined) {
                    return undefined;
                }
                if (o === false) {
                    m = false;
                }
            }
        }
        if (!m) {
            return member47;
        }
        this.member2613 = new Array();
        for (var k = 0; k < c.length; k++) {
            if (c[k] !== -1) {
                var b = q.getFile(Class95.member810, c[k], 0, Class96.member2828);
                this.member2613.push(b.getData());
            }
        }
        var j, i;
        if (this.member8594 !== undefined) {
            j = this.member8594.member7607();
            i = this.member8594.member7608();
        }
        if (j === undefined) {
            j = this.member7613.member7607();
        }
        if (i === undefined) {
            i = this.member7613.member7608();
        }
        var d = {
            member2613: this.member2613,
            member8596: h,
            member8597: g,
            member8598: e,
            member2615: this.member7613.member8599(),
            member2616: j,
            member2617: this.member7613.member7661(),
            member2618: i,
            resize: this.member7613.member8600(),
            member2431: this.member7613.member8601()
        };
        return {
            member2890: d,
            member2891: this.member2613
        };
    };
    a.prototype.member2892 = function (b) {
        this.member8595 = b;
    };
    a.prototype.member2893 = function () {
        return this.member8595;
    };
    return function (d, c, b) {
        return new a(d, c, b);
    };
}();