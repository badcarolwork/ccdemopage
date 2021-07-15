
//append banner
// var bannerDiv = document.createElement("div");
// bannerDiv.setAttribute("id", "pfx_banner");
// bannerDiv.setAttribute(
//   "style",
//   "position:fixed;left:0;z-index:999999;bottom:0;width:100%;height:100%;max-height:260px;"
// );
/// gtag js not working
// var bannerJs = document.createElement("script");
// bannerJs.setAttribute("language", "JavaScript1.1")
// bannerJs.src = "https://ad.doubleclick.net/ddm/adj/N558603.3424445PXF_PMP_TW/B25501334.308104211;sz=414x260;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?"
// bannerDiv.innerHTML += `<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
// <div id="gpt-passback">
//   <script>
//     window.googletag = window.googletag || {cmd: []};
//     googletag.cmd.push(function() {
//     googletag.defineSlot('/21669303496/cctest_fs_414260', [414, 260], 'gpt-passback').addService(googletag.pubads());
//     googletag.enableServices();
//     googletag.display('gpt-passback');
//     });
//   </script>
// </div>`;

// bannerDiv.append(tag);

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




