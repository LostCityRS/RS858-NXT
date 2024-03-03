import { Class148 } from 'Class148.js';
export var Class152 = function () {
    var a = function (b, c) {
        this.member1503 = -1;
        this.member1536 = undefined;
        this.member1280 = undefined;
        this.member1537 = false;
        if (b !== undefined && c !== undefined) {
            this.member1536 = b;
            this.member1280 = c;
            if (this.member1536 !== NULL) {
                this.member1503 = b.getID();
                this.member1279();
                this.member1537 = true;
            }
        } else {
            throw new Error('1612 ');
        }
    };
    a.prototype.member1538 = function () {
        return this.member1503;
    };
    a.prototype.member1539 = function () {
        return this.member1536;
    };
    a.prototype.member1494 = function () {
        return this.member1280;
    };
    a.prototype.member1279 = function () {
        this.member1536.member1279(this);
    };
    a.prototype.member1540 = function () {
        if (this.member1536 === undefined || this.member1536 === NULL || this.member1280 === undefined) {
            return false;
        }
        return true;
    };
    a.prototype.member1541 = function (b) {
        if (!this.member1537) {
            return false;
        }
        if (b) {
            this.member1537 = false;
        }
        return true;
    };
    a.prototype.member512 = function () {
        if (this.member1540()) {
            this.member1536.member1281(this);
        } else {
            Class148.member1493(this);
        }
    };
    a.prototype.member1496 = function (b) {
        this.member1536 = b;
        this.member1503 = b.getID();
        this.member1536.member1279(this);
        this.member1537 = true;
    };
    return function (b, c) {
        return new a(b, c);
    };
}();