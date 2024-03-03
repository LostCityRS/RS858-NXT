'use strict';
import { Class1 } from 'Class1.js';
import { Class0 } from 'Class0.js';
import { Class2 } from 'Class2.js';
import { Class123 } from 'Class123.js';
import { Class122 } from 'Class122.js';
import { Class124 } from 'Class124.js';
import { Class214 } from 'Class214.js';
import { Class215 } from 'Class215.js';
import { Class216 } from 'Class216.js';
import { Class217 } from 'Class217.js';
import { Class218 } from 'Class218.js';
import { Class219 } from 'Class219.js';
import { Class220 } from 'Class220.js';
import { Class221 } from 'Class221.js';
import { Class222 } from 'Class222.js';
import { Class223 } from 'Class223.js';
import { Class224 } from 'Class224.js';
import { Class182 } from 'Class182.js';
import { Class225 } from 'Class225.js';
import { Class226 } from 'Class226.js';
import { Class90 } from 'Class90.js';
import { Class227 } from 'Class227.js';
import { Class228 } from 'Class228.js';
import { Class229 } from 'Class229.js';
import { Class230 } from 'Class230.js';
import { Class231 } from 'Class231.js';
import { Class232 } from 'Class232.js';
var console = {};
var run = function () {
    self.postMessage = member55(self, 'postMessage');
    self.onmessage = Class232.onmessage;
    Class232.member2770(self.postMessage);
    console.log = function (a) {
        self.postMessage({
            member59: Class230.LOG,
            logMessage: a
        });
    };
}();