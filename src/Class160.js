export var Class160 = function () {
    var a = function (b) {
        this.member625;
        this.member651 = -1;
        this.member1676 = 64;
        this.member1677 = 64;
        this.member1380 = 2;
        this.member1678 = 1;
        this.member1679 = false;
        this.member654 = false;
        if (b.member625 !== undefined && b.member651 !== undefined && b.member1676 !== undefined && b.member1677 !== undefined && b.member1380 !== undefined && b.member1678 !== undefined && b.member1679 !== undefined && b.member654 !== undefined) {
            this.member625 = b.member625;
            this.member651 = b.member651;
            this.member1676 = b.member1676;
            this.member1677 = b.member1677;
            this.member1380 = b.member1380;
            this.member1678 = b.member1678;
            this.member1679 = b.member1679;
            this.member654 = b.member654;
        } else if (b.member680 !== undefined) {
            this.member625 = b.member680.member625;
            this.member651 = b.member680.member651;
            this.member1676 = b.member680.member1676;
            this.member1677 = b.member680.member1677;
            this.member1380 = b.member680.member1380;
            this.member1678 = b.member680.member1678;
            this.member1679 = b.member680.member1679;
            this.member654 = b.member680.member654;
        } else {
            throw new Error('1423 ');
        }
    };
    a.prototype.member682 = function () {
        return this.member625;
    };
    a.prototype.member701 = function () {
        return this.member651;
    };
    a.prototype.member1680 = function () {
        return this.member1676;
    };
    a.prototype.member1681 = function () {
        return this.member1677;
    };
    a.prototype.member1416 = function () {
        return this.member1380;
    };
    a.prototype.member1682 = function () {
        return this.member1678;
    };
    a.prototype.member702 = function () {
        return this.member654;
    };
    a.prototype.member681 = function () {
        return {
            member625: this.member625,
            member651: this.member651,
            member1676: this.member1676,
            member1677: this.member1677,
            member1380: this.member1380,
            member1678: this.member1678,
            member1679: this.member1679,
            member654: this.member654
        };
    };
    return function (b) {
        return new a(b);
    };
}();