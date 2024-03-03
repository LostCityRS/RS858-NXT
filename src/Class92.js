export var Class92 = function () {
    var a = function (b, c) {
        this.options = b;
        this.value;
        if (c !== undefined && !isNaN(c)) {
            this.value = c;
        } else {
            this.value = this.member792();
        }
    };
    a.prototype.getValue = function () {
        return this.value;
    };
    a.prototype.setValue = function (d, b, c) {
        this.value = c;
        this.member793(d, b);
    };
    a.prototype.member793 = function (c, b) {
    };
    a.prototype.member794 = function (b) {
        return true;
    };
    a.prototype.member792 = function () {
        throw new Error('1757 ');
    };
    return a;
}();