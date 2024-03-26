import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()//el decorador por encima de la property recibe una property de    
  public characterList:Character[]=[{
    name:'Trunk',
    power:10
  }]
  //objeto que permite borrar el elemneto de la lista
  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter()

  //eliminar
  onDeleteCharacter(id?:string):void{
    //emitir id personaje
    //console.log(index)
    if(!id) return;
    console.log(id)
    this.onDelete.emit(id)
  }
}
