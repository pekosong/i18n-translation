import { GoogleOfficialAPI } from './providers/google-official-api';
import { Translate } from './translate';
import { NaverAPI } from './providers/naver-api';

interface Providers {
  naver: NaverAPI;
  'google-official': GoogleOfficialAPI;
}

export class TranslateSupplier {
  private static readonly providers: Providers = {
    naver: new NaverAPI(),
    'google-official': new GoogleOfficialAPI(),
  };

  public static getProvider = (provider: string): Translate =>
    TranslateSupplier.providers[provider as keyof Providers];
}
