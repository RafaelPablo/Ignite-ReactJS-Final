import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { useForm } from 'react-hook-form'

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm()

  async function handlePreRegister() {}

  return (
    <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
      <TextInput
        crossOrigin=""
        size="sm"
        prefix="ignite.com/"
        placeholder="your-user"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reserve
        <ArrowRight />
      </Button>
    </Form>
  )
}
