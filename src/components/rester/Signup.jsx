import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { signupAction } from '../../redux/Action';
import { store } from '../../redux/Store';
const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email address").required("email is required"),
  password: Yup.string().min(8, "password must be at least 8 characters").required("password is required"),
});
 const Signup = () => {
  const initialValue = { email: "", password: "" ,name:"", usernname:""}
  const dispatch = useDispatch();
  const {auth} =  useSelector((store)=>store);

  const handleSubmit = (values) => {
    console.log("value", values)
    dispatch(signupAction(values))
  }

  useEffect(()=>{
    if(auth.signup?.username){
         navigate("/login")
    }
  }
  )
  const navigate = useNavigate()
  const handleNavigate=() =>  navigate("/login")
  return (
    <div>
      <div>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img className='mb-5' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
          <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(formikProps) => (
              <Form className='space-y-5'>
                <Field name="email" >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input className='w-full ' {...field} id='email' placeholder='email...' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="username" >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <Input className='w-full ' {...field} id='username' placeholder='username...' />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name" >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <Input className='w-full ' {...field} id='name' placeholder='name...' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input className='w-full ' {...field} id='password' placeholder='password...' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button className='w-full mt-4' colorScheme='blue' type='submit' >
                  sign up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-300 mt-5'>
        <p className='text-center'>If you  have account already <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer' >Sign in</span></p>
      </div>
    </div>
  )
}

export default Signup