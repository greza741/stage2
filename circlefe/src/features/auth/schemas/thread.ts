import { z } from "zod";

export const createThreadScema = z.object({
    content: z.string(),
    image: z.instanceof(FileList)
    .refine((file) => file.length == 1, "File is required!"),
});

export type CreateThreadFormInputs = z.infer<typeof createThreadScema>