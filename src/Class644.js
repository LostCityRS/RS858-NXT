import { Class421 } from 'Class421.js';
import { Class264 } from 'Class264.js';
import { Class298 } from 'Class298.js';
export var Class644 = function () {
    var c = {};
    var a;
    var b;
    var d = function (e, g) {
        a = e;
        b = g;
    };
    c.member25 = d;
    Class421.member5539.member867 = function (e) {
        e.member6100[e.member6099++] = document.hasFocus() ? 1 : 0;
    };
    Class421.member5745.member867 = function (e) {
        if (Class264.member3131()) {
            e.member6100[e.member6099++] = 1;
        } else {
            e.member6100[e.member6099++] = 0;
        }
    };
    Class421.member5746.member867 = function (e) {
        if (Class264.member3132()) {
            e.member6100[e.member6099++] = 1;
        } else {
            e.member6100[e.member6099++] = 0;
        }
    };
    Class421.member5747.member867 = function (e) {
        if (Class264.member3130()) {
            e.member6100[e.member6099++] = 1;
        } else {
            e.member6100[e.member6099++] = 0;
        }
    };
    Class421.member5551.member867 = function (e) {
        e.member6100[e.member6099++] = Class298.member3556(Class298.member3551) ? 1 : 0;
        e.member6100[e.member6099++] = Class298.member3556(Class298.member3552) ? 1 : 0;
        e.member6100[e.member6099++] = Class298.member3556(Class298.member3553) ? 1 : 0;
    };
    return c;
}();