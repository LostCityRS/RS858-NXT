import { Class246 } from 'Class246.js';
export var Class248 = function () {
    var a = 2000;
    var c = 0;
    var b = function (g, d, e) {
        if (g === undefined || e === undefined) {
            throw new Error('1819 ');
        }
        this.jobType = g;
        this.member59 = d;
        this.priority = e;
        this.member2871 = c++;
        this.status = Class246.CREATED;
        this.member2376 = -1;
        this.member2375 = -1;
        this.member2872 = -1;
        this.member2873 = undefined;
    };
    b.prototype.member2874 = function () {
        return this.jobType;
    };
    b.prototype.member2875 = function () {
        return this.member59;
    };
    b.prototype.member2876 = function (d) {
        this.status = d;
        if (this.status === Class246.member2861) {
            this.member2872 = Date.now();
        }
    };
    b.prototype.member2723 = function () {
        return this.status;
    };
    b.prototype.member2877 = function (d) {
        this.priority = d;
    };
    b.prototype.getPriority = function () {
        return this.priority;
    };
    b.prototype.member2878 = function (e, d) {
        this.member2376 = e;
        this.member2375 = d;
    };
    b.prototype.member2879 = function () {
        return this.member2376;
    };
    b.prototype.member2880 = function () {
        return this.member2375;
    };
    b.prototype.member2881 = function () {
        return this.jobType;
    };
    b.prototype.member2882 = function () {
        return this.member2871;
    };
    b.prototype.member2883 = function () {
        return Date.now() - this.member2872;
    };
    b.prototype.member2884 = function (d) {
        if (this.member2873 === undefined) {
            this.member2873 = new Array(1);
            this.member2873[0] = d;
        } else {
            this.member2873.push(d);
        }
    };
    b.prototype.member2885 = function () {
        if (this.member2873 !== undefined) {
            for (var d = 0; d < this.member2873.length; d++) {
                this.member2873[d].member512();
            }
            this.member2873 = undefined;
        }
    };
    b.prototype.tidyup = function () {
        setTimeout(this.timeout.bind(this), a);
    };
    b.prototype.timeout = function () {
        this.status = Class246.member2864;
        this.member2885();
    };
    b.prototype.cancel = function () {
        this.status = Class246.member2865;
    };
    return b;
}();