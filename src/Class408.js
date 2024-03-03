import { Class49 } from 'Class49.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class376 } from 'Class376.js';
import { Class99 } from 'Class99.js';
import { Class63 } from 'Class63.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class68 } from 'Class68.js';
import { Class29 } from 'Class29.js';
import { Class5 } from 'Class5.js';
import { Class75 } from 'Class75.js';
import { Class7 } from 'Class7.js';
export var Class408 = function () {
    var c = Class49.member313();
    var a = function (j, i, k, g, h, e) {
        this.member433 = undefined;
        this.member1643 = undefined;
        this.member1642 = undefined;
        this.texture = undefined;
        this.member4070 = undefined;
        this.member4692 = undefined;
        this.member4693 = 3 * 4 + 2 * 2;
        if (j !== undefined && i !== undefined && k !== undefined && g !== undefined && h !== undefined && e !== undefined) {
            member46(this, Class372, i, k, g, Class374.member4146, -1);
            this.member433 = j;
            this.member4070 = g;
            this.member1643 = h;
            this.member1642 = e;
            this.member4093(Class166(new Float32Array([
                0,
                -5,
                0
            ]), new Float32Array([
                Class86.member730,
                5,
                Class86.member730
            ])));
        } else {
            throw new Error('923 ');
        }
    };
    member45(Class372, a);
    a.prototype.member512 = function () {
        if (this.member4692 !== undefined) {
            this.member433.gl.deleteBuffer(this.member4692);
            this.member4692 = undefined;
        }
    };
    a.prototype.member3437 = function (e, h, i, k, g) {
        if (this.member4692 === undefined) {
            this.member4694();
        }
        var j = this.member4692 !== undefined;
        this.member4105(j);
        this.member4107(j);
        this.member4101(Class376.member4169);
    };
    a.prototype.member4694 = function () {
        var g = this.member4070.member4695().member4696(this.member433);
        if (g === undefined || g === member47) {
            return;
        }
        this.texture = g.texture;
        var h = new ArrayBuffer(this.member4693 * 6);
        var i = new Uint16Array(h);
        var q = new Float32Array(h);
        var r = 0;
        var s = this.member1643 * g.member4697;
        var n = this.member1642 * g.member4698;
        var j = s + g.member4697;
        var u = n + g.member4698;
        var e = 0;
        var m = 0;
        var k = Class86.member730;
        var t = Class86.member730;
        var o = -1;
        q[r++] = e;
        q[r++] = o;
        q[r++] = m;
        i[r * 2] = s;
        i[r * 2 + 1] = n;
        r++;
        q[r++] = k;
        q[r++] = o;
        q[r++] = t;
        i[r * 2] = j;
        i[r * 2 + 1] = u;
        r++;
        q[r++] = e;
        q[r++] = o;
        q[r++] = t;
        i[r * 2] = s;
        i[r * 2 + 1] = u;
        r++;
        q[r++] = e;
        q[r++] = o;
        q[r++] = m;
        i[r * 2] = s;
        i[r * 2 + 1] = n;
        r++;
        q[r++] = k;
        q[r++] = o;
        q[r++] = m;
        i[r * 2] = j;
        i[r * 2 + 1] = n;
        r++;
        q[r++] = k;
        q[r++] = o;
        q[r++] = t;
        i[r * 2] = j;
        i[r * 2 + 1] = u;
        r++;
        this.member4692 = this.member433.gl.createBuffer();
        this.member433.gl.bindBuffer(this.member433.gl.ARRAY_BUFFER, this.member4692);
        this.member433.gl.bufferData(this.member433.gl.ARRAY_BUFFER, h, this.member433.gl.STATIC_DRAW);
        h = undefined;
        i = undefined;
        q = undefined;
    };
    var b = function () {
        member46(this, Class99);
        this.member862 = Class63.member390.id;
        this.member4699 = undefined;
        this.member441 = undefined;
        this.member4700 = undefined;
        this.member4701 = undefined;
        this.member1338 = undefined;
    };
    member45(Class99, b);
    b.prototype.member867 = function () {
        this.member4699.member486(this.member441, this.member4700, this.member4701, this.member1338);
    };
    var d = function () {
        return new b();
    };
    a.prototype.member952 = function (k, j, i, h, g) {
        var e = Class83.member619(Class82.member2868, d);
        e.member863 = k.member863;
        e.member4699 = this;
        e.member441 = j;
        e.member4700 = i;
        e.member4701 = h;
        e.member1338 = g;
        k.append(e);
    };
    a.prototype.member486 = function (i, h, g, e) {
        this.member433.member590(true);
        var k = Class68.member421(Class63.member409.id, Class29([Class5.member93]));
        Class68.member483(k, true);
        this.member433.gl.bindBuffer(this.member433.gl.ARRAY_BUFFER, this.member4692);
        var j = this.member433.bindTexture(Class75.member393, this.texture.member558(), this.member433.gl.TEXTURE_2D);
        this.member433.gl.uniform1i(k.member457(Class7.member159.id), j);
        Class49.member323(i.member1624, h, c);
        Class49.member323(i.member3463, c, c);
        this.member433.gl.uniformMatrix4fv(k.member457(Class7.member142.id), false, c);
        this.member433.gl.vertexAttribPointer(k.member459(Class7.member262.id), 3, this.member433.gl.FLOAT, false, this.member4693, 0);
        this.member433.gl.vertexAttribPointer(k.member459(Class7.member270.id), 2, this.member433.gl.SHORT, false, this.member4693, 12);
        this.member433.gl.drawArrays(this.member433.member1198, 0, 6);
        this.member433.member1632();
        this.member433.member1633(2);
        this.member433.member587();
    };
    return function (j, i, k, g, h, e) {
        return new a(j, i, k, g, h, e);
    };
}();