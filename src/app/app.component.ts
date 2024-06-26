import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './server/servers/servers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
