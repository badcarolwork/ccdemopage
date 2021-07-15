document.body.onload = addPixel;

function addPixel() {
  const pixelDiv = document.createElement("div");
  pixelDiv.setAttribute("id", "pfx_pixel");
  pixelDiv.setAttribute(
    "style",
    "background-color:red;width:1px;height:1px;position:absolute;top:0;left:0;"
  );

  var script = document.createElement("script");
  script.src = "https://s0.2mdn.net/creatives/assets/4201742/cmserving_func.js";
  window.parent.document.body.append(pixelDiv);

  window.parent.document.body.append(script);

  //append banner
  var bannerDiv = document.createElement("div");
  bannerDiv.setAttribute("id", "pfx_banner");
  bannerDiv.setAttribute(
    "style",
    "position:fixed;left:0;z-index:999999;bottom:0;width:100%;height:100%;max-height:260px;display:none;"
  );
  var headJs = document.createElement("script");
  headJs.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  var headJsFunc = document.createElement("script");

  var headJstext = `
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
      googletag.defineOutOfPageSlot('/21669303496/cctest_fs_414260', 'div-gpt-ad-1626330545517-0').addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });`

  headJsFunc.append(headJstext)
  window.parent.document.head.append(headJs);
  window.parent.document.head.append(headJsFunc);

  bannerDiv.innerHTML = `
  <div id='div-gpt-ad-1626330545517-0' style="width:100%;height:260px;>
    <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1626330545517-0'); });
    </script>
  </div>`;

  window.parent.document.body.append(bannerDiv);
  // bannerDiv.append(bannerDivJsContent)

}
