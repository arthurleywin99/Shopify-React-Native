export class User {
  constructor(
    public readonly id: number,
    public email: string,
    public phoneNumber: string,
    public avatar?: string,
  ) {}
}
