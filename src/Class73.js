import { Class4 } from 'Class4.js';
export var Class73 = function () {
    var a = function (b) {
        this.member506 = undefined;
        if (Class4.member67()) {
            this.member506 = Class4.member79(this);
        }
        this.member507 = 0;
        this.member508 = b;
        this.member509 = false;
    };
    a.prototype.member87 = function () {
        return this.member508;
    };
    a.prototype.member510 = function () {
        if (this.member509) {
            throw new Error('1201 ');
        }
        this.member507++;
    };
    a.prototype.member511 = function () {
        if (this.member507 < 1) {
            throw new Error('1202 ');
        }
        this.member507--;
        if (this.member507 < 1) {
            this.member512();
            this.member509 = true;
            Class4.member80(this.member506);
        }
    };
    a.prototype.member513 = function () {
        return this.member507;
    };
    a.prototype.member512 = function () {
        throw new Error('1203 ');
    };
    a.prototype.member84 = function () {
        return 0;
    };
    a.prototype.member85 = function () {
        return 0;
    };
    a.prototype.member86 = function () {
        return 0;
    };
    return a;
}();