import {Component, OnInit} from '@angular/core';
// @ts-ignore
import anime from 'animejs/lib/anime.es.js';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
    const options = {
      strings: ['', 'Full-Stack', 'WEB', 'Angular', 'Node.js'],
      typeSpeed: 110,
      backSpeed: 72,
      loop: true,
    };

    const typed = new Typed('.typed', options);
    typed.reset(true);


    const pathEls = document.querySelectorAll('path');
    for (let i = 0; i < pathEls.length; i++) {
      const pathEl = pathEls[i];
      const offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', String(offset));
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
      });
    }
  }

}
