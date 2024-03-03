'use strict';
import { Class0 } from 'Class0.js';
import { Class1 } from 'Class1.js';
import { Class2 } from 'Class2.js';
import { Class3 } from 'Class3.js';
var console = {};
var run = function () {
    self.postMessage = member55(self, 'postMessage');
    var d = { supported: true };
    var c = { supported: false };
    var a = function (f, g) {
        var e = g();
        self.postMessage({
            member59: f,
            supported: e.supported,
            data: e.data
        });
    };
    self.onmessage = function (f) {
        if (f.data === undefined || f.data === null) {
            return;
        }
        try {
            switch (f.data) {
            case Class3.member58:
                a(f.data, b);
                break;
            default:
            }
        } catch (g) {
            self.postMessage({
                member59: f.data,
                error: g.message,
                supported: false
            });
        }
    };
    var b = function () {
        if (!self.WebSocket) {
            return c;
        }
        if ('binaryType' in WebSocket.prototype) {
            return d;
        }
        try {
            if (!new WebSocket(('https:' == location.protocol ? 'wss' : 'ws') + '://.').binaryType) {
                return c;
            } else {
                return d;
            }
        } catch (f) {
            return c;
        }
    };
}();