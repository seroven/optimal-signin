import { MessageInterface } from "../interfaces/message.interface";
import { EnumSeverityMessage } from "../enums/severity-message.enum";
import { EnumTypeMessage } from "../enums/type-message.enum";

export const ToastsMessages:MessageInterface[] = [
  {
    title: EnumTypeMessage.LOGIN_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Usuario y/o contraseña incorrectos'
  },
  {
    title: EnumTypeMessage.LOGIN_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Sesión Iniciada',
    detail: 'Credenciales correctas'
  }
]

