import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class76 } from 'Class76.js';
export var Class339 = function () {
    var a = function (b) {
        this.member1564;
        this.member433;
        this.gl;
        this.member552;
        this.width;
        this.height;
        this.member3817;
        this.member3818;
        this.member3819;
        this.member3820;
        this.member3821;
        this.member555;
        this.member25(b);
        member46(this, Class73, Class4.member65);
    };
    member45(Class73, a);
    a.prototype.member25 = function (b) {
        if (b.member433 !== undefined && b.member552 !== undefined && b.member3817 !== undefined && b.member3818 != undefined && b.width !== undefined && b.height !== undefined) {
            this.member433 = b.member433;
            this.gl = this.member433.gl;
            this.member552 = b.member552;
            this.width = b.width;
            this.height = b.height;
            this.member3817 = b.member3817;
            this.member3818 = b.member3818;
            if (this.member3817 && this.member3818) {
                this.member3819 = this.gl.DEPTH_STENCIL_ATTACHMENT;
                this.member3820 = this.gl.DEPTH_STENCIL;
            } else if (this.member3817) {
                this.member3819 = this.gl.DEPTH_ATTACHMENT;
                this.member3820 = this.gl.DEPTH_COMPONENT16;
            } else if (this.member3818) {
                this.member3819 = this.gl.STENCIL_ATTACHMENT;
                this.member3820 = this.gl.STENCIL_INDEX8;
            } else {
                throw new Error('1344 ');
            }
            if (this.member433.member860() && !this.member3818) {
                this.member555 = Class76(this.member433, this.width, this.height, NULL, false, true, true, this.member552, true);
                this.member555.member563();
                this.member555.member510();
            } else {
                this.member3821 = this.gl.createRenderbuffer();
                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.member3821);
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.member3820, this.width, this.height);
            }
        } else {
            throw new Error('1345 ');
        }
    };
    a.prototype.member512 = function () {
        if (this.member3821 !== undefined) {
            this.gl.deleteRenderbuffer(this.member3821);
            this.member3821 = undefined;
        }
        if (this.member555 !== undefined) {
            this.member555.member511();
            this.member555 = undefined;
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
    a.prototype.member3822 = function () {
        return this.member3821;
    };
    a.prototype.member847 = function () {
        return this.member555;
    };
    a.prototype.member3734 = function () {
        this.member510();
        if (this.member555 !== undefined) {
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.member555.member558(), 0);
        } else if (this.member3821 !== undefined) {
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.member3819, this.gl.RENDERBUFFER, this.member3821);
        }
    };
    a.prototype.member3735 = function () {
        if (this.member555 !== undefined) {
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, null, 0);
        } else if (this.member3821 !== undefined) {
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.member3819, this.gl.RENDERBUFFER, null);
        }
        this.member511();
    };
    a.prototype.member86 = function () {
        if (this.member555 !== undefined) {
            return this.member555.member84();
        } else if (this.member3817 && this.member3818) {
            return this.width * this.height * 3;
        } else if (this.member3817) {
            return this.width * this.height * 2;
        } else if (this.member3818) {
            return this.width * this.height;
        }
        return 0;
    };
    return function (b) {
        return new a(b);
    };
}();