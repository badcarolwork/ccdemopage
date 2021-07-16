
var pixel = document.getElementById('pfx_pixel');
var banner = document.getElementById('pfx_banner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!expanded && !entry.isIntersecting) {
      banner.style.display = "block";
      googletag.cmd.push(function () { googletag.pubads().refresh([adslot1]); });
      expanded = true;
    }
  });
}, {});


observer.observe(pixel);




