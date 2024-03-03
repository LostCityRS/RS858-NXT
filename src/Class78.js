export var Class78 = function () {
    var a = function (b) {
        this.width;
        this.height;
        this.member591 = 0, this.member592 = 0, this.member593 = 0, this.member594 = 0;
        this.image;
        if (b.width !== undefined && b.height !== undefined && b.image !== undefined) {
            this.width = b.width;
            this.height = b.height;
            if (b.member591 !== undefined) {
                this.member591 = b.member591;
            }
            if (b.member592 !== undefined) {
                this.member592 = b.member592;
            }
            if (b.member593 !== undefined) {
                this.member593 = b.member593;
            }
            if (b.member594 !== undefined) {
                this.member594 = b.member594;
            }
            this.image = new Uint8Array(b.image);
        } else {
            throw new Error('1514 ');
        }
    };
    a.prototype.member556 = function () {
        return this.width;
    };
    a.prototype.member557 = function () {
        return this.height;
    };
    a.prototype.member595 = function () {
        return {
            left: this.member591,
            member596: this.member592,
            top: this.member593,
            member597: this.member594
        };
    };
    a.prototype.member598 = function () {
        return this.member591 + this.width + this.member592;
    };
    a.prototype.member599 = function () {
        return this.member594 + this.height + this.member593;
    };
    a.prototype.getColour = function () {
        return this.image.buffer;
    };
    a.prototype.member601 = function () {
        var c;
        var h = new Uint32Array(this.image.buffer);
        for (var g = (this.height >> 1) - 1; g >= 0; g--) {
            var e = g * this.width;
            var d = (this.height - g - 1) * this.width;
            for (var b = -this.width; b < 0; b++) {
                c = h[e];
                h[e] = h[d];
                h[d] = c;
                ++e;
                ++d;
            }
        }
        c = this.member593;
        this.member593 = this.member594;
        this.member594 = c;
    };
    a.prototype.member602 = function () {
        var c = new Uint32Array(this.width * this.height);
        var h = new Uint32Array(this.image.buffer);
        var d = 0;
        for (var b = 0; b < this.width; b++) {
            for (var g = this.height - 1; g >= 0; g--) {
                c[d++] = h[b + g * this.width];
            }
        }
        this.image = new Uint8Array(c.buffer);
        var e = this.member593;
        this.member593 = this.member591;
        this.member591 = this.member594;
        this.member594 = this.member592;
        this.member592 = e;
        e = this.height;
        this.height = this.width;
        this.width = e;
    };
    return function (b) {
        return new a(b);
    };
}();