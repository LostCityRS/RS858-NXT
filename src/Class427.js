import { Class86 } from 'Class86.js';
import { Class291 } from 'Class291.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class226 } from 'Class226.js';
import { Class76 } from 'Class76.js';
export var Class427 = function () {
    var a = function (b) {
        this.member995;
        this.member625 = -1;
        this.member6149 = null;
        this.member6150 = null;
        this.member6151 = null;
        this.member6152 = null;
        this.member6153 = null;
        this.member6154 = null;
        this.member6155 = null;
        this.member6156 = 1;
        this.member6157 = 1;
        this.origin = null;
        this.member6158 = 255;
        this.member6159 = true;
        this.member6160 = -1;
        this.member6161 = {
            member6162: Class86.member725,
            member6163: 0,
            member6164: Class86.member726,
            member6165: 0
        };
        this.member1593 = {
            x: 0,
            member756: 0
        };
        this.member6166 = {
            member6162: Class86.member723,
            member6163: 0,
            member6164: Class86.member724,
            member6165: 0
        };
        this.member6167 = {
            member6162: Class86.member725,
            member6163: 0,
            member6164: Class86.member726,
            member6165: 0
        };
        this.member25(b);
    };
    a.prototype.member25 = function (d) {
        if (d.member6168 !== undefined && d.member6154 !== undefined && d.member625 !== undefined && d.member995 !== undefined) {
            this.member995 = d.member995;
            this.member625 = d.member625;
            this.member6149 = d.member6168.member1089();
            this.member6150 = d.member6168.member1089();
            this.origin = Class291(d.member6168.member1073());
            var i = d.member6168.member1074();
            if (i !== -1) {
                this.member6158 = i;
            }
            this.member6159 = d.member6168.member609() === 1;
            this.member6160 = d.member6168.member609();
            d.member6168.member609();
            var c = d.member6168.member609();
            this.member6151 = new Array(c);
            for (var j = 0; j < c; j++) {
                this.member6151[j] = {
                    level: d.member6168.member609(),
                    member6169: d.member6168.member608(),
                    member6170: d.member6168.member608(),
                    member6171: d.member6168.member608(),
                    member6172: d.member6168.member608(),
                    member6173: d.member6168.member608(),
                    member6174: d.member6168.member608(),
                    member6175: d.member6168.member608(),
                    member6176: d.member6168.member608()
                };
            }
            var h = d.member6154.member608();
            this.member6152 = new Array(h);
            for (var g = 0; g < h; g++) {
                this.member6152[g] = {
                    member6177: d.member6154.member609(),
                    member6178: d.member6154.member609(),
                    member6179: d.member6154.member608(),
                    member6180: d.member6154.member608(),
                    member6181: d.member6154.member609(),
                    member6182: d.member6154.member608(),
                    member6183: d.member6154.member608()
                };
            }
            var e = d.member6154.member608();
            this.member6153 = new Array(e);
            for (var b = 0; b < e; b++) {
                this.member6153[b] = {
                    member6177: d.member6154.member609(),
                    member6178: d.member6154.member609(),
                    member6179: d.member6154.member608(),
                    member6180: d.member6154.member608(),
                    member6184: d.member6154.member609(),
                    member6185: d.member6154.member609(),
                    member6181: d.member6154.member609(),
                    member6182: d.member6154.member608(),
                    member6183: d.member6154.member608(),
                    member6186: d.member6154.member609(),
                    member6187: d.member6154.member609()
                };
            }
            this.member6156 = d.member6154.member609();
            this.member6157 = d.member6154.member609();
            this.member4184();
        } else if (d.member6188 !== undefined && d.member6189 !== undefined && d.member6190 !== undefined) {
            this.member625 = -1;
            this.member6149 = 'dummyarea';
            this.member6150 = 'Dummy Area';
            this.origin = Class291(0, d.member6188, d.member6189);
            this.member6158 = 255;
            this.member6159 = false;
            this.member6160 = 0;
            this.member6151 = new Array(1);
            this.member6151[0] = {
                level: 0,
                member6169: d.member6188 - d.member6190 / 2,
                member6170: d.member6189 - d.member6190 / 2,
                member6171: d.member6188 + d.member6190 / 2,
                member6172: d.member6189 + d.member6190 / 2,
                member6173: d.member6188 - d.member6190 / 2,
                member6174: d.member6189 - d.member6190 / 2,
                member6175: d.member6188 + d.member6190 / 2,
                member6176: d.member6189 + d.member6190 / 2
            };
            this.member6152 = new Array(0);
            this.member6153 = new Array(0);
            this.member6156 = 1;
            this.member6157 = 1;
            this.member4184();
        } else {
            throw new Error('1748 ');
        }
    };
    a.prototype.member6191 = function () {
        return this.member625;
    };
    a.prototype.member6192 = function () {
        return this.member6149;
    };
    a.prototype.member6193 = function () {
        return this.member6150;
    };
    a.prototype.member6194 = function () {
        return this.origin;
    };
    a.prototype.member6195 = function () {
        return this.member6158;
    };
    a.prototype.member6196 = function () {
        return this.member6159;
    };
    a.prototype.member6197 = function () {
        return this.member6160;
    };
    a.prototype.member6198 = function (b) {
        if (b !== undefined && b === true && (this.member6152.length !== 0 || this.member6153.length !== 0)) {
            return this.member6167;
        } else {
            return this.member6161;
        }
    };
    a.prototype.member1798 = function () {
        return this.member1593;
    };
    a.prototype.member4696 = function (g) {
        if (this.member625 === -1) {
            return undefined;
        }
        if (this.member6155 === member47) {
            var c = this.member995.member1439(Class95.member823);
            var e = 2;
            var b = this.member995.getFile(Class95.member823, e, this.member625, Class96.member840);
            if (b === member47) {
                return member47;
            }
            var d = Class226({
                member2744: b.getData(),
                member2745: false
            });
            this.member6155 = {
                texture: Class76(g, d.member556(), d.member557(), d.member2743(), false, true, false),
                member4697: 1 / this.member6156 * 32767,
                member4698: 1 / this.member6157 * 32767
            };
            this.member6155.texture.member563();
        }
        return this.member6155;
    };
    a.prototype.member6199 = function () {
        if (this.member6155 !== null) {
            this.member6155.texture.member512();
            this.member6155 = null;
        }
    };
    a.prototype.member4184 = function () {
        for (var b = 0; b < this.member6151.length; b++) {
            if (this.member6151[b].member6169 < this.member6161.member6162) {
                this.member6161.member6162 = this.member6151[b].member6169;
            }
            if (this.member6151[b].member6171 > this.member6161.member6163) {
                this.member6161.member6163 = this.member6151[b].member6171;
            }
            if (this.member6151[b].member6170 < this.member6161.member6164) {
                this.member6161.member6164 = this.member6151[b].member6170;
            }
            if (this.member6151[b].member6172 > this.member6161.member6165) {
                this.member6161.member6165 = this.member6151[b].member6172;
            }
        }
        this.member1593.x = (this.member6161.member6162 + this.member6161.member6163) / 2;
        this.member1593.member756 = (this.member6161.member6164 + this.member6161.member6165) / 2;
        for (var j = 0; j < this.member6152.length; j++) {
            var k = this.member6152[j].member6182 * Class86.member716;
            var i = this.member6152[j].member6183 * Class86.member716;
            var h = k + Class86.member716 - 1;
            var e = i + Class86.member716 - 1;
            if (k < this.member6166.member6162) {
                this.member6166.member6162 = k;
            }
            if (h > this.member6166.member6163) {
                this.member6166.member6163 = h;
            }
            if (i < this.member6166.member6164) {
                this.member6166.member6164 = i;
            }
            if (e > this.member6166.member6165) {
                this.member6166.member6165 = e;
            }
        }
        for (var g = 0; g < this.member6153.length; g++) {
            var d = this.member6153[g].member6182 * Class86.member716 + this.member6153[g].member6186;
            var c = this.member6153[g].member6183 * Class86.member716 + this.member6153[g].member6187;
            if (d < this.member6166.member6162) {
                this.member6166.member6162 = d;
            }
            if (d > this.member6166.member6163) {
                this.member6166.member6163 = d;
            }
            if (c < this.member6166.member6164) {
                this.member6166.member6164 = c;
            }
            if (c > this.member6166.member6165) {
                this.member6166.member6165 = c;
            }
        }
        this.member6167.member6162 = this.member6166.member6162 * Class86.member717;
        this.member6167.member6163 = this.member6166.member6163 * Class86.member717 + Class86.member717 - 1;
        this.member6167.member6164 = this.member6166.member6164 * Class86.member717;
        this.member6167.member6165 = this.member6166.member6165 * Class86.member717 + Class86.member717 - 1;
    };
    a.prototype.member6200 = function () {
        if (this.member6154 !== null) {
            return this.member6154;
        }
        this.member6154 = new Array(Class86.member414);
        var g = this.member6166.member6163 - this.member6166.member6162 + 1;
        var m = this.member6166.member6165 - this.member6166.member6164 + 1;
        for (var b = 0; b < Class86.member414; b++) {
            this.member6154[b] = new Array(g);
            for (var q = 0; q < g; q++) {
                this.member6154[b][q] = new Array(m);
                for (var d = 0; d < m; d++) {
                    this.member6154[b][q][d] = -1;
                }
            }
        }
        for (var r = 0; r < this.member6152.length; r++) {
            var c = this.member6152[r];
            var j = c.member6179 * Class86.member716;
            var e = c.member6180 * Class86.member716;
            var k = c.member6182 * Class86.member716 - this.member6166.member6162;
            var i = c.member6183 * Class86.member716 - this.member6166.member6164;
            for (var h = 0; h < c.member6178; h++) {
                for (var q = 0; q < Class86.member716; q++) {
                    for (var d = 0; d < Class86.member716; d++) {
                        this.member6154[c.member6181 + h][k + q][i + d] = c.member6177 + h << 24 | j + q << 14 | e + d << 3;
                    }
                }
            }
        }
        for (var n = 0; n < this.member6153.length; n++) {
            var o = this.member6153[n];
            var j = o.member6179 * Class86.member716 + o.member6184;
            var e = o.member6180 * Class86.member716 + o.member6185;
            var k = o.member6182 * Class86.member716 + o.member6186 - this.member6166.member6162;
            var i = o.member6183 * Class86.member716 + o.member6187 - this.member6166.member6164;
            for (var h = 0; h < o.member6178; h++) {
                this.member6154[o.member6181 + h][k][i] = o.member6177 + h << 24 | j << 14 | e << 3;
            }
        }
        return this.member6154;
    };
    a.prototype.member6201 = function (e) {
        var b = e.x, c = e.member756;
        for (var d = 0; d < this.member6151.length; d++) {
            if (b >= this.member6151[d].member6169 && b <= this.member6151[d].member6171 && c >= this.member6151[d].member6170 && c <= this.member6151[d].member6172) {
                return true;
            }
        }
        return false;
    };
    a.prototype.member6202 = function (c) {
        var b = c.x, d = c.member756;
        for (var e = 0; e < this.member6151.length; e++) {
            if (c.level === this.member6151[e].level && b >= this.member6151[e].member6169 && b <= this.member6151[e].member6171 && d >= this.member6151[e].member6170 && d <= this.member6151[e].member6172) {
                return Class291(0, b + (this.member6151[e].member6173 - this.member6151[e].member6169), d + (this.member6151[e].member6174 - this.member6151[e].member6170));
            }
        }
        return undefined;
    };
    a.prototype.member6203 = function (c) {
        var b = c.x, d = c.member756;
        for (var e = 0; e < this.member6151.length; e++) {
            if (b >= this.member6151[e].member6173 && b <= this.member6151[e].member6175 && d >= this.member6151[e].member6174 && d <= this.member6151[e].member6176) {
                return Class291(this.member6151[e].level, b + (this.member6151[e].member6169 - this.member6151[e].member6173), d + (this.member6151[e].member6170 - this.member6151[e].member6174));
            }
        }
        return undefined;
    };
    return function (b) {
        return new a(b);
    };
}();