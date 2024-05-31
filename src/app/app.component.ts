import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CpfPipe } from './shared/pipes/cpf.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CpfPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public cpf: string = "89965441081";

}
