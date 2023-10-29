#!/usr/bin/env node
import { argv } from './translate/cli';
import { TranslateSupplier } from './translate/translate-supplier';

try {
  const toList = argv.to.split(',').map((el) => el.trim());
  toList.forEach((to: string) => {
    TranslateSupplier.getProvider(argv.apiProvider).translate(to);
  });
} catch (e) {
  if (e instanceof Error) console.log(e.message);
  else console.log(e);
}
