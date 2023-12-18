import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export declare class EmailComponent implements OnInit {
    private authService;
    private router;
    private route;
    newPassword: string;
    token: string | null;
    resetError: boolean;
    resetSuccess: boolean;
    constructor(authService: UserService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    onResetPassword(): void;
}
import { UserService } from '../../../services/user.service';
