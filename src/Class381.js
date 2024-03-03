import { Class380 } from 'Class380.js';
import { Class379 } from 'Class379.js';
export var Class381 = function () {
    var a = 2000;
    var d = 0;
    var c = false;
    var b = function (h, g, e) {
        if (h === undefined || g === undefined || e === undefined) {
            throw new Error('948 ');
        }
        this.jobType = h;
        this.member4235 = g;
        this.priority = e;
        this.status = Class380.CREATED;
        this.member4236 = undefined;
        this.result = undefined;
        this.member4237 = undefined;
        this.member2873 = undefined;
    };
    b.prototype.member2874 = function () {
        return this.jobType;
    };
    b.prototype.member4238 = function () {
        return this.member4235;
    };
    b.prototype.member2723 = function () {
        return this.status;
    };
    b.prototype.member2703 = function () {
        return this.priority;
    };
    b.prototype.member4239 = function () {
        return this.member4236;
    };
    b.prototype.member4240 = function () {
        return this.firstResult;
    };
    b.prototype.member2893 = function () {
        return this.result;
    };
    b.prototype.member4241 = function () {
        return this.member4237;
    };
    b.prototype.member1999 = function () {
        return this.status === Class380.FINISHED;
    };
    b.prototype.member4242 = function () {
        return this.result === Class379.member4231;
    };
    b.prototype.cancel = function () {
        this.status = Class380.FINISHED;
        this.result = Class379.CANCELLED;
        this.member2885();
    };
    b.prototype.member2889 = function () {
        throw new Error('949 ');
    };
    b.prototype.member2560 = function (e) {
        throw new Error('950 ');
    };
    b.prototype.member4243 = function (e) {
        throw new Error('951 ');
    };
    b.prototype.member4244 = function (e) {
        throw new Error('952 ');
    };
    b.prototype.member2752 = function () {
        this.cancel();
    };
    b.prototype.member4245 = function () {
        this.member4236 = d++;
        if (d > 65535) {
            d = 0;
        }
        if (false) {
        }
        this.status = Class380.member2860;
    };
    b.prototype.member4246 = function () {
        if (false) {
        }
        this.status = Class380.member4234;
    };
    b.prototype.member4247 = function () {
        if (false) {
        }
        this.status = Class380.member2861;
    };
    b.prototype.member4248 = function (g, e) {
        if (false) {
        }
        if (this.status !== Class380.FINISHED) {
            this.result = g;
            this.member4237 = e;
            this.status = Class380.FINISHED;
            this.tidyup();
        }
    };
    b.prototype.member2884 = function (e) {
        if (this.member2873 === undefined) {
            this.member2873 = new Array(1);
            this.member2873[0] = e;
        } else {
            this.member2873.push(e);
        }
    };
    b.prototype.member2885 = function () {
        if (this.member2873 !== undefined) {
            for (var e = 0; e < this.member2873.length; e++) {
                this.member2873[e].member512();
            }
            this.member2873 = undefined;
        }
    };
    b.prototype.tidyup = function () {
        setTimeout(this.timeout.bind(this), a);
    };
    b.prototype.timeout = function () {
        this.status = Class380.FINISHED;
        this.result = Class379.member4233;
        this.member2885();
    };
    return b;
}();