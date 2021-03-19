import { Component, OnInit } from '@angular/core';
import { DataTransferApplyService} from '../shared/Service/data-transfer-apply.service'
import { NgForm } from '@angular/forms';
import { EnvType } from '../shared/Enums/env-type';
@Component({
  selector: 'app-data-transfer-apply-form',
  templateUrl: './data-transfer-apply-form.component.html',
  styleUrls: ['./data-transfer-apply-form.component.css']
})
export class DataTransferApplyFormComponent implements OnInit {

    public mode:number = EnvType.test;
    public envList!:Map<number,string>;
    constructor(public service: DataTransferApplyService) {

        this.envList  = new Map<number, string>([
          [EnvType.test, EnvType[EnvType.test]],
          [EnvType.prod, EnvType[EnvType.prod]]
        ]);
    } 

    ngOnInit(): void { 
        console.log(this.getEnvType(this.mode));
        this.service.getList(this.mode); 
    }

    onChange(event:Event):void{ 
        let selectElement : HTMLSelectElement = <HTMLSelectElement>event.target; 
        this.mode = Number(selectElement.value);
        this.service.getList(this.mode);
    }

    getEnvType(type:EnvType){
      return EnvType[type];
    }

}
