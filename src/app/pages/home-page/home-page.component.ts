import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _router: Router, private route: ActivatedRoute) { }
  toPageOne() { this._router.navigate(['/firstPageTesting']); }
  toPageTwo() { this._router.navigate(['/secondPageTesting']); }
  toPageThree() { this._router.navigate(['/thirdPageTesting']); }
  toPage4() { this._router.navigate(['/4PageTesting']); }
  toPage5() { this._router.navigate(['/5PageTesting']); }
  toPage6() { this._router.navigate(['/6PageTesting']); }
  toPage7() { this._router.navigate(['/7PageTesting']); }
  toPage8() { this._router.navigate(['/8PageTesting']); }
  toPage9() { this._router.navigate(['/9PageTesting']); }
  ngOnInit(): void { }
}
