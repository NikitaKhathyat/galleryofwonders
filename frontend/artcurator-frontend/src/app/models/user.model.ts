export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  avatarUrl?: string; // Added for showing user avatars in UI
}
