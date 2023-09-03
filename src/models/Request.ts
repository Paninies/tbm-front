

export default class Request {
  private readonly _id: string;
  private readonly _date: Date;
  private _method: string;
  private _url: string;
  private _headers: string;
  private _body: string;

  constructor(id: string, date: Date, method: string, url: string, headers: string, body: string) {
    this._id = id;
    this._date = date;
    this._method = method;
    this._url = url;
    this._headers = headers;
    this._body = body;
  }


  get method(): string {
    return this._method;
  }

  set method(value: string) {
    this._method = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get headers(): string {
    return this._headers;
  }

  set headers(value: string) {
    this._headers = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }
}
