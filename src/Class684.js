export var Class684 = function () {
    var b = 1;
    var c = 3;
    var d = 4;
    var a = 5;
    return function (k) {
        var m = {};
        var j;
        var o;
        var g = function () {
            this.member7233;
            this.member8439;
            this.member8438;
            this.member9856;
        };
        g.prototype.decode = function (r) {
            if (r.member609() !== 255) {
                throw new Error();
            }
            this.member7233 = r.member1089();
            if (this.member7233 === '') {
                this.member7233 = undefined;
            }
            this.member8439 = r.member608();
            this.member8438 = r.member1070();
            this.member9856 = r.member1077();
        };
        g.prototype.apply = function (r) {
            r.member9874(this.member7233, this.member8438, this.member8439, this.member9856);
        };
        var n = function () {
            this.member8436;
            this.member9876;
        };
        n.prototype.decode = function (r) {
            this.member8436 = r.member608();
            this.member9876 = r.member609();
            if (r.member609() !== 255) {
                throw new Error();
            }
        };
        n.prototype.apply = function (r) {
            r.member9875(this.member8436);
        };
        var i = function () {
            this.member8436;
            this.member8438;
            this.member8439;
            this.member3564;
            this.member7233;
            this.member9857;
        };
        i.prototype.decode = function (r) {
            r.member609();
            this.member8436 = r.member608();
            this.member8438 = r.member1070();
            this.member8439 = r.member608();
            this.member3564 = r.member1077();
            this.member7233 = r.member1089();
            this.member9857 = r.member609() === 1;
        };
        i.prototype.apply = function (s) {
            var r = s.member8848(this.member8436);
            r.member9860(this.member8438, this.member8439, this.member3564, this.member7233, this.member9857);
        };
        var h = function () {
            this.member2808;
            this.member9868;
            this.member9869;
            this.member9870;
        };
        h.prototype.decode = function (r) {
            this.member2808 = r.member1089();
            if (this.member2808 === '') {
                this.member2808 = undefined;
            } else {
                this.member9868 = r.member609() === 1;
                this.member9869 = r.member1070();
                this.member9870 = r.member1070();
            }
        };
        h.prototype.apply = function (r) {
            r.member8556(this.member2808, this.member9868, this.member9869, this.member9870);
        };
        var e = function (t) {
            t.member1077();
            var r = t.member1077();
            o = r.member1058 * Math.pow(2, 32) + r.member1059;
            j = [];
            var s = t.member609();
            while (s !== 0) {
                var u;
                switch (s) {
                case b:
                    u = new g();
                    break;
                case c:
                    u = new n();
                    break;
                case d:
                    u = new h();
                    break;
                case a:
                    u = new i();
                    break;
                default:
                    throw new Error();
                }
                u.decode(t);
                j.push(u);
                s = t.member609();
            }
        };
        var q = function (s) {
            if (s.member8525() !== o) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            for (var r = 0; r < j.length; r++) {
                j[r].apply(s);
            }
            s.member8526();
        };
        m.member9877 = q;
        if (k !== undefined) {
            e(k);
        } else {
            throw new Error('1167 ');
        }
        return m;
    };
}();