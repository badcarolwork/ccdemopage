(function () {

  function addPixel() {
    var pixelDiv = document.createElement("div");
    pixelDiv.setAttribute("id", "pfx_pixel");
    pixelDiv.setAttribute(
      "style",
      "background-color:red;width:1px;height:1px;position:absolute;top:0;left:0;"
    );

    var script = document.createElement("script");
    script.src = "https://badcarolwork.github.io/ccdemopage/demoad/cmserving_func.js";
    window.parent.document.body.append(pixelDiv);

    window.parent.document.body.append(script);

    //append banner

    var headJs = document.createElement("script");
    headJs.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    var headJsFunc = document.createElement("script");

    var headJstext = `window.googletag = window.googletag || {cmd: []};
    var adslot1;
    googletag.cmd.push(function() {
    adslot1 = googletag.defineSlot('/21669303496/cctest_fs_414260', [414, 260], 'div-gpt-ad-1626672521294-0').defineSizeMapping(mapping).setTargeting('test', 'refresh').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });`

    // var headJstext = `window.googletag = window.googletag || {cmd: []};
    //   var adslot1;
    //   googletag.cmd.push(function() {
    //   var mapping = googletag.sizeMapping().addSize([414, 736], [414, 260]).addSize([375, 667], [375, 236]).build();
    //   adslot1 = googletag.defineSlot('/21669303496/cctest_fs_414260', [414, 260], 'div-gpt-ad-1626672521294-0').defineSizeMapping(mapping).setTargeting('test', 'refresh').addService(googletag.pubads());
    //   googletag.pubads().enableSingleRequest();
    //   googletag.enableServices();
    // });`

    headJsFunc.append(headJstext)
    window.parent.document.head.append(headJs);
    window.parent.document.head.append(headJsFunc);

    var bannerDiv = document.createElement("div");
    bannerDiv.setAttribute("id", "pfx_banner");
    bannerDiv.setAttribute("style", "position:fixed;left:0;z-index:999999;bottom:0;width:100%;height:100%;max-height:260px;display:none;");
    bannerDiv.innerHTML += `<div id='div-gpt-ad-1626672521294-0' style='min-width: 320px; min-height: 200px;width:100%;height:auto;'>
    <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1626672521294-0'); });
      document.getElementById("[id^='google_ads_iframe_/21669303496/']).setAttribute("style","width:100%;min-height:200px;height:auto;");
    </script>
  </div>`;
    window.parent.document.body.append(bannerDiv);
  }

  addPixel();
})();
