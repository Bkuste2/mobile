import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ControlledInput } from "../../components/ControlledInput";
import { Form, InputField } from "./styles";
import { Button } from "./styles";

function firstLettersUpperCase(name: string) {
  return name
    .trim()
    .split(" ")
    .map((word) => {
      return word[0]
        .toLocaleUpperCase()
        .concat(word.substring(1).toLowerCase());
    })
    .join(" ");
}

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("O campo de nome é obrigatório")
    .min(3, "Nome Inválido")
    // All the first letters from the word will be UpperCase
    .transform((name) => firstLettersUpperCase(name)),

  email: z
    .string()
    .nonempty("O campo de e-mail é obrigatório")
    .email("Digite um e-mail válido")
    .toLowerCase(),

  password: z.string().nonempty(),
});

type createUserFormDTO = z.infer<typeof createUserFormSchema>;

export function SignUpForm({}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormDTO>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = ({ email, name, password }: createUserFormDTO) => {
    console.log({ email, name, password });
  };

  return (
    <Form>
      <InputField>
        <ControlledInput
          control={control}
          icon="user"
          placeholder="Nome"
          name="name"
        />

        {errors.name && <Text>{"Name " + errors.name.message}</Text>}
      </InputField>

      <InputField>
        <ControlledInput
          control={control}
          icon="mail"
          placeholder="Email"
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {errors.email && <Text>{"Email " + errors.email.message}</Text>}
      </InputField>

      <InputField>
        <ControlledInput
          control={control}
          icon="lock"
          placeholder="Senha"
          name="password"
          secureTextEntry
        />
        {errors.password && (
          <Text>{"Password " + errors.password.message}</Text>
        )}
      </InputField>

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </Button>
    </Form>
  );
}
