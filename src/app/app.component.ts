import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Instituto Cultural Mendoza';

  approvedStudents = ['Bruno', 'Maia'];
  failedStudents = ['Paula', 'Carlos'];

  deleteList(index: number) {
    this.approvedStudents = this.approvedStudents.filter((_, i) => index != i);
    // el guion bajo es para saber q ese valor no se esta usando
  }
}
