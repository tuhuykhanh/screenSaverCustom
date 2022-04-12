const videotag = document.querySelector('.videotag')
const videparent = document.querySelector('.videparent')
var mousetimeout;
var screensaver_active = false;
var secs = 3;

function show_box() {
  videparent.style.display = 'block'
}
function hide_box() {
  videparent.style.display = 'none'
}

function show_screensaver() {

  show_box()
  screensaver_active = true;
  videotag.play();

}
function stop_screensaver() {

  hide_box();
  screensaver_active = false;
  videotag.pause();
}

document.onclick = e => {
  clearTimeout(mousetimeout);

  if (screensaver_active) {
    stop_screensaver();
  }
  mousetimeout = setTimeout(function () {
    show_screensaver();
  }, 1000 * secs);
}
document.onmousemove = e => {

  clearTimeout(mousetimeout);
  if (screensaver_active) {
    stop_screensaver();
  }
  mousetimeout = setTimeout(function () {
    show_screensaver();
  }, 1000 * secs);
}




