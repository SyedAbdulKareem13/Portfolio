import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1PageComponent } from './components/test1-page/test1-page.component';
import { Test2PageComponent } from './components/test2-page/test2-page.component';
import { Test3PageComponent } from './components/test3-page/test3-page.component';
import { Test4PageComponent } from './components/test4-page/test4-page.component';
import { Test5PageComponent } from './components/test5-page/test5-page.component';
import { Test6PageComponent } from './components/test6-page/test6-page.component';
import { Test7PageComponent } from './components/test7-page/test7-page.component';
import { Test8PageComponent } from './components/test8-page/test8-page.component';
import { Test9PageComponent } from './components/test9-page/test9-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'firstPageTesting', component: Test1PageComponent },
  { path: 'secondPageTesting', component: Test2PageComponent },
  { path: 'thirdPageTesting', component: Test3PageComponent },
  { path: '4PageTesting', component: Test4PageComponent },
  { path: '5PageTesting', component: Test5PageComponent },
  { path: '6PageTesting', component: Test6PageComponent },
  { path: '7PageTesting', component: Test7PageComponent },
  { path: '8PageTesting', component: Test8PageComponent },
  { path: '9PageTesting', component: Test9PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
