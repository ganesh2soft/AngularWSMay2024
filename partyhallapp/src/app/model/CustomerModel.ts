export class Customer {
    custId: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confpassword: string;
    phone: string;
    address: string;
    authStatus?:string;
  
    constructor(
      custId: number,
      email: string,
      firstName: string,
      lastName: string,
      password: string,
      confpassword:string,
      phone: string,
      address: string,
      authStatus:string
      
    ) {
      this.custId = custId;
      this.email = email;
      this.firstName = firstName;
      this.lastName = lastName;
      this.password = password;
      this.confpassword=confpassword;
      this.phone = phone;
      this.address = address;
      this.authStatus=authStatus || '';

    }
  }
  