import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() menuName : string;
  

  constructor(public authService: AuthService) { }

    ngOnInit() {
      console.log(this.menuName);
    }

}
