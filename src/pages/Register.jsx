import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink } from 'react-router-dom';
const Register = () => {
    const [formSend, changeFormSend] = useState(false)
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const userPicture="default"

    const emailEnUso = (email) => {
        console.log(email)
        var usado = users.filter(user => user.email == email);
        console.log(usado)
        if (usado.length === 0) {
            console.log("no usado")
            return false;
        }
        else {
            console.log("usado")
            return true;
        }
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    genero: '',
                    birthDate: '',
                    profileImage: userPicture
                }}

                validate={(valores) => {
                    let errors = {};
                    //validar name de usuario
                    if (!valores.name) {
                        errors.name = 'Write a username'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                        errors.name = "Username can only contain letters and spaces"
                    }
                    //validar email
                    if (!valores.email) {
                        errors.email = 'Write an email'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errors.email = "The email can only contain letters, numbers, periods, hyphens and underscores"
                    }
                    if (emailEnUso(valores.email)) {
                        errors.email = "Email already in use"
                    }
                    return errors
                }}

                onSubmit={(valores, { resetForm }) => {
                    console.log('Form send');
                    changeFormSend(true);
                    const newUser = { ...valores, profileImage: userPicture };
                    const updatedUsers = [...users, newUser];
                    setUsers(updatedUsers);
                    window.localStorage.setItem("users", JSON.stringify(updatedUsers));
                    resetForm();
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
                                className="formLogin__field" />
                            <ErrorMessage name='name' component={() => (
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
                        <div>
                            <label htmlFor="genero">Gender</label>
                            <label>
                                <Field type="radio" name="genero" value="M" id="M" />Male
                            </label>
                            <label>
                                <Field type="radio" name="genero" value="F" id="F" />Female
                            </label>
                            <label>
                                <Field type="radio" name="genero" value="N/S" id="N/S" />I prefer not to answer
                            </label>
                        </div>
                        <div>
                            <label>
                                <label htmlFor="birthDate">Birth Date</label>
                                <Field type="date" name="birthDate" id="birthDate" />
                            </label>
                        </div>
                        <button type="submit">Register</button>
                        {formSend && <span className='login__span'>Successfully registered</span>}
                        <NavLink to="/login" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Have you an account already?</p>
                    </NavLink>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Register;

