import { User } from "./user.model";

export interface Comment {
  id?: string;
  comment: string;
  createdBy: User;
  createdAt?: string;
}
