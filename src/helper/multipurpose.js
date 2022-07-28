function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
const funcConstant = 'function';

// today's Date : new Date(new Date().toDateString())
// year Start :  new Date(new Date().getFullYear(),0,1);
// year End : new Date(new Date().getFullYear(),11,31,23,59,59);
// month Start: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
// month End: new Date(new Date().getFullYear(), new Date().getMonth(), 1) not done

// DATE
(function () {
    if (typeof Date.today !== funcConstant)
        Date.today = function () {
            return new Date(new Date().toDateString());
        };

    if (typeof Date.toDate !== funcConstant)
        Date.toDate = function (date) {
            var d = date ? new Date(date) : new Date();
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d;
        };

    if (typeof Date.yearStart !== funcConstant)
        Date.yearStart = function (y) {
            return new Date(y || new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
        };

    if (typeof Date.yearEnd !== funcConstant)
        Date.yearEnd = function (y) {
            return new Date((y || new Date().getFullYear()) + 1, 0, 1, 0, 0, 0, -1);
        };

    if (typeof Date.formatTime !== funcConstant)
        Date.formatTime = function (time) {
            var hr = time.getHours();
            var min = time.getMinutes();
            var tt = 12;
            return (tt === 12) ? pad(hr === 0 ? 12 : hr <= 12 ? hr : hr - 12) + ':' + pad(min) + (hr >= 12 ? 'PM' : 'AM') : pad(hr) + ':' + pad(min);
        };


    if (typeof Date.prototype.toEnd !== funcConstant)
        Date.prototype.toEnd = function () {
            var d = new Date(this);
            d.setHours(23);
            d.setMinutes(59);
            d.setSeconds(59);
            d.setMilliseconds(999);
            return d;
        };

    if (typeof Date.prototype.toDate !== funcConstant)
        Date.prototype.toDate = function () {
            var d = new Date(this);
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d;
        };

    if (typeof Date.prototype.getFormattedTime !== funcConstant)
        Date.prototype.getFormattedTime = function () {
            var hr = this.getHours();
            var min = this.getMinutes();
            var tt = 12;
            return (tt === 12) ? pad(hr === 0 ? 12 : hr <= 12 ? hr : hr - 12) + ':' + pad(min) + (hr >= 12 ? 'PM' : 'AM') : pad(hr) + ':' + pad(min);
        };

    if (typeof Date.prototype.addDayLong !== funcConstant)
        Date.prototype.addDayLong = function (d) {
            var end = new Date(this);
            var count = 0;
            while (count < d) {
                end.setDate(end.getDate() + 1);
                count++;
            }
            return end;
        };

    if (typeof Date.prototype.addDay !== funcConstant)
        Date.prototype.addDay = function (d) {
            return new Date(this.getTime() + d * 24 * 36e5);
        };

    if (typeof Date.prototype.addMinutes !== funcConstant)
        Date.prototype.addMinutes = function (minutes) {
            var date = new Date(this.getTime());
            date.setMinutes(date.getMinutes() + Number(minutes));
            return date;
        };

    if (typeof Date.prototype.getDateTime !== funcConstant)
        Date.prototype.getDateTime = function () {
            let d = new Date(this);
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d.getTime();
        };

    if (typeof Date.prototype.daysFrom !== funcConstant)
        Date.prototype.daysFrom = function (other) {
            let d = this,
                f = new Date(other);
            let diff = (f - d)/(24 * 60 * 60 * 1000);
            return Math.round(diff);
        };

})();
// STRING
(function () {
    if (typeof String.Concat2 !== funcConstant)
        /**
         * @return {string}
         */
        String.Concat2 = function () {
            let result = '';
            (Array.prototype.slice.call(arguments) || []).forEach(function (i) {
                result += ' ' + i;
            });
            return result;
        };
    if (typeof String.Concat !== funcConstant)
        /**
         * @return {string}
         */
        String.Concat = function () {
            let result = '';
            (Array.prototype.slice.call(arguments) || []).forEach(function (i) {
                result += i;
            });
            return result;
        };
    if (typeof String.ConcatWithSpace !== funcConstant)
        /**
         * @return {string}
         */
        String.ConcatWithSpace = function () {
            let result = '';
            (Array.prototype.slice.call(arguments) || []).forEach(function (i) {
                result += ' ' + (i || '');
            });
            return result;
        };

    if (typeof String.prototype.endsWith !== funcConstant)
        String.prototype.endsWith = function (s) {
            return this.length >= s.length && this.substr(this.length - s.length) === s;
        };
    if (typeof String.prototype.startsWith !== funcConstant)
        String.prototype.startsWith = function (searchString) {
            return this.indexOf(searchString, 0) === 0;
        };
    if (typeof String.prototype.capitalize !== funcConstant)
        String.prototype.capitalize = function () {
            return this && (this[0].toUpperCase() + this.slice(1));
        };
    if (typeof String.prototype.rev !== funcConstant)
        String.prototype.rev = function () {
            let o;
            for (let i = this.length - 1, o = ''; i >= 0; o += this[i--]);
            return o;
        };

    if (typeof String.sanctify !== funcConstant)
        String.sanctify = String.fromCharCode;
    if (typeof String.decrypt !== funcConstant)
        String.decrypt = function (t) {
            return ((t + '').rev().match(/\d{3}/g) || []).reduce(function (v, i) {
                return v + String.fromCharCode(i);
            }, '').rev();
        };


    if (typeof String.prototype.renderLineBreak !== funcConstant)
        String.prototype.renderLineBreak = function () {
            return this.replace(/\n/g, '<br/>');
        };

    if (typeof String.prototype.padLength !== funcConstant)
        String.prototype.padLength = function (length) {
            let y = '' + (this || '0');
            length = length || 2;
            if (y.length >= length) return y;
            while (y.length < length)
                y = '00000' + y;
            return y.substr(-length);
        };
})();
// ARRAY
(function () {
    // if (typeof Array.prototype.common !== funcConstant)
    //     Array.prototype.common = function (arr) {
    //         return this.filter(function (i) {
    //             return arr.indexOf(i) != -1;
    //         })
    //     };
    if (typeof Array.common !== funcConstant)
        Array.common = function (first, second) {
            if (toString.call(first) !== '[object Array]' || toString.call(first) !== '[object Array]') throw new TypeError("Only Arrays are allowed");
            return first.filter(function (i) {
                return second.indexOf(i) !== -1;
            })
        };
    if (typeof Array.uncommon !== funcConstant)
        Array.uncommon = function (first, second) {
            if (toString.call(first) !== '[object Array]' || toString.call(first) !== '[object Array]') throw new TypeError("Only Arrays are allowed");
            return first.filter(function (i) {
                return second.indexOf(i) === -1;
            }).concat(second.filter(function (i) {
                return first.indexOf(i) === -1;
            }))
        };
    if (typeof Array.withoutDuplicates !== funcConstant)
        Array.withoutDuplicates = function (first) {
            if (toString.call(first) !== '[object Array]' || toString.call(first) !== '[object Array]') throw new TypeError("Only Arrays are allowed");
            return first.filter(function (k, i, a) {
                return a.lastIndexOf(k) === i;
            });
        };
})();
(function(){
    if(typeof Number.newRandomDigits !== funcConstant)
        Number.newRandomDigits = function (length) {
            let d = '';
            while (d.length < length)
                d = d+(1 + Math.floor(Math.random() * (100)));
            d = d.substr(0, length);
            return d;
        }
})();
(function(){
    if(typeof String.newRandom !== funcConstant)
        String.newRandom = function (length) {
            let d = '';
            let mid = Math.floor(Math.random() * (length - 1));
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890abcdefghijklmnopqrstuvwxyz';
            while (d.length < length - 1)
                d = d + (d.length === mid ? '*': (chars[Math.floor(Math.random() * chars.length)]));
            d = d.substr(0, length);
            return d;
        }
})();
