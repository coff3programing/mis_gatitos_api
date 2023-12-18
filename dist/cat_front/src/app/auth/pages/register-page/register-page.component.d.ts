import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class RegisterPageComponent {
    private userService;
    private router;
    private formBuilder;
    user: any;
    form: FormGroup;
    constructor(userService: UserService, router: Router, formBuilder: FormBuilder);
    onSubmit(): void;
    get Name(): any;
    get LastName(): any;
    get Email(): any;
    get Password(): any;
}
