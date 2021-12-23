import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  constructor(
    public dataLocalService: DataLocalService,
    private router: Router
  ) {}

  ngOnInit() {
    // obtener listado de
    this.dataLocalService.cargarEventos().then((eventos) => {
      console.log(eventos);
    });
  }

  visualizar(i) {
    this.router.navigate(['/message', i]);
  }

  finalizar(item, i) {
    console.log(item);
    this.dataLocalService.deleteEvento(i).then((data) => {
      console.log('evento eliminado.');
      console.log(data);
    });
  }
}
