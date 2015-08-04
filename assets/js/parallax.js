
document.onscroll = function () {
  var el = document.getElementById('page-content');
  el.style.backgroundPositionY = '-' + document.body.scrollTop / 1.5 + 'px';
};
