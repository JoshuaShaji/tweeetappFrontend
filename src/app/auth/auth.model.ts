export class User {
    constructor(
      public username: string,
      public id: string,
      private _token: string,
      private _tokenExpirationDate: Date
    ) {}
    //getter so as to perform some task on the token
      get token(){
        if(!this._tokenExpirationDate || new Date()> this._tokenExpirationDate){
          return null;
        }
        return this._token
      }
  
  }
  