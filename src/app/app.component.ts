import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: data = { username: "", password: "", isLogin: false }

  login = (username: string, password: string) => {
    if (username !== "" && password !== "") {
      this.data.username = username;
      this.data.password = password;
      this.data.isLogin = true;
      localStorage.setItem('userLogin', JSON.stringify(this.data));
    }
    else { this.logout() }
  }

  logout = () => {
    localStorage.removeItem('userLogin');
    this.data.isLogin = false
  }

  constructor() { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('userLogin') || '{}');
    this.data = data
  }

}

interface data {
  username: string,
  password: string,
  isLogin: boolean,
}