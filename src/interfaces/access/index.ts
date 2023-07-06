import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AccessInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface AccessGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
}
