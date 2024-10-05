import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  //el decorador @input nos sirve para indicar que esta propiedad la vamos a recibir desde el padre
  @Input() students: string[] = [];
  //el decorador @output nos sirve para noti9ficar al componente padre un evento que ocurrio en el componente hijo
  @Output() deleteList = new EventEmitter<number>();
}
