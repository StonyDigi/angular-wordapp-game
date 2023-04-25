import { Guid } from "guid-typescript";

export class Word {
    uid: string = Guid.create().toString();
    hun: string = '';
    eng: string = '';
    goods: number = 0;
    bads: number = 0;
  static uid: any;
}
