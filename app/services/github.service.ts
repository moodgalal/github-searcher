import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService
{
    private userName : string;
    private clientId :any = 'b4c8a0d0c9a428365c49';
    private clientSecret :any = '94c396dc1f03caa178a424e71846de4a83c079ed';

    constructor(private _http : Http)
    {
        console.log('Service is ready!');
        this.userName = 'moodgalal';
    }

   public getUser()
    {
       return this._http.get("http://api.github.com/users/"+this.userName+"?client_id"+this.clientId+"&client_secret"+this.clientSecret)
           .map(res => res.json());
    }
    public getRepo()
    {
        return this._http.get("http://api.github.com/users/"+this.userName+"/repos?client_id"+this.clientId+"&client_secret"+this.clientSecret)
            .map(res => res.json());
    }
    public updateUser(userName : string)
    {
       this.userName=userName;
    }
}