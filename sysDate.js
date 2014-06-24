/**
 * get current time form the servers
 * @example
 *     var time=new sysDate()
 *     time.done(function(timeStamp){
 *         console.log(timeStamp);
 *     })
 */
(function(root, factory) {
    'use strict';
    var sysDate = function() {
        return sysDate.init.apply(sysDate, arguments);
    };
    factory(sysDate);

    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function( /*require, exports*/ ) {
            return sysDate;
        });
    } else {
        root.sysDate = sysDate;
    }
})(this, function(exp) {
    'use strict';

    exp.config = {
        url: '/'
    };

    exp.init = function() {
        //the first arouments can be:
        //{url:'/xxx'}
        var arg = arguments[0];
        if (typeof(arg) == 'object') {
            for (var i in arg) {
                exp.config[i] = arg[i];
            }
        }
        exp.get();
        return exp;
    };

    exp.get = function() {
        //use xmlhttp to get data form the server
        //save to config.lastDate
        var xmlhttp;

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                var sysD = xmlhttp.getResponseHeader('Date');
                sysD = new Date(sysD);
                sysD = Date.parse(sysD);
                if (exp.doneFn) {
                    exp.doneFn(sysD);
                }
                exp.config.lastDate = sysD;
            }
        };

        exp.done = function(fn) {
            if (exp.config.lastDate) {
                if (fn) fn(exp.config.lastDate);
            } else {
                exp.doneFn = fn;
            }
        };

        xmlhttp.open('GET', exp.config.url, true);
        xmlhttp.send();
    };
});