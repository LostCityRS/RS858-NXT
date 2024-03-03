import { Class86 } from 'Class86.js';
import { Class143 } from 'Class143.js';
import { Class410 } from 'Class410.js';
import { Js5ConfigGroup } from 'Class131.js';
export var Class411 = function () {
    var a = function (b) {
        this.level;
        this.position = new Float32Array(3);
        this.member4728;
        this.member4729;
        this.member4730;
        this.member4731;
        this.member4732;
        this.member4638;
        this.member4129;
        this.member4733 = -1;
        this.member4642 = -1;
        this.frequency = 0;
        this.member4734 = 0;
        this.member4735 = 0;
        this.offset = 0;
        this.member25(b);
    };
    a.prototype.member4081 = function () {
        return this.level;
    };
    a.prototype.member2026 = function () {
        return this.position;
    };
    a.prototype.member4736 = function () {
        return this.member4728;
    };
    a.prototype.member4737 = function () {
        return this.member4729;
    };
    a.prototype.member4738 = function () {
        return this.member4730;
    };
    a.prototype.member4739 = function () {
        return this.member4731;
    };
    a.prototype.member4740 = function () {
        return this.member4732;
    };
    a.prototype.getDamageColour = function () {
        return this.member4638;
    };
    a.prototype.member992 = function () {
        return this.member4129;
    };
    a.prototype.member4741 = function () {
        return this.member4733;
    };
    a.prototype.member4742 = function () {
        return this.member4734;
    };
    a.prototype.member4646 = function () {
        return this.member4642;
    };
    a.prototype.member25 = function (h) {
        if (h.packet !== undefined) {
            this.level = h.packet.g1();
            this.member4729 = (this.level & 8) != 0;
            this.member4728 = (this.level & 16) != 0;
            this.level = this.level & 7;
            this.position[0] = h.packet.g2();
            this.position[2] = h.packet.g2();
            this.position[1] = h.packet.g2();
            var d = h.packet.g1();
            var g = d * 2 + 1;
            this.member4730 = new Uint32Array(g);
            for (var j = 0; j < this.member4730.length; j++) {
                var k = h.packet.g2();
                var i = k >>> 8;
                var e = k & 255;
                if (i >= g) {
                    i = g - 1;
                }
                if (e > g - i) {
                    e = g - i;
                }
                this.member4730[j] = i << 8 | e;
            }
            this.member4129 = d * Class86.member718 + Class86.member718 / 2;
            this.member4129 *= 2;
            this.member4638 = Class143.member1441(h.packet.g2());
            var b = h.packet.g1();
            this.member4731 = b & 31;
            this.member4734 = (b & 224) << 3;
            this.member4642 = h.packet.g2s();
            if (this.member4731 !== Class410.member4726) {
                this.member4743();
            } else {
                this.member4733 = h.packet.g2();
            }
        } else if (h.member4744 !== undefined && h.member4745 !== undefined && h.member1668 !== undefined) {
            var c = h.member4744;
            this.level = c.member4081();
            this.member4729 = c.member4737();
            this.member4728 = c.member4736();
            this.position = h.member4745;
            this.member4730 = c.member4738();
            this.member4129 = c.member992();
            this.member4638 = c.getDamageColour();
            this.member4731 = c.member4739();
            this.member4734 = c.member4742();
            this.member4642 = c.member4646();
            this.member4733 = c.member4741();
            if (this.member4733 === -1) {
                this.member4743();
            }
            if (h.member4746 !== undefined) {
                this.level = h.member4746;
            }
        } else {
            throw new Error('1289 ');
        }
    };
    a.prototype.member4743 = function () {
        switch (this.member4731) {
        case Class410.member4711:
            this.member4732 = Class410.member4705;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 2048;
            break;
        case Class410.member4712:
            this.member4732 = Class410.member4705;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 4096;
            break;
        case Class410.member4713:
            this.member4732 = Class410.member4708;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 2048;
            break;
        case Class410.member4714:
            this.member4732 = Class410.member4708;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 8192;
            break;
        case Class410.member4721:
            this.member4732 = Class410.member4706;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 2048;
            break;
        case Class410.member4722:
            this.member4732 = Class410.member4706;
            this.offset = 0;
            this.member4735 = 2048;
            this.frequency = 8192;
            break;
        case Class410.member4719:
            this.member4732 = Class410.member4707;
            this.offset = 1536;
            this.member4735 = 512;
            this.frequency = 2048;
            break;
        case Class410.member4720:
            this.member4732 = Class410.member4707;
            this.offset = 1536;
            this.member4735 = 512;
            this.frequency = 4096;
            break;
        case Class410.member4715:
            this.member4732 = Class410.member4707;
            this.offset = 1280;
            this.member4735 = 768;
            this.frequency = 2048;
            break;
        case Class410.member4716:
            this.member4732 = Class410.member4707;
            this.offset = 1280;
            this.member4735 = 768;
            this.frequency = 4096;
            break;
        case Class410.member4717:
            this.member4732 = Class410.member4707;
            this.offset = 1024;
            this.member4735 = 1024;
            this.frequency = 2048;
            break;
        case Class410.member4718:
            this.member4732 = Class410.member4707;
            this.offset = 1024;
            this.member4735 = 1024;
            this.frequency = 4096;
            break;
        case Class410.member4723:
            this.member4732 = Class410.member4705;
            this.offset = 1280;
            this.member4735 = 768;
            this.frequency = 2048;
            break;
        case Class410.member4724:
            this.member4732 = Class410.member4705;
            this.offset = 1536;
            this.member4735 = 512;
            this.frequency = 4096;
            break;
        case Class410.member4725:
            this.member4732 = Class410.member4705;
            this.offset = 1792;
            this.member4735 = 256;
            this.frequency = 8192;
            break;
        default:
            this.offset = 0;
            this.member4732 = Class410.member4704;
            this.member4735 = 2048;
            this.frequency = 2048;
            break;
        }
    };
    a.prototype.member4747 = function (b) {
        this.position[1] += b;
    };
    a.prototype.member4655 = function (h, j, e) {
        var i = true;
        if (this.member4733 !== -1) {
            var g = h.getConfigType(Js5ConfigGroup.LIGHTTYPE.member1204, this.member4733);
            if (g !== NULL) {
                this.member4732 = g.getFunction();
                this.offset = g.getOffset();
                this.member4735 = g.getAmplitude();
                this.frequency = g.getFrequency();
                this.member4733 = -1;
            } else {
                i = false;
            }
        }
        var c = 2048;
        if (i && !e) {
            var d = this.member4734 + j * this.frequency / 50 & 2047;
            switch (this.member4732) {
            case Class410.member4705:
                c = 1024 + Math.sin(d / 2048 * (Math.PI * 2)) * 1024;
                break;
            case Class410.member4707:
                c = Class410.member4727[d] * 2048;
                break;
            case Class410.member4708:
                c = d >> 10 << 11;
                break;
            case Class410.member4706:
                c = d;
                break;
            case Class410.member4709:
                c = (d < 1024 ? d : 2048 - d) << 1;
                break;
            default:
                c = 2048;
                break;
            }
        }
        var b = (this.offset + (c * this.member4735 >> 11)) / 2048;
        b *= 2;
        return b;
    };
    a.prototype.member4658 = function (b) {
        if (b === this.level) {
            return true;
        }
        if (b > this.level) {
            return this.member4729;
        }
        if (b < this.level) {
            return this.member4728;
        }
        return false;
    };
    return function (b) {
        return new a(b);
    };
}();