import { z } from "zod";

export const profileScema = z.object({
  fullname: z.string(),
  username: z.string(),
  bio: z.string(),
  followers: z.number(),
  following: z.number(),
  // profile: z.string(),
  // bgImage: z.string(),
  // profile: z.instanceof(FileList)
  // .refine((file) => file.length == 1, "File is required!"),
  // bgImage: z.instanceof(FileList)
  // .refine((file) => file.length == 1, "File is required!"),
});

export type CreateProfileFormInputs = z.infer<typeof profileScema>;
