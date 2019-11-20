import { OperatorCapability } from '.';
import { OperatorEvent } from '.';

export class Operator {
  public id: number;
  public sso: number;
  public last_name: string;
  public first_name: string;
  public shift_id: number;
  //public contractType: string;
  //ublic manager: string;
  //public scope: string;
  public capabilities: OperatorCapability[];
  public events: OperatorEvent[];
}
