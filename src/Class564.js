export var Class564 = function () {
    var a = function (c, d, n, k, m, i, b, h, g, e, o, j, q, r) {
        this.member8812 = false;
        this.member8813 = false;
        if (n !== undefined && k !== undefined && m !== undefined && i !== undefined && b !== undefined) {
            this.member8814 = n;
            this.member8815 = k;
            this.member8816 = m;
            this.member8817 = i;
            this.member8812 = b;
        } else if (n !== undefined && m !== undefined && i !== undefined && b !== undefined) {
            this.member8814 = n;
            this.member8815 = null;
            this.member8816 = m;
            this.member8817 = i;
            this.member8812 = b;
        } else if (n !== undefined && h !== undefined && g !== undefined) {
            this.member8814 = n;
            this.member8815 = null;
            this.member8818 = h;
            this.member8819 = g;
        } else if (n !== undefined && q !== undefined && r !== undefined) {
            this.member8814 = n;
            this.member8820 = q;
            this.member8821 = r;
        } else if (n !== undefined && e !== undefined && o !== undefined) {
            this.member8814 = n;
            this.member8815 = null;
            this.member8822 = e;
            this.member8823 = o;
        } else if (n !== undefined && k !== undefined) {
            this.member8814 = n;
            this.member8815 = k;
        } else if (n !== undefined) {
            this.member8814 = n;
            this.member8815 = null;
        }
        if (c === undefined || d === undefined) {
            throw new Error('1207 ');
        } else {
            this.member8824 = c;
            this.member4249 = d;
        }
        this.member8825 = j;
    };
    a.prototype.member8826 = function () {
        return this.member8824;
    };
    a.prototype.member8827 = function () {
        return this.member8812;
    };
    a.prototype.member8828 = function () {
        return this.member8813;
    };
    a.prototype.cancel = function () {
        this.member8813 = true;
    };
    a.prototype.member8829 = function () {
        return this.member8814;
    };
    a.prototype.member8830 = function () {
        return this.member8816;
    };
    a.prototype.member8831 = function () {
        return this.member8817;
    };
    a.prototype.member8832 = function () {
        return this.member8822;
    };
    a.prototype.member8833 = function () {
        return this.member8815;
    };
    a.prototype.member8834 = function () {
        return this.member8818;
    };
    a.prototype.member8835 = function () {
        return this.member8819;
    };
    a.prototype.member8836 = function () {
        return this.member8820;
    };
    a.prototype.member8837 = function () {
        return this.member8821;
    };
    a.prototype.member8838 = function () {
        return this.member8823;
    };
    a.prototype.member8839 = function () {
        return this.member8825;
    };
    a.prototype.member6725 = function () {
        return this.member4249;
    };
    return function (c, d, n, k, m, i, b, h, g, e, o, j, q, r) {
        return new a(c, d, n, k, m, i, b, h, g, e, o, j, q, r);
    };
}();