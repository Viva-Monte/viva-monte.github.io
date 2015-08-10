
document.onscroll = function () {
  var el = document.getElementById('page-content');
  el.style.backgroundPositionY = '-' + document.body.scrollTop / 2.5 + 'px';
};
