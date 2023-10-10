import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalService } from 'src/app/api/local.service';

@Component({
  selector: 'app-modal-local',
  templateUrl: './modal-local.component.html',
  styleUrls: ['./modal-local.component.scss'],
})
export class ModalLocalComponent  implements OnInit {


  constructor(private sLocal:LocalService, private modal:ModalController) { }
  name:string = ''
  cep:string = ''
  city:string = ''
  street:string = ''
  number:string = ''
  ngOnInit() {}
  newLocal(){
    this.sLocal.newLocal({
      name: this.name,
      cep: this.cep,
      city: this.city,
      street: this.street,
      number:this.number
    }).then(()=>{
      this.modal.dismiss()
    })
  }
}
