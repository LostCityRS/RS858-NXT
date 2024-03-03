import { Class449 } from 'Class449.js';
import { Class95 } from 'Class95.js';
import { Class423 } from 'Class423.js';
import { Priority } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
import { Class596 } from 'Class596.js';
export var Class612 = function () {
    var a = function (e, d, m, n, g, h, i, b, k, c, j) {
        this.member9191 = undefined;
        member46(this, Class449, e, d, m, n, g, h, i, b, k, c, j);
    };
    member45(Class449, a);
    a.prototype.member9192 = function (c, h, g) {
        if (this.member9191 === undefined) {
            var k = c.member995.getFile(Class95.member811, Class423.member6115.member6108.member1204, 0, Priority.member841);
            if (k === null) {
                return;
            }
            var d = Class80.member606(k);
            var i = d[0].getColour();
            this.member9191 = Class76(c.member433, d[0].member556(), d[0].member557(), i, false);
            this.member9191.member563();
        }
        var n = h - (this.member9191.member556() - this.member6740()) / 2;
        var m = g - (this.member9191.member557() - this.member6742()) / 2;
        var j = n + this.member9191.member556();
        var b = m + this.member9191.member557();
        var e = Class596.member8939();
        c.member433.member3640.member3804(n, m, j, b, 4294967295, 0, 0, 1, 1, this.member9191, false, e);
    };
    a.prototype.member6811 = function (e, c, b, d) {
        if (!e.member9193()) {
            c.member433.member3640.member3796(b, d, this.member6752(), this.member6754(), 255, false);
            return;
        }
        c.member433.member3640.member1630();
        c.member433.member1342();
        c.member433.member1344(b, d, this.member6752(), this.member6754());
        c.member433.enableScissorTest();
        this.member9192(c, b, d);
        c.member433.member3640.member1630();
        c.member433.member978();
        c.member433.member1343();
    };
    return a;
}();