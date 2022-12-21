import { Component, OnInit } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router, RouterModule } from '@angular/router'; 
import { AppsService } from 'src/app/shared/services/apps.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Observable  } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchVisible : boolean = false;
    quickViewVisible : boolean = false;
    isFolded!: boolean;
    isExpand!: boolean;
    clntDtls: any;
    usrDtls: any;
    setting={ header_title : "" }
    data={"short_lbl":""}
    id: string = '';
    folder_id$!: Observable<string>;

  constructor(private themeService: ThemeConstantService, public router: Router,public apiSrv: AppsService, private notification: NzNotificationService
    ,private headerService: HeaderService) { }

  ngOnInit(): void {
    console.log("In header Init")
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => {
            this.isFolded = isFolded;
            console.log("Theeme is fold triggered")
        });
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);

        this.headerService.selectedHeaderTitle.subscribe(header =>  {
            this.setting.header_title = header;
            console.log("------header selectedHeaderTitle change triggered ::"+header)
        });
  }
  setHeading(){

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

  searchToggle(): void {
      this.searchVisible = !this.searchVisible;
  }

  quickViewToggle(): void {
      this.quickViewVisible = !this.quickViewVisible;
  }
  editprfl() {
      // this.router.navigate([`internal/settings`]);
      this.router.navigateByUrl('internal/pages/profile')
  }
  logout(){

  }



}
