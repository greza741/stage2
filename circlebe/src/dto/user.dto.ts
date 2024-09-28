export type CreateUserDTO = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = {
  fullname: string;
  username: string;
  // password: string;
  bio?: string;
  profile?: FileList;
  bgImage?: FileList;
};
