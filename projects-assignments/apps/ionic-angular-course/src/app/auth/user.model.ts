export class User {
  constructor(
    public id: string,
    public email: string,
    private _token: string,
    private tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    return this._token;
  }

  get tokenDuration() {
    if (!this.token) {
      return 0;
    }
    // future timestamp - present timestamp
    // if negative or 0 - it expired
    return this.tokenExpirationDate.getTime() - new Date().getTime();
  }
}
