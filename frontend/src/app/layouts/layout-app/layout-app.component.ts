import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeConstantService } from './../../shared/services/theme-constant.service';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.scss']
})
export class LayoutAppComponent implements OnInit {
  selectedHeaderColor: string = '';
  empdata: any;
  isFolded: boolean = false;
  isSideNavDark: boolean = false;
  isExpand: boolean = true;
  url:string ='';
  full_screen:boolean = false;
  constructor(private router: Router, private themeService:ThemeConstantService ) { }

  ngOnInit(): void {
    
    this.url=this.router.url;
        if(this.router.url=="/") this.full_screen=true;
        else this.full_screen=false;
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
      
  }

}
