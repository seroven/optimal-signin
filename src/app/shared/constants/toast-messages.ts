import { MessageInterface } from "../interfaces/message.interface";
import { EnumSeverityMessage } from "../enums/severity-message.enum";
import { EnumTypeMessage } from "../enums/type-message.enum";

export const ToastsMessages:MessageInterface[] = [
  {
    title: EnumTypeMessage.LOGIN_ERROR,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Error',
    detail: 'Credentials are incorrect'
  },
  {
    title: EnumTypeMessage.LOGIN_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Session Started',
    detail: 'Correct credentials'
  },
  {
    title: EnumTypeMessage.USER_LOGGED,
    severity: EnumSeverityMessage.WARN,
    summary: 'User Logged',
    detail: 'This user already logged'
  },
  {
    title: EnumTypeMessage.LOGOUT_SUCCESS,
    severity: EnumSeverityMessage.SUCCESS,
    summary: 'Session Finished',
    detail: 'Successful sign out'
  },
  {
    title: EnumTypeMessage.EXPIRED_TOKEN,
    severity: EnumSeverityMessage.ERROR,
    summary: 'Expired Token',
    detail: 'Token has expired'
  }
]

