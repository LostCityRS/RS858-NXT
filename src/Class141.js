export var Class141 = function () {
    var K = 0;
    var X = 1;
    var S = 2;
    var R = 3;
    var u = 4;
    var i = 0;
    var ar = 1;
    var L = 2;
    var v = 0;
    var n = 1;
    var q = 2;
    var Z = 0;
    var I = 1;
    var d = 2;
    var j = 3;
    var aj = 4;
    var ab = 5;
    var ah = 0;
    var b = 1;
    var ac = 2;
    var af = 3;
    var A = 4;
    var ap = 5;
    var ae = 1;
    var aa = 2;
    var Q = 4;
    var s = 8;
    var y = 16;
    var J = 1;
    var F = 2;
    var aq = 4;
    var ai = 8;
    var B = 16;
    var Y = 32;
    var k = 64;
    var x = 128;
    var N = 256;
    var o = 512;
    var P = 0;
    var h = 1;
    var H = 2;
    var g = 3;
    var M = 1;
    var D = 2;
    var V = 0;
    var c = 1;
    var m = 2;
    var ao = 3;
    var ad = 4;
    var W = 5;
    var z = 6;
    var ag = 7;
    var e = 8;
    var al = 9;
    var G = 10;
    var t = 11;
    var am = 12;
    var r = 13;
    var O = 14;
    var C = 15;
    var U = 16;
    var a = 0;
    var E = 1;
    var ak = 2;
    var an = function (au, at) {
        this.member1360 = au;
        this.member1361 = false;
        this.member1362 = false;
        this.member1363 = false;
        this.member1364 = false;
        this.member1365 = false;
        this.size = 64;
        this.member1366 = false;
        this.member1367 = false;
        this.member1368 = 0;
        this.member1369 = 0;
        this.member1370 = 0;
        this.member1371 = 0;
        this.member1372 = 0;
        this.member1373 = 0;
        this.member1374 = 0;
        this.member1375 = 0;
        this.member1376 = 0;
        this.member1377 = -1;
        this.member1378 = false;
        this.member1379 = v;
        this.member1380 = I;
        this.member1338 = i;
        this.member1381 = 255;
        this.member1382 = P;
        this.member1383 = P;
        this.member1384 = false;
        this.member1385 = false;
        this.member1386 = false;
        this.member1387 = 0;
        this.member1388 = 0;
        this.member1389 = 0;
        this.member1390 = false;
        this.member1391 = 0;
        this.member1392 = false;
        this.member1393 = false;
        this.member1394 = 0;
        this.member1395 = 0;
        this.member1396 = 0;
        this.member1397 = 0;
        if (at !== undefined) {
            if (at !== null) {
                T.call(this, at);
            }
        } else {
            throw new Error('933 ');
        }
    };
    var T = function (ay) {
        var ax = ay.g1();
        if (ax === K) {
            this.size = 64;
        } else if (ax === X) {
            this.size = 128;
        } else if (ax === S) {
            this.size = 256;
        } else if (ax === R) {
            this.size = 512;
        } else if (ax === u) {
            this.size = 1024;
        } else {
            throw new Error('934 ' + ax);
        }
        var av = ay.g4();
        if ((av & ae) !== 0) {
            this.member1361 = true;
        }
        if ((av & aa) !== 0) {
            this.member1362 = true;
        }
        if ((av & Q) !== 0) {
            this.member1363 = true;
        }
        if ((av & s) !== 0) {
            this.member1364 = true;
        }
        if ((av & y) !== 0) {
            this.member1365 = true;
        }
        var aw = ay.g1();
        this.member1382 = aw & 7;
        this.member1383 = aw >> 3 & 7;
        var au = ay.g4();
        this.member1366 = (au & J) !== 0;
        this.member1367 = (au & F) !== 0;
        this.member1384 = (au & aq) !== 0;
        this.member1385 = (au & ai) !== 0;
        if ((au & B) !== 0) {
            this.member1370 = ay.gFloat();
            this.member1371 = ay.gFloat();
        }
        if ((au & Y) !== 0) {
            this.member1372 = ay.g4();
        }
        if ((au & k) !== 0) {
            this.member1373 = ay.g4();
        }
        if ((au & x) !== 0) {
            this.member1374 = ay.g4();
        }
        if ((au & N) !== 0) {
            this.member1375 = ay.g4();
        }
        if ((au & o) !== 0) {
            this.member1376 = ay.g4();
        }
        this.member1378 = ay.g1() === 1;
        this.member1379 = ay.g1();
        this.member1380 = ay.g1();
        this.member1338 = ay.g1();
        if (this.member1338 === ar) {
            this.member1381 = ay.g1();
        }
        var at = ay.g1();
        if ((at & M) !== 0) {
            this.member1368 = ay.g1s();
        }
        if ((at & D) !== 0) {
            this.member1369 = ay.g1s();
        }
        if (ay.g1() === 1) {
            this.member1386 = true;
            this.member1387 = ay.g1s();
            this.member1388 = ay.g1s();
            this.member1389 = ay.g4s();
            this.member1396 = ay.g1();
            this.member1390 = ay.g1() === 1;
            this.member1391 = ay.g1();
            this.member1392 = ay.g1() === 1;
            this.member1393 = ay.g1() === 1;
            this.member1394 = ay.g1();
            this.member1395 = ay.g1();
            this.member1397 = ay.g2();
        }
    };
    an.prototype.getID = function () {
        return this.member1360;
    };
    an.prototype.getSize = function () {
        return this.size;
    };
    an.prototype.member1398 = function () {
        return this.member1361;
    };
    an.prototype.member1399 = function () {
        return this.member1362;
    };
    an.prototype.member1400 = function () {
        return this.member1363;
    };
    an.prototype.member1401 = function () {
        return this.member1364;
    };
    an.prototype.member1402 = function () {
        return this.member1365;
    };
    an.prototype.member1403 = function () {
        return this.member1377;
    };
    an.prototype.member1404 = function () {
        return this.member1368;
    };
    an.prototype.member1405 = function () {
        return this.member1369;
    };
    an.prototype.member1406 = function () {
        return this.member1366;
    };
    an.prototype.member1407 = function () {
        return this.member1367;
    };
    an.prototype.member1408 = function () {
        return this.member1384;
    };
    an.prototype.member1409 = function () {
        return this.member1385;
    };
    an.prototype.member1410 = function () {
        return this.member1378;
    };
    an.prototype.member1411 = function () {
        return this.member1370;
    };
    an.prototype.member1412 = function () {
        return this.member1371;
    };
    an.prototype.member1413 = function () {
        return this.member1372;
    };
    an.prototype.member1014 = function () {
        return this.member1373;
    };
    an.prototype.member1015 = function () {
        return this.member1374;
    };
    an.prototype.member1013 = function () {
        return this.member1375;
    };
    an.prototype.member1414 = function () {
        return this.member1376;
    };
    an.prototype.member1415 = function () {
        return this.member1379;
    };
    an.prototype.member1416 = function () {
        return this.member1380;
    };
    an.prototype.member1417 = function () {
        return this.member1338;
    };
    an.prototype.member1418 = function () {
        return this.member1381;
    };
    an.prototype.member1419 = function () {
        return this.member1382;
    };
    an.prototype.member1420 = function () {
        return this.member1383;
    };
    an.prototype.member1421 = function () {
        return this.member1386;
    };
    an.prototype.member1422 = function () {
        return this.member1387;
    };
    an.prototype.member1423 = function () {
        return this.member1388;
    };
    an.prototype.member1424 = function () {
        return this.member1389;
    };
    an.prototype.member1425 = function () {
        return this.member1390;
    };
    an.prototype.member1426 = function () {
        return this.member1391;
    };
    an.prototype.member1427 = function () {
        return this.member1392;
    };
    an.prototype.member1428 = function () {
        return this.member1393;
    };
    an.prototype.member1429 = function () {
        return this.member1394;
    };
    an.prototype.member1430 = function () {
        return this.member1395;
    };
    an.prototype.member1431 = function () {
        return this.member1396;
    };
    an.prototype.member1432 = function () {
        return this.member1397;
    };
    return function (au, at) {
        return new an(au, at);
    };
}();