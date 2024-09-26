import { z } from "zod";

export const createThreadScema = z.object({
    content: z.string(),
    image: z.string()
});

export type CreateThreadFormInputs = z.infer<typeof createThreadScema>