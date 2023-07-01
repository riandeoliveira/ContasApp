export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  authenticated: boolean;
};

export type InstallmentType = {
  price: string;
  installment: string;
};

export type BillType = {
  account_name: string;
  purchase_amount: string;
  installments_quantity: number;
  installments_list: InstallmentType[];
};
