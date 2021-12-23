import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() indexEvent: number;
  eventForm: FormGroup;
  evento: Event;

  constructor(
    private fb: FormBuilder,
    private dataLocalService: DataLocalService
  ) {}

  ngOnInit() {
    this.eventForm = this.fb.group({
      titulo: [null, Validators.required],
      contenido: [null, Validators.required],
    });

    if (this.indexEvent >= 0) {
      // modificar
      console.log('indexEvent: ' + this.indexEvent);
      this.eventForm.setValue(this.dataLocalService.getEvent(this.indexEvent));
    }
  }

  onSubmit() {
    try {
      console.log(this.eventForm.value);

      if (this.indexEvent) {
        // modificar evento
        this.dataLocalService
          .setEvent(this.eventForm.value, this.indexEvent)
          .then((result) => {
            console.log(result);
          });
      } else {
        // agregar evento
        this.dataLocalService
          .guardarEvento(this.eventForm.value)
          .then((result) => {
            this.eventForm.reset();
          });
      }
    } catch (e) {
      console.log(e);
      // this.presentToast(e, 'danger');
    }
  }
}
