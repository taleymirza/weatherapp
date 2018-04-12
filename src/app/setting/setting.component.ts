import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Command } from 'protractor';
import { homedir } from 'os';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  city: string;
  code: string;

  constructor(private route : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    let location ={
    city: this.city,
    code: this.code
    };
    localStorage.setItem('location', JSON.stringify(location));
    this.route.navigate(['home']);
  }

}
