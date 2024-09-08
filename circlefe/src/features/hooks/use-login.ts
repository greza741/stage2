import { useState } from "react";
import { LoginForm } from "../auth/types";

export function useLoginForm() {
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSumbit() {
        console.log(`Data login: `, form)
    }
    return {
        handleChange,
        handleSumbit
    }
}