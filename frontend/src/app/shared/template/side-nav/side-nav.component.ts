import { Component } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { AppsService } from '../../services/apps.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent{

    public menuItems: any[] =[];
    public menuItems2: any[] = [];
    isFolded : boolean | undefined;
    isSideNavDark : boolean | undefined;
    isExpand : boolean | undefined;

    loader: boolean = true;
    clntDtls: any;

    constructor( private themeService: ThemeConstantService,public apiSrv: AppsService) {}

    ngOnInit(): void {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);

        // this.clntDtls = JSON.parse(localStorage.getItem('clients'));
       this.gstMnuItmsLst();
    }
 
    closeMobileMenu(): void {
        if (window.innerWidth < 992) {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
        }
    }



  gstMnuItmsLst() {
      
    this.loader = true;
    const rte = `auth2/admin/menu`;
    console.log("calling  -- gstMnuItmsLst ::"+rte)
    this.apiSrv.get(rte).subscribe((res:any) => {
        console.log(res)
      this.loader = false;
      if (res['status'] == 200) {
        this.menuItems2 = res['data'];

        for (let i = 0; i < this.menuItems2.length; i++) {
          if (!this.menuItems2[i].children) {
            this.menuItems2[i].children = [];
          }
          for (let j = 0; j < this.menuItems2[i].children.length; j++) {
            this.menuItems2[i].children[j]['submenu'] = [];
          }
        }
      }
      else {
       
    //     this.toastr.error( res["message"], '', {
    //      timeOut: 10000,
    //      positionClass: 'toast-top-right',
    //    });
     }

    }, err => {
      this.loader = false;
    });
  }

}
