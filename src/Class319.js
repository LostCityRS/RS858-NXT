import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class76 } from 'Class76.js';
export var Class319 = function () {
    var a = function (b) {
        this.member1564;
        this.member433;
        this.gl;
        this.member552;
        this.width;
        this.height;
        this.member3731;
        this.member25(b);
        member46(this, Class73, Class4.member65);
    };
    member45(Class73, a);
    a.prototype.member25 = function (b) {
        if (b.member433 !== undefined && b.member552 !== undefined && b.width !== undefined && b.height !== undefined) {
            this.member433 = b.member433;
            this.gl = this.member433.gl;
            this.member552 = b.member552;
            this.width = b.width;
            this.height = b.height;
            this.member3731 = this.member3732();
        } else if (b.member3733 !== undefined) {
            this.member3731 = b.member3733;
            this.member433 = this.member3731.member433;
            this.gl = this.member433.gl;
            this.member552 = this.member3731.member552;
            this.width = this.member3731.width;
            this.height = this.member3731.height;
        } else {
            throw new Error('990 ');
        }
    };
    a.prototype.member512 = function () {
        if (this.member3731 !== undefined) {
            this.member3731.member511();
            this.member3731 = undefined;
        }
    };
    a.prototype.member559 = function () {
        return this.member552;
    };
    a.prototype.member556 = function () {
        return this.width;
    };
    a.prototype.member557 = function () {
        return this.height;
    };
    a.prototype.member575 = function () {
        return this.member3731;
    };
    a.prototype.member3734 = function () {
        this.member510();
        if (this.member3731 !== undefined) {
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.member3731.member558(), 0);
        }
    };
    a.prototype.member3735 = function () {
        if (this.member3731 !== undefined) {
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, null, 0);
        }
        this.member511();
    };
    a.prototype.member3732 = function () {
        var b = Class76(this.member433, this.width, this.height, member47, false, true, true, this.member552, false);
        b.member563();
        b.member510();
        return b;
    };
    a.prototype.member3736 = function () {
        this.member3737(this.member3732());
    };
    a.prototype.member3737 = function (b) {
        if (this.member3731 !== undefined) {
            this.member3731.member511();
        }
        this.member3731 = b;
        if (this.member3731 !== undefined) {
            this.member3731.member510();
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.member3731.member558(), 0);
        } else {
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, null, 0);
        }
    };
    a.prototype.member86 = function () {
        if (this.member3731 !== undefined) {
            return this.member3731.member84();
        }
        return 0;
    };
    return function (b) {
        return new a(b);
    };
}();