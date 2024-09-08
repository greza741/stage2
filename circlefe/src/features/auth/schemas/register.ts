import { z } from "zod";

export const registerSchema = z.object({
    fullname: z.string().min(1, "Fullname Required!"),
    email: z.string().email("Invalid email!"),
    password: z.string().min(4, "Password must be at least 4 characters!"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>