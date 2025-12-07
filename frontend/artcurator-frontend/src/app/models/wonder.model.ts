import { User } from './user.model';
import { Comment } from './comment.model';

export interface Wonder {
  id?: string;
  name: string;
  image: {
    url: string;
  };
  description: string;
  tag: string[];
  user: User;
  likes?: User[];
  comments?: Comment[];
  createdAt?: string;
  updatedAt?: string;
}
