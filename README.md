# MMM-QRCode
QRCode module for [MagicMirror²](https://magicmirror.builders/). Show QRCode image of encoded text.

## Screenshot
![](.github/example.png)

## Installation

In your terminal, go to your MagicMirror's Module folder:

````
cd ~/MagicMirror/modules
````

Clone this repository:

````
git clone git@github.com:MarinescuEvghenii/MMM-QRCode.git
````

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

````javascript
	{
		module: 'MMM-QRCode',
		position: 'top_right', // you may choose any location
		config: {
			text: ''
		}
	},
````

## Configuration options

The following property can be configured:

| Option     | Description             | Default value |
| -----------|-------------------------|:-------------:|
| colorDark  | Draw color              | "#fff"        |
| colorLight | Background color        | "#000"        |
| imageSize  | Size of the image in px | 150           |
| showRaw    | Show raw text           | true          |
| text       | The text to be encoded  |               |
