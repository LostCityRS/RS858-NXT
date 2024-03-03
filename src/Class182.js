export var Class182 = function () {
    var b = 0;
    var a = function (d) {
        this.data = new Array(d === undefined ? 10 : d);
        this.size = 0;
        this.member2037 = 0;
    };
    a.prototype.member2038 = function (d) {
        var e = this.data;
        if (this.size === e.length) {
            e.push(d);
        } else {
            e[this.size] = d;
        }
        this.size++;
    };
    var c = function (i, g) {
        var h = i.data;
        var d = h[g];
        var e = --i.size;
        h[g] = h[e];
        h[e] = undefined;
        return d;
    };
    a.prototype.removeItem = function (e) {
        for (var d = 0; d < this.size; d++) {
            if (e === this.data[d]) {
                return c(this, d);
            }
        }
    };
    a.prototype.getSize = function () {
        return this.size;
    };
    a.prototype.member776 = function () {
        this.member2037 = 0;
        return this.member777();
    };
    a.prototype.member777 = function () {
        if (this.member2037 === this.size) {
            return undefined;
        }
        return this.data[this.member2037++];
    };
    a.prototype.remove = function () {
        return c(this, --this.member2037);
    };
    a.prototype.member301 = function () {
        var e = this.data;
        for (var d = 0; d < this.size; d++) {
            e[d] = undefined;
        }
        this.size = 0;
        this.member2037 = 0;
    };
    return function (d) {
        return new a(d);
    };
}();