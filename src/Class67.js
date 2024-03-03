import { Class6 } from 'Class6.js';
export var Class67 = function () {
    var b = false;
    var a = function (c) {
        this.member433;
        this.member300;
        this.member434;
        this.vertexShader;
        this.member435;
        this.fragmentShader;
        this.member436;
        this.member426 = 0;
        this.member437 = 0;
        this.member438 = 0;
        this.member439;
        this.member440 = new Array(0);
        this.member441 = undefined;
        this.member442 = new Array(0);
        this.member443 = -1;
        if (false) {
        }
        if (c.member439 !== undefined && c.member433 !== undefined && c.member386 !== undefined && c.member387 !== undefined && c.member300 !== undefined) {
            this.member25(c);
        } else {
            throw new Error('1670 ');
        }
    };
    a.prototype.member444 = function () {
        return this.member439;
    };
    a.prototype.member445 = function () {
        return this.member300;
    };
    a.prototype.member446 = function () {
        return this.member436;
    };
    a.prototype.member447 = function () {
        return this.member434;
    };
    a.prototype.member448 = function () {
        return this.member435;
    };
    a.prototype.member449 = function () {
        this.member426 = Date.now();
    };
    a.prototype.member450 = function (c) {
        this.member426 = c;
    };
    a.prototype.member451 = function () {
        return this.member426;
    };
    a.prototype.member452 = function () {
        this.member437 = 0;
        this.member438 = 0;
    };
    a.prototype.member453 = function () {
        return this.member437;
    };
    a.prototype.member454 = function () {
        this.member437++;
    };
    a.prototype.member455 = function () {
        return this.member438;
    };
    a.prototype.member456 = function () {
        this.member438++;
    };
    a.prototype.member457 = function (c) {
        if (this.member440[c] === undefined) {
            return undefined;
        } else {
            return this.member440[c].uniformLocation;
        }
    };
    a.prototype.member458 = function () {
        return this.member442;
    };
    a.prototype.member459 = function (c) {
        return this.member442[c];
    };
    a.prototype.member460 = function () {
        return this.member443;
    };
    a.prototype.member25 = function (s) {
        this.member439 = s.member439;
        this.member433 = s.member433;
        var t = s.member386;
        var r = s.member387;
        this.member300 = s.member300;
        var m = this.member433.gl;
        var k = m.createShader(m.VERTEX_SHADER);
        var n = t.member284(this.member300);
        m.shaderSource(k, n);
        m.compileShader(k);
        if (false) {
        }
        if (false) {
        }
        var g = m.createShader(m.FRAGMENT_SHADER);
        var o = r.member284(this.member300);
        m.shaderSource(g, o);
        m.compileShader(g);
        if (false) {
        }
        if (false) {
        }
        this.member436 = m.createProgram();
        m.attachShader(this.member436, k);
        m.attachShader(this.member436, g);
        m.linkProgram(this.member436);
        if (false) {
        }
        m.deleteShader(k);
        m.deleteShader(g);
        var e = t.member285(this.member300);
        for (var j = 0; j < e.length; j++) {
            var h = e[j];
            if (!h.member263) {
                var i = m.getUniformLocation(this.member436, h.name);
                if (i === undefined) {
                    if (false) {
                    }
                    throw new Error('1674 ' + h.name + '1674 ' + t.member283());
                }
                this.member440[h.id] = {
                    uniformLocation: i,
                    member461: h.type,
                    member462: this.member463(h),
                    member464: this.member465(h),
                    member466: h.type !== undefined ? h.type.member127() : undefined
                };
            } else {
                var c = m.getAttribLocation(this.member436, h.name);
                if (c === -1) {
                    if (false) {
                    }
                    throw new Error('1675 ' + h.name + '1675 ' + t.member283());
                }
                this.member442[h.id] = c;
                if (c > this.member443) {
                    this.member443 = c;
                }
            }
        }
        var q = r.member285(this.member300);
        for (var d = 0; d < q.length; d++) {
            var h = q[d];
            if (h === undefined) {
                if (false) {
                }
                throw new Error('1676 ' + d + '1676 ' + r.member283());
            }
            if (!h.member263) {
                var i = m.getUniformLocation(this.member436, h.name);
                if (i === undefined) {
                    if (false) {
                    }
                    throw new Error('1677 ' + h.name + '1677 ' + r.member283());
                }
                this.member440[h.id] = {
                    uniformLocation: i,
                    member461: h.type,
                    member462: this.member463(h),
                    member464: this.member465(h),
                    member466: h.type !== undefined ? h.type.member127() : undefined
                };
                if (i === null) {
                    if (false) {
                    }
                }
            } else {
                if (false) {
                }
                throw new Error('1678 ' + h.name + '1678 ' + r.member283());
            }
        }
    };
    a.prototype.member463 = function (c) {
        if (c.type === Class6.member126 || c.type === Class6.member130) {
            return this.member433.gl.uniformMatrix3fv;
        }
        if (c.type === Class6.member131 || c.type === Class6.member132) {
            return this.member433.gl.uniformMatrix4fv;
        }
        if (c.type === Class6.member133) {
            return this.member433.gl.uniform1f;
        }
        if (c.type === Class6.member135) {
            return this.member433.gl.uniform2fv;
        }
        if (c.type === Class6.member136 || c.type === Class6.member139) {
            return this.member433.gl.uniform3fv;
        }
        if (c.type === Class6.member137 || c.type === Class6.member138) {
            return this.member433.gl.uniform4fv;
        }
        if (c.type === Class6.member140) {
            return this.member433.gl.uniform1i;
        }
        if (c.type === Class6.member141) {
            return this.member433.gl.uniform1iv;
        }
    };
    a.prototype.member465 = function (c) {
        if (c.type === Class6.member126 || c.type === Class6.member131) {
            return true;
        }
        if (c.type === Class6.member130 || c.type === Class6.member132) {
            return true;
        } else {
            return false;
        }
    };
    a.prototype.member467 = function (c, e) {
        var d = this.member440[c.id];
        if (d === undefined || d.uniformLocation === null) {
            if (false) {
            }
            return;
        }
        if (d.member461.member129(d.member466, e)) {
            return;
        }
        if (d.member464) {
            d.member462.call(this.member433.gl, d.uniformLocation, false, e);
        } else {
            d.member462.call(this.member433.gl, d.uniformLocation, e);
        }
        this.member433.member468();
    };
    a.prototype.member469 = function (c, e) {
        var d = this.member440[c.id];
        if (d === undefined || d.uniformLocation === null) {
            if (false) {
            }
            return;
        }
        d.member461.member128(d.member466, e);
        if (d.member464) {
            d.member462.call(this.member433.gl, d.uniformLocation, false, e);
        } else {
            d.member462.call(this.member433.gl, d.uniformLocation, e);
        }
        this.member433.member468();
    };
    return function (c) {
        return new a(c);
    };
}();