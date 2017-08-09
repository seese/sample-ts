"use strict";
var Sample;
(function (Sample) {
    function inform(val) {
        console.log("hello " + val);
    }
    Sample.inform = inform;
})(Sample || (Sample = {}));
