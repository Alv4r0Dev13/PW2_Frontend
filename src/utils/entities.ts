export type UserE = {
  id: string;
  username: string;
  email: string;
  profileURL: string;
  score: number;
};

export type StoredUserE = UserE & {
  token: string;
};

export type PostE = {
  id: string;
  authorId: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  score: number;
  date: string;
  user: {
    id: string;
    name: string;
    profileURL: string;
  };
};

export type CommentE = {
  id: string;
  authorId: string;
  content: string;
  likes: number;
  score: number;
  date: string;
  user: {
    name: string;
    profileURL: string;
  };
};
