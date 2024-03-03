export var Class172 = function () {
    var a = function (c) {
        this.member651 = -1;
        this.member1676 = 64, this.member1677 = 64;
        this.member1380 = 2;
        this.member1678 = 1;
        this.member1679 = false;
        this.member654 = false;
        if (c !== undefined) {
            b.call(this, c);
        } else {
            throw new Error('1740 ');
        }
    };
    var b = function (d) {
        while (true) {
            var c = d.g1();
            if (c === 0) {
                break;
            } else if (c === 1) {
                this.member651 = d.g2();
                if (this.member651 === 65535) {
                    this.member651 = -1;
                }
            } else if (c === 2) {
                this.member1676 = d.g2() + 1;
                this.member1677 = d.g2() + 1;
            } else if (c === 3) {
                d.g1s();
            } else if (c === 4) {
                this.member1380 = d.g1();
            } else if (c === 5) {
                this.member1678 = d.g1();
            } else if (c === 6) {
                this.member1679 = true;
            } else if (c === 7) {
                this.member654 = true;
            } else {
                throw new Error('1741 ' + c);
            }
        }
    };
    a.prototype.getMaterial = function () {
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
    a.prototype.member1893 = function () {
        return this.member1679;
    };
    a.prototype.member1783 = function () {
        return this.member654;
    };
    return function (c) {
        return new a(c);
    };
}();