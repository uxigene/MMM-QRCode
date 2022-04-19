# MMM-QRCode
QRCode module for [MagicMirror²](https://magicmirror.builders/). Show QRCode image of encoded text.

## Screenshot
![](.github/example.png)

## Installation
Open up your terminal and simply paste the following code
```sh
cd ~/MagicMirror/modules
git clone https://github.com/MarinescuEvghenii/MMM-QRCode.git
cd MMM-QRCode && npm i
```
## Using the module

To configure the module simply use your favourite editor `vim` or `nano` and simply paste the following code.
```javascript
{
	module: 'MMM-QRCode',
	position: 'bottom_right', // change the position according to your need best position is either bottom right or left.
	config: {
		text: 'Your Message', // enter your message here.
		showRaw: true, // true = to show the text, false = to hide the text.
		imageSize: 150, // size is in px (both the height and with are equal).
		colorDark: "#fff" // set qrcode px color.
		colorLight: "#000" // set backgroud background color(by default color is BLACK).
	}
},
```

## Configuration options

The following property can be configured:

| Option     | Description             | Default value |
| -----------|-------------------------|:-------------:|
| colorDark  | Draw color              | "#fff"        |
| colorLight | Background color        | "#000"        |
| imageSize  | Size of the image in px | 150           |
| showRaw    | Show raw text           | true          |
| text       | The text to be encoded  |               |
