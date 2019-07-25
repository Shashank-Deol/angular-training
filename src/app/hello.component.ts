import { Component ,/*Input*/ } from '@angular/core';

@Component({
  selector : 'hello',
  templateUrl : './hello.component.html'
})

export class HelloComponent{
    age='22';
    name="MyName";
    
     //@Input() incomingmags:String;
}