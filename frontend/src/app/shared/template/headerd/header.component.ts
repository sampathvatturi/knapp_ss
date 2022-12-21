import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    searchVisible: boolean = false;
    quickViewVisible: boolean = false;
    isFolded: boolean;
    isExpand: boolean;
    clntDtls: any;
    usrDtls: any;

    constructor(private themeService: ThemeConstantService,private toastr: ToastrService, public router: Router, public apiSrc: ApiService) {
        this.clntDtls = JSON.parse(localStorage.getItem('clients'));
        this.usrDtls = JSON.parse(localStorage.getItem('userdata'));
    }

    ngOnInit(): void {
        //   console.log(this.usrDtls);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    logout() {
        this.apiSrc.get("auth2/admin/logout")
            .subscribe(res => {
                if (res['status'] == 200) {
                    localStorage.clear();
                    this.router.navigateByUrl('internal');
                } else {
       
                    this.toastr.error( res["message"], '', {
                     timeOut: 10000,
                     positionClass: 'toast-top-right',
                   });
                 }
            }, (err) => {
            })

    }

    editprfl() {
        // this.router.navigate([`internal/settings`]);
        this.router.navigateByUrl('internal/pages/profile')
    }


    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        this.quickViewVisible = !this.quickViewVisible;
    }

}
