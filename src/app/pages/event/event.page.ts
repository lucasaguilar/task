import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataLocalService } from './../../services/data-local.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  //eventForm: FormGroup;

  constructor(
    // private fb: FormBuilder,
    // private dataLocalService: DataLocalService
  ) { }

  ngOnInit() {

    /*   this.eventForm = this.fb.group({
        titulo: [null, Validators.required],
        contenido: [null, Validators.required],
      }); */
  }
  /* 
    onSubmit() {
  
      try {
        console.log(this.eventForm.value);
        
        this.dataLocalService.guardarEvento(this.eventForm.value).then((result) => {
          this.eventForm.reset();
        });
        
  
      } catch (e) {
        console.log(e);
      }
    } */

}
