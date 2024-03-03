import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class69 } from 'Class69.js';
import { Class75 } from 'Class75.js';
export var Class76 = function () {
    var a = function (j, e, g, b, i, h, c, d, k) {
        if (j === undefined || e === undefined || g === undefined || b === undefined) {
            throw new Error('1010 ');
        }
        this.member433 = j;
        this.member546 = b;
        this.width = e;
        this.height = g;
        this.member547;
        this.member548 = -1;
        this.member549 = 0;
        this.member550 = true;
        if (c !== undefined) {
            this.member550 = c;
        }
        this.member551 = true;
        if (i !== undefined) {
            this.member551 = i;
        }
        if (this.width !== this.height && this.member551) {
            throw new Error('1011 ');
        }
        this.filter = true;
        if (h !== undefined) {
            this.filter = h;
        }
        this.member552 = false;
        if (d !== undefined) {
            this.member552 = d;
        }
        if (this.member552 && !this.member433.member553()) {
            throw new Error('1012 ');
        }
        this.member554 = false;
        if (k === undefined) {
            k = false;
        }
        this.member555 = k;
        if (this.member546 === undefined) {
            this.member551 = false;
            this.member550 = false;
        }
        member46(this, Class73, Class4.member63);
    };
    member45(Class73, a);
    a.prototype.member512 = function () {
        if (this.member548 !== -1) {
            this.member433.gl.deleteTexture(this.member548);
            this.member548 = -1;
        } else {
            Class69.member489(this.member546);
            this.member546 = null;
        }
    };
    a.prototype.member84 = function () {
        return this.member549;
    };
    a.prototype.getData = function () {
        return this.member546;
    };
    a.prototype.member556 = function () {
        return this.width;
    };
    a.prototype.member557 = function () {
        return this.height;
    };
    a.prototype.member558 = function () {
        if (this.member548 === -1) {
            throw new Error('1013 ');
        }
        return this.member548;
    };
    a.prototype.member559 = function () {
        return this.member552;
    };
    a.prototype.member560 = function () {
        return this.member554;
    };
    a.prototype.member561 = function () {
        if (this.member547 === undefined) {
            this.member547 = this.member433.member562(this.width, this.height, this.member546);
        }
        return this.member547;
    };
    a.prototype.member563 = function (c) {
        if (this.member433.gl === undefined) {
            if (false) {
            }
            return;
        }
        var e = this.member433.gl;
        this.member548 = e.createTexture();
        this.member433.bindTexture(Class75.member533, this.member548, e.TEXTURE_2D);
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, this.member550);
        if (!this.member555) {
            var b = null;
            if (this.member546 !== null) {
                this.member549 = this.member546.byteLength;
                if (this.member552) {
                    b = new Float32Array(this.member546);
                } else {
                    b = new Uint8Array(this.member546);
                }
            }
            var d;
            if (this.member552) {
                d = e.FLOAT;
            } else {
                d = e.UNSIGNED_BYTE;
            }
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, d, b);
            if (this.filter) {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
            } else {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
            }
            if (this.member551) {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
                e.hint(e.GENERATE_MIPMAP_HINT, e.NICEST);
                e.generateMipmap(e.TEXTURE_2D);
            } else if (this.filter) {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
            } else {
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
            }
            if (this.member433.member564() && this.member433.member565()) {
                e.texParameterf(e.TEXTURE_2D, this.member433.member566().TEXTURE_MAX_ANISOTROPY_EXT, this.member433.member567());
            }
        } else {
            e.texImage2D(e.TEXTURE_2D, 0, e.DEPTH_COMPONENT, this.width, this.height, 0, e.DEPTH_COMPONENT, e.UNSIGNED_INT, null);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
        }
        this.member568(false);
        if (c !== undefined) {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, c);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, c);
        } else {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
        this.member546 = null;
    };
    a.prototype.member569 = function (m, d, r, q, n, h) {
        if (this.member433.gl !== undefined) {
            if (this.member548 === -1) {
                throw new Error('1014 ');
            }
            var k = this.member433.gl;
            var o;
            if (this.member552) {
                o = k.FLOAT;
            } else {
                o = k.UNSIGNED_BYTE;
            }
            this.member433.bindTexture(Class75.member533, this.member548, k.TEXTURE_2D);
            k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, this.member550);
            k.texSubImage2D(k.TEXTURE_2D, 0, m, d, r, q, k.RGBA, o, h);
            if (this.member551) {
                if (this.member570) {
                    k.hint(k.GENERATE_MIPMAP_HINT, k.NICEST);
                    k.generateMipmap(k.TEXTURE_2D);
                } else {
                    this.member554 = true;
                }
            }
        } else {
            var b = new Uint32Array(this.member546);
            var g = new Uint32Array(h.buffer);
            for (var i = 0; i < q; i++) {
                var c = i;
                if (this.member550) {
                    c = q - i - 1;
                }
                for (var e = 0; e < r; e++) {
                    b[m + e + (d + i) * this.width] = g[e + c * r];
                }
            }
            this.member547 = undefined;
        }
    };
    a.prototype.member570 = function () {
        if (this.member554 && this.member551) {
            var b = this.member433.gl;
            this.member433.bindTexture(Class75.member533, this.member548, b.TEXTURE_2D);
            b.hint(b.GENERATE_MIPMAP_HINT, b.NICEST);
            b.generateMipmap(b.TEXTURE_2D);
            this.member554 = false;
        }
    };
    a.prototype.member568 = function (b) {
        if (!this.member433.member565()) {
            return;
        }
        if (b) {
            this.member433.bindTexture(Class75.member533, this.member558(), this.member433.gl.TEXTURE_2D);
        }
        var c = this.member433.member564() ? this.member433.member571() : 1;
        this.member433.gl.texParameterf(this.member433.gl.TEXTURE_2D, this.member433.member566().TEXTURE_MAX_ANISOTROPY_EXT, c);
    };
    return function (k, e, h, b, j, i, c, d, g) {
        return new a(k, e, h, b, j, i, c, d, g);
    };
}();