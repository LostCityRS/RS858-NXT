export var Class514 = function () {
    var a = function (d, b, c) {
        this.member8334 = d;
        this.member1627 = b;
        this.member8335 = c;
        this.member863 = 0;
    };
    a.prototype.member8336 = function (b) {
        this.member1627 = b;
        for (var c in this.member8334) {
            var d = parseInt(c) === b;
            this.member8334[c].member8318(d);
        }
    };
    a.prototype.member8318 = function (b, c) {
        this.member8334[b].member8318(c);
    };
    a.prototype.member8319 = function (b, c) {
        this.member8334[b].member8319(c);
    };
    a.prototype.member1626 = function (b) {
        return this.member8334[b].member1626();
    };
    a.prototype.member4228 = function (b, c) {
        this.member8334[b].member4228(c);
    };
    a.prototype.member4229 = function (b) {
        this.member8334[b].member4229();
    };
    a.prototype.member1939 = function () {
        return this.member8334[this.member1627].member8321(this.member8335).member8305;
    };
    a.prototype.append = function (b) {
        this.member8334[this.member1627].member8321(this.member8335).append(b);
    };
    a.prototype.member1629 = function (c, b) {
        this.member8334[c].member8321(this.member8335).append(b);
    };
    return function (d, b, c) {
        return new a(d, b, c);
    };
}();