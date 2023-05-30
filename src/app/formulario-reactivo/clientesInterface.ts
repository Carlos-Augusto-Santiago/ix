export interface clientesInterface {
  firstName: string;
  lastName: string;
  lastUpdate: string;
  status:
    | 'Por vencer'
    | 'Actualizado'
    | 'Vencido'
    | 'Notificado'
    | 'Espera firma';
  type: 'sin cambios' | 'con cambios';
  file: string;
  lastNotification: string;
}
