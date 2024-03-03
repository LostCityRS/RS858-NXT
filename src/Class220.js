export var Class220 = function () {
    var a = function (b) {
        this.data = [];
        this.member2712 = 0;
        this.member2713 = 0;
        this.member2714 = b === undefined ? true : b;
    };
    a.prototype.member2715 = function (b) {
        if (this.member2713 === this.data.length) {
            this.data.push(b);
        } else {
            this.data[this.member2713] = b;
        }
        this.member2713++;
    };
    a.prototype.member2716 = function () {
        var g = this.data;
        var e = g.length;
        var c = this.member2713;
        var d = this.member2712;
        if (c === d) {
            return undefined;
        }
        var b = g[d];
        this.member2712++;
        d = this.member2712;
        if (this.member2714) {
            if (e - d << 1 <= e) {
                this.data = g.slice(d);
                this.member2712 = 0;
                this.member2713 = this.data.length;
            } else {
                g[this.member2712 - 1] = undefined;
            }
        } else {
            g[this.member2712 - 1] = undefined;
            if (this.member2712 === c) {
                this.member2712 = 0;
                this.member2713 = 0;
            }
        }
        return b;
    };
    a.prototype.member2717 = function () {
        return this.member2712 === this.member2713 ? undefined : this.data[this.member2712];
    };
    a.prototype.getItem = function (b) {
        if (b < 0) {
            throw new Error('1017 ');
        }
        if (b >= this.member890()) {
            throw new Error('1018 ');
        }
        return this.data[this.member2712 + b];
    };
    a.prototype.member890 = function () {
        return this.member2713 - this.member2712;
    };
    return function (b) {
        return new a(b);
    };
}();