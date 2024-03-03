import { Class37 } from 'Class37.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class166 } from 'Class166.js';
import { Class49 } from 'Class49.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class376 } from 'Class376.js';
export var Class400 = function () {
    var b = new Float32Array(3);
    var c = [
        0,
        0,
        0
    ];
    var a = [
        0,
        1,
        0
    ];
    var d = function (h, k, g, j) {
        this.member2285 = undefined;
        this.member1611 = Class37.create();
        this.member4210 = 0;
        this.member1612 = new Float32Array(4);
        if (h !== undefined && k !== undefined && g !== undefined && j !== undefined) {
            member46(this, Class372, h, k, g, Class374.member391, -1);
            this.member2285 = j;
            this.member2285.member510();
            this.member4210 = Date.now();
            this.member1612[3] = -1;
            var i = this.member2285.member2273();
            var e = Class166(new Float32Array([
                -i.width / 2,
                i.member1593[1],
                -i.length / 2
            ]), new Float32Array([
                i.width / 2,
                i.member1593[1] + 1,
                i.length / 2
            ]));
            e.transform(Class49.member354(i.member763, c));
            this.member4093(e);
        } else {
            throw new Error('898 ');
        }
    };
    member45(Class372, d);
    d.prototype.member4623 = function () {
        return this.member2285;
    };
    d.prototype.member512 = function () {
        if (this.member2285 !== undefined) {
            this.member2285.member511();
            this.member2285 = undefined;
        }
    };
    d.prototype.member3437 = function (e, i, j, k, h) {
        if (this.member4103(e)) {
            if (this.member1566 === member47) {
                this.member4105(false);
                return;
            }
            if (this.member1612 !== undefined && this.member1612[3] < 0) {
                this.member1612[3] = (Date.now() - this.member4210) / 1000 - 1;
                if (this.member1612[3] >= 0) {
                    this.member1612 = undefined;
                }
            }
            Class49.member334(i, this.member1611);
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        var g = Class132.member1266();
        if (g.member522(Class72.member499)) {
            this.member4107(false);
            return;
        }
        if (Class130.member1194()) {
            this.member4107(false);
            return;
        }
        this.member4107(true);
    };
    d.prototype.member952 = function (j, i, h, g, e) {
        this.member2285.member952(j, g, i, h, this.member1611, this.member1612);
    };
    d.prototype.member486 = function (i, h, g, e) {
        this.member2285.member1630(g, i, h, this.member1611, this.member1612);
    };
    d.prototype.member4102 = function () {
        this.member4101(Class376.member4170);
    };
    d.prototype.member4230 = function (i, h) {
        var g = this.member2285.member2273();
        var e = Class49.create();
        Class49.set(h, e);
        e[12] += g.member1593[0];
        e[14] += g.member1593[2];
        this.member2285.member1630(1, i, e, this.member1611, undefined);
    };
    return function (g, i, e, h) {
        return new d(g, i, e, h);
    };
}();