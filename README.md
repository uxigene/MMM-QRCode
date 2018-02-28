# MMM-QRCode
QRCode module for MagicMirror². Show QRCode image of encoded text.

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

Configure the module in your `config.js` file.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-QRCode',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following property can be configured:

| Option     | Description             | Default value |
| -----------|-------------------------|:-------------:|
| colorDark  | Draw color              | "#fff"        |
| colorLight | Background color        | "#000"        |
| imageSize  | Size of the image in px | 150           |
| showRaw    | Show raw text       | true          |
