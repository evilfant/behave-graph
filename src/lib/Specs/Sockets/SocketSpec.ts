import { SocketValueType } from '../../Core/Sockets/SocketValueType';

export default class SocketSpec {
  constructor(
    public name: string,
    public valueType: SocketValueType,
    public defaultValue: any = undefined,
  ) {}
}