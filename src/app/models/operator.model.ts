import { OperatorCapability } from '.';
import { OperatorEvent } from '.';

export class Operator {
  public id: number;
  public lastName: string;
  public firstName: string;
  public scope: string;
  public manager: string;
  public shift: string;
  public contractType: string;
  public sso: number;
  public capabilities: OperatorCapability[];
  public events: OperatorEvent[];
}
