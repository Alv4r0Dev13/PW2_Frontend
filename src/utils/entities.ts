export type UserE = {
  id: string;
  username: string;
  email: string;
  profileUrl: string;
  score: number;
};

export type StoredUserE = UserE & {
  token: string;
};

export type PostE = {
  id: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  score: number;
  user: Omit<UserE, 'username' | 'email' | 'score'> & { name: string };
};