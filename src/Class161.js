import { Class29 } from 'Class29.js';
export var Class161 = function () {
    var b = {};
    var a = {
        data: new Array(),
        size: 0,
        member32: 0
    };
    b.member25 = function (c) {
        a = {
            data: new Array(),
            size: 0,
            member32: 0
        };
    };
    b.member475 = function () {
        a = {
            data: new Array(),
            size: 0,
            member32: 0
        };
    };
    b.member618 = function () {
        a.member32 = 0;
    };
    b.member619 = function (c) {
        if (a.member32 < a.size) {
            return a.data[a.member32++];
        }
        a.data[a.size++] = Class29();
        return a.data[a.member32++];
    };
    return b;
}();