import { EnumSeverityMessage } from "../enums/severity-message.enum";
import { EnumTypeMessage } from "../enums/type-message.enum";

export interface MessageInterface{
  title: EnumTypeMessage;
  severity:EnumSeverityMessage;
  summary:string;
  detail:string;
}