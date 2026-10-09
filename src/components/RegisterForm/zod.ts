import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

export const registerUserFormSchema = z.object({
    firstName: z.string().min(1, "Primeiro nome é obrigatório"),
    lastName: z.string().min(1, "Último nome é obrigatório"),

    email: z
        .email("Email inválido")
        .min(1, "E-mail é obrigatório"),

    password: z
        .string()
        .min(8, "A senha deve ter pelo menos 8 caractéres"),
    
    confirmPassword: z.string().min(1, "Confirmação de senha obrigatória"),

    cpf: z
        .string()
        .min(11, "CPF é obrigatório")
        .refine(isValidCPF, "CPF inválido"),
    
    birthDate: z
        .string()
        .refine(
            (date) => !isNaN(Date.parse(date)),
            "Data de nascimento inválida"
        ),
    
    cellphone: z.string().nonempty("Telefone é obrigatório")
})
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["ConfirmPassword"],
});

type RegisterFormData = z.infer<typeof registerUserFormSchema>

export function RegisterForm(){
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: ""
        },
        criteriaMode: "all"
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    }
}