import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public valor:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  plegarMenu(){
        document.getElementById("navbar")!.style.left="-100%";
        document.getElementById("oscuro")!.style.backgroundColor= "transparent";
        document.getElementById("oscuro")!.style.display="none"; 
        this.valor = false;
  }

  desplegarMenu(){
        document.getElementById("navbar")!.style.left="0px";
        document.getElementById("oscuro")!.style.backgroundColor= "rgb(26, 26, 26)";
        document.getElementById("oscuro")!.style.display="block"; 
        this.valor = true;
  }

  plegarYDesplegar(){

      if(this.valor == false){
        this.desplegarMenu();
      } else {
        this.plegarMenu();
      }
  }
}
