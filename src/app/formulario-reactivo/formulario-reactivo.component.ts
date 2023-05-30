import { Component } from '@angular/core';
import { clientesInterface } from './clientesInterface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss'],
})
export class FormularioReactivoComponent {
  // Formulario reactivo

  // variable para la busqueda
  search: string = '';

  // variable para las opciones del select
  selectOptions = [
    { id: 0, name: 'Estatus - Todos' },
    { id: 1, name: '2' },
    { id: 2, name: '3' },
  ];
  selectedValue: number = 0;

  // Data de usuarios
  data: Array<clientesInterface> = [
    {
      firstName: 'Enrique',
      lastName: 'Pena',
      lastUpdate: '15.07.2023',
      status: 'Por vencer',
      type: 'sin cambios',
      file: '',
      lastNotification: '12.07.2023',
    },
    {
      firstName: 'María',
      lastName: 'Sánchez',
      lastUpdate: '12.03.2023',
      status: 'Actualizado',
      type: 'con cambios',
      file: '',
      lastNotification: '12.07.2023',
    },
    {
      firstName: 'Juan',
      lastName: 'Escalona',
      lastUpdate: '01.06.2023',
      status: 'Vencido',
      type: 'sin cambios',
      file: '',
      lastNotification: '12.07.2023',
    },
    {
      firstName: 'Inversiones',
      lastName: 'Compass',
      lastUpdate: '24.05.2023',
      status: 'Notificado',
      type: 'con cambios',
      file: '',
      lastNotification: '12.07.2023',
    },
    {
      firstName: 'Inversiones',
      lastName: 'Compass',
      lastUpdate: '24.05.2023',
      status: 'Espera firma',
      type: 'con cambios',
      file: '',
      lastNotification: '12.07.2023',
    },
  ];
}
