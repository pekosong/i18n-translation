type JSONValue = string | { [x: string]: JSONValue };

export interface JSONObj {
  [x: string]: JSONValue;
}

export interface NaverTranslateResponse {
  data: { message: { result: { translatedText: string } } };
}
