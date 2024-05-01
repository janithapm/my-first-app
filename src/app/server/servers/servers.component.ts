import { Component } from '@angular/core';
import { SuccessComponent } from '../../alerts/success/success.component';
import { WarningComponent } from '../../alerts/warning/warning.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [SuccessComponent, WarningComponent, FormsModule],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
   id:number = 0;
   allowNewServer:boolean= false;
   serverCreationStatus:string = "no server created";
   serverName:string ="";

   constructor() {
    setTimeout(()=> {
      this.allowNewServer = !this.allowNewServer;
      this.id++;
    }, 2000);
   }

   onCreateServer() {
    this.serverCreationStatus = "server was created";
    this.id++;
   }

   onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value;
   }
}
