import { Class84 } from 'Class84.js';
export var Class85 = function () {
    var d = {
        member625: {
            type: member53.member13,
            member38: member53.member18
        },
        member626: {
            type: member53.member10,
            member38: 0
        },
        member627: {
            type: member53.member10,
            member38: 0
        },
        member628: {
            type: member53.member10,
            member38: 0
        },
        member629: {
            type: member53.member10,
            member38: 0
        },
        member630: {
            type: member53.member10,
            member38: 0
        },
        member631: {
            type: member53.member10,
            member38: 0
        },
        member632: {
            type: member53.member13,
            member38: 0
        },
        member633: {
            type: member53.member10,
            member38: 0
        },
        member634: {
            type: member53.member10,
            member38: 0
        },
        member635: {
            type: member53.member10,
            member38: 0
        },
        member636: {
            type: member53.member10,
            member38: 0
        },
        member637: {
            type: member53.member10,
            member38: member53.member14
        },
        member638: {
            type: member53.member10,
            member38: member53.member14
        },
        member639: {
            type: member53.member10,
            member38: Class84.member620
        },
        member640: {
            type: member53.member10,
            member38: 0
        },
        member641: {
            type: member53.member10,
            member38: 0
        },
        member642: {
            type: member53.member10,
            member38: 0
        },
        member643: {
            type: member53.member10,
            member38: member53.member14
        },
        member644: {
            type: member53.member10,
            member38: member53.member14
        },
        member645: {
            type: member53.member13,
            member38: 0
        },
        member646: {
            type: member53.member13,
            member38: 0
        },
        member647: {
            type: member53.member13,
            member38: member53.member20
        },
        member648: {
            type: member53.member13,
            member38: member53.member19
        },
        member649: {
            type: member53.member10,
            member38: member53.member14
        },
        member650: {
            type: member53.member10,
            member38: member53.member14
        },
        member651: {
            type: member53.member12,
            member38: -1
        },
        member652: {
            type: member53.member13,
            member38: member53.member20
        },
        member653: {
            type: member53.member13,
            member38: member53.member20
        },
        member654: {
            type: member53.member13,
            member38: member53.BOOLEAN_FALSE
        },
        member655: {
            type: member53.member10,
            member38: 0
        },
        member656: {
            type: member53.member10,
            member38: 0
        },
        member657: {
            type: member53.member10,
            member38: 0
        },
        member658: {
            type: member53.member10,
            member38: 0
        },
        member659: {
            type: member53.member10,
            member38: 0
        },
        member660: {
            type: member53.member10,
            member38: 0
        },
        member661: {
            type: member53.member10,
            member38: 0
        },
        member662: {
            type: member53.member10,
            member38: 0
        },
        member663: {
            type: member53.member10,
            member38: 0
        },
        member664: {
            type: member53.member10,
            member38: 0
        },
        member665: {
            type: member53.member10,
            member38: 0
        },
        member666: {
            type: member53.member10,
            member38: 0
        },
        member667: {
            type: member53.member10,
            member38: 0
        },
        member668: {
            type: member53.member10,
            member38: 0
        },
        member669: {
            type: member53.member10,
            member38: 0
        },
        member670: {
            type: member53.member10,
            member38: 0
        },
        member671: {
            type: member53.member10,
            member38: 0
        },
        member672: {
            type: member53.member10,
            member38: member53.member14
        },
        member673: {
            type: member53.member10,
            member38: member53.member14
        },
        member674: {
            type: member53.member10,
            member38: member53.member14
        },
        member675: {
            type: member53.member10,
            member38: member53.member14
        },
        member676: {
            type: member53.member10,
            member38: member53.member14
        },
        member677: {
            type: member53.member10,
            member38: 0
        }
    };
    var c = {
        member678: {
            type: member53.member12,
            member38: -1,
            member40: undefined
        }
    };
    var a = undefined;
    var b = function (e) {
        if (a === undefined) {
            member53.member39(c);
            a = member53.member34(d, c);
        }
        if (e.member625 !== undefined) {
            c.member678.member36 = 0;
            if (e.member678 !== undefined) {
                c.member678.member36 = e.member678.length;
            }
            this.member679 = member53.member43(a, c);
            member53.member37(d, this.member679);
            member53.member44(c, this.member679);
            this.member25(e);
        } else if (e.member680 !== undefined) {
            this.member679 = member53.member29(e.member680.byteLength);
            member53.member24.set(e.member680, this.member679.member31);
        } else {
            throw new Error('1617 ' + e.member625);
        }
    };
    b.prototype.set = function (g, e) {
        g.member21[this.member679.member31 + g.member31] = e;
    };
    b.prototype.get = function (e) {
        return e.member21[this.member679.member31 + e.member31];
    };
    b.prototype.member25 = function (g) {
        this.set(d.member625, g.member625);
        this.set(d.member626, g.member626);
        this.set(d.member627, g.member627);
        this.set(d.member628, g.member628);
        this.set(d.member629, g.member629);
        this.set(d.member630, g.member630);
        this.set(d.member631, g.member631);
        this.set(d.member632, g.member632);
        this.set(d.member633, g.member633);
        this.set(d.member634, g.member634);
        this.set(d.member635, g.member635);
        this.set(d.member636, g.member636);
        if (g.member637 !== undefined) {
            this.set(d.member637, g.member637);
        } else {
            this.set(d.member637, d.member637.member38);
        }
        if (g.member638 !== undefined) {
            this.set(d.member638, g.member638 / 50);
        } else {
            this.set(d.member638, d.member638.member38 / 50);
        }
        this.set(d.member639, g.member639);
        this.set(d.member640, g.member640);
        this.set(d.member641, g.member641);
        this.set(d.member642, g.member642);
        if (g.member643 !== undefined) {
            this.set(d.member643, g.member643);
        } else {
            this.set(d.member643, d.member643.member38);
        }
        if (g.member644 !== undefined) {
            this.set(d.member644, g.member644);
        } else {
            this.set(d.member644, d.member644.member38);
        }
        this.set(d.member645, g.member645);
        this.set(d.member646, g.member646);
        this.set(d.member647, g.member647 ? 1 : 0);
        if (g.member648 !== undefined) {
            this.set(d.member648, g.member648);
        } else {
            this.set(d.member648, d.member648.member38);
        }
        if (g.member649 !== undefined) {
            this.set(d.member649, g.member649);
        } else {
            this.set(d.member649, d.member649.member38);
        }
        if (g.member650 !== undefined) {
            this.set(d.member650, g.member650);
        } else {
            this.set(d.member650, d.member650.member38);
        }
        this.set(d.member651, g.member651);
        this.set(d.member652, g.member652 ? 1 : 0);
        this.set(d.member653, g.member653 ? 1 : 0);
        this.set(d.member654, g.member654 ? 1 : 0);
        this.set(d.member655, g.member655);
        this.set(d.member656, g.member656);
        this.set(d.member657, g.member657);
        this.set(d.member658, g.member658);
        this.set(d.member659, g.member659);
        if (g.member678 !== undefined) {
            var h = member53.member24[this.member679.member31 + c.member678.member41];
            for (var e = 0; e < g.member678.length; e++) {
                c.member678.member21[this.member679.member31 + h + e] = g.member678[e];
            }
        }
        this.set(d.member660, g.member645 >> 24 & 255);
        this.set(d.member661, g.member646 >> 24 & 255);
        this.set(d.member662, this.get(d.member661) - this.get(d.member660));
        this.set(d.member663, g.member645 >> 16 & 255);
        this.set(d.member664, g.member646 >> 16 & 255);
        this.set(d.member665, this.get(d.member664) - this.get(d.member663));
        this.set(d.member666, g.member645 >> 8 & 255);
        this.set(d.member667, g.member646 >> 8 & 255);
        this.set(d.member668, this.get(d.member667) - this.get(d.member666));
        this.set(d.member669, g.member645 >> 0 & 255);
        this.set(d.member670, g.member646 >> 0 & 255);
        this.set(d.member671, this.get(d.member670) - this.get(d.member669));
        if (g.member648 !== undefined) {
            if (g.member648 === g.member645 && g.member648 === g.member646) {
                this.set(d.member648, d.member648.member38);
            } else {
                this.set(d.member672, ((g.member648 >> 24 & 255) - (this.get(d.member660) + this.get(d.member662) / 2)) / g.member649 * 50);
                this.set(d.member673, ((g.member648 >> 16 & 255) - (this.get(d.member663) + this.get(d.member665) / 2)) / g.member649 * 50);
                this.set(d.member674, ((g.member648 >> 8 & 255) - (this.get(d.member666) + this.get(d.member668) / 2)) / g.member649 * 50);
                this.set(d.member675, ((g.member648 >> 0 & 255) - (this.get(d.member669) + this.get(d.member671) / 2)) / g.member650 * 50);
            }
        }
        if (g.member637 !== undefined) {
            this.set(d.member676, (g.member637 - (g.member635 + (g.member636 - g.member635) / 2)) / g.member638 * 50);
        } else {
            this.set(d.member676, d.member676.member38);
        }
        if (g.member643 !== undefined) {
            this.set(d.member677, (g.member643 - (g.member641 + (g.member642 - g.member641) / 2)) / g.member644 * 50);
        } else {
            this.set(d.member677, d.member677.member38);
        }
    };
    b.prototype.member681 = function () {
        return new Uint32Array(member53.member21.slice(this.member679.member31 * 4, this.member679.member31 * 4 + this.member679.member30));
    };
    b.prototype.member682 = function () {
        return this.get(d.member625);
    };
    b.prototype.member683 = function () {
        return this.get(d.member626);
    };
    b.prototype.member684 = function () {
        return this.get(d.member627);
    };
    b.prototype.member685 = function () {
        return this.get(d.member628);
    };
    b.prototype.member686 = function () {
        return this.get(d.member629);
    };
    b.prototype.member687 = function () {
        return this.get(d.member630) + Math.random() * (this.get(d.member631) - this.get(d.member630));
    };
    b.prototype.member688 = function () {
        return this.get(d.member632);
    };
    b.prototype.member689 = function () {
        return this.get(d.member633) + Math.random() * (this.get(d.member634) - this.get(d.member633));
    };
    b.prototype.member690 = function () {
        return this.get(d.member635) + Math.random() * (this.get(d.member636) - this.get(d.member635));
    };
    b.prototype.member691 = function () {
        return this.get(d.member637);
    };
    b.prototype.member692 = function () {
        return this.get(d.member638);
    };
    b.prototype.member693 = function () {
        return this.get(d.member639);
    };
    b.prototype.member694 = function () {
        return this.get(d.member640);
    };
    b.prototype.member695 = function () {
        return this.get(d.member641) + Math.random() * (this.get(d.member642) - this.get(d.member641));
    };
    b.prototype.member696 = function () {
        return this.get(d.member643);
    };
    b.prototype.member697 = function () {
        return this.get(d.member644);
    };
    b.prototype.member698 = function () {
        return this.get(d.member641);
    };
    b.prototype.member699 = function () {
        return this.get(d.member642);
    };
    b.prototype.member700 = function () {
        return this.get(d.member647) === 1;
    };
    b.prototype.getMaterial = function () {
        return this.get(d.member651);
    };
    b.prototype.member702 = function () {
        return this.get(d.member654) === 1;
    };
    b.prototype.member703 = function () {
        return this.get(d.member649);
    };
    b.prototype.member704 = function () {
        return this.get(d.member650);
    };
    b.prototype.member705 = function () {
        return this.get(d.member655) + Math.random() * (this.get(d.member656) - this.get(d.member655));
    };
    b.prototype.member706 = function () {
        var e = this.get(d.member657);
        var h = this.get(d.member658);
        if (e === h) {
            return e;
        } else {
            var g = this.get(d.member659);
            if (g === 0) {
                return e + Math.random() * (h - e);
            } else {
                return e + Math.floor(Math.random() * (g + 1)) * ((h - e) / g);
            }
        }
    };
    b.prototype.member707 = function () {
        return member53.member24[this.member679.member31 + c.member678.member42];
    };
    b.prototype.member708 = function (e) {
        return c.member678.member21[member53.member24[this.member679.member31 + c.member678.member41] + this.member679.member31 + e];
    };
    b.prototype.member709 = function () {
        if (this.get(d.member647)) {
            var e = Math.random();
            return this.get(d.member660) + Math.floor(e * this.get(d.member662)) << 24 | this.get(d.member663) + Math.floor(e * this.get(d.member665)) << 16 | this.get(d.member666) + Math.floor(e * this.get(d.member668)) << 8 | this.get(d.member669) + Math.floor(e * this.get(d.member671)) << 0;
        } else {
            return this.get(d.member660) + Math.floor(Math.random() * this.get(d.member662)) << 24 | this.get(d.member663) + Math.floor(Math.random() * this.get(d.member665)) << 16 | this.get(d.member666) + Math.floor(Math.random() * this.get(d.member668)) << 8 | this.get(d.member669) + Math.floor(Math.random() * this.get(d.member671)) << 0;
        }
    };
    b.prototype.member710 = function () {
        return this.get(d.member672);
    };
    b.prototype.member711 = function () {
        return this.get(d.member673);
    };
    b.prototype.member712 = function () {
        return this.get(d.member674);
    };
    b.prototype.member713 = function () {
        return this.get(d.member675);
    };
    b.prototype.member714 = function () {
        return this.get(d.member676);
    };
    b.prototype.member715 = function () {
        return this.get(d.member677);
    };
    return function (e) {
        return new b(e);
    };
}();