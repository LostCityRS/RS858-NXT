export var Class162 = function () {
    var a = function (d, c, e, b) {
        this.member1683 = d;
        this.member1684 = c;
        this.member1685 = e;
        this.member895 = b || 50;
        this.member1686 = new Array(this.member895);
        this.member1687 = 0;
    };
    a.prototype.get = function () {
        if (this.member1687 > 0) {
            var b = this.member1686[this.member1687--];
            if (this.member1685 !== undefined) {
                this.member1685.apply(b, arguments);
            }
            return b;
        } else {
            var c = this.member1683.apply(undefined, arguments);
            return c;
        }
    };
    a.prototype.member33 = function (b) {
        if (this.member1686.length < this.member895) {
            if (this.member1684 !== undefined) {
                this.member1684.call(b);
            }
            this.member1686[this.member1687++] = b;
        }
    };
    return function (d, c, e, b) {
        return new a(d, c, e, b);
    };
}();