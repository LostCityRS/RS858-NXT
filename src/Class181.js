import { Class41 } from 'Class41.js';
import { Class84 } from 'Class84.js';
export var Class181 = function () {
    var b = new Float32Array(3);
    var a = function (c) {
        this.member625 = c;
        this.member2015;
        this.lifetime = 0;
        this.member2016 = 0;
        this.position = new Float32Array(3);
        this.member328 = new Float32Array(3);
        this.member2017 = 0;
        this.size = 0;
        this.member2018 = 0;
        this.member2019 = 0;
        this.member2020 = false;
        this.member2021 = false;
        this.member2022 = 0;
        this.member2023 = 0;
        this.b = 0;
        this.a = 0;
        this.member546 = 0;
        this.member2024 = 0;
    };
    a.prototype.getID = function () {
        return this.member625;
    };
    a.prototype.member2025 = function () {
        return this.member2015;
    };
    a.prototype.member2026 = function () {
        return this.position;
    };
    a.prototype.member2027 = function () {
        return this.member328;
    };
    a.prototype.member2028 = function () {
        return this.member2017;
    };
    a.prototype.getSize = function () {
        return this.size;
    };
    a.prototype.member2029 = function () {
        return this.member2019;
    };
    a.prototype.getColour = function () {
        return this.member546;
    };
    a.prototype.fill = function (n, i, h, c, k, m, d, j, e) {
        this.member2015 = n;
        this.lifetime = i;
        this.member2016 = 0;
        this.member2017 = h;
        this.member2018 = c;
        this.size = k;
        this.member2019 = m;
        this.member546 = d;
        var g = this.member2015.member2030();
        if (j && g.member710() !== member53.member14) {
            this.member2020 = true;
        } else {
            this.member2020 = false;
        }
        this.member2022 = this.member546 >> 24 & 255;
        this.member2023 = this.member546 >> 16 & 255;
        this.b = this.member546 >> 8 & 255;
        if (e && g.member713() !== member53.member14) {
            this.member2021 = true;
        } else {
            this.member2021 = false;
        }
        this.a = this.member546 & 255;
    };
    a.prototype.member487 = function (c) {
        this.member2016 += c;
        if (this.member2016 >= this.lifetime) {
            return false;
        }
        var d = this.member2015.member2030();
        this.member2031(c, d);
        this.member2032(c);
        this.member2033(c);
        this.member2034(c, d);
        this.size += d.member715() * c;
        Class41.add(this.position, Class41.scale(this.member328, this.member2017 * c, b));
        return true;
    };
    a.prototype.member2031 = function (e, g) {
        if (g.member691() !== member53.member14 && this.member2016 < g.member692()) {
            this.member2017 += g.member714() * e;
        }
        var c = g.member693();
        var d = g.member694();
        if (c !== Class84.member620 && d !== 0) {
            Class41.member322(this.position, this.member2015.member2035(), b);
            var h = b[0] * b[0] + b[1] * b[1] + b[2] * b[2];
            if (c === Class84.member621) {
                h = Math.sqrt(h);
            }
            this.member2017 -= this.member2017 * h * e * d;
        }
    };
    a.prototype.member2032 = function (c) {
        if (this.member2018 === 0) {
            return;
        }
        this.member2019 = (this.member2019 + this.member2018 / 2048 * c) % (2 * Math.PI);
    };
    a.prototype.member2034 = function (c, d) {
        if (this.member2020) {
            if (this.member2016 > d.member703()) {
                this.member2020 = false;
            } else {
                this.member2022 += d.member710() * c;
                this.member2023 += d.member711() * c;
                this.b += d.member712() * c;
                if (this.member2022 < 0) {
                    this.member2022 = 0;
                } else if (this.member2022 > 255) {
                    this.member2022 = 255;
                }
                if (this.member2023 < 0) {
                    this.member2023 = 0;
                } else if (this.member2023 > 255) {
                    this.member2023 = 255;
                }
                if (this.b < 0) {
                    this.b = 0;
                } else if (this.b > 255) {
                    this.b = 255;
                }
                this.member546 = (this.member2022 & 255) << 24 | (this.member2023 & 255) << 16 | (this.b & 255) << 8 | this.member546 & 255;
            }
        }
        if (this.member2021) {
            if (this.member2016 > d.member704()) {
                this.member2021 = false;
            } else {
                this.a += d.member713() * c;
                if (this.a < 0) {
                    this.a = 0;
                } else if (this.a > 255) {
                    this.a = 255;
                }
                this.member546 = this.member546 & 4294967040 | this.a & 255;
            }
        }
    };
    a.prototype.member2033 = function (h) {
        var g = this.member2015.member2036();
        if (g === null) {
            return;
        }
        for (var c = 0; c < g.length; c++) {
            var e = g[c];
            var d = e.member1953();
            if (e.member1954() === Class84.member623) {
                this.member328[0] += d[0] * h;
                this.member328[1] += d[1] * h;
                this.member328[2] += d[2] * h;
            } else {
                this.position[0] += d[0] * h;
                this.position[1] += d[1] * h;
                this.position[2] += d[2] * h;
            }
        }
    };
    return function (c) {
        return new a(c);
    };
}();