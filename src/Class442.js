import { Class441 } from 'Class441.js';
import { Class440 } from 'Class440.js';
import { Class439 } from 'Class439.js';
import { Class437 } from 'Class437.js';
export var Class442 = function () {
    var b = false;
    var a = Class441({
        member6662: 0,
        member6663: 0
    });
    var c = function (h, g, o, q, i, j, k, d, n, e, m) {
        this.member6674();
        this.myList = h;
        if (g !== undefined && o !== undefined && k !== undefined && j !== undefined && d !== undefined) {
            this.member6675 = g;
            this.member6676 = o;
            this.type = j;
            this.member3690 = n;
            this.member6677(d, k, e, m);
        } else if (g !== undefined && o !== undefined && q !== undefined && i !== undefined && j !== undefined) {
            this.member6675 = g;
            this.member6676 = o;
            this.member6678 = q;
            this.member6679 = i;
            this.type = j;
        } else {
            throw new Error('1105 ');
        }
    };
    c.prototype.member6680 = function (d, g, i, h, e) {
        this.myList = d;
        this.member6675 = g;
        this.member6676 = i;
        this.member6678 = h;
        this.member6679 = e;
    };
    c.prototype.member6681 = function () {
        this.myList = undefined;
        this.member6675 = -1;
        this.member6676 = -1;
        this.member6678 = -1;
        this.member6679 = -1;
        this.member6674();
    };
    c.prototype.member6682 = function () {
        return this.myList;
    };
    c.prototype.member6674 = function () {
        this.myList = undefined;
        this.member6675 = -1;
        this.member6676 = -1;
        this.member6679 = -1;
        this.member6678 = -1;
        this.member6683 = 0;
        this.params = null;
        this.member3690 = null;
        this.member6684 = 0;
        this.member6685 = 0;
        this.member6686 = 0;
        this.member6687 = 0;
        this.member6688 = 0;
        this.member6689 = 0;
        this.member6690 = 0;
        this.member6691 = 0;
        this.member6692 = 0;
        this.member6693 = 1;
        this.member6694 = 1;
        this.member6695 = 0;
        this.member6696 = 0;
        this.member6697 = 0;
        this.member6698 = 0;
        this.member4149 = false;
        this.member6699 = -1;
        this.member6700 = -1;
        this.member6701 = -1;
        this.member6702 = false;
        this.member4638 = 0;
        this.alpha = 255;
        this.member6703 = undefined;
        this.member6704 = undefined;
        this.member6705 = '';
        this.member6706 = null;
        this.member6707 = null;
        this.member6708 = null;
        this.member6709 = -1;
        this.member6710 = null;
        this.member6711 = 0;
        this.member6712 = 0;
        this.member6713 = Class440.member6658;
        this.member6714 = false;
        this.member6715 = '';
        this.member6716 = undefined;
        this.member6717 = undefined;
        this.member6718 = undefined;
    };
    c.prototype.member6719 = function () {
        return this.member6675;
    };
    c.prototype.member6720 = function () {
        return this.member6676;
    };
    c.prototype.member6721 = function () {
        return this.member6675 << 16 | this.member6676;
    };
    c.prototype.member6722 = function () {
        return this.member6679;
    };
    c.prototype.member6723 = function () {
        return this.member6678;
    };
    c.prototype.member6724 = function () {
        return this.member6675 << 16 | this.member6678;
    };
    c.prototype.member6725 = function () {
        return this.member6721() + (this.member6679 + 1) * Math.pow(2, 32);
    };
    c.prototype.member2794 = function () {
        return this.type;
    };
    c.prototype.member6726 = function () {
        return this.member6683;
    };
    c.prototype.member283 = function () {
        return this.member3690;
    };
    c.prototype.member6727 = function () {
        return this.member6684;
    };
    c.prototype.member6728 = function () {
        return this.member6685;
    };
    c.prototype.member6729 = function (d) {
        this.member6685 = d;
    };
    c.prototype.member6730 = function () {
        return this.member6686;
    };
    c.prototype.member6731 = function (d) {
        this.member6686 = d;
    };
    c.prototype.member6732 = function () {
        return this.member6687;
    };
    c.prototype.member6733 = function (d) {
        this.member6687 = d;
    };
    c.prototype.member6734 = function () {
        return this.member6688;
    };
    c.prototype.member6735 = function (d) {
        this.member6688 = d;
    };
    c.prototype.member6736 = function () {
        return this.member6689;
    };
    c.prototype.member6737 = function (d) {
        this.member6689 = d;
    };
    c.prototype.member6738 = function () {
        return this.member6690;
    };
    c.prototype.member6739 = function (d) {
        this.member6690 = d;
    };
    c.prototype.member6740 = function () {
        return this.member6691;
    };
    c.prototype.member6741 = function (d) {
        this.member6691 = d;
    };
    c.prototype.member6742 = function () {
        return this.member6692;
    };
    c.prototype.member6743 = function (d) {
        this.member6692 = d;
    };
    c.prototype.member6744 = function () {
        return this.member6693;
    };
    c.prototype.member6745 = function (d) {
        this.member6693 = d;
    };
    c.prototype.member6746 = function () {
        return this.member6694;
    };
    c.prototype.member6747 = function (d) {
        this.member6694 = d;
    };
    c.prototype.member6748 = function () {
        return this.member6695;
    };
    c.prototype.member6749 = function (d) {
        this.member6695 = Math.floor(d);
    };
    c.prototype.member6750 = function () {
        return this.member6696;
    };
    c.prototype.member6751 = function (d) {
        this.member6696 = Math.floor(d);
    };
    c.prototype.member6752 = function () {
        return this.member6697;
    };
    c.prototype.member6753 = function (d) {
        this.member6697 = Math.floor(d);
    };
    c.prototype.member6754 = function () {
        return this.member6698;
    };
    c.prototype.member6755 = function (d) {
        this.member6698 = Math.floor(d);
    };
    c.prototype.member4159 = function () {
        return this.member4149;
    };
    c.prototype.member6756 = function (d) {
        this.member4149 = d;
    };
    c.prototype.member6757 = function () {
        return this.member6699;
    };
    c.prototype.member6758 = function (d) {
        this.member6699 = d;
    };
    c.prototype.member6759 = function () {
        return this.member6700;
    };
    c.prototype.member6760 = function (d) {
        this.member6700 = d;
    };
    c.prototype.member6761 = function () {
        return this.member6701;
    };
    c.prototype.member6762 = function (d) {
        this.member6701 = d;
    };
    c.prototype.member6763 = function () {
        return this.member6702;
    };
    c.prototype.member6764 = function (d) {
        this.member6702 = d;
    };
    c.prototype.getDamageColour = function () {
        return this.member4638;
    };
    c.prototype.getColour = function () {
        return this.member4638 << 8 | this.alpha;
    };
    c.prototype.member4647 = function (d) {
        this.member4638 = d;
    };
    c.prototype.member6765 = function () {
        return this.alpha;
    };
    c.prototype.member6766 = function (d) {
        this.alpha = d;
    };
    c.prototype.member6767 = function () {
        if (this.member6703 === undefined) {
            return a;
        } else {
            return this.member6703;
        }
    };
    c.prototype.member6637 = function () {
        return this.member6704 !== undefined;
    };
    c.prototype.member6768 = function () {
        return this.member6704;
    };
    c.prototype.member6769 = function (d) {
        this.member6704 = d;
    };
    c.prototype.member6770 = function () {
        return this.member6705;
    };
    c.prototype.member6771 = function (d) {
        this.member6705 = d;
    };
    c.prototype.member6772 = function (d) {
        if (this.member6706 === null || d > this.member6706.length || this.member6706[d] === undefined || this.member6706[d].trim().length === 0) {
            return null;
        } else {
            return this.member6706[d];
        }
    };
    c.prototype.member6773 = function (d, g) {
        if (this.member6706 === null || this.member6706.length <= d) {
            var e = new Array(d + 1);
            if (this.member6706 !== null) {
                for (var h = 0; h < this.member6706.length; h++) {
                    e[h] = this.member6706[h];
                }
            }
            this.member6706 = e;
        }
        this.member6706[d] = g;
    };
    c.prototype.member6774 = function () {
        this.member6706 = null;
    };
    c.prototype.member6775 = function () {
        return this.member6707;
    };
    c.prototype.member6776 = function (d) {
        this.member6707 = d;
    };
    c.prototype.member6777 = function (d) {
        if (this.member6708 === null || d > this.member6708.length || this.member6708[d] === undefined) {
            return -1;
        } else {
            return this.member6708[d];
        }
    };
    c.prototype.member6778 = function (d, g) {
        if (this.member6708 === null || this.member6708.length <= d) {
            var e = new Int32Array(d + 1);
            if (this.member6708 !== null) {
                for (var h = 0; h < this.member6708.length; h++) {
                    e[h] = this.member6708[h];
                }
                for (var h = this.member6708.length; h < d; ++h) {
                    e[h] = -1;
                }
            }
            this.member6708 = e;
        }
        this.member6708[d] = g;
    };
    c.prototype.member6779 = function () {
        return this.member6709;
    };
    c.prototype.member6780 = function (d) {
        this.member6709 = d;
    };
    c.prototype.member6781 = function () {
        return this.member6710;
    };
    c.prototype.member6782 = function (d) {
        this.member6710 = d;
    };
    c.prototype.member6783 = function () {
        return this.member6711;
    };
    c.prototype.member6784 = function (d) {
        this.member6711 = d;
    };
    c.prototype.member6785 = function () {
        return this.member6712;
    };
    c.prototype.member6786 = function (d) {
        this.member6712 = d;
    };
    c.prototype.member6787 = function () {
        return this.member6713;
    };
    c.prototype.member6788 = function (d) {
        this.member6713 = d;
    };
    c.prototype.member6789 = function () {
        return this.member6715;
    };
    c.prototype.member6790 = function (d) {
        this.member6715 = d;
    };
    c.prototype.member6791 = function () {
        return this.member6716 !== undefined;
    };
    c.prototype.member6792 = function () {
        return this.member6716;
    };
    c.prototype.member6793 = function (d) {
        this.member6716 = d;
    };
    c.prototype.member6794 = function () {
        return this.member6717;
    };
    c.prototype.member6795 = function () {
        return this.member6718;
    };
    c.prototype.member6796 = function (d, e) {
        this.member6717 = d;
        this.member6718 = e;
    };
    c.prototype.member6677 = function (I, h, g, d) {
        if (d === undefined) {
            this.member6683 = I.g2();
        } else {
            this.member6683 = d;
        }
        this.member6689 = I.g2s();
        this.member6690 = I.g2s();
        this.member6691 = I.g2();
        this.member6692 = I.g2();
        this.member6687 = I.g1s();
        this.member6688 = I.g1s();
        this.member6685 = I.g1s();
        this.member6686 = I.g1s();
        this.member6678 = I.g2();
        if (this.member6678 === 65535) {
            this.member6678 = -1;
        }
        var j = I.g1();
        this.member4149 = (j & 1) !== 0;
        if (h >= 0) {
            this.member6702 = (j & 2) !== 0;
        }
        var D = this.member6797(I, h, this.member6687, this.member6688);
        this.member4638 = D.member4638;
        this.alpha = D.alpha;
        if (D.member6702 !== undefined) {
            this.member6702 = D.member6702;
        }
        var t = I.g3();
        var F = I.g1();
        if (F !== 0) {
            var E = false;
            var m = Class439();
            var s = m.member6647();
            var r = m.member6649();
            var o = m.member6651();
            var i = m.member6655();
            while (F !== 0) {
                var q = (F >> 4) - 1;
                F = F << 8 | I.g1();
                F &= 4095;
                if (F === 4095) {
                    F = -1;
                }
                var J = I.g1s();
                if (J !== 0) {
                    E = true;
                }
                var k = I.g1s();
                o[q] = F;
                s[q] = [J];
                r[q] = [k];
                F = I.g1();
            }
            if (E) {
                m.member6646(true);
                this.member6704 = m;
            }
        }
        this.member6705 = I.gjstr();
        var C = I.g1();
        var u = C & 15, H = C >> 4;
        if (u > 0) {
            this.member6706 = new Array(u);
            for (var z = 0; z < u; z++) {
                this.member6706[z] = I.gjstr();
            }
        }
        if (H > 0) {
            var G = I.g1();
            this.member6708 = new Int32Array(G + 1);
            for (z = 0; z < this.member6708.length; z++) {
                this.member6708[z] = -1;
            }
            this.member6708[G] = I.g2();
        }
        if (H > 1) {
            var G = I.g1();
            this.member6708[G] = I.g2();
        }
        this.member6707 = I.gjstr();
        if (this.member6707 === '') {
            this.member6707 = null;
        }
        this.member6711 = I.g1();
        this.member6712 = I.g1();
        this.member6713 = I.g1();
        this.member6715 = I.gjstr();
        var x = -1;
        if ((t >> 11 & 127) !== 0) {
            this.member6798 = I.g2();
            if (this.member6798 === 65535) {
                this.member6798 = -1;
            }
            this.member6700 = I.g2();
            if (this.member6700 === 65535) {
                this.member6700 = -1;
            }
            this.member6701 = I.g2();
            if (this.member6701 === 65535) {
                this.member6701 = -1;
            }
        }
        if (h >= 0) {
            this.member6699 = I.g2();
            if (this.member6699 == 65535) {
                this.member6699 = -1;
            }
        }
        if (t !== 0 || x !== -1) {
            this.member6703 = Class441({
                member6662: t,
                member6663: x
            });
        }
        if (h >= 0) {
            var B = I.g1();
            for (var v = 0; v < B; v++) {
                var e = I.g3(), A = I.g4s();
                this.params[e] = A;
            }
            var y = I.g1();
            for (v = 0; v < y; v++) {
                var e = I.g3(), A = I.gjstr(true);
                this.params[e] = A;
            }
        }
        this.member6716 = Class437();
        b = false;
        this.member6716.member6522(this.member6799(I, g, false, false));
        this.member6716.member6532(this.member6799(I, g, true, false));
        this.member6716.member6536(this.member6799(I, g, true, false));
        this.member6716.member6544(this.member6799(I, g, true, false));
        this.member6716.member6542(this.member6799(I, g, true, false));
        this.member6716.member6546(this.member6799(I, g, false, true));
        this.member6716.member6550(this.member6799(I, g, false, true));
        this.member6716.member6554(this.member6799(I, g, false, true));
        this.member6716.member6569(this.member6799(I, g, false, false));
        this.member6716.member6571(this.member6799(I, g, false, false));
        if (h >= 0) {
            this.member6716.member6573(this.member6799(I, g, false, false));
        }
        this.member6716.member6534(this.member6799(I, g, true, false));
        this.member6716.member6524(this.member6799(I, g, true, false));
        this.member6716.member6526(this.member6799(I, g, true, false));
        this.member6716.member6528(this.member6799(I, g, true, false));
        this.member6716.member6530(this.member6799(I, g, true, false));
        this.member6716.member6538(this.member6799(I, g, true, false));
        this.member6716.member6540(this.member6799(I, g, true, false));
        this.member6716.member6575(this.member6799(I, g, true, false));
        this.member6716.member6558(this.member6799(I, g, false, true));
        this.member6716.member6562(this.member6799(I, g, false, true));
        this.member6716.member6548(this.member6800(I));
        this.member6716.member6552(this.member6800(I));
        this.member6716.member6556(this.member6800(I));
        this.member6716.member6560(this.member6800(I));
        this.member6716.member6564(this.member6800(I));
        if (!b) {
            this.member6716 = undefined;
        }
    };
    c.prototype.member6799 = function (j, d, i, h) {
        var o = j.g1();
        if (o === 0) {
            return null;
        }
        var m = {};
        m.member6801 = new Array(o - 1);
        for (var e = 0; e < o; e++) {
            var g = j.g1();
            var k;
            if (g === 0) {
                k = j.g4s();
            } else if (g === 1) {
                k = j.gjstr();
            }
            if (e === 0) {
                m.scriptID = k;
                if (d !== undefined) {
                    d(m.scriptID);
                }
            } else {
                m.member6801[e - 1] = {
                    isInteger: g === 0,
                    isObject: g === 1,
                    value: k
                };
            }
        }
        this.member6716.member6518(i, h);
        b = true;
        return m;
    };
    c.prototype.member6800 = function (g) {
        var d = g.g1();
        if (d === 0) {
            return null;
        }
        var e = new Int32Array(d);
        for (var h = 0; h < d; h++) {
            e[h] = g.g4s();
        }
        return e;
    };
    c.prototype.getParam = function (g, e) {
        if (this.params === null) {
            return e;
        }
        var d = this.params[g];
        if (d === undefined) {
            return e;
        } else {
            return d;
        }
    };
    c.prototype.member6802 = function (d, e) {
        if (this.params === null) {
            this.params = {};
        }
        this.params[d] = e;
    };
    c.prototype.member6803 = function (d) {
        if (this.params !== null) {
            this.params[d] = undefined;
        }
    };
    c.prototype.member6804 = function () {
        this.member6716 = undefined;
    };
    c.prototype.member6805 = function (d) {
        if (false) {
        }
    };
    c.prototype.member6806 = function () {
        return '';
    };
    c.prototype.member6807 = function () {
        return -1;
    };
    c.prototype.member6808 = function () {
    };
    c.prototype.member6809 = function () {
        return 0;
    };
    c.prototype.member6810 = function () {
        return 0;
    };
    c.prototype.member3814 = function (e, d, g) {
        return e.member433.member3814(d, g, d + this.member6752(), g + this.member6754());
    };
    c.prototype.member6811 = function (h, e, d, g) {
    };
    c.prototype.member6458 = function () {
        return false;
    };
    c.prototype.member6812 = function (s, d, r, o, q, t, m, n, k, j, i, h, g, e) {
    };
    c.prototype.member512 = function () {
    };
    return c;
}();