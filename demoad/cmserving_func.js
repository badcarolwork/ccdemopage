var expanded = false;
var pixel = document.getElementById('pfx_pixel');


var bannerDiv = document.createElement("div");
bannerDiv.setAttribute("id", "pfx_banner");
bannerDiv.setAttribute(
  "style",
  "position:fixed;left:0;z-index:999999;bottom:0;width:100%;height:100%;max-height:260px;display:none;"
);
bannerDiv.innerHTML += `<div id='div-gpt-ad-1626335725009-0' style='min-width: 414px; min-height: 260px;'>
    <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1626335725009-0'); });
    </script>
  </div>`;

window.parent.document.body.append(bannerDiv);

var banner = document.getElementById('pfx_banner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!expanded && !entry.isIntersecting) {
      banner.style.display = "block";
      googletag.cmd.push(function () { googletag.pubads().refresh(); });
      expanded = true;
    }
  });
}, {});


observer.observe(pixel);




