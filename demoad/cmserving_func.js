let expanded = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!expanded && !entry.isIntersecting) {
      const banner = document.getElementById('pfx_banner');
      banner.style.display = "block";
      googletag.cmd.push(function () { googletag.pubads().refresh(); });
      expanded = true;
    }
  });
}, {});

const pixel = document.getElementById('pfx_pixel');
observer.observe(pixel);




