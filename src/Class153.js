import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class75 } from 'Class75.js';
export var Class153 = function () {
    var a = function (g, b, e, d, c, i, h) {
        if (g === undefined || b === undefined || e === undefined || d === undefined) {
            throw new Error('1130 ');
        }
        this.member433 = g;
        if (d.byteLength !== b * e * 6 * 4) {
            throw new Error('1131 ');
        }
        this.member1542 = d;
        this.width = b;
        this.height = e;
        this.member548 = -1;
        this.member549 = 0;
        this.member551 = true;
        if (c !== undefined) {
            this.member551 = c;
        }
        if (this.member551 && this.width !== this.height) {
            throw new Error('1132 ');
        }
        this.filter = true;
        if (i !== undefined) {
            this.filter = i;
        }
        this.member550 = false;
        if (h !== undefined) {
            this.member550 = h;
        }
        member46(this, Class73, Class4.member64);
    };
    member45(Class73, a);
    a.prototype.member512 = function () {
        if (this.member548 !== -1) {
            this.member433.gl.deleteTexture(this.member548);
            this.member548 = -1;
        } else {
            ArrayBufferRecycler.member489(this.member1542);
            this.member1542 = undefined;
        }
    };
    a.prototype.member84 = function () {
        return this.member549;
    };
    a.prototype.member563 = function () {
        var e = this.member433.gl;
        this.member548 = e.createTexture();
        this.member433.bindTexture(Class75.member533, this.member548, e.TEXTURE_CUBE_MAP);
        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, this.member550);
        var d = this.member1542.byteLength / 6;
        for (var b = 0; b < 6; b++) {
            var c = new Uint8Array(this.member1542, d * b, d);
            this.member549 += d;
            e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + b, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, c);
        }
        if (this.filter) {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR);
        } else {
            member433.gl.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.NEAREST);
        }
        if (this.member551) {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST);
            e.generateMipmap(e.TEXTURE_CUBE_MAP);
        } else if (this.filter) {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
        } else {
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.NEAREST);
        }
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        this.member1542 = undefined;
    };
    a.prototype.member558 = function () {
        if (this.member548 === -1) {
            throw new Error('1133 ');
        }
        return this.member548;
    };
    return function (g, b, e, d, c, i, h) {
        return new a(g, b, e, d, c, i, h);
    };
}();