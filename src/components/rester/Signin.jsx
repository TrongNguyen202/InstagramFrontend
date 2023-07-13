import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { signinAction } from '../../redux/Action';
import { getUserProfileAction } from '../../redux/user/Action';
import { store } from '../../redux/Store';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid email address").required("email is required"),
  password: Yup.string().min(8, "password must be at least 8 characters").required("password is required"),
});

const Signin = () => {
  const initialValue = { email: "", password: "" }
  const dispatch = useDispatch();
  const {user} = useSelector(store=>store)
  const jwt = localStorage.getItem("token")


  const handleSubmit = (values) => {
    console.log("values :", values)
    dispatch(signinAction(values))
    
  }
  useEffect(()=>{
    if(jwt) dispatch(getUserProfileAction(jwt))
     
  },[jwt]
  )

useEffect(()=>{
  if(user.reqUser?.username){
    navigate(`/${user.reqUser?.username}`)
  }
},[jwt,user.reqUser]
)



  const navigate = useNavigate()
  const handleNavigate=() =>  navigate("/signup")
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
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input className='w-full ' {...field} id='password' placeholder='password...' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button className='w-full mt-4' colorScheme='blue' type='submit' >
                  sign in
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-300 mt-5'>
        <p className='text-center'>If you don't have account <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer' >Sign up</span></p>
      </div>
    </div>
  )
}

export default Signin