import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-read-rfid',
  templateUrl: './read-rfid.component.html',
  styleUrls: ['./read-rfid.component.css']
})
export class ReadRfidComponent implements OnInit {

    @Input() title: any;

  constructor() { }

  ngOnInit() {
      console.log(this.title);
  }

}
