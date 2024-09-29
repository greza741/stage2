export type CreateUserDTO = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = {
  fullname: string;
  username: string;
  bio?: string;
  profile?: string;
  bgImage?: string;
};
