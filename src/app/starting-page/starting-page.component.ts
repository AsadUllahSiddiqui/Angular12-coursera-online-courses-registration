import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.component.html',
  styleUrls: ['./starting-page.component.css']
})
export class StartingPageComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
