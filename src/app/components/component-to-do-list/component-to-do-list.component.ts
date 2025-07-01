import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TodoItem } from './models/todo-model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-component-to-do-list',
  imports: [
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './component-to-do-list.component.html',
  styleUrl: './component-to-do-list.component.css'
})
export class ComponentToDoListComponent {

  public taskValor = '';
  public tasks: TodoItem[] = [];

  // função para adicionar a task na lista
  addTask() {

    //essa condicional, vai verificar se depois de remover os espaços, não irá ficar
    //valores vazios. 
    if (this.taskValor.trim()) {   
      
      //aqui é onde é colocado a task no array "tasks"
      this.tasks.push({
          id: uuidv4(),
          input: this.taskValor,
          check: false
        });
        // aqui ele reseta o valor dentro da variavel que recebe o valor do input do ngModel
        this.taskValor = '';  
    }
  }
  
  doneTask(item: TodoItem){
    item.check = !item.check
  }

  //nessa função, com o auxilio do ngFor, irei receber o ID do item no qual cliquei para poder exclui-lo
  removeTask(id:string){
    for(let i = 0; i < this.tasks.length; i++){
      if(id == this.tasks[i].id){
        this.tasks.splice(i, 1);
      }
    } 
  }
}
