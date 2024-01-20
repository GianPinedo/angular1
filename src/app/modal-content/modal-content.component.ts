import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  @Input() title: string = '';
  constructor() { }
  closeModal() {
    // Implementa aquí la lógica para cerrar el modal
  }

}
