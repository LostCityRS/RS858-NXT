import { Class474 } from 'Class474.js';
import { Class443 } from 'Class443.js';
import { Class423 } from 'Class423.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class446 } from 'Class446.js';
import { Class302 } from 'Class302.js';
export var Class614 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        member46(this, Class474, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class474, a);
    a.prototype.member9198 = function (b) {
        var c = '' + b;
        for (var d = c.length() - 3; d > 0; d -= 3) {
            c = c.substring(0, d) + ',' + c.substring(d);
        }
        if (c.length() > 9) {
            return ' <col=00ff80>' + c.substring(0, c.length() - 8) + Class443.member6958[member7710.clientParameters.member7138.value.id] + ' (' + c + ')</col>';
        }
        if (c.length() > 6) {
            return ' <col=ffffff>' + c.substring(0, c.length() - 4) + Class443.member6956[member7710.clientParameters.member7138.value.id] + ' (' + c + ')</col>';
        }
        return ' <col=ffff00>' + c + '</col>';
    };
    a.prototype.member6811 = function (i, b, h, g) {
        var c = this.member3639(b.member7137);
        if (c === NULL || c === undefined) {
            return;
        }
        var k = Class423.member6130(Class423.member6115.member6111);
        if (k === NULL) {
            k = null;
        }
        var j;
        if (this.member6807() !== -1) {
            var d = b.member2970.getConfigType(Js5ConfigGroup.OBJTYPE.member1204, this.member6807());
            if (d === NULL) {
                return;
            }
            j = d.getName();
            var e = this.member7044();
            if ((d.getStackable() === 1 || e !== 1) && e !== -1) {
                j = '<col=ff9040>' + j + '</col> x' + this.member9198(e);
            }
        } else if (this.member6726() === Class446.member7099) {
            j = b.member9179.member9199();
            if (k !== null && b.member9179.member9200() !== null) {
                k = b.member9179.member9200();
            }
        } else if (this === i.member7463()) {
            j = Class443.member3549[b.clientParameters.member7138.value.id];
        } else {
            j = this.member6806();
        }
        if (j === undefined) {
            if (false) {
            }
            return;
        }
        Class302.member3604(j, h, g, c, this.member6752(), this.member6754(), this.member7592(), this.member7594(), this.member7590(), this.member7598(), this.getColour(), this.member7596() ? 255 : undefined, k, undefined);
    };
    return a;
}();