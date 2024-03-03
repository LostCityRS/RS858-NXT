import { Class7 } from 'Class7.js';
import { Class63 } from 'Class63.js';
import { Class5 } from 'Class5.js';
export var Class292 = function () {
    var a = function (d, c, b, e) {
        this.version = 0;
        this.member3463 = d;
        this.member1624 = c;
        this.member3464 = b;
        this.member3465 = e;
    };
    a.prototype.member3466 = function () {
        this.version += 1;
    };
    a.prototype.member1631 = function (c) {
        if (c.member441 === this && c.member3467 === this.version) {
            return;
        }
        c.member469(Class7.member142, this.member3463);
        c.member469(Class7.member143, this.member1624);
        switch (c.member444()) {
        case Class63.member390.id:
        case Class63.member391.id:
        case Class63.member401.id:
            var b = c.member445();
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96) && b.member291(Class5.member118)) {
                c.member469(Class7.member229, this.member3465);
            }
            break;
        case Class63.member385.id:
            var b = c.member445();
            if (!b.member291(Class5.member117) && !b.member291(Class5.member110) && !b.member291(Class5.member96)) {
                c.member469(Class7.member229, this.member3465);
                if (b.member291(Class5.member90) || b.member291(Class5.member103)) {
                    c.member469(Class7.member227, this.member3464);
                }
            }
            break;
        default:
            break;
        }
        c.member441 = this;
        c.member3467 = this.version;
    };
    return function (d, c, b, e) {
        return new a(d, c, b, e);
    };
}();