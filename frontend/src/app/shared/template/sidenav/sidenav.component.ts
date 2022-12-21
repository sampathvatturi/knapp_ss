import { Component, OnInit } from '@angular/core';
import mainMenu from '../../../../assets/json/main-menu.json';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  // isCollapsed = true;
  menuItems: any;
  isFolded!:boolean;
  isSideNavDark!:boolean;
  isExpand!: boolean;

  constructor(private themeService:ThemeConstantService) { }

  ngOnInit(): void {
    this.menuItems = mainMenu?.mainMenu;
    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);

  }

}
