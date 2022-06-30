import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  venobox: any;

  constructor() {
  }

  ngOnInit(): void {
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

}
