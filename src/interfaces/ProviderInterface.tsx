export class ProviderInterface {
  id!: number;
  name!: string;
  phone!: string;
  email!: string;
  nit!: string;
  lineOfBusiness!: string;
  addresses!: Address[];
  accounts!: Account[];
}

export class Address {
  id!: number;
  fullAddress!: string;
  city!: string;
  state!: string;
  country!: string;
  town!: string;
}
export class Account {
  id!: number;
  accountNumber!: string;
  accountType!: string;
  titularName!: string;
  bank!: string;
}
