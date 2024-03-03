export var Class304 = function () {
    var a = function (c, b) {
        this.list;
        this.member1917;
        if (c === undefined) {
            this.list = new Array(b);
            this.member1917 = 0;
        } else {
            this.list = c;
            this.member1917 = c.length;
        }
    };
    a.prototype.member427 = function () {
        return this.list;
    };
    a.prototype.member989 = function () {
        return this.member1917;
    };
    a.prototype.member3646 = function (b) {
        this.member1917 = b;
    };
    a.prototype.member3647 = function (b) {
        this.list[this.member1917++] = b;
    };
    a.prototype.member3648 = function () {
        this.member1917 = 0;
    };
    return function (c, b) {
        return new a(c, b);
    };
}();