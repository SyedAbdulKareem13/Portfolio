import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-test2-page',
  template: '<div #canvasContainer></div>',
  styleUrls: ['./test2-page.component.scss']
})
export class Test2PageComponent implements OnInit {
  private p5Instance: p5;

  @ViewChild('canvasContainer') canvasContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.p5Instance = new p5(this.sketch.bind(this), this.canvasContainer.nativeElement);
  }

  private sketch(p: p5) {
    let vectors = [];
    let amount = 8000;
    let speed = 1;
    let size = 10;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.background(10);
      p.stroke(200, 200, 200, 10);

      for (let i = 0; i < amount; i++) {
        vectors.push(p.createVector(p.random(p.width), p.random(p.height)));
      }
    };

    p.draw = () => {
      for (const vector of vectors) {
        let randomisation = p.noise(vector.x / 99, vector.y / 99) * p.TWO_PI;
        vector.add(p.cos(randomisation), p.sin(randomisation));

        p.point(
          p.constrain(vector.x, 100, p.width - 100),
          p.constrain(vector.y, 100, p.height - 100)
        );
      }
    };
  }
}
