import { Class421 } from 'Class421.js';
import { Class165 } from 'Class165.js';
import { Class143 } from 'Class143.js';
import { Class453 } from 'Class453.js';
import { Class299 } from 'Class299.js';
import { Class642 } from 'Class642.js';
export var Class666 = function () {
    var b = {};
    var a;
    var c = function (d) {
        a = d;
    };
    b.member25 = c;
    Class421.member5414.member867 = function (e) {
        var h = e.member6100[e.member6099 - 3];
        var g = e.member6100[e.member6099 - 2];
        var d = e.member6100[e.member6099 - 1];
        e.member6099 -= 3;
        if (h > e.arraySize[g]) {
            throw new Error('1196 ' + h + '1196 ' + g);
        }
        if (h > e.arraySize[d]) {
            throw new Error('1197 ' + h + '1197 ' + d);
        }
        if (g === d) {
            throw new Error('1198 ');
        }
        Class165.member1785(e.arrayData[g], e.arrayData[d], 0, h - 1);
    };
    Class421.member5786.member867 = function (e) {
        var d = '';
        e.member6142[e.member6143++] = d;
    };
    Class421.member5787.member867 = function (d) {
        d.member6100[d.member6099++] = 1;
    };
    Class421.member5788.member867 = function (d) {
        d.member6100[d.member6099++] = 0;
    };
    Class421.member5789.member867 = function (d) {
        d.member6100[d.member6099++] = a.member9733();
    };
    Class421.member5656.member867 = function (e) {
        var d = e.member6100[--e.member6099];
        e.member6100[e.member6099++] = Class143.member1442(d);
    };
    Class421.member5790.member867 = function (d) {
        d.member6100[d.member6099++] = a.member8233() === Class453.member7201 ? 1 : 0;
    };
    Class421.member5260.member867 = function (d) {
        Class299.member3567();
    };
    Class421.member6011.member867 = function (e) {
        var d = Class642.member9618(Class642.member9617);
        if (d === undefined) {
            d = false;
        }
        e.member6100[e.member6099++] = d;
    };
    Class421.member6012.member867 = function (d) {
        d.member6100[d.member6099++] = Class299.member3573();
        d.member6100[d.member6099++] = Class299.member3580();
        d.member6100[d.member6099++] = Class299.member3576();
    };
    return b;
}();