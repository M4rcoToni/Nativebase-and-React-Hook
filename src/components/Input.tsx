import {Input as NatviveBase, IInputProps, FormControl} from 'native-base'
type Props = IInputProps &{
    errorMessage?: string | null;
}
export function Input({ errorMessage = null,isInvalid ,...rest}:Props ) {
    const invalid = !!errorMessage || isInvalid;

    return (
    <FormControl mb={4} isInvalid={invalid}>
    <NatviveBase
        bg="gray.200"
        fontSize="md"
        h={16}
        {...rest}
        isInvalid={invalid}
        placeholderTextColor= "gray.500"
        _focus={{
            bg: "gray.400",
            borderWidth: 2,
            borderColor: "green.500"
        }}
    />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}