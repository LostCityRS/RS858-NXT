import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class319 } from 'Class319.js';
import { Class339 } from 'Class339.js';
export var Class340 = function () {
    var a = function (b) {
        this.member1564;
        this.member433;
        this.gl;
        this.width;
        this.height;
        this.color;
        this.depth;
        this.member3823;
        this.member25(b);
        member46(this, Class73, Class4.member65);
    };
    member45(Class73, a);
    a.prototype.member25 = function (b) {
        if (b.member433 !== undefined && (b.color !== undefined || b.depth !== undefined)) {
            this.member433 = b.member433;
            this.gl = this.member433.gl;
            this.color = b.color;
            this.depth = b.depth;
            if (b.width !== undefined && b.height !== undefined) {
                this.width = b.width;
                this.height = b.height;
                if (this.color !== undefined) {
                    if (color.member556() != this.width || color.member557() != this.height) {
                        throw new Error('1547 ');
                    }
                }
                if (this.depth !== undefined) {
                    if (depth.member556() != this.width || depth.member557() != this.height) {
                        throw new Error('1548 ');
                    }
                }
            } else if (this.depth !== undefined) {
                this.width = this.depth.member556();
                this.height = this.depth.member557();
                if (color.member556() != this.width || color.member557() != this.height) {
                    throw new Error('1549 ');
                }
            } else if (this.color !== undefined) {
                this.width = this.color.member556();
                this.height = this.color.member557();
                if (depth.member556() != this.width || depth.member557() != this.height) {
                    throw new Error('1550 ');
                }
            }
            this.member3824();
        } else if (b.member433 !== undefined && b.member552 !== undefined && b.width !== undefined && b.height !== undefined) {
            this.member433 = b.member433;
            this.gl = this.member433.gl;
            this.width = b.width;
            this.height = b.height;
            if (b.member3733 !== undefined) {
                this.color = b.member3733;
                this.color.member510();
                if (color.member556() != this.width || color.member557() != this.height) {
                    throw new Error('1551 ');
                }
            } else if (b.member3825) {
                this.color = Class319({
                    member433: this.member433,
                    member552: b.member552,
                    width: b.width,
                    height: b.height
                });
                this.color.member510();
            }
            if (b.reuseDepth !== undefined) {
                this.depth = b.member3733;
                this.depth.member510();
                if (depth.member556() != this.width || depth.member557() != this.height) {
                    throw new Error('1552 ');
                }
            } else if (b.member3817 || b.member3818) {
                var d = false;
                if (b.member3817 !== undefined) {
                    d = b.member3817;
                }
                var c = false;
                if (b.member3818 !== undefined) {
                    c = b.member3818;
                }
                this.depth = Class339({
                    member433: this.member433,
                    member552: b.member552,
                    member3817: d,
                    member3818: c,
                    width: b.width,
                    height: b.height
                });
                this.depth.member510();
            }
            this.member3824();
            if (this.color !== undefined) {
                this.color.member511();
            }
            if (this.depth !== undefined) {
                this.depth.member511();
            }
        } else {
            throw new Error('1553 ');
        }
    };
    a.prototype.member3824 = function (b) {
        this.member3823 = this.gl.createFramebuffer();
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.member3823);
        if (this.color !== undefined) {
            this.color.member3734();
        }
        if (this.depth !== undefined) {
            this.depth.member3734();
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    };
    a.prototype.member512 = function () {
        if (this.member3823 !== undefined) {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.member3823);
            if (this.color !== undefined) {
                this.color.member3735();
                this.color = undefined;
            }
            if (this.depth !== undefined) {
                this.depth.member3735();
                this.depth = undefined;
            }
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.deleteFramebuffer(this.member3823);
            this.member3823 = undefined;
        }
    };
    a.prototype.member86 = function () {
        return 0;
    };
    a.prototype.member556 = function () {
        return this.width;
    };
    a.prototype.member557 = function () {
        return this.height;
    };
    a.prototype.member1502 = function () {
        return this.member3823;
    };
    a.prototype.member3826 = function () {
        if (this.color !== undefined) {
            return this.color.member559();
        }
        return false;
    };
    a.prototype.member3827 = function () {
        return this.color;
    };
    a.prototype.member575 = function () {
        if (this.color !== undefined) {
            return this.color.member575();
        }
        return undefined;
    };
    a.prototype.member1340 = function (b) {
        if (this.color !== undefined) {
            this.color.member3737(b);
        } else if (b !== undefined) {
            this.color = Class319({ member3733: b });
            this.color.member510();
            this.color.member3734();
            b.member510();
        }
    };
    a.prototype.member3828 = function () {
        if (this.color !== undefined) {
            this.color.member3736();
        }
    };
    a.prototype.member3829 = function (b) {
        if (this.color !== b.color) {
            if (this.color !== undefined) {
                this.color.member3735();
            }
            this.color = b.color;
            if (this.color !== undefined) {
                this.color.member3734();
            }
        }
    };
    a.prototype.member3830 = function () {
        return this.depth;
    };
    a.prototype.member847 = function () {
        if (this.depth !== undefined) {
            return this.depth.member847();
        }
        return undefined;
    };
    a.prototype.member3831 = function (b) {
        if (this.depth !== b.depth) {
            if (this.depth !== undefined) {
                this.depth.member3735();
            }
            this.depth = b.depth;
            if (this.depth !== undefined) {
                this.depth.member3734();
            }
        }
    };
    return function (b) {
        return new a(b);
    };
}();