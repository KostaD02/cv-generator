import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    let primaryColor = localStorage.getItem('primary-color');
    let primaryFont = localStorage.getItem('primary-font');
    if (primaryColor) {
      document.documentElement.style.setProperty(
        '--primary-color',
        primaryColor
      );
    }
    if (primaryFont) {
      document.documentElement.style.setProperty('--primary-font', primaryFont);
    }
  }
  changeColor(option: string) {
    const root = document.documentElement;
    let primaryColor = '';
    if (option === 'blue') {
      const blue = getComputedStyle(root).getPropertyValue('--blue');
      root.style.setProperty('--primary-color', blue);
      primaryColor = blue;
    } else if (option === 'orange') {
      const orange = getComputedStyle(root).getPropertyValue('--orange');
      root.style.setProperty('--primary-color', orange);
      primaryColor = orange;
    } else if (option === 'green') {
      const green = getComputedStyle(root).getPropertyValue('--green');
      root.style.setProperty('--primary-color', green);
      primaryColor = green;
    } else {
      primaryColor = '#0082e6';
    }
    localStorage.setItem('primary-color', primaryColor);
  }
  changeFont(option: string) {
    const root = document.documentElement;
    let primaryFont = '';
    if (option === 'montserrat') {
      root.style.setProperty('--primary-font', "'Montserrat',sans-serif");
      primaryFont = "'Montserrat',sans-serif";
    } else if (option === 'roboto') {
      root.style.setProperty('--primary-font', "'Roboto',sans-serif");
      primaryFont = "'Roboto',sans-serif";
    } else if (option === 'hubballi') {
      root.style.setProperty('--primary-font', "'Hubballi',cursive");
      primaryFont = "'Hubballi',cursive";
    } else if (option === 'openSans') {
      root.style.setProperty('--primary-font', "'Open Sans',sans-serif");
      primaryFont = "'Open Sans',sans-serif";
    } else if (option === 'poppins') {
      root.style.setProperty('--primary-font', "'Poppins',sans-serif");
      primaryFont = "'Poppins',sans-serif";
    } else if (option === 'dancingScript') {
      root.style.setProperty('--primary-font', "'Dancing Script',cursive");
      primaryFont = "'Dancing Script',cursive";
    } else if (option === 'kalam') {
      root.style.setProperty('--primary-font', "'Kalam',cursive");
      primaryFont = "'Kalam',cursive";
    } else {
      root.style.setProperty('--primary-font', "'Montserrat',sans-serif");
      primaryFont = "'Montserrat',sans-serif";
    }
    localStorage.setItem('primary-font', primaryFont);
  }
}
