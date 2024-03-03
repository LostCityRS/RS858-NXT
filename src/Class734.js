import { Class96 } from 'Class96.js';
import { Class168 } from 'Class168.js';
import { Class169 } from 'Class169.js';
export var Class734 = function () {
    var a = function (c, e, d, b) {
        this.member1204 = -1;
        this.member995 = undefined;
        this.member3850 = undefined;
        this.member10162 = undefined;
        this.member10163 = {};
        this.member10164 = 0;
        this.member10165 = member47;
        this.member10166 = member47;
        this.member10167 = false;
        this.member1995 = member47;
        if (c !== undefined && e !== undefined && d !== undefined && b !== undefined) {
            this.member1204 = c;
            this.member995 = e;
            this.member3850 = d;
            this.member10162 = b;
        } else {
            throw new Error('1104 ');
        }
    };
    a.prototype.member2914 = function () {
        return this.member1995;
    };
    a.prototype.member3250 = function () {
        if (this.member1995 !== member47) {
            return true;
        }
        if (!this.member10167) {
            if (this.member10165 === member47) {
                var c = this.member995.member1439(this.member10162);
                if (c === member47) {
                    return false;
                }
                if (c !== undefined) {
                    this.member10165 = c.member3263(this.member1204);
                }
                if (this.member10165 === undefined) {
                    if (false) {
                    }
                    this.member10165 = [];
                }
                this.member10166 = new Array(this.member10165.length);
            }
            var d = true;
            for (var g = 0; g < this.member10165.length; g++) {
                if (!this.member995.member1551(this.member10162, this.member1204, this.member10165[g])) {
                    d = false;
                }
            }
            if (!d) {
                return false;
            }
            for (g = 0; g < this.member10165.length; g++) {
                this.member10166[g] = this.member995.getFile(this.member10162, this.member1204, this.member10165[g], Class96.member841);
                if (this.member10165[g] > this.member10164) {
                    this.member10164 = this.member10165[g];
                }
            }
            this.member10167 = true;
        }
        var b = true;
        for (g = 0; g < this.member10165.length; g++) {
            var e = this.member10166[g];
            e.member607(1);
            var h = e.member608();
            if (!this.member995.member1551(this.member3850, h, 0)) {
                b = false;
            }
        }
        if (!b) {
            return false;
        }
        this.member1995 = new Array(this.member10164);
        for (g = 0; g < this.member10165.length; g++) {
            var e = this.member10166[g];
            e.member607(1);
            var h = e.member608();
            if (this.member10163[h] === undefined) {
                this.member10163[h] = Class168(h, this.member995.getFile(this.member3850, h, 0, Class96.member841));
            }
            e.member607(0);
            this.member1995[this.member10165[g]] = Class169(this.member10163[h], e);
        }
        this.member10163 = undefined;
        this.member10165 = undefined;
        this.member10166 = undefined;
        return true;
    };
    return function (c, e, d, b) {
        return new a(c, e, d, b);
    };
}();