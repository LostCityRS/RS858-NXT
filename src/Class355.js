import { Class295 } from 'Class295.js';
import { Class299 } from 'Class299.js';
export var Class355 = function () {
    var a = {};
    a.member3929 = function () {
        if (!Class295.isWebSocketsSupported()) {
            throw new Error('1517 ');
        }
        if (true) {
            if (!Class295.isWebWorkersSupported()) {
                throw new Error('1518 ');
            }
            if (!Class295.isWebSocketsOnWebWorkersSupported()) {
                throw new Error('1519 ');
            }
            return new Worker(Class299.member3584().member3476() + 'h.js?1445359120692');
        } else {
        }
    };
    return a;
}();