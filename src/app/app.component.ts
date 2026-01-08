import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 

  protected firstname: string = '';
  protected liczba_liter: number = 0;
 
  protected onSubmit(data:any): void {
    console.log(data.value.firstname);
    this.firstname = data.value.firstname;
    ;
    
    
    
  }
}




