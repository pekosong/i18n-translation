import yargs from 'yargs';

interface Arguments {
  [x: string]: unknown;
  apiProvider: string;
  key: string;
  secret?: string;
  filePath: string;
  outputPath: string;
  from: string;
  to: string;
  override: boolean;
}

export const argv: Arguments = yargs(process.argv.slice(2))
  .options({
    apiProvider: {
      type: 'string',
      alias: 'a',
      description: 'API Provider.',
      choices: ['google-official', 'naver'],
      default: 'naver',
    },
    key: {
      type: 'string',
      alias: 'k',
      demandOption: true,
      description: 'Api Key',
    },
    secret: {
      type: 'string',
      alias: 's',
      description: 'Secret : Papago required',
    },
    filePath: {
      type: 'string',
      alias: 'p',
      default: 'ko.json',
      description: 'Path to a single JSON file.',
    },
    outputPath: {
      type: 'string',
      alias: 'o',
      default: '.',
      description: 'Path to save files',
    },
    from: {
      type: 'string',
      alias: 'f',
      default: 'ko',
      description: 'From which language you want to translate.',
    },
    to: {
      type: 'string',
      alias: 't',
      default: 'en',
      description:
        'To which language you want to translate.\n Papago : ko, en, ja, zh-CN, zh-TW, vi, id, th, de, ru, es, it, fr',
    },
    override: {
      type: 'boolean',
      alias: 'r',
      description: 'Override all created i18n JSON files.',
      default: false,
    },
  })
  .parseSync();
