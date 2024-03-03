import { Class103 } from 'Class103.js';
import { Class674 } from 'Class674.js';
export var Class675 = function () {
    var a = function (b) {
        this.member9811 = Class103();
        this.member9812;
        if (b !== undefined) {
            this.member9812 = b;
        } else {
            throw new Error('1412 ');
        }
    };
    a.prototype.member9808 = function () {
        return this.member9812;
    };
    a.prototype.member9813 = function () {
        return this.member9811.member890();
    };
    a.prototype.member2038 = function (c) {
        var d = true;
        if (c.member884 !== undefined) {
            this.member9811.unlink(c);
        }
        for (var b = this.member9811.member776(); b !== null; b = this.member9811.member777()) {
            if (Class674.member9809(c.member9814().id, b.member9814().id)) {
                this.member9811.member889(c, b);
                return d;
            }
            d = false;
        }
        this.member9811.member887(c);
        return d;
    };
    a.prototype.member2703 = function () {
        if (this.member9811.member776() !== null) {
            return this.member9811.member776().member9814();
        }
        return -1;
    };
    return function (b) {
        return new a(b);
    };
}();