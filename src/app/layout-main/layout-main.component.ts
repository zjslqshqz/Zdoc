import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss']
})
export class LayoutMainComponent implements OnInit{
  isCollapsed = false;
  inputValue = '';
  ngOnInit():void {
    console.log(1)
  }
  a(v:any){
    console.log(v)
  }
}
