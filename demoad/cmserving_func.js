var expanded = false;
var pixel = document.getElementById('pfx_pixel');
var banner = document.getElementById('');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (!expanded && !entry.isIntersecting) {
			banner.style.display = "block";
			// googletag.cmd.push(function () { googletag.pubads().refresh([adslot1]); });
			expanded = true;
		}
	});
}, {});


observer.observe(pixel);

window.addEventListener('message', e => {
	console.log(e.data);
	if (e.data == "userClose" || e.message === "userClose") {
		alert('Message from iframe just came!');
	}
}, false);

