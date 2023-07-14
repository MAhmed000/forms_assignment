import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked{
  ngOnInit(): void {
    console.log("NG On Init Calls");
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes)
    console.log("NG On Changes Calls");
  }
  ngOnDestroy(): void {
    console.log("NG On Destroy Calls");
  }
  ngDoCheck(): void {
    console.log("NG Do Check Calls");
  }

  ngAfterContentChecked(): void {
    console.log("Content Checked Called..!");
  }

  ngAfterContentInit(): void {
    console.log("NG After Content Init Called")
  }
}
