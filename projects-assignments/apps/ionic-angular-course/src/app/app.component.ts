import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from './auth/auth.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private previousAuthState = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.hideSplash();
    });
  }

  private async hideSplash() {
    await SplashScreen.hide();
  }

  ngOnInit(): void {
    this.subscription = this.authService.userIsAuthenticated.subscribe(
      (isAuth) => {
        // if we're not authenticated and previously we were authenticated then...
        if (!isAuth && this.previousAuthState !== isAuth) {
          this.router.navigate(['/auth']);
        }
        this.previousAuthState = isAuth;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
