import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { DataModel } from './models/data-model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 

  tab?:DataModel[] = [] ;
  
  
}




