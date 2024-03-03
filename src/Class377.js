import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class49 } from 'Class49.js';
import { Cuboid } from 'Class166.js';
export var Class377 = function () {
    var b = Class41.create();
    var a = new Float32Array([
        0,
        1,
        0
    ]);
    var d = new Float32Array([
        1,
        0,
        0
    ]);
    var c = function () {
        this.parent = undefined;
        this.member4173 = undefined;
        this.member763 = Class140.create();
        Class140.member1354(this.member763);
        this.member3454 = Class41.create();
        this.member4174 = Class41.create();
        this.member4175 = true;
        this.member4176 = Class49.create();
        this.member4177 = true;
        this.member2085 = false;
        this.member1794 = undefined;
        this.member4178 = undefined;
        this.member4179 = undefined;
        this.member4180 = 0;
        this.member4181 = new Int32Array(3);
        this.member4181[0] = this.member4181[1] = this.member4181[2] = -1;
    };
    c.prototype.member512 = function () {
        Class49.member1816(this.member4176);
        if (this.member1794 !== undefined) {
            this.member1794.member1816();
        }
        if (this.member4178 !== undefined) {
            this.member4178.member1816();
        }
    };
    c.prototype.member2010 = function () {
        return this.member4173;
    };
    c.prototype.member4182 = function () {
        this.member2085 = false;
    };
    c.prototype.member2098 = function () {
        return this.member1794;
    };
    c.prototype.member4093 = function (e) {
        if (this.member1794 !== undefined) {
            this.member1794.member1816();
        }
        this.member1794 = e;
        this.member4183();
    };
    c.prototype.member4167 = function () {
        this.member4184();
        return this.member4178;
    };
    c.prototype.member4185 = function (e) {
        this.member4179 = e;
        this.member2085 = false;
    };
    c.prototype.member4186 = function () {
        return this.member4179;
    };
    c.prototype.member4187 = function () {
        return this.member4180;
    };
    c.prototype.member301 = function () {
        if (this.member4173 !== undefined) {
            for (var e = 0; e < this.member4173.length; e++) {
                this.member4173[e].member301();
            }
        }
        this.parent = undefined;
        this.member4173 = undefined;
    };
    c.prototype.member4188 = function () {
        return this.parent !== undefined;
    };
    c.prototype.member2013 = function (e) {
        e.member4080(this);
        if (this.member4173 === undefined) {
            this.member4173 = new Array(0);
        }
        this.member4173[this.member4173.length] = e;
        this.member2085 = false;
    };
    c.prototype.removeChild = function (e) {
        if (this.member4173 !== undefined) {
            for (var g = 0; g < this.member4173.length; g++) {
                if (this.member4173[g] === e) {
                    if (this.member4173.length === 1) {
                        this.member4173 = undefined;
                    } else {
                        this.member4173.splice(g, 1);
                    }
                    this.member2085 = false;
                    break;
                }
            }
        }
        e.member4080(undefined);
    };
    c.prototype.member4189 = function () {
        if (this.parent !== undefined) {
            this.parent.removeChild(this);
        }
    };
    c.prototype.member4080 = function (e) {
        this.parent = e;
        this.member4183();
    };
    c.prototype.member4190 = function (g, i, k, e) {
        if (k === 0 || this.member4181[k - 1] === g) {
            var h = this.member4167();
            if (h === undefined || i.member1803(h) || e !== undefined && e.member1803(h)) {
                this.member4181[k] = g;
                if (this.member4173 !== undefined) {
                    for (var j = 0; j < this.member4173.length; j++) {
                        this.member4173[j].member4190(g, i, k, e);
                    }
                }
            }
        }
    };
    c.prototype.member4191 = function (g, e, j) {
        if (j === 0 || this.member4181[j - 1] === g) {
            var h = this.member4167();
            if (h === undefined || e.member1803(h)) {
                this.member4181[j] = g;
                if (this.member4173 !== undefined) {
                    for (var i = 0; i < this.member4173.length; i++) {
                        this.member4173[i].member4191(g, e, j);
                    }
                }
            }
        }
    };
    c.prototype.member1805 = function (h, g, e, m, i) {
        if (m !== -1 && this.member4181[m] !== e) {
            return false;
        }
        if (this.member4179 !== undefined && this.member4179.member3659()) {
            if (this.member4179.member1805 !== undefined) {
                if (this.member4179.member1805(h, g, i)) {
                    return true;
                }
            } else {
                var k = this.member4167();
                if (k !== undefined) {
                    if (k.member1805(h, g)) {
                        return true;
                    }
                }
            }
        }
        if (this.member4173 !== undefined) {
            for (var j = 0; j < this.member4173.length; j++) {
                if (this.member4173[j].member1805(h, g, e, m, i)) {
                    return true;
                }
            }
        }
        return false;
    };
    c.prototype.member4183 = function () {
        if (this.member4173 !== undefined) {
            for (var e = 0; e < this.member4173.length; e++) {
                this.member4173[e].member4183();
            }
        }
        this.member4175 = true;
        this.member4177 = true;
        this.member2085 = false;
    };
    c.prototype.member4192 = function (e) {
        return this.member4181[e];
    };
    c.prototype.translate = function (e) {
        Class41.add(this.member3454, e);
        this.member4183();
    };
    c.prototype.member4193 = function (e) {
        Class41.set(e, this.member3454);
        this.member4183();
    };
    c.prototype.member4194 = function (h, g, e) {
        this.member3454[0] = h;
        this.member3454[1] = g;
        this.member3454[2] = e;
        this.member4183();
    };
    c.prototype.member4195 = function (e) {
        this.member3454[1] = e;
        this.member4183();
    };
    c.prototype.member4196 = function () {
        return this.member3454[1];
    };
    c.prototype.member344 = function (e) {
        Class41.set(this.member3454, e);
    };
    c.prototype.member4099 = function () {
        if (!this.member4175) {
            return this.member4174;
        } else {
            if (this.parent === undefined) {
                this.member4174 = this.member3454;
            } else {
                Class41.add(this.parent.member4099(), this.member3454, this.member4174);
            }
            this.member4175 = false;
            return this.member4174;
        }
    };
    c.prototype.rotate = function (e) {
        Class140.member323(this.member763, e);
        this.member4183();
    };
    c.prototype.member4197 = function (e) {
        Class140.set(e, this.member763);
        this.member4183();
    };
    c.prototype.member4198 = function (e) {
        Class140.member1353(a, e, this.member763);
        this.member4183();
    };
    c.prototype.member2029 = function (e) {
        return Class140.set(this.member763, e);
    };
    c.prototype.member4199 = function () {
        var h = this.member4200();
        var i = h[12];
        h[12] = 0;
        var g = h[13];
        h[13] = 0;
        var e = h[14];
        h[14] = 0;
        Class49.member318(h, d, b);
        var j = Math.atan2(b[2], b[0]);
        h[12] = i;
        h[13] = g;
        h[14] = e;
        return j;
    };
    c.prototype.member4200 = function () {
        if (!this.member4177) {
            return this.member4176;
        }
        Class49.member354(this.member763, this.member3454, this.member4176);
        if (this.parent !== undefined) {
            Class49.member323(this.parent.member4200(), this.member4176, this.member4176);
        }
        this.member4177 = false;
        return this.member4176;
    };
    c.prototype.member4201 = function (e) {
        var g = this.member4167();
        if (g !== undefined) {
            g.member1798(b);
            this.member4180 = e[2] * b[0] + e[6] * b[1] + e[10] * b[2] + e[14];
        } else {
            Class41.set(this.member4099(), b);
            this.member4180 = e[2] * b[0] + e[6] * b[1] + e[10] * b[2] + e[14];
        }
    };
    c.prototype.member4184 = function () {
        if (this.member2085 === true) {
            return;
        }
        if (this.member1794 !== undefined) {
            if (this.member4178 === undefined) {
                this.member4178 = Cuboid(this.member1794);
            } else {
                this.member4178.member1797(this.member1794);
            }
            this.member4178.transform(this.member4200());
        }
        this.member2085 = true;
    };
    c.prototype.member4202 = function (g) {
        if (this.member1794 === undefined) {
            return;
        }
        if (this.member4173 !== undefined) {
            for (var e = 0; e < this.member4173.length; e++) {
                var i = this.member4173[e];
                if (g) {
                    i.member4202(true);
                }
                var h = i.member2098();
                if (h !== undefined) {
                    i.member344(b);
                    h.translate(b);
                    this.member1794.member1800(h);
                    h.translate(Class41.member324(b));
                }
            }
            this.member2085 = false;
        }
    };
    return function () {
        return new c();
    };
}();