export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  posts: PostType[];
  profile: Profile;
}

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  authorId: number;
  author: UserType;
}

export interface Profile {
  id: number;
  bio: string;
  profileImgUrl: string;
  userId: number;
  user: UserType;
}
