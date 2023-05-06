import { Component, Input, OnInit } from '@angular/core';
import { MovieClass } from 'src/app/classes/movie-class';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from 'src/assets/animations/carousel.animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [

    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(
        fadeIn,
        { params: { time: '300ms' } })
      ]),
      transition('* => void', [useAnimation(
        fadeOut,
        { params: { time: '300ms' } })
      ]),
    ])
  ]
})
export class BannerComponent implements OnInit {

  @Input() public dataMovie: MovieClass[] = [];

  public currentSlide = 0;

  constructor() { }

  ngOnInit() {

  }

  onPreviousClick() {
    let slides = this.dataMovie.slice(0, 4);
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? slides.length - 1 : previous;
  }

  onNextClick() {
    let slides = this.dataMovie.slice(0, 4);
    const next = this.currentSlide + 1;
    this.currentSlide = next === slides.length ? 0 : next;
  }


}
