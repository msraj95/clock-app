
setInterval(showTime, 1000)

function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  // Show seconds
  let seconds = document.querySelector('.seconds');
  seconds.textContent = s;

  // Show minutes
  let mintues = document.querySelector('.minutes');
  mintues.textContent = m;

  // Show hours
  let hours = document.querySelector('.hours');
  hours.textContent = h;
}
