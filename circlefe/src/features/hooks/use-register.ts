import { useState } from "react";
import { RegisterForm } from "../auth/types";

export function useRegisterForm() {
    const [form, setForm] = useState<RegisterForm>({
        email: "",
        fullname: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSumbit() {
        console.log(`Data regiter: `, form)
    }
    return {
        handleChange,
        handleSumbit
    }
}