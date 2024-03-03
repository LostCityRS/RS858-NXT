import { Class335 } from 'Class335.js';
export var Class336 = function () {
    var b = false;
    var a = 'CREATE TABLE IF NOT EXISTS cache ( filename text PRIMARY KEY, data text, updateTime integer );';
    var e = 'SELECT data FROM cache WHERE filename=?;';
    var g = 'INSERT OR REPLACE INTO cache (filename, data, updateTime) VALUES (?, ?, ?);';
    var i = 'DELETE FROM cache WHERE filename=?;';
    var h = 'DELETE FROM cache;';
    var c = 'SELECT * FROM cache;';
    var d = function (t, j) {
        var o = {};
        var s;
        var k;
        var u = member47;
        var n = '1.0';
        var r = 'RuneScape Cache';
        var v = false;
        o.member3590 = function () {
            return v;
        };
        var m = 'WebSQL';
        o.member3266 = function () {
            return m;
        };
        o.member3589 = undefined;
        var q = function (y, x) {
            if (member55(navigator, 'temporaryStorage') !== undefined) {
                member55(navigator, 'temporaryStorage').queryUsageAndQuota(y, x);
            } else if (member55(window, 'storageInfo') !== undefined) {
                member55(window, 'storageInfo').queryUsageAndQuota(member55(window, 'storageInfo').TEMPORARY, y, x);
            }
        };
        o.member3587 = function () {
            q(function (y, x) {
                var z = Math.floor(y / (1024 * 1024));
                m = 'Disk:' + z + 'M';
            });
        };
        if (t === undefined || j === undefined) {
            throw new Error('1415 ');
        }
        s = t;
        k = j;
        if (false) {
        }
        u = openDatabase(s, '', r, 4 * 1024 * 1024);
        if (u.version !== n) {
            u.changeVersion(u.version, n, function (x) {
                x.executeSql(a);
            }, function (x) {
                throw new Error('1416 ' + x.member3492);
            }, function () {
                v = true;
                if (o.member3589 !== undefined) {
                    o.member3589();
                }
            });
        } else {
            v = true;
            if (o.member3589 !== undefined) {
                o.member3589();
            }
        }
        o.writeFile = function (z, D, x, E, C) {
            if (!v) {
                throw new Error('1417 ');
            }
            var y = function () {
                if (E !== undefined) {
                    E(z);
                }
            };
            var B = function (F) {
                if (C !== undefined) {
                    C(z, false ? {} : '');
                }
            };
            var A = function (G) {
                var F = Class335.member3809(G);
                u.transaction(function (H) {
                    H.executeSql(g, [
                        z,
                        F,
                        Date.now()
                    ], y, function (I, J) {
                        B(J);
                    });
                });
            };
            if (x) {
                o.readFile(z, function (F, I) {
                    var G;
                    if (I === undefined || I === null || I.byteLength === 0) {
                        G = D;
                    } else {
                        var H = new Uint8Array(I.byteLength + D.byteLength);
                        H.set(new Uint8Array(I));
                        H.set(new Uint8Array(D), I.byteLength);
                        G = H.buffer;
                    }
                    A(G);
                }, function (F, G) {
                    A(D);
                });
            } else {
                A(D);
            }
        };
        o.readFile = function (x, B, A) {
            if (!v) {
                throw new Error('1418 ');
            }
            var z;
            var y = function (C) {
                if (A !== undefined) {
                    A(x, false ? {} : '');
                }
            };
            u.readTransaction(function (C) {
                C.executeSql(e, [x], function (E, D) {
                    if (D.rows.length < 1) {
                        if (A !== undefined) {
                            A(x, false ? {} : '');
                        }
                        return;
                    }
                    if (B !== undefined) {
                        var F = Class335.member3808(D.rows.item(0).data);
                        B(x, F);
                    }
                }, function (D, E) {
                    z = 'Error reading from database';
                    y(E);
                });
            });
        };
        o.deleteFile = function (x, z, y) {
            if (!v) {
                throw new Error('1419 ');
            }
            u.transaction(function (A) {
                A.executeSql(i, [x], function () {
                    if (z !== undefined) {
                        z(x);
                    }
                }, function (B, C) {
                    if (y !== undefined) {
                        y(x, false ? {} : '');
                    }
                });
            });
        };
        o.member301 = function (y, x) {
            if (!v) {
                throw new Error('1420 ');
            }
            v = false;
            u.transaction(function (z) {
                z.executeSql(h, [], function () {
                    v = true;
                    if (o.member3589 !== undefined) {
                        o.member3589();
                    }
                    if (y !== undefined) {
                        y();
                    }
                }, x);
            });
        };
        o.member3586 = function (z, y) {
            if (!v) {
                throw new Error('1421 ');
            }
            var x = {};
            u.readTransaction(function (A) {
                A.executeSql(c, [], function (E, C) {
                    if (C.rows.length === 0) {
                        z(x);
                        return;
                    }
                    for (var B = 0; B < C.rows.length; B++) {
                        var D = C.rows.item(B).filename;
                        x[D] = {
                            name: D,
                            member3810: C.rows.item(B).updateTime,
                            size: C.rows.item(B).data.length * 2
                        };
                    }
                    z(x);
                }, function (B, C) {
                    if (y !== undefined) {
                        y(filename, false ? {} : '');
                    }
                });
            });
        };
        return o;
    };
    return d;
}();