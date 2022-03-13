import { Component, OnInit } from '@angular/core';
import { SharedFunctionService } from 'src/app/services/shared-function.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  src: string = '../../../assets/images/check-blue.png';
  constructor(private sharedFunc: SharedFunctionService) {}

  ngOnInit(): void {}
  showGmail() {
    this.sharedFunc.displayModal(
      'info',
      'My Gmail',
      'kdautinishvili@gmail.com'
    );
  }
}
