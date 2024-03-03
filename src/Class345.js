import { Class295 } from 'Class295.js';
export var Class345 = function () {
    var c = false;
    var a = { create: true };
    var b = [undefined];
    var d = function (s, h) {
        var u = {};
        var v = NULL;
        var o = NULL;
        var e = NULL;
        var y = false;
        var k = false;
        var x;
        var q = 'Wait...';
        u.member3266 = function () {
            return q;
        };
        u.member3589 = undefined;
        var g = function (B, A) {
            if (member55(navigator, 'persistentStorage') !== undefined) {
                member55(navigator, 'persistentStorage').queryUsageAndQuota(B, A);
            } else if (member55(window, 'storageInfo') !== undefined) {
                member55(window, 'storageInfo').queryUsageAndQuota(member55(window, 'storageInfo').PERSISTENT, B, A);
            } else {
                throw new Error('1382 ');
            }
        };
        u.member3587 = function () {
            g(function (B, A) {
                var C = Math.floor(B / (1024 * 1024));
                q = 'Disk:' + C + 'M';
            });
        };
        var j = function () {
            n(o.split('/'), v.root);
        };
        var i = function (A) {
            if (false) {
            }
            v = A;
            j();
        };
        var r = function (A) {
            throw new Error('1383 ' + A.member3700);
        };
        var n = function (C, B) {
            var A = C.shift();
            B.getDirectory(A, a, function (D) {
                if (false) {
                }
                if (C.length > 0) {
                    n(C, D);
                } else {
                    e = D;
                    k = true;
                    if (u.member3589 !== undefined) {
                        u.member3589();
                    }
                }
            }, function (D) {
                console.log('FileSystemFileAPI: Error creating directory.');
                console.log(D);
            });
        };
        if (s === undefined || h === undefined) {
            throw new Error('1384 ');
        }
        o = s;
        x = h;
        if (false) {
        }
        var t = function (D, B) {
            if (false) {
            }
            if (B >= x) {
                member55(window, 'requestFileSystem')(window.PERSISTENT, B, i, r);
            } else {
                var A = function (E) {
                    if (false) {
                    }
                    member55(window, 'requestFileSystem')(window.PERSISTENT, E, i, r);
                };
                var C = function (E) {
                    if (false) {
                    }
                };
                if (member55(navigator, 'persistentStorage') !== undefined) {
                    member55(navigator, 'persistentStorage').requestQuota(x, A, C);
                } else {
                    member55(window, 'storageInfo').requestQuota(member55(window, 'storageInfo').PERSISTENT, x, A, C);
                }
            }
        };
        var z = function (A) {
            if (false) {
            }
        };
        g(t, z);
        u.readyanim = function () {
            return k;
        };
        var m = function (B) {
            if (Class295.isBlobSupported()) {
                var A = member55(window, 'Blob');
                b[0] = new Uint8Array(B);
                return new A(b, { type: 'application/octet-binary' });
            } else if (Class295.isBlobBuilderSupported()) {
                var D = member55(window, 'BlobBuilder');
                var C = D();
                C.append(B);
                return C.getBlob('application/octet-binary');
            }
            throw new Error('1385 ');
        };
        u.writeFile = function (B, F, C, H, G) {
            if (!k) {
                throw new Error('1386 ');
            }
            var A = 'Write error';
            var I = function (J) {
                if (G !== undefined) {
                    G(B, false ? {} : '');
                }
            };
            var D = function (J) {
                J.onwriteend = function (L) {
                    if (H !== undefined) {
                        H(B);
                    }
                };
                A = 'Write error';
                J.onerror = I;
                var K = m(F);
                if (C) {
                    J.seek(J.length);
                }
                J.write(K, 'application/octet-stream');
            };
            var E = function (J) {
                if (C) {
                    D(J);
                } else {
                    J.onwriteend = function (K) {
                        D(J);
                    };
                    A = 'Truncate error';
                    J.onerror = I;
                    J.truncate(0);
                }
            };
            A = 'File not found';
            e.getFile(B, a, function (J) {
                A = 'File writer creation error';
                J.createWriter(E, I);
            }, I);
        };
        u.readFile = function (A, F, D) {
            if (!k) {
                throw new Error('1387 ');
            }
            var C;
            var B = function (G) {
                if (D !== undefined) {
                    D(A, false ? {} : '');
                }
            };
            var E = function (H) {
                var G = new FileReader();
                G.onloadend = function (I) {
                    if (F !== undefined) {
                        F(A, I.target.result);
                    }
                };
                G.readAsArrayBuffer(H);
            };
            C = 'File not found';
            e.getFile(A, {}, function (G) {
                C = 'Read failed';
                G.file(E, B);
            }, B);
        };
        u.deleteFile = function (A, F, E) {
            if (!k) {
                throw new Error('1388 ');
            }
            var C;
            var B = function (G) {
                if (E !== undefined) {
                    E(A, false ? {} : '');
                }
            };
            var D = function (G) {
                if (F !== undefined) {
                    F(A);
                }
            };
            C = 'Error deleting file';
            e.getFile(A, {}, function (G) {
                C = 'Delete failed';
                G.remove(D, B);
            }, B);
        };
        u.member301 = function (B, A) {
            if (!k) {
                throw new Error('1389 ');
            }
            k = false;
            e.removeRecursively(function () {
                e = NULL;
                j();
                if (B !== undefined) {
                    B();
                }
            }, A);
        };
        u.member3586 = function (G, F) {
            if (!k) {
                throw new Error('1390 ');
            }
            var E = e.createReader();
            var D = {};
            var C = 0;
            var B = false;
            var A = function (I) {
                if (I.length === 0) {
                    B = true;
                    if (C === 0) {
                        G(D);
                    }
                    return;
                }
                for (var H = 0; H < I.length; H++) {
                    var J = { name: I[H].name };
                    D[I[H].name] = J;
                    (function (K) {
                        I[H].getMetadata(function (L) {
                            K.member3810 = L.member3810;
                            K.size = L.size;
                            C--;
                            if (B && C === 0) {
                                G(D);
                                return;
                            }
                        }, function () {
                            K.member3810 = new Date();
                            K.size = 0;
                            C--;
                            if (B && C === 0) {
                                G(D);
                                return;
                            }
                        });
                    }(J));
                    C++;
                }
                E.readEntries(A, F);
            };
            E.readEntries(A, F);
        };
        return u;
    };
    window.requestFileSystem = member55(window, 'requestFileSystem');
    return d;
}();