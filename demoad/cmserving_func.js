var pixel = document.getElementById('pfx_pixel');
var banner = document.getElementById('pfx_banner');
var expanded = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!expanded && !entry.isIntersecting) {
      // setTimeout(function () {
      banner.style.display = "block";
      googletag.cmd.push(function () { googletag.pubads().refresh(); });
      // }, 500);
      // window.document.body.append(bannerDiv);
      expanded = true;
    }
  });
}, {});


observer.observe(pixel);




