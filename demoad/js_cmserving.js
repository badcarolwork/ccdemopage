var adDone = false;

function addPixel() {
  var pixelDiv = document.createElement("div");
  pixelDiv.setAttribute("id", "pfx_pixel");
  pixelDiv.setAttribute(
    "style",
    "background-color:red;width:1px;height:1px;position:absolute;top:0;left:0;"
  );

  var script = document.createElement("script");
  script.src = "https://badcarolwork.github.io/ccdemopage/demoad/cmserving_func.js";
  window.parent.document.body.append(script);
  window.parent.document.body.append(pixelDiv);


  var headJs = document.createElement("script");
  headJs.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  var headJsFunc = document.createElement("script");

  var headJstext = `
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/21669303496/cctest_fs_414260', [414, 260], 'div-gpt-ad-1626335725009-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });`

  headJsFunc.append(headJstext)
  window.parent.document.head.append(headJs);
  window.parent.document.head.append(headJsFunc);

}

window.addEventListener("load", () => { addPixel() })