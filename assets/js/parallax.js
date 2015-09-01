
document.onscroll = function () {
  console.log("blahrg")
  var el = document.getElementById('page-content');
  el.style.backgroundPosition = '0 -' + ( document.body.scrollTop == 0 ? document.documentElement.scrollTop: document.body.scrollTop )  / 2.5 + 'px';
};
