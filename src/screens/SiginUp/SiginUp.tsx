import { VStack, Heading, Center } from 'native-base';
import { useForm, Controller} from 'react-hook-form'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

type FormDataProps= {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const singUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o E-mail').email('E-mail invalido'),
  password: yup.string().required('Informe o Senha').min(6, 'A senha deve ter pelo menos 6 digitos'),
  password_confirm: yup
  .string()
  .required('Informe o Senha')
  .oneOf([yup.ref('password'), null], 'A configuração de senha não é igual.')
})

export  function SiginUp() {

  const {control, handleSubmit, formState: {errors}} = useForm<FormDataProps>({
    resolver: yupResolver(singUpSchema)
  });

  function handleSigniUp(data: FormDataProps){
    console.log(data);
    
  }

  return (
    <VStack bgColor="gray.300" flex={1} px={10}>
      <Center>
        <Heading my={24}>
          Crie sua conta
        </Heading>
      </Center>

    <Controller 
      control={control}
      name="name"
      
      render={({field: {onChange}}) => 
      <Input 
        placeholder='Nome'  
        onChangeText={onChange}
        errorMessage={errors.name?.message}
      />
     }
    />

    <Controller 
      control={control}
      name="email"
      render={({field: {onChange}}) => 
      <Input 
        placeholder='E-mail'  
        onChangeText={onChange}
        errorMessage={errors.email?.message}
        />
     }
    />

    <Controller 
      control={control}
      name="password"
      render={({field: {onChange}}) => 
      <Input 
        placeholder='Senha'  
        secureTextEntry
        onChangeText={onChange}
        errorMessage={errors.password?.message}
        />
     }
    />

    <Controller 
      control={control}
      name="password_confirm"
      render={({field: {onChange}}) => 
      <Input 
        placeholder='Confirme sua senha'
        secureTextEntry
        onChangeText={onChange}
        errorMessage={errors.password_confirm?.message}
        />
     }
    />
       
    
    <Button title='Cadastrar' onPress={handleSubmit(handleSigniUp)}/>
    </VStack>
  );
}