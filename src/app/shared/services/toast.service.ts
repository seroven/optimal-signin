import { Inject, Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastsMessages } from "../constants/toast-messages";
import { EnumTypeMessage } from "../enums/type-message.enum";

@Injectable({
  providedIn: 'root',
})
export class ToastService{

  constructor(private messageService:MessageService){}

  public showMessage(typeMessage:EnumTypeMessage){
    const message = ToastsMessages.find(m => m.title == typeMessage);
    this.messageService.add({ severity: message?.severity, summary: message?.summary, detail: message?.detail });
  }


}