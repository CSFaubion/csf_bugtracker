import { authority } from "./authority";

export interface UserPrinciple
{
  userId: number,
  username: string,
  enabled: boolean,
  name: string,
  phone: string,
  email: string,
  authorities: authority[]
}