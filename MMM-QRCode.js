/* global Module */

/* MagicMirror²
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
		return [this.file("node_modules/qrcode/build/qrcode.js")];
	},


	start: function() {
		this.config = Object.assign({}, this.defaults, this.config);
		Log.log("Starting module: " + this.name);
	},

	getDom: function() {
		const wrapperEl = document.createElement("div");
		wrapperEl.classList.add('qrcode');

		const qrcodeEl  = document.createElement("canvas");

		const options = {
			width: this.config.imageSize,
			color: {
				dark: this.config.colorDark,
				light: this.config.colorLight
			},
			errorCorrectionLevel: 'H'
		};

		QRCode.toCanvas(
			qrcodeEl,
			this.config.text,
			options, 
			function (error) {
				if (error) console.error(error)
					console.log('success!');
		})

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
