import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TraderPreferenceInterface {
  id?: string;
  preference: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TraderPreferenceGetQueryInterface extends GetQueryInterface {
  id?: string;
  preference?: string;
  user_id?: string;
}
