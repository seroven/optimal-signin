import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateInputClass } from 'src/app/shared/classes/validate-input.class';
import { ErrorInputMessage } from 'src/app/shared/constants/error-input-messages';
import { AuthService } from '../../services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { RegexValidator } from 'src/app/shared/constants/regex-validator';
import { EnumTypeMessage } from 'src/app/shared/enums/type-message.enum';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent {
  public formAuth: FormGroup;
  public validateFormAuth:ValidateInputClass;
  public errorInputMessage = ErrorInputMessage;
  public loadSubmit:boolean = false;
  

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastService:ToastService) {
    this.formAuth = this.formBuilder.group({
      username: new FormControl(null, [Validators.required, Validators.pattern(RegexValidator.email)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
    });
    this.validateFormAuth = new ValidateInputClass(this.formAuth);
  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.formAuth.valid) return;
    this.loadSubmit = true;
    const { username, password } = this.formAuth.value;
    this.authService.login({
      username,
      password
    }).subscribe({
      next: response => {
        this.loadSubmit = false;
        if (response.accessToken){
          this.toastService.showMessage(EnumTypeMessage.LOGIN_SUCCESS);
          this.authService.setUserLogged(response);
          this.router.navigate(['/panel/about']);
        } else {
          this.toastService.showMessage(EnumTypeMessage.LOGIN_ERROR);
        }
      },
      error: err => {
        this.loadSubmit = false;
        this.toastService.showMessage(EnumTypeMessage.LOGIN_ERROR);
      }
    });
      

  }

}
