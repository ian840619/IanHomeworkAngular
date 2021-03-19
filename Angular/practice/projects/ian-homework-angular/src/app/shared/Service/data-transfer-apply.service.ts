import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { DataTransferApplyModel} from '../Models/data-transfer-apply-model'
import { EnvType } from '../Enums/env-type';
@Injectable({
  providedIn: 'root'
})
export class DataTransferApplyService {
  readonly rootUrl = "https://datatransferapplyapi.azurewebsites.net/api/DataTransferApply/list/"
  public list!: DataTransferApplyModel[];
  constructor(private http:HttpClient) { 
    
  }

  getList(mode:EnvType){ 
      this.http.get<DataTransferApplyModel[]>(this.rootUrl+mode)
        .toPromise().then(resp=>this.list = resp as DataTransferApplyModel[]);
  }
  
}
