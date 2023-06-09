import { Control, Controller } from "react-hook-form";
import { Input, InputProps } from "../Input";

type Props = InputProps & {
  control: Control<any>;
  name: string;
};

export function ControlledInput({ name, control, ...rest }: Props) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
}
