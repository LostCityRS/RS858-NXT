export var Class103 = function () {
    var a = function () {
        this.member883 = {};
        this.member883.member884 = this.member883;
        this.member883.next = this.member883;
        this.member885 = this.member883;
        this.length = 0;
    };
    a.prototype.member886 = function (b) {
        if (b.next !== undefined) {
            throw new Error('994 ' + b + '994 ' + (b.__linked_list_root || '994 '));
        }
        this.member883.next.member884 = b;
        b.next = this.member883.next;
        this.member883.next = b;
        b.member884 = this.member883;
        this.length++;
        if (false) {
        }
    };
    a.prototype.member887 = function (b) {
        if (b.next !== undefined) {
            throw new Error('995 ' + b + '995 ' + (b.__linked_list_root || '995 '));
        }
        this.member883.member884.next = b;
        b.member884 = this.member883.member884;
        this.member883.member884 = b;
        b.next = this.member883;
        this.length++;
        if (false) {
        }
    };
    a.prototype.member888 = function (c, b) {
        if (c.next !== undefined) {
            throw new Error('996 ' + c + '996 ' + (c.__linked_list_root || '996 '));
        }
        c.member884 = b;
        c.next = b.next;
        c.next.member884 = c;
        b.next = c;
        this.length++;
        if (false) {
        }
    };
    a.prototype.member889 = function (c, b) {
        if (c.next !== undefined) {
            throw new Error('997 ' + c + '997 ' + (c.__linked_list_root || '997 '));
        }
        c.member884 = b.member884;
        c.next = b;
        b.member884.next = c;
        b.member884 = c;
        this.length++;
        if (false) {
        }
    };
    a.prototype.unlink = function (b) {
        if (b.next === undefined) {
            throw new Error('998 ' + b + '998 ');
        }
        if (false) {
        }
        b.member884.next = b.next;
        b.next.member884 = b.member884;
        b.member884 = undefined;
        b.next = undefined;
        this.length--;
    };
    if (false) {
    }
    a.prototype.member301 = function () {
        for (var b = this.member776(); b !== null; b = this.member777()) {
            this.unlink(b);
        }
        this.member883.next = this.member883;
        this.member883.member884 = this.member883;
        this.length = 0;
    };
    a.prototype.member890 = function () {
        return this.length;
    };
    a.prototype.member776 = function () {
        if (this.member883.next === this.member883) {
            return null;
        } else {
            this.member885 = this.member883.next.next;
            return this.member883.next;
        }
    };
    a.prototype.member777 = function () {
        if (this.member885 === this.member883) {
            return null;
        } else {
            var b = this.member885;
            this.member885 = this.member885.next;
            return b;
        }
    };
    a.prototype.member891 = function () {
        if (this.member883.member884 === this.member883) {
            return null;
        } else {
            return this.member883.member884;
        }
    };
    return function () {
        return new a();
    };
}();