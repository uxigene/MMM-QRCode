# MMM-QRCode

QRCode module for [MagicMirror²](https://magicmirror.builders/). Show QRCode image of encoded text.

## Screenshot

![Screenshot](.github/example.png)

## Installation

Open up your terminal and simply paste the following code

```sh
cd ~/MagicMirror/modules
git clone https://github.com/uxigene/MMM-QRCode
cd MMM-QRCode
npm install
```

## Update

Go to the module’s folder inside your MagicMirror's module folder and pull the latest version:

```bash
cd ~/MagicMirror/modules/MMM-QRCode
git pull
npm install
```

## Configuration

To use this module, add the basic example to the modules array in the `config/config.js` file:

### Basic example

```javascript
    {
        module: "MMM-QRCode",
        position: "bottom_right",
        config: {
            text: "Your Message", // enter your message ur URL here.
            showRaw: true,        // true = to show the text, false = to hide the text.
            imageSize: 150,       // size is in px (both the height and with are equal).
            colorDark: "#fff",    // set qrcode px color.
            colorLight: "#000"    // set background color (by default color is BLACK).
        }
    },
```

### Example with URL and header

```javascript
    {
        module: "MMM-QRCode",
        position: "bottom_right",
        header: "Scan me",
        config: {
            text: "https://www.youtube.com/watch?v=xmmBWdNWvY4",
            showRaw: false,
            imageSize: 250,
            colorDark: "#ADFF2F",
            colorLight: "#4B0082"
        }
    },
```

### Configuration options

The following property can be configured:

| Option       | Description                    | Default value   |
| -------------|--------------------------------|:---------------:|
| `colorDark`  | Draw color                     | `"#fff"`        |
| `colorLight` | Background color               | `"#000"`        |
| `imageSize`  | Size of the image in px        | `150`           |
| `showRaw`    | Show raw text                  | `true`          |
| `text`       | The text or URL to be encoded  |                 |
