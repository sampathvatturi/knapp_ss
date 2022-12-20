import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiService } from 'src/app/providers/api.service';
import { DomSanitizer } from '@angular/platform-browser';
// import { MD5CryptoService } from 'src/app/services/md5.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styles: [
    `.form-div-padding{
    padding: 0;
    padding-right: 2rem;
    padding-left: 1rem;
    padding-top: 16rem !important;
    }
      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  data = {
    clnt_aplcn_nm: "WMS Dreamstep"
  }
  settings = {
    // screen:{'login':true,'forgot':false,'otp':false,'reset':false,'set':false},
    current_screen: "login"
    , screen_heading: "Employee Login"
  }

  loginForm!: FormGroup;
  forgotForm!: FormGroup;
  otpForm!: FormGroup;
  setPaswrdForm!: FormGroup;

  err_msg: string = '';
  errmsg: boolean = false;
  loader: boolean = false;

  usr_id: any;

  otp_rsnd: boolean = false;

  captchID = null;
  saltKey = null;
  captchImg: any;

  constructor(public fb: FormBuilder, 
    // private apiS: ApiService,
     private router: Router,
    private domSanitizer: DomSanitizer,
    // private md5Srvc: MD5CryptoService
  ) { }

  ngOnInit(): void {
    // this.loginForm = this.fb.group({
    //   username: [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    //   captcha: [null, [Validators.required]],
    //   // remember: [true]
    // });

    // this.forgotForm = this.fb.group({
    //   username: [null, [Validators.required]],
    //   phoneNumber: [null, [Validators.required]],
    //   captcha: [null, [Validators.required]],
    // });

    // this.otpForm = this.fb.group({
    //   otp: [null, [Validators.required]],
    // });

    // this.setPaswrdForm = this.fb.group({
    //   newPassword: [null, [Validators.required]],
    //   CnfrmPassword: [null, [Validators.required]]
    // });

    // this.getCaptchaText();
  }



  validateCaptcha = (calbk: any) => {
    // if (this.loginForm.value['captcha'] && this.loginForm.value['captcha'].trim() != '') {
    //   calbk(true);
    // }
    // else {
    //   calbk(false);
    // }
  }


  validateFrgtPswrdCaptcha = (calbk: any) => {
    // if (this.forgotForm.value['captcha'] && this.forgotForm.value['captcha'].trim() != '') {
    //   calbk(true);
    // }
    // else {
    //   calbk(false);
    // }
  }


  doLogin() {
        this.loader = true;

    // this.validateCaptcha((cptch_res) => {
    //   if (cptch_res) {
    //     this.loader = true;
    //     this.errmsg = false;
    //     this.err_msg = null;
    //     this.loginForm.value.app = 'web';
    //     localStorage.clear();
    //     var req_body = {
    //       username: '' + this.loginForm.value.username,
    //       password: this.getEncpryPwd(this.loginForm.value.password, this.saltKey),
    //       app: 'web',
    //       captcha: this.loginForm.value.captcha.trim(),
    //       captchaID: this.captchID
    //     }
    //     this.apiS.create(req_body, 'auth2/admin/login').subscribe((res) => {
    //       if (res['status'] == 200) {
    //         this.loader = false;
    //         this.errmsg = false;
    //         if (res['data']) {
    //           this.errmsg = false;
    //           this.loader = false;
    //           localStorage.setItem('userdata', JSON.stringify(res['data'].user));
    //           localStorage.setItem('clients', JSON.stringify(res['data'].clnts));
    //           localStorage.setItem('homeUrl', `${res['data'].assignedProfiles.mnu_home_pg}`);
    //           this.router.navigateByUrl(res['data'].assignedProfiles.mnu_home_pg, { replaceUrl: true });
    //         } else {
    //           this.getCaptchaText();
    //           this.loginForm['captcha'] = '';
    //           this.errmsg = true;
    //           this.loader = false;
    //           this.err_msg = "Incorrect username or password.";
    //         }
    //       } else if (res['status'] == 411 || res['status'] == 601) {
    //         this.errmsg = true;
    //         this.loader = false;
    //         this.err_msg = res['message'];
    //       } else {
    //         this.getCaptchaText();
    //         this.loginForm['captcha'] = '';
    //         this.errmsg = true;
    //         this.loader = false;
    //         this.err_msg = res['message'];
    //       }
    //     }, (err) => {
    //       this.getCaptchaText();
    //       this.loginForm['captcha'] = '';
    //       this.errmsg = true;
    //       this.loader = false;
    //       this.err_msg = "Something went wrong. Please contact the administrator.";
    //     })
    //   }
    //   else {
    //     this.errmsg = true;
    //     this.loader = false;
    //     this.err_msg = "Please enter valid captcha";
    //   }
    // })

  }


  frgtPasswrd() {
    this.settings.current_screen = 'forgot';
    this.settings.screen_heading = "RECOVER YOUR PASSWORD";
    // this.lgnVw = false;
    // this.frgtVw = true;
    // this.rstVw = false;
    // this.setPVw = false;
    this.getCaptchaText();

  }
  bckToLgn() {
    this.settings.current_screen = 'login';
    this.settings.screen_heading = "EMPLOYEE LOGIN";
    // this.lgnVw = true;
    // this.frgtVw = false;
    // this.rstVw = false;
    // this.setPVw = false;
    this.getCaptchaText();
  }
  otpID: any = null;
  otpsnd() {
    // this.validateFrgtPswrdCaptcha((cptch_res) => {
    //   if (cptch_res) {
    //     this.err_msg = null;
    //     this.otp_rsnd = false;

    //     let data = {
    //       phonenumber: this.forgotForm.value.phoneNumber,
    //       username: this.forgotForm.value.username,
    //       captcha: this.forgotForm.value.captcha.trim(),
    //       captchaID: this.captchID
    //     };
    //     this.errmsg = false;
    //     this.loader = true;
    //     localStorage.clear();
    //     this.apiS.post(data, 'auth2/admin/forgot-password/send-otp').subscribe((res) => {
    //       this.errmsg = false;
    //       this.loader = false;
    //       if (res && res['status'] == 200) {
    //         this.otpID = res['data'].otpID;
    //         // this.lgnVw = false;
    //         // this.frgtVw = false;
    //         this.settings.current_screen = 'otp';
    //         this.settings.screen_heading = "ENTER OTP"
    //         // this.rstVw = true;
    //         // this.setPVw = true;
    //         this.settings.current_screen = 'reset';
    //         this.settings.screen_heading = "SET YOUR PASSWORD"
    //         this.otp_rsnd = true;
    //         // this.shwrcvrydiv = false;
    //         // this.shwOtpdiv = true;
    //       } else if (res['status'] == 411 || res['status'] == 601) {
    //         this.errmsg = true;
    //         this.err_msg = res['message'];
    //       } else {
    //         this.getCaptchaText();
    //         this.forgotForm['captcha'] = '';
    //         this.errmsg = true;
    //         this.err_msg = res['message'];
    //       }
    //     }, (err) => {
    //       this.getCaptchaText();
    //       this.forgotForm['captcha'] = '';
    //       this.loader = false;
    //       this.errmsg = true;
    //       this.err_msg = "Something went wrong. Please contact the administrator.";
    //     })
    //   }
    //   else {
    //     this.errmsg = true;
    //     this.loader = false;
    //     this.err_msg = "Please enter valid captcha";
    //   }
    // })

  }


  submtOtp() {
    // this.loader = true;
    // var data = {
    //   phonenumber: this.forgotForm.value.phoneNumber,
    //   otp: this.otpForm.value.otp,
    //   username: this.forgotForm.value.username,
    //   otpID: this.otpID,
    //   password: this.setPaswrdForm.value.newPassword
    // }
    // if (this.setPaswrdForm.value.newPassword == this.setPaswrdForm.value.CnfrmPassword) {
    //   this.apiS.post(data, 'auth2/admin/forgot-password/validate-otp').subscribe((res) => {
    //     this.loader = false;
    //     if (res['status'] == 200) {
    //       this.settings.current_screen = 'login';
    //       this.settings.screen_heading = "Employee Login";
    //       // this.lgnVw = true;
    //       // this.frgtVw = false;
    //       // this.rstVw = false;
    //       // this.setPVw = false;
    //     } else {
    //       this.errmsg = true;
    //       this.err_msg = res['message'];
    //     }
    //   }, (err) => {
    //     this.loader = false;
    //     this.errmsg = true;
    //     this.err_msg = "Something went wrong. Please contact the administrator.";
    //   })
    // } else {
    //   this.loader = false;
    //   this.errmsg = true;
    //   this.err_msg = "Password doesn't match";
    //   this.setPaswrdForm.reset();
    // }
  }

  getCaptchaText = () => {
    this.errmsg = false;
    // this.apiS.get('auth2/admin/login/captcha').subscribe((res) => {
    //   if (res['status'] == 200 && res['data']) {
    //     this.captchID = res['data']['cptch_id'];
    //     this.saltKey = res['data']['salt_ky'];
    //     this.captchImg = this.domSanitizer.bypassSecurityTrustUrl(res['data']['data']);
    //   }
    //   else {
    //     this.errmsg = true;
    //     this.err_msg = res['message'];
    //     this.captchID = null;
    //     this.saltKey = null;
    //     this.captchImg = null;
    //   }
    // }, (err) => {
    //   this.captchID = null;
    //   this.saltKey = null;
    //   this.captchImg = null;
    // })
  }


  getEncpryPwd = (pwd: any, sltKy: any) => {
    // return this.md5Srvc.getMD5EncryptTxt(`${this.md5Srvc.getMD5EncryptTxt(pwd)}${sltKy}`);
  }

}