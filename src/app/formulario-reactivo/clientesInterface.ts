export interface clientesInterface {
  firstName: string;
  lastName: string;
  status:
    | 'Por vencer'
    | 'Actualizado'
    | 'Vencido'
    | 'Notificado'
    | 'Espera firma';
  lastUpdate: string;
  type: 'sin cambios' | 'con cambios' | '';
  lastNotification: string;
  file: string;
}
