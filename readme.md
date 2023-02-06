# StoriesOnBoard Extensions

## Featureset

- Add to "Copy Permalink" button to release view card sidebar

## How to install add-on
### Firefox
1. https://addons.mozilla.org/en-US/developers/addon/e93ffe38ac9d4b3ba0cf

### Chrome
1. Clone this repo
1. Go to [chrome://extensions/](chrome://extensions/)
1. Enable developer mode
1. Click "Load unpacked"
1. Select the /src directory of this repo
1. Done!

# How to compile

```bash
cd src/
zip -r -FS ../storiesonboard_extensions.zip * --exclude '*.git*'
# rename zip to new version
```

## References
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
