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

    var headJsFunc = document.createElement("script");

    var headJstext = `window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/21669303496/cctest_fs_414260', [1, 1], 'div-gpt-ad-1628655025326-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });`

    headJsFunc.append(headJstext)
    window.parent.document.head.append(headJsFunc);

    var bannerDiv = document.createElement("div");
    bannerDiv.setAttribute("id", "pfx_banner");
    bannerDiv.setAttribute("style", "position:fixed;left:0;z-index:999999;bottom:0;width:100%;height:100%;max-height:260px;display:none;");
    bannerDiv.innerHTML += `<div id='div-gpt-ad-1628655025326-0'>
      <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1628655025326-0'); });
      </script>
    </div>`;
    window.parent.document.body.append(bannerDiv);
  }

  addPixel();
})();
