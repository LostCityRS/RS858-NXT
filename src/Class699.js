import { Class672 } from 'Class672.js';
import { Class124 } from 'Class124.js';
import { Class379 } from 'Class379.js';
import { Class150 } from 'Class150.js';
export var Class699 = function () {
    var a = function (c, b) {
        member46(this, Class672, c, 1);
        this.job = undefined;
        this.member9920 = undefined;
        this.member4292 = Class124(10 * 1024 * 1024);
    };
    member45(Class672, a);
    a.prototype.member4589 = function (b) {
        this.job = b;
        this.member4292.member607(0);
        this.member9920 = this.job.member4243(this.member4292);
        this.member9785(b);
    };
    a.prototype.member78 = function () {
        if (this.job === undefined) {
            return;
        }
        var b = this.member9920.member78(this);
        if (b === member47) {
            return;
        } else if (b === undefined) {
            this.member9786(this.job, Class379.member4232);
            this.job = this.member9920 = undefined;
            return;
        } else {
            this.member4292.member607(0);
            this.member9920.member2560(this.member4292);
            var c = this.member4292.member1047();
            this.member4292.member607(0);
            var b = this.job.member4244(this.member4292, c);
            this.member9786(this.job, Class379.member4231, b);
            this.job = this.member9920 = undefined;
            return;
        }
    };
    a.prototype.member2622 = function (b) {
        return Class150.member1513(b);
    };
    return function (c, b) {
        return new a(c, b);
    };
}();