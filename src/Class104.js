import { Class5 } from 'Class5.js';
export var Class104 = function () {
    var a = {};
    a.member797 = 0;
    a.member892 = 1;
    a.member796 = 2;
    a.member893 = 3;
    a.member894 = function (b, c) {
        switch (c) {
        case this.member797:
            b.enable(Class5.member114);
            break;
        case this.member892:
            b.enable(Class5.member115);
            break;
        case this.member796:
        case this.member893:
            b.enable(Class5.member116);
            break;
        default:
            b.enable(Class5.member115);
            break;
        }
    };
    return a;
}();