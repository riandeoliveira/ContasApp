export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  authenticated: boolean;
};

export type BillType = {
  name: string;
  amount: number;
};
