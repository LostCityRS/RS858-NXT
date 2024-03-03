export var Class79 = function () {
    var a = function (b) {
        this.width;
        this.height;
        this.member591 = 0, this.member592 = 0, this.member593 = 0, this.member594 = 0;
        this.member603;
        this.image;
        this.alpha;
        if (b.width !== undefined && b.height !== undefined && b.member603 !== undefined && b.image !== undefined) {
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
            this.member603 = b.member603;
            this.image = b.image;
            if (b.alpha !== undefined) {
                this.alpha = b.alpha;
            }
        } else {
            throw new Error('1059 ');
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
    a.prototype.member604 = function () {
        this.member591 = this.member592 = this.member593 = this.member594 = 0;
    };
    a.prototype.member598 = function () {
        return this.member591 + this.width + this.member592;
    };
    a.prototype.member599 = function () {
        return this.member594 + this.height + this.member593;
    };
    a.prototype.getColour = function () {
        var b = new Uint8Array(this.width * this.height * 4);
        for (var c = 0; c < this.width * this.height; c++) {
            b[c * 4] = (this.member603[this.image[c]] & 16711680) >>> 16;
            b[c * 4 + 1] = (this.member603[this.image[c]] & 65280) >>> 8;
            b[c * 4 + 2] = this.member603[this.image[c]] & 255;
            if (this.alpha !== undefined) {
                b[c * 4 + 3] = this.alpha[c];
            } else if (this.image[c] === 0) {
                b[c * 4 + 3] = 0;
            } else {
                b[c * 4 + 3] = 255;
            }
        }
        return b.buffer;
    };
    a.prototype.member601 = function () {
        var c;
        for (var g = (this.height >> 1) - 1; g >= 0; g--) {
            var e = g * this.width;
            var d = (this.height - g - 1) * this.width;
            for (var b = -this.width; b < 0; b++) {
                c = this.image[e];
                this.image[e] = this.image[d];
                this.image[d] = c;
                if (this.alpha !== undefined) {
                    c = this.alpha[e];
                    this.alpha[e] = this.alpha[d];
                    this.alpha[d] = c;
                }
                ++e;
                ++d;
            }
        }
        c = this.member593;
        this.member593 = this.member594;
        this.member594 = c;
    };
    a.prototype.member602 = function () {
        var c = new Uint8Array(this.width * this.height);
        var d = 0;
        for (var b = 0; b < this.width; b++) {
            for (var h = this.height - 1; h >= 0; h--) {
                c[d++] = this.image[b + h * this.width];
            }
        }
        var g = this.image;
        this.image = c;
        if (this.alpha !== undefined) {
            d = 0;
            for (var b = 0; b < this.width; b++) {
                for (var h = this.height - 1; h >= 0; h--) {
                    g[d++] = this.alpha[b + h * this.width];
                }
            }
            this.alpha = g;
        }
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