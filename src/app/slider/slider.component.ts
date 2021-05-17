import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slider: any = this.slide.carousel;
  
  constructor(private slide:CakeService) { }

  ngOnInit(): void {
  }
 
}
