import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const [formSend, changeFormSend] = useState(false)
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}

        validate={(valores)=>{
          let errors ={};

          //validar name de usuario
          if (!valores.name) {
            errors.name='Write a username'
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
            errors.name = "Username can only contain letters and spaces"
          }

          //validar email
          if (!valores.email) {
            errors.email='Write an email'
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
            errors.email = "The email can only contain letters, numbers, periods, hyphens and underscores"
          }
          return errors 
        }}

        onSubmit={(valores,{resetForm}) => {
          resetForm();
          console.log('Form send');
          changeFormSend(true)
        }}
      >
        {({ errors }) => (
          <Form className="formLogin">
            <div>
              <label htmlFor="name">Username</label>
              <Field 
              type="text" 
              id="name" 
              name="name"
              className="formLogin__field"/>
              <ErrorMessage name='name' component={()=>(
                <div className='error'>{errors.name}</div>
              )}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field 
              type="email"
               id="email" 
               name="email" 
               className="formLogin__field"/>
               <ErrorMessage name='email' component={()=>(
                <div className='error'>{errors.email}</div>
              )}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field 
              type="password" 
              id="password" 
              name="password" 
              className="formLogin__field"/>
            </div>
            <button type="submit">Log in</button>
            {formSend && <span className='login__span'>Successfully logged</span>} 
            <a href="http://localhost:5173/register">Not registered yet?</a>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

