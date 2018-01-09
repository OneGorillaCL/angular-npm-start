import {Component, OnInit, Renderer2, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('overrideRouter') overrideRouter : any = false;
  @Input('tarjetasContent') tarjetasContent : any = false;
  currentUri = '';
  sidebarOpen = false;
  currentSubmenu = '';
  currentTab = '';
  currentCollapsed = '';
  showAditionalContentTarjetas = false;

  openSidebar = () => {
    this.renderer.addClass(document.querySelector('body'),'modal-open');
    this.sidebarOpen = true;
    this.currentCollapsed = '';
  }

  closeSidebar = () => {
    this.renderer.removeClass(document.querySelector('body'),'modal-open');
    this.sidebarOpen = false;
    this.currentCollapsed = '';
  }

  setCurrentCollapsed = (collapsed:string) => {
    if( this.currentCollapsed === collapsed ){
      this.currentCollapsed = '';
    }else{
      this.currentCollapsed = collapsed;
    }
  }

  clearCurrentSubmenu = () => {
    this.currentSubmenu = '';
  }

  setSubMenu = (menu) => {
    this.currentSubmenu = menu;
  }

  updateAditionalContentTarjetas = (state:boolean) => {
    this.showAditionalContentTarjetas = state;
  }

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if( this.overrideRouter !== false ){
      this.currentTab = this.overrideRouter;
    }else{
      this.currentTab = this.activatedRoute.snapshot.params['tab'] || '';
    }
    this.currentUri = this.router.url;
    console.log('this.router',this.router);
    this.router.events.subscribe(
      ( nav: any ) => {
        if (nav && nav['url'] ) {
          this.closeSidebar();
          this.currentUri = nav['url'];
          console.log('this.currentUri',this.currentUri);
          this.currentTab = this.activatedRoute.snapshot.params['tab'] || '';
        }
      }
    );
  }

  ngOnChanges(changes:SimpleChange){
    if( changes && changes['overrideRouter'] && changes['overrideRouter']['currentValue'] ){
      this.currentTab = changes['overrideRouter']['currentValue'];
    }
  }

}
