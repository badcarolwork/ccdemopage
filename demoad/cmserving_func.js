var expanded = false;
var pixel = document.getElementById('pfx_pixel');
var banner = document.getElementById('pfx_banner');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!expanded && !entry.isIntersecting) {
      banner.style.display = "block";
      googletag.cmd.push(function () { googletag.pubads().refresh([adslot1]); });
      expanded = true;
      closeMsg();
    }
  });
}, {});


observer.observe(pixel);



function closeMsg(){
  var eventMethod = window.addEventListener
			? "addEventListener"
			: "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod === "attachEvent"
		? "onmessage"
		: "message";

	eventer(messageEvent, function (e) {		
		// if (e.origin !== 'http://the-trusted-iframe-origin.com') return;		
		if (e.data === "userClose" || e.message === "userClose") 
			alert('Message from iframe just came!');		
		  console.log(e);
	});
}
