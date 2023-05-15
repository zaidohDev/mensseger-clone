'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub } from 'react-icons/bs';

import Input from "../../components/inputs/Input";
import Button from "../../components/Button";
import AuthSocialButton from './AuthSocialButton';

type VariantProps = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<VariantProps>('LOGIN');
  const [isLoading, setIsloading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('REGISTER');
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);

    if (variant === 'REGISTER') {
      // axios Register
    }

    if (variant === 'LOGIN') {
      // nextAuth signIn
    }
  }

  const socialAction = (action: string) => {
    setIsloading(true);

    //nextAuth Social Sign In
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
    ">
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
      ">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}


        >
          {variant === 'REGISTER' && (
            <Input
              label="name"
              id="name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            label="Email address"
            id="email"
            type="emai"
            register={register}
            errors={errors}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit" >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="
              absolute
              inset-0
              flex
              items-center
              ">
              <div
                className="
                  w-full
                  border-t
                  border-gray-300"
              />
            </div>
            <div
              className="
                relative
                flex
                justify-center
                text-sm"
            >
              <span
                className="
                  bg-white
                  px-2
                  text-gray-500"
              >
                Or continue with
              </span>
            </div>
          </div>
          <div
            className="
              mt-6
              flex
              gap-2"
          >
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm














