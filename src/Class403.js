import { Class143 } from 'Class143.js';
export var Class403 = function () {
    var a = function (d, c, b) {
        this.member4129 = d;
        this.member4638 = c;
        this.member4639 = c;
        this.member4640 = c;
        this.member4641 = c;
        this.member4642 = b;
        this.member4643 = 0;
        this.member4644 = 0;
        this.member4645 = 0;
    };
    a.prototype.getWorldPosition = function () {
        throw new Error('1793 ');
    };
    a.prototype.member992 = function () {
        return this.member4129;
    };
    a.prototype.member993 = function () {
        return this.member4639;
    };
    a.prototype.member4646 = function () {
        return this.member4642;
    };
    a.prototype.member4647 = function (b) {
        this.member4638 = b;
    };
    a.prototype.member4648 = function (d, b, c) {
        this.member4640 = d !== -1 ? d : member4638;
        this.member4641 = this.member4639;
        this.member4644 = b;
        this.member4643 = c;
        this.member4645 = b;
    };
    a.prototype.member4649 = function (d) {
        if (this.member4639 === this.member4640 || this.member4644 === d) {
            return;
        }
        if (d >= this.member4643) {
            this.member4639 = this.member4640;
        } else {
            var c = this.member4643 - this.member4645;
            var b = d - this.member4645;
            this.member4639 = Class143.member1446(this.member4641, this.member4640, b / c);
        }
        this.member4644 = d;
    };
    return a;
}();