import { Class691 } from 'Class691.js';
import { Class457 } from 'Class457.js';
import { Class261 } from 'Class261.js';
import { ScriptVarType } from 'Class463.js';
export var Class692 = function () {
    var a = function (c, b) {
        this.member9899;
        this.member625;
        this.member7378;
        this.lifetime = Class691.TEMPORARY;
        this.member9900 = Class457.member7262;
        this.member3690;
        this.member6683;
        this.member7377 = true;
        if (c !== undefined && b !== undefined) {
            this.member625 = c;
            this.member9899 = b;
        } else {
            throw new Error('1169 ');
        }
    };
    a.prototype.member9621 = function () {
        return this.member9899;
    };
    a.prototype.getID = function () {
        return this.member625;
    };
    a.prototype.member8041 = function () {
        return this.member7378;
    };
    a.prototype.member9901 = function () {
        return this.lifetime;
    };
    a.prototype.member6726 = function () {
        return this.member6683;
    };
    a.prototype.decode = function (c) {
        while (true) {
            var d = c.g1();
            if (d === 0) {
                break;
            }
            if (d === Class261.member3029.serialID) {
                var b = c.g1();
                this.member7378 = ScriptVarType.getByID(b);
                if (this.member7378 === null) {
                    throw new Error('1170 ' + b);
                }
            } else if (d === Class261.member3027.serialID) {
                this.member3690 = c.gjstr(true);
            } else if (d === Class261.member3030.serialID) {
                this.lifetime = Class691.getByID(c.g1());
            } else if (d === Class261.member3031.serialID) {
                this.member9900 = Class457.getByID(c.g1());
            } else if (d === Class261.member3033.serialID) {
                this.member6683 = c.g2();
            } else if (d === Class261.member3032.serialID) {
                this.member7377 = false;
            }
        }
    };
    a.prototype.member2944 = function () {
        return this.member9899.member2944(this);
    };
    return function (c, b) {
        return new a(c, b);
    };
}();