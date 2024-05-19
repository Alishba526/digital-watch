"use strict";
function clock() {
    let days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
    ];
    let months = [
        "JANUARY",
        "FEBUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];
    let hrs = document.getElementById("hours");
    let mins = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let period = document.getElementById("pmam");
    let date = document.getElementById("ddmmyy");
    let day = document.getElementById("dd");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    let ampm = h > 12 ? "PM" : "AM";
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    mins.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = months[mm] + " " + dd + ", " + yy;
}
setInterval(clock, 1000);
