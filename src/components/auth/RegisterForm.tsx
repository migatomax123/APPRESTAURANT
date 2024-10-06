'use client'
import { useForm } from "react-hook-form"
import React, { useState } from 'react'
import { AcmeLogo } from "../commons/icons/AcmeLogo"
import apiAuth from "../../model/apiAuth";
import { IRegister } from "../../interfaces/IRegister"
import Link from "next/link"

const RegisterForm = () => {    
  const { register, handleSubmit } = useForm<IRegister>()
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const onRegisterUser = async ({username,email,password}: IRegister ) => {
      try{
        const registro = { username, email, password }
        const data  = await apiAuth.register(registro);
        setIsSuccess(true);
        setMessage(data.msg);
      } catch (error:any){
        console.error('Error:', error);
        if (error.response) {
          // El servidor respondió con un código de estado diferente de 2xx
          setIsSuccess(false);
          setMessage(error.response.data.message); // Configura el mensaje de error recibido del servidor
        } else if (error.request) {
          // La solicitud se hizo pero no se recibió una respuesta
          setIsSuccess(false);
          setMessage('No se recibió una respuesta del servidor');
        } else {
          // Hubo un error antes de enviar la solicitud
          setIsSuccess(false);
          setMessage('Error al enviar la solicitud');
        }
    }
      }
         
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <AcmeLogo />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={ handleSubmit(onRegisterUser) } noValidate>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Usuario
                </label>
                <div className="mt-2">
                  <input
                    { ...register('username', {
                      required: 'usuario es obligatorio'
                    })}
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    { ...register('email', {
                      required: 'email es obligatorio'
                    })}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    { ...register('password', {
                      required:'Password es requerido'
                    })}
                    id="password"
                    name="password"
                    type="password"
                    minLength={6}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account? {' '}
              <Link href={'/auth/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
              </Link>
            </p>
          </div>
        </div>
          {message && (
            <div className={`${isSuccess ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'} text-center px-4 py-3 border rounded relative`} role="alert">
              <p>{message}</p>
            </div>
          )}
      </>
    )
}

export default RegisterForm