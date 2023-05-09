import { useContext, useEffect } from "react";

// Form Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Components
import { Form, InputField, TextButton, ErrorText, UploadImageDiv, UploadImage, UploadImageText } from "./styles";
import { ControlledInput } from "../../components/ControlledInput";
import { Button } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CreateUser } from "../../services/user";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function FirstSignUpForm() {
  const { setUser } = useContext(UserContext)

  const navigator = useNavigation()

  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigator.navigate(route)
  }

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

  const nameRegex = /^[A-Za-z]{3,}(?:(?:\s+|-)[A-Za-z]+)*(?:\s+[A-Za-z]{1,})?$/
  const createUserFormSchema = z.object({
    name: z
      .string().regex(nameRegex, 'Nome Inválido')
      .nonempty("O campo de nome é obrigatório")
      .transform((name) => firstLettersUpperCase(name)),

    username: z
      .string()
      .nonempty("O campo de nome é obrigatório"),
  });

  type createUserFormDTO = z.infer<typeof createUserFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormDTO>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = ({ name, username }: createUserFormDTO) => {
    setUser({ name, username })
    handleNavigate('signUpSecondPage')
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

        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </InputField>


      <InputField>
        <ControlledInput
          control={control}
          icon="user"
          placeholder="Username"
          name="username"
        />
        {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
      </InputField>

      <Button onPress={handleSubmit(onSubmit)}>
        <TextButton>
          Continuar
        </TextButton>
        <Feather
          name={"arrow-right"}
          size={20}
          color={"#fff"}
        />
      </Button>
    </Form>
  );
}

export function SecondSignUpForm() {
  const { setUser } = useContext(UserContext)

  const navigator = useNavigation()

  function handleNavigate(route: keyof ReactNavigation.RootParamList) {
    navigator.navigate(route)
  }

  const createUserFormSchema = z.object({
    city: z
      .string()
      .nonempty('O campo de cidade é obrigatório'),

    email: z
      .string()
      .email("Digite um e-mail válido")
      .nonempty("O campo de e-mail é obrigatório")
      .toLowerCase()
  })

  type createUserFormDTO = z.infer<typeof createUserFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormDTO>({
    resolver: zodResolver(createUserFormSchema),
  });

  function onSubmit({ city, email }: createUserFormDTO) {
    setUser({ city, email })
    handleNavigate('signUpThirdPage')
  };

  return (
    <Form>
      <InputField>
        <ControlledInput
          control={control}
          icon="home"
          placeholder="Cidade"
          name="city"
        />

        {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
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
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </InputField>

      <Button onPress={handleSubmit(onSubmit)}>
        <TextButton>
          Continuar
        </TextButton>
        <Feather
          name={"arrow-right"}
          size={20}
          color={"#fff"}
        />
      </Button>
    </Form>
  );
}

export function ThirdSignUpForm() {
  const { user, setUser } = useContext(UserContext)

  const createUserFormSchema = z.object({
    description: z
      .string()
      .nonempty('O campo de descrição é obrigatório'),
    password: z
      .string()
      .nonempty("O campo de senha é obrigatório"),

    confirmPassword: z
      .string()
      .nonempty("O campo de confirmação de senha é obrigatório")
  })
    .refine(data => data.password === data.confirmPassword, {
      message: 'As senha não coincidem',
      path: ["confirmPassword"]
    })

  type createUserFormDTO = z.infer<typeof createUserFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormDTO>({
    resolver: zodResolver(createUserFormSchema),
  });

  function onSubmit({ description, password }: createUserFormDTO) {
    setUser({ password })
    CreateUser({ ...user, description, password })
  };

  return (
    <Form>

      <UploadImageDiv>
        <UploadImage>
          <Feather
            name={"upload"}
            size={60}
            color={Colors.primary}
          />
          <UploadImageText>Faça Upload do seu Avatar</UploadImageText>
        </UploadImage>
      </UploadImageDiv>

      <InputField>
        <ControlledInput
          control={control}
          icon="clipboard"
          placeholder="Descrição"
          name="description"
        />
        {errors.description && (
          <ErrorText>{errors.description.message}</ErrorText>
        )}
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
          <ErrorText>{errors.password.message}</ErrorText>
        )}
      </InputField>

      <InputField>
        <ControlledInput
          control={control}
          icon="lock"
          placeholder="Confirme sua senha"
          name="confirmPassword"
          secureTextEntry
        />
        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}
      </InputField>

      <Button onPress={handleSubmit(onSubmit)}>
        <TextButton>
          Continuar
        </TextButton>
        <Feather
          name={"arrow-right"}
          size={20}
          color={"#fff"}
        />
      </Button>
    </Form>
  );
}
