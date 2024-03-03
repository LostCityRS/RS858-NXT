import { Class124 } from 'Class124.js';
export var Class218 = function () {
    var a = function (b) {
        if (b === undefined || b.member2693 === undefined || b.member1204 === undefined || b.member2694 === undefined || b.member2695 === undefined || b.member2696 === undefined) {
            throw new Error('993 ');
        }
        this.member2693 = b.member2693;
        this.member1204 = b.member1204;
        this.member2694 = b.member2694;
        this.member2695 = b.member2695;
        this.member2696 = b.member2696;
        this.member2697 = b.member2697;
        this.priority = b.priority;
        if (this.priority === undefined) {
            this.priority = 0;
        }
        this.member2698 = member47;
    };
    a.prototype.member2699 = function () {
        return this.member2693;
    };
    a.prototype.member2700 = function () {
        return this.member1204;
    };
    a.prototype.member2701 = function () {
        return this.member2694;
    };
    a.prototype.member2702 = function () {
        return this.member2695;
    };
    a.prototype.member2703 = function () {
        return this.priority;
    };
    a.prototype.member2704 = function () {
        return this.member2698;
    };
    a.prototype.member2705 = function (b) {
        this.member2698 = Class124(b);
    };
    a.prototype.member2706 = function () {
        this.member2698 = member47;
    };
    a.prototype.member2707 = function () {
        this.member2696(this.member2693, this.member1204, this.member2698, this.member2694, this.member2697);
    };
    a.prototype.member2708 = function () {
        if (this.member2698 === member47) {
            return 0;
        } else {
            return this.member2698.member1047() * 100 / (this.member2698.getSize() - this.member2695);
        }
    };
    return function (b) {
        return new a(b);
    };
}();