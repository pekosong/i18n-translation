<h1 align="center">
  <br>
  i18n-translation
  <br>
</h1>

<h4 align="center">Auto translate i18n JSON file(s) to desired language(s).</h4>

<p align="center">
  <a href="#description">Description</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#demo">Demo</a> •
  <a href="#translate-providers">Translate Providers</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## Description

i18n-translation helps you translate your JSON internationalization files. You need to pick one of the translation API providers that are supported, pass the subscription key, language to which you want to translate, path to the file or directory, and you are good to go.

### How It Works?

- If there is no translation for the file you provided, the complete file will be translated, and the new file will be created with the same structure as the original file, keeping the keys in original language, and translating only values.
- You can pass a file with the nested JSON objects, and everything will be translated as you expect.
- The newly created file will be named [to].json. (e.g. sr_latn.json)
- If the translation for the file already exists, the tool will only translate newly added lines, or delete the one that are no longer in the original file, keeping the structure same as the original file.
- Don't worry, tool will call an API only for the newly created lines, already translated one will be skipped.
- Translate APIs are not ideal, and that's why you will need from time to time to override some translations manually, when you manually translate some value, the tool will keep that value, and won't try to translate it again.
- If you pass a directory, the tool will recursively find all files named [from].json (e.g. en.json), and the translations will be saved in the same directory as the original file(s). All the described above will be still applicable.
- Words that are wrapped in `{{}}`, `{}`, `<>`, `</>` won't be translated. e.g. `{{skip}} {skip} <strong> </strong> <br />`

## Installation

You can install package globally on your machine:

```bash
$ npm i -g i18n-translation
```

Or save it as dev dependency in your project:

```bash
$ npm i -D i18n-translation
```

## Usage

```bash
$ i18n-translation
```

### Options

| Key           | Alias | Description                                                            | Default |
| ------------- | ----- | ---------------------------------------------------------------------- | ------- |
| --help        | /     | All available options.                                                 | /       |
| --version     | /     | Current version.                                                       | /       |
| --apiProvider | -a    | API Provider.                                                          | naver   |
| --filePath    | -p    | Path to a single JSON file.                                            | ko.json |
| --outputPath  | -d    | Path to a directory in which you will save                             | .       |
| --from        | -f    | From which language you want to translate.                             | en      |
| --to          | -t    | To which languages you want to translate. separate by comma (ex:en,es) | /       |
| --override    | -r    | Override all created i18n JSON files.                                  | false   |

## Translate Providers

| Provider                                                         | CLI usage       |
| ---------------------------------------------------------------- | --------------- |
| [Google Translate Official](https://cloud.google.com/translate/) | google-official |
| [Naver](https://developers.naver.com/docs/papago)                | naver-papago    |

### Obtaining keys

- Google
  - Goto https://console.cloud.google.com/ and create a new project.
  - In the search bar find “Cloud Translation API” and enable it.
  - Click on credentials -> Create credentials -> API key.
  - Copy the key and use it.
- Naver
  - Follow the instructions [here](https://developers.naver.com/docs/papago)

### Adding Provider

You don't like supported API providers? You can easily add yours. Go to src/translate/providers, create class for your provider, extend 'Translate' class, and implement 'callTranslateAPI' method. You can check in other providers for examples on how to implement this method. After you added your provider, you just need to register it in 'translate-supplier.ts' and in 'cli.ts' and you are good to go.

## Credits

This software uses the following open source packages:

- [yargs](https://github.com/yargs/yargs)
- [deep-object-diff](https://github.com/mattphillips/deep-object-diff)
- [just-extend](https://github.com/angus-c/just)
- [glob](https://github.com/isaacs/node-glob)
- [axios](https://github.com/axios/axios)
- [@google-cloud/translate](https://github.com/googleapis/nodejs-translate)
- [html-entities](https://github.com/mdevils/html-entities)

## License

- [MIT](LICENSE)
