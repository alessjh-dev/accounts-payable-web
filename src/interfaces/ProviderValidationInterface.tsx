

export class ProviderValidation {
    name?: string;
    phone?: string;
    email?: string;
    nit?: string;
    lineOfBusiness?: string;
    hasAddress?: string;
    addresses?: AddressValidation[];
    accounts?: AccountValidation[];  
  }


  export class AddressValidation {
    index!: number;
    complement?: string;
    city?: string;
    state?: string;
    town?: string;
  }
  export class AccountValidation {
    index!: number;
    accountNumber?: string;
    accountType?: string;
    titularName?: string;
    bank?: string;
  }
 



