import { Class698 } from 'Class698.js';
import { Class699 } from 'Class699.js';
import { Class228 } from 'Class228.js';
import { Class379 } from 'Class379.js';
import { Class380 } from 'Class380.js';
export var Class700 = function () {
    var a = function (i, h, d, g, c, e) {
        this.member995 = i;
        this.member2970 = h;
        this.member9921 = d;
        this.member9922 = g;
        this.member9923 = c;
        this.member9924 = new Array(this.workerCount);
        for (var b = 0; b < this.member9921; b++) {
            this.member9924[b] = new Class698(b, this.member9923);
        }
        for (var b = this.member9921; b < this.member9921 + this.member9922; b++) {
            this.member9924[b] = new Class699(b, this.member9923);
        }
        this.member9781 = e;
        this.member9925 = Class228({
            member2751: this.member9781,
            member2750: 2
        });
    };
    a.prototype.member4588 = function (b) {
        return this.member9925.member2754(b);
    };
    a.prototype.member4589 = function (c) {
        var b = this.member9925.add(c, c.member2703());
        if (!b) {
            c.member4248(Class379.CANCELLED);
        } else {
            c.member4245();
        }
    };
    a.prototype.member78 = function () {
        for (var d = this.member9925.member776(); d !== null; d = this.member9925.member777()) {
            var e = d.member2723();
            if (e === Class380.member2860) {
                var c = d.member2889(this.member995, this.member2970);
                if (c === member47) {
                    continue;
                } else if (c === undefined) {
                    d.member4248(Class379.member4232);
                    continue;
                } else {
                    d.member4246();
                    e = d.member2723();
                }
            }
            if (e === Class380.member4234) {
                var b = undefined, g = Number.MAX_VALUE;
                for (var i = 0; i < this.member9924.length; i++) {
                    var h = this.member9924[i].member9783();
                    if (h < g && h < this.member9924[i].member9784()) {
                        b = i;
                        g = h;
                    }
                }
                if (b !== undefined) {
                    this.member9924[b].member4589(d);
                }
                continue;
            }
            if (e === Class380.member2861) {
                continue;
            }
            if (e === Class380.FINISHED) {
                d.unlink2();
                continue;
            }
            throw new Error('1181 ' + e);
        }
        for (var i = 0; i < this.member9924.length; i++) {
            this.member9924[i].member78();
        }
    };
    return function (h, g, c, e, b, d) {
        return new a(h, g, c, e, b, d);
    };
}();