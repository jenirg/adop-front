import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("No es un correo electrónico"),
  password: z.string().min(6),
});

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // mode: "onSubmit",
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Correo electrónico:</label>
      <input
        className="text-black"
        id="email"
        placeholder="Ingrese su correo electrónico"
        type=""
        {...register("email")}
      />
      <ErrorMessage name="email" errors={errors} />
      <label htmlFor="password">Contraseña:</label>
      <input
        className="text-black"
        placeholder="Ingrese su contraseña"
        type="password"
        {...register("password")}
      />
      <ErrorMessage name="password" errors={errors} />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}