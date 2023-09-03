import Request from "src/models/Request";

export default class RestLog {
  private readonly _id: string;
  private readonly _date: Date;
  private _request: Request;
  private _response: Response;
  private _service: string;

  constructor(id: string, date: Date, request: Request, response: Response, service: string) {
    this._id = id;
    this._date = date;
    this._request = request;
    this._response = response;
    this._service = service;
  }

  get id(): string {
    return this._id;
  }

  get date(): Date {
    return this._date;
  }

  get request(): Request {
    return this._request;
  }

  set request(value: Request) {
    this._request = value;
  }

  get response(): Response {
    return this._response;
  }

  set response(value: Response) {
    this._response = value;
  }

  get service(): string {
    return this._service;
  }

  set service(value: string) {
    this._service = value;
  }


}
