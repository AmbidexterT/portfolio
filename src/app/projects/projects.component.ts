import {Component, OnInit} from '@angular/core';

// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
// @ts-ignore
import Letterize from 'letterizejs';

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
    const test = new Letterize({
      targets: '.animate-me'
    });

    const animation = anime.timeline({
      targets: test.listAll,
      delay: anime.stagger(100, {
        grid: [test.list[0].length, test.list.length],
        from: 'center'
      }),
      loop: true
    });

    animation
      .add({
        scale: 0.5
      })
      .add({
        letterSpacing: "13px"
      })
      .add({
        scale: 1
      })
      .add({
        letterSpacing: "7px"
      });
  }



}
