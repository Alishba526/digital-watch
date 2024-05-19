function clock() {
  let days :string[]= [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  let months: string[] = [
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
  let hrs: any = document.getElementById("hours");
  let mins: any = document.getElementById("minutes");
  let sec: any = document.getElementById("seconds");
  let period: any = document.getElementById("pmam");
  let date: any = document.getElementById("ddmmyy");
  let day: any = document.getElementById("dd");

  let time = new Date();

  let h: number | string = time.getHours();
  let m: number | string = time.getMinutes();
  let s: number | string = time.getSeconds();
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
  let ampm = h > 12?"PM":"AM";
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
