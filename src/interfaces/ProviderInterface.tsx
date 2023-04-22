export class ProviderInterface {
  id?  : string;
  name!: string;
  phone!: string;
  email!: string;
  nit!: string;
  lineOfBusiness!: string;
  addresses!: Address[];
  accounts!: Account[];
  createdAt?: Date;
  updatedAt?: Date;
}


export class Address {
  complement!: string;
  city!: string;
  state!: string;
  town!: string;
}
export class Account {
  accountNumber!: string;
  accountType!: string;
  titularName!: string;
  bank!: string;
}







