import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { ErrorCodeEnum } from './error-code.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  authenticate(email: string, password: string) {
    this.isLoading = true;
    this.loadingController
      .create({
        keyboardClose: true,
        spinner: 'bubbles',
        message: 'Logging in...',
      })
      .then((loadingEl) => {
        loadingEl.present();
        let authObs: Observable<AuthResponseData>;
        if (this.isLogin) {
          authObs = this.authService.login(email, password);
        } else {
          authObs = this.authService.signup(email, password);
        }
        authObs.subscribe({
          next: (resData) => {
            console.log(resData);
            loadingEl.dismiss();
            this.router.navigate(['/places/tabs/discover']);
            this.isLoading = false;
          },
          error: (errRes) => {
            loadingEl.dismiss();
            const code = errRes.error.error.message;
            let message;

            if (code === 'EMAIL_EXISTS') {
              message = ErrorCodeEnum.EMAIL_EXISTS;
            } else if (code === 'EMAIL_NOT_FOUND') {
              message = ErrorCodeEnum.EMAIL_NOT_FOUND;
            } else if (code === 'INVALID_PASSWORD') {
              message = ErrorCodeEnum.INVALID_PASSWORD;
            } else {
              message = 'An unknown error has occurred';
            }
            this.showAlert(message);
          },
        });
      });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.authenticate(email, password);
    form.reset();
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay'],
      })
      .then((alertEl) => alertEl.present());
  }
}
