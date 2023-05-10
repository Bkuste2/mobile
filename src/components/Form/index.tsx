import { useContext, useEffect, useState } from "react";
import { Alert, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Form Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as ImagePicker from 'expo-image-picker'

// Components
import { Form, InputField, TextButton, ErrorText, UploadImageDiv, UploadImage, UploadImageText, UploadImagePressed, ImageUploaded } from "./styles";
import { ControlledInput } from "../../components/ControlledInput";
import { Button } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { Feather } from "@expo/vector-icons";

import { CreateUser } from "../../services/user";
import { Colors } from "../../patterns/theme";
import { uploadPhoto } from "../../services/uploadPhoto";

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
  const { user, setUser } = useContext(UserContext)

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
    setUser({ ...user, city, email })
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
  const [avatarUrl, setAvatarUrl] = useState<string>('')


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

  const { control, handleSubmit, formState: { errors }, } = useForm<createUserFormDTO>({
    resolver: zodResolver(createUserFormSchema),
  });

  function onSubmit({ description, password }: createUserFormDTO) {
    setUser({ ...user, description, password, avatar: avatarUrl })
    CreateUser({ ...user, description, password })
  };

  function formatImageForUpload(image) {
    const uri = image.uri;
    const name = uri.split('/').pop();
    const type = `image/${name.split('.').pop()}`;
    return {
      uri,
      name,
      type,
    };
  }


  const handlePickerImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        'Permissão necessária',
        'Permita que sua aplicação acesse as imagens'
      );
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1,
      });

      if (!canceled) {
        const blobfile = await (await fetch(`file://${assets[0].uri}`)).blob()

        await uploadPhoto({ file: formatImageForUpload(assets[0]), blob: blobfile })
          .then((downloadURL) => {
            setAvatarUrl(downloadURL)
            console.log(avatarUrl);

          })
          .catch((error) => {
            console.error(`Erro no upload: ${error}`);
          });

      }
    }
  };
  return (
    <Form>

      <UploadImagePressed onPress={handlePickerImage}>
        {avatarUrl
          ? (
            <>
              <ImageUploaded>
                <Image source={{ uri: avatarUrl }} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
              </ImageUploaded>
              <Text style={{ fontSize: 20, color: Colors.primary, fontWeight: "bold" }}>{user.name}</Text>
            </>
          )
          : (
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
          )
        }
      </UploadImagePressed>


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

