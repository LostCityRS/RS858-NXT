import { Class122 } from 'Class122.js';
import { Class463 } from 'Class463.js';
export var Class670 = function () {
    var a = 's'.charCodeAt(0);
    var b = function (c) {
        this.member2896;
        this.member625 = -1;
        if (c.member625 !== undefined && c.member2896 !== undefined) {
            this.member625 = c.member625;
            this.member2896 = c.member2896;
        } else {
            throw new Error('878 ');
        }
        this.type;
        this.member9774;
        this.member9775 = 0;
        this.member9776 = '';
        this.member9777 = true;
    };
    b.prototype.member2794 = function () {
        return this.type;
    };
    b.prototype.member9778 = function () {
        return this.member9774;
    };
    b.prototype.member6145 = function () {
        return this.member9775;
    };
    b.prototype.member6144 = function () {
        return this.member9776;
    };
    b.prototype.member9779 = function () {
        return this.member9777;
    };
    b.prototype.decode = function (d) {
        while (true) {
            var c = d.member609();
            if (c === undefined) {
                throw new Error('879 ');
                break;
            }
            if (c === 0) {
                break;
            }
            this.member2932(d, c);
        }
    };
    b.prototype.member2932 = function (d, c) {
        if (c === 1) {
            this.member9774 = Class122.member1036(d.member609());
        } else if (c === 2) {
            this.member9775 = d.member1074();
        } else if (c === 4) {
            this.member9777 = false;
        } else if (c === 5) {
            this.member9776 = d.member1089();
        } else if (c === 101) {
            this.type = Class463.getByID(d.member1078());
            if (this.type !== null) {
                this.member9774 = this.type.member7286.charCodeAt(0);
            }
        } else if (false) {
        }
    };
    b.prototype.member6141 = function () {
        return this.member9774 === a;
    };
    return function (c) {
        return new b(c);
    };
}();