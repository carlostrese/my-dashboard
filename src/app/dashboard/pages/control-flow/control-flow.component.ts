import { Component, signal } from '@angular/core';


type Grade = 'A'|'B'|'C'|'D';


@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('D');

  public toggleContect(){
    this.showContent.update(value =>!value );
  }
}
