import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'



const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className='login-screen min-h-screen bg-gray-100 flex justify-center items-center'>
            <div className='login max-w-xs sm:max-w-md w-full space-y-8'>
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Registrate</h2>
                    <hr className="mt-2 mb-6" />
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                        placeholder='Tu email'
                        name='email'
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md my-3'
                        placeholder='Password'
                        name='password'
                    />

                    <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type='submit'>Crear usuario</button>
                    <Link to="/login" className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Ya estoy registrado, logearme</Link>
                </form>

            </div>
        </div>
    )
}

export default RegisterScreen