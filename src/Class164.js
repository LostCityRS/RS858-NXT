export var Class164 = function () {
    var g = 0;
    var h = 1;
    var j = 0;
    var k = 1;
    var i = 2;
    var m = -2;
    var e = -1;
    var c = -1;
    var d = 2048 / (2 * Math.PI);
    var b = function (n) {
        this.member625;
        this.type = g;
        this.member1736, this.member1737;
        this.member1738, this.member1739;
        this.member1740 = j;
        this.member635, this.member636;
        this.member1741 = j;
        this.member1742 = undefined;
        this.member637 = undefined;
        this.member638 = 100;
        this.member641, this.member642;
        this.member643 = undefined;
        this.member644 = 100;
        this.member1743, this.member1744;
        this.member1745 = true;
        this.member1746 = undefined;
        this.member1747 = 100;
        this.member650 = 100;
        this.member754 = -1;
        this.member633, this.member634;
        this.member1748, this.member1749;
        this.member1750 = -2;
        this.member1751 = -2;
        this.member632 = 0;
        this.member1752 = true;
        this.loop = true;
        this.member1753 = -1;
        this.member875 = -1;
        this.member1754 = 0;
        this.member1755 = true;
        this.member657 = 0, this.member658 = 0;
        this.member659 = 0;
        this.member655 = 0, this.member656 = 0;
        this.member1756 = true;
        this.member1757 = false;
        this.member1758 = true;
        this.member654 = false;
        this.member678 = undefined;
        if (n !== undefined) {
            a.call(this, n);
        } else {
            throw new Error('1149 ');
        }
    };
    b.prototype.member1759 = function () {
        return this.member1736;
    };
    b.prototype.member1760 = function () {
        return this.member1737;
    };
    b.prototype.member1761 = function () {
        return this.member1738;
    };
    b.prototype.member1762 = function () {
        return this.member1739;
    };
    b.prototype.member1763 = function () {
        return this.member635;
    };
    b.prototype.member1764 = function () {
        return this.member636;
    };
    b.prototype.member1765 = function () {
        return this.member1741;
    };
    b.prototype.member1766 = function () {
        return this.member1742;
    };
    b.prototype.member691 = function () {
        return this.member637;
    };
    b.prototype.member692 = function () {
        return this.member638;
    };
    b.prototype.member698 = function () {
        return this.member641;
    };
    b.prototype.member699 = function () {
        return this.member642;
    };
    b.prototype.member696 = function () {
        return this.member643;
    };
    b.prototype.member697 = function () {
        return this.member644;
    };
    b.prototype.member1767 = function () {
        return this.member1743;
    };
    b.prototype.member1768 = function () {
        return this.member1744;
    };
    b.prototype.member1769 = function () {
        return this.member1745;
    };
    b.prototype.member1770 = function () {
        return this.member1746;
    };
    b.prototype.member1771 = function () {
        return this.member1747;
    };
    b.prototype.member704 = function () {
        return this.member650;
    };
    b.prototype.member1484 = function () {
        return this.member754;
    };
    b.prototype.member1772 = function () {
        return this.member633;
    };
    b.prototype.member1773 = function () {
        return this.member634;
    };
    b.prototype.member1774 = function () {
        return this.member1748;
    };
    b.prototype.member1775 = function () {
        return this.member1749;
    };
    b.prototype.member688 = function () {
        return this.member632;
    };
    b.prototype.member1776 = function () {
        return this.member1755;
    };
    b.prototype.member1777 = function () {
        return this.member655;
    };
    b.prototype.member1778 = function () {
        return this.member656;
    };
    b.prototype.member1779 = function () {
        return this.member657;
    };
    b.prototype.member1780 = function () {
        return this.member658;
    };
    b.prototype.member1781 = function () {
        return this.member659;
    };
    b.prototype.member1782 = function () {
        return this.member1756;
    };
    b.prototype.member1783 = function () {
        return this.member654;
    };
    b.prototype.member1784 = function () {
        return this.member678;
    };
    var a = function (r) {
        while (true) {
            var o = r.member609();
            if (o === 0) {
                break;
            } else if (o === 1) {
                this.member1736 = r.member608() / d;
                this.member1737 = r.member608() / d;
                this.member1738 = r.member608() / d;
                this.member1739 = r.member608() / d;
            } else if (o === 2) {
                this.member1740 = r.member609();
            } else if (o === 3) {
                this.member635 = r.member1074();
                this.member636 = r.member1074();
            } else if (o === 4) {
                this.member1741 = r.member609();
                this.member1742 = r.member1070();
            } else if (o === 5) {
                this.member641 = this.member642 = r.member608();
            } else if (o === 6) {
                this.member1743 = r.member1074();
                this.member1744 = r.member1074();
            } else if (o === 7) {
                this.member633 = r.member608();
                this.member634 = r.member608();
            } else if (o === 8) {
                this.member1748 = r.member608();
                this.member1749 = r.member608();
            } else if (o === 9) {
                var q = r.member609();
                r.member607(r.member1047() + q * 2);
            } else if (o === 10) {
                var q = r.member609();
                this.member678 = new Array(q);
                for (var n = 0; n < q; n++) {
                    this.member678[n] = r.member608();
                }
            } else if (o === 12) {
                this.member1750 = r.member1070();
            } else if (o === 13) {
                this.member1751 = r.member1070();
            } else if (o === 14) {
                this.member632 = r.member608();
            } else if (o === 15) {
                this.member754 = r.member608();
            } else if (o === 16) {
                this.member1752 = r.member609() === 1;
                this.member1753 = r.member608();
                this.member875 = r.member608();
                this.loop = r.member609() === 1;
            } else if (o === 17) {
                r.member608();
            } else if (o === 18) {
                this.member1746 = r.member1074();
            } else if (o === 19) {
                this.member1754 = r.member609();
            } else if (o === 20) {
                this.member1747 = r.member609();
            } else if (o === 21) {
                this.member650 = r.member609();
            } else if (o === 22) {
                this.member637 = r.member1074();
                if (this.member637 === -1) {
                    this.member637 = undefined;
                }
            } else if (o === 23) {
                this.member638 = r.member609();
            } else if (o === 24) {
                this.member1745 = false;
            } else if (o === 25) {
                var q = r.member609();
                r.member607(r.member1047() + q * 2);
            } else if (o === 26) {
                this.member1755 = false;
            } else if (o === 27) {
                this.member643 = r.member608();
            } else if (o === 28) {
                this.member644 = r.member609();
            } else if (o === 29) {
                if (r.member609() === 0) {
                    this.member655 = this.member656 = r.member1071() / d;
                } else {
                    this.member655 = r.member1071() / d;
                    this.member656 = r.member1071() / d;
                }
            } else if (o === 30) {
            } else if (o === 31) {
                this.member641 = r.member608();
                this.member642 = r.member608();
            } else if (o === 32) {
                this.member1756 = false;
            } else if (o === 33) {
                this.member1757 = true;
            } else if (o === 34) {
                this.member1758 = false;
            } else if (o === 35) {
                if (r.member609() === 0) {
                    this.member657 = this.member658 = r.member1071() / d;
                } else {
                    this.member657 = r.member1071() / d;
                    this.member658 = r.member1071() / d;
                    this.member659 = r.member609();
                }
            } else if (o === 36) {
                this.member654 = true;
            } else {
                throw new Error('1150 ' + o);
            }
        }
    };
    return function (n) {
        return new b(n);
    };
}();