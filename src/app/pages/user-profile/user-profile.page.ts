import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  public user: any;
  // userProfile: Profile;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getProfileUser();
    console.log(this.user);
  }
}
