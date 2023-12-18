import { UserService } from '../../../services/user.service';
import { LoginModel } from '../../../models/login.model';
import { Router } from '@angular/router';
export declare class LoginPageComponent {
    private authService;
    private router;
    credentials: LoginModel;
    loginError: boolean;
    loginSuccess: boolean;
    constructor(authService: UserService, router: Router);
    onSubmit(): void;
    onForgotPassword(): void;
    displayDialog: boolean;
    showDialog(): void;
    hideDialog(): void;
}
