import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor(private router: Router, private navController: NavController) {}

  ngOnInit() {}

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // navigateBack takes either array of path segments or just the url
    this.navController.navigateBack('/places/tabs/discover');

    // another way of navigating back - use pop() - it will pop the last page off the stack
    // the problem is it won't work if the stack of pages is empty
    // this.navController.pop();
  }
}
