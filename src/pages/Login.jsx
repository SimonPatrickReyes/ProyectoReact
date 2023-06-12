import React, { useState, useContext  } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formSend, changeFormSend] = useState(false);
  const users = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [failed, setFailed] = useState(false);
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()



  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        validate={(valores) => {
          let errors = {};

          //validar email
          if (!valores.email) {
            errors.email = 'Write an email'
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
            errors.email = "The email can only contain letters, numbers, periods, hyphens and underscores"
          }
          return errors
        }}

        onSubmit={(valores, { resetForm }) => {
          console.log('Form send');
          setFailed(false)

          var userRegistered = users[0].filter(user => user.email == valores.email && user.password == valores.password)[0]
          console.log(users[0])
          console.log(userRegistered)

          if (userRegistered != null) {
            setUser(true) //UserContext
            changeFormSend(true);

            window.localStorage.setItem("email", userRegistered.email);
            window.localStorage.setItem("password", userRegistered.password);
            resetForm();
            navigate('/')
          } else {
            setFailed(true)
          }


        }}
      >
        {({ errors }) => (
          <Form className="formLogin">
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="formLogin__field" />
              <ErrorMessage name='email' component={() => (
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
                className="formLogin__field" />
            </div>
            <button type="submit">Log in</button>
            {formSend && <span className='login__span'>Successfully logged</span>}
            {failed && <span>Check again your credentials</span>}
            <a href="http://localhost:5173/register">Not registered yet?</a>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;

