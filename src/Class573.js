export var Class573 = function () {
    var a = function (b) {
        this.member7619;
        this.member8874 = null;
        this.member8875 = null;
        if (b.member7619 !== undefined) {
            this.member7619 = b.member7619;
        } else {
            throw new Error('1542 ');
        }
    };
    a.prototype.member7105 = function () {
        return this.member8874;
    };
    a.prototype.member7107 = function (b) {
        this.member8874 = b;
    };
    a.prototype.member7106 = function () {
        return this.member8875;
    };
    a.prototype.member7448 = function (b) {
        this.member8875 = b;
    };
    a.prototype.member7450 = function () {
        return this.member8875.member7444()[this.member8874.member6720()];
    };
    a.prototype.member7454 = function (c, e, b) {
        var d = c.member7634(e, b);
        if (d === member47) {
            return member47;
        } else if (d === undefined) {
            this.member301();
            return false;
        } else {
            this.member8874 = d;
            this.member8875 = c.member7439(e >> 16, false, this.member7619.member7440);
            return true;
        }
    };
    a.prototype.member7455 = function (b, d) {
        var c = b.member7438(d);
        if (c === member47) {
            return member47;
        } else if (c === undefined) {
            this.member301();
            return false;
        } else {
            this.member8874 = c;
            this.member8875 = b.member7439(d >> 16, false, this.member7619.member7440);
            return true;
        }
    };
    a.prototype.member8876 = function (c, d) {
        if (c === undefined || c === member47) {
            throw new Error('1543 ');
        }
        this.member8875 = c;
        if (this.member8875.member6719() !== d >> 16) {
            throw new Error('1544 ');
        }
        var b = this.member8875.member7438(d & 65535);
        if (b === member47) {
            return member47;
        } else if (b === undefined) {
            this.member301();
            return false;
        } else {
            this.member8874 = b;
            return true;
        }
    };
    a.prototype.member301 = function () {
        this.member8874 = null;
        this.member8875 = null;
    };
    return function (b) {
        return new a(b);
    };
}();