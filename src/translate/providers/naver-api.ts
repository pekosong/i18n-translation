import axios, { AxiosRequestConfig } from 'axios';
import { decode, encode } from 'html-entities';
import { NaverTranslateResponse } from '../payload';
import { Translate } from '../translate';
import { argv } from '../cli';

export class NaverAPI extends Translate {
  private static readonly endpoint: string = 'https://openapi.naver.com/v1/papago/n2mt';
  private static readonly axiosConfig: AxiosRequestConfig = {
    headers: {
      'X-Naver-Client-Id': argv.key,
      'X-Naver-Client-Secret': argv.secret,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  };

  protected callTranslateAPI = async (
    valuesForTranslation: string[],
    to: string,
  ): Promise<string> => {
    const body = {
      source: argv.from,
      target: to,
      text: encode(valuesForTranslation.join(Translate.sentenceDelimiter)),
    };
    const response = await axios.post(NaverAPI.endpoint, body, NaverAPI.axiosConfig);
    return decode((response as NaverTranslateResponse).data.message.result.translatedText);
  };
}
