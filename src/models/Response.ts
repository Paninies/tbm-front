
export default class Response {
  private readonly _id: string;
  private readonly _date: Date;
  private _statusCode: number;
  private _headers: string;
  private _body: string;
  private _error: string;
  private _dateError: Date;

  constructor(id: string, date: Date, statusCode: number, headers: string, body: string, error: string, dateError: Date) {
    this._id = id;
    this._date = date;
    this._statusCode = statusCode;
    this._headers = headers;
    this._body = body;
    this._error = error;
    this._dateError = dateError;
  }


  get id(): string {
    return this._id;
  }

  get date(): Date {
    return this._date;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  set statusCode(value: number) {
    this._statusCode = value;
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

  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }

  get dateError(): Date {
    return this._dateError;
  }

  set dateError(value: Date) {
    this._dateError = value;
  }
}
