import RequestDTO from "src/dtos/RequestDTO";
import ResponseDTO from "src/dtos/ResponseDTO";

export default class RestLogDTO {
  private readonly _id: string;
  private readonly _date: Date;
  private _method: string;
  private _url: string;
  private _headers: string;
  private _body: string;
  private _statusCode: number;
  private _request: RequestDTO
  private _response: ResponseDTO


  constructor(id: string, date: Date, method: string, url: string, headers: string, body: string, statusCode: number, request: RequestDTO, response: ResponseDTO) {
    this._id = id;
    this._date = date;
    this._method = method;
    this._url = url;
    this._headers = headers;
    this._body = body;
    this._statusCode = statusCode;
    this._request = request;
    this._response = response;
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

  get statusCode(): number {
    return this._statusCode;
  }

  set statusCode(value: number) {
    this._statusCode = value;
  }

  get request(): RequestDTO {
    return this._request;
  }

  set request(value: RequestDTO) {
    this._request = value;
  }

  get response(): ResponseDTO {
    return this._response;
  }

  set response(value: ResponseDTO) {
    this._response = value;
  }
}
