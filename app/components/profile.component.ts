import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,  // Let the metadata_resolver component do the rest ... fully resolved filename; defined at module load time
    selector: 'my-profile',
    templateUrl: "./profile.component.html",
})
export class ProfileComponent
{
    user : any;
    repos:Array<any>;
    username: string;
    constructor(private gitService : GithubService)
    {
       this.user = false;
    }

    public searchUser()
    {
        this.gitService.updateUser(this.username);

        this.gitService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this.gitService.getRepo().subscribe(Repo => {
            console.log(Repo);
            this.repos = Repo;
        });
    }
    
}