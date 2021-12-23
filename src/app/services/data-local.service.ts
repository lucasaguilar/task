import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from './../models/event.model';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  public eventos: Event[] = [];

  constructor() {
    console.log('ejecutando constructor de servicio de storage');
  }

  /**
   * agrega un evento y lo guarda en el storage
   *
   * @param evento Evento registrado
   */
  guardarEvento(evento: Event) {
    console.log(evento);

    return this.cargarEventos().then((eventosStorage: any) => {
      // cargo siempre los eventos del storage
      this.eventos = eventosStorage;

      // agrego el nuevo evento
      this.eventos.push(evento);

      Storage.set({
        key: 'eventos',
        value: JSON.stringify(this.eventos),
      });
    });
  }

  async cargarEventos() {
    const eventos = await Storage.get({ key: 'eventos' });

    console.log(eventos);

    if (eventos.value !== null) {
      this.eventos = JSON.parse(eventos.value);
    } else {
      this.eventos = [];
    }

    console.log(this.eventos);

    return this.eventos;
  }

  getEvent(index: number): Event {
    return this.eventos[index];
  }

  /**
   * @todo manejar exeption para indice no existente
   * @param evento
   * @param index
   */
  setEvent(evento: Event, index: number) {
    this.eventos[index] = evento;
    return this.actualizarStorage().then((data) => {
      console.log(data);
    });
  }

  actualizarStorage() {
    return Storage.set({
      key: 'eventos',
      value: JSON.stringify(this.eventos),
    });
  }

  deleteEvento(index: number) {
    this.eventos.splice(index, 1);
    return this.actualizarStorage();
  }

  /* deleteEventos() {
    return Storage.remove('eventos').then(() => {
      this.eventos = [];
      return true;
    });
  } */
}
