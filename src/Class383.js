export var Class383 = function () {
    var a = function (c, b) {
        this.member4335 = undefined;
        this.member2920 = undefined;
        this.member4336 = true;
        if (c !== undefined) {
            this.member4335 = c;
            this.member2920 = b;
        } else {
            throw new Error('901 ');
        }
    };
    a.prototype.member4337 = function () {
        return this.member4335;
    };
    a.prototype.member2919 = function () {
        if (this.member4336) {
            return this.member2920;
        } else {
            return undefined;
        }
    };
    a.prototype.member4338 = function (b) {
        this.member2920 = b;
    };
    a.prototype.member4339 = function (b) {
        this.member4336 = b;
    };
    return function (c, b) {
        return new a(c, b);
    };
}();