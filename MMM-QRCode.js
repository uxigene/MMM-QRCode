/* global Module */

/* Magic Mirror
 * Module: QRCode
 *
 * By Evghenii Marinescu https://github.com/uxigene/
 * MIT Licensed.
 */

'use strict';

Module.register("MMM-QRCode", {

	defaults: {
		text       : 'https://github.com/uxigene/MMM-QRCode',
		colorDark  : "#fff",
		colorLight : "#000",
		imageSize  : 150,
		showRaw    : true
	},

	getStyles: function() {
		return ["MMM-QRCode.css"];
	},

	getScripts: function() {
		return ["qrcode.min.js"];
	},


	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
		Log.log("Starting module: " + this.name);
	},

	getDom: function() {
		const wrapperEl = document.createElement("div");
		wrapperEl.classList.add('qrcode');

		const qrcodeEl  = document.createElement("div");
		new QRCode(qrcodeEl, {
			text: this.config.text,
			width: this.config.imageSize,
			height: this.config.imageSize,
			colorDark : this.config.colorDark,
			colorLight : this.config.colorLight,
			correctLevel : QRCode.CorrectLevel.H
		});

		const imageEl  = document.createElement("div");
		imageEl.classList.add('qrcode__image');
		imageEl.appendChild(qrcodeEl);

		wrapperEl.appendChild(imageEl);

		if(this.config.showRaw) {
			const textEl = document.createElement("div");
			textEl.classList.add('qrcode__text');
			textEl.innerHTML = this.config.text;
			wrapperEl.appendChild(textEl);
		}

		return wrapperEl;
	}
});
