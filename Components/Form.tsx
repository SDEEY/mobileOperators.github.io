import React, {FormEvent, useState} from 'react';
import {useRouter} from "next/router";

const Form = () => {
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [sumError, setSumErrorError] = useState('')

    const router = useRouter()

    const phoneNumberValidateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

        regex.test(e.target.value) ? setPhoneNumberError('right') : setPhoneNumberError('wrong')

    }

    const sumValidateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        const sum = Number(e.target.value)

        sum >= 1 && sum <= 1000 ? setSumErrorError('right') : setSumErrorError('(1 >= sum <= 1000)')
    }

    const sendDataToServer = () => {
        //dispatch ThunkCreator
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }

        if (getRandomInt(2)){
            alert('Server error')
        } else {
            alert('Successfully')
            router.push('/')
        }
        // getRandomInt(2) ? alert('Server error') : alert('Successfully') && router.push('/')

    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        phoneNumberError === 'right' && sumError === 'right' ? sendDataToServer() : alert('Wrong data')
    }

    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                <div className='inputContainer'>
                    <input onChange={phoneNumberValidateHandler} placeholder={'phone number'} type="text"/>
                    <span>{phoneNumberError}</span>
                </div>
                <div className='inputContainer'>
                    <input onChange={sumValidateHandler} placeholder={'sum (rub)'} type="text"/>
                    <span>{sumError}</span>
                </div>
                <button>Send</button>
            </form>

            <style jsx>
                {`
                  .container {
                    display: flex;
                    justify-content: center;
                  }

                  form {
                    width: auto;
                    background-color: #5b4b4b;
                    padding: 40px;
                  }

                  .inputContainer {
                    display: flex;
                  }

                  .inputContainer span {
                    color: #ffcc00;
                    font-weight: 700;
                    margin-top: 10px;
                  }

                  form input {
                    width: 292px;
                    height: 40px;
                    margin-bottom: 20px;
                    margin-right: 10px;
                  }

                  form button {
                    padding: 15px 0;
                    width: 300px;
                    font-size: 20px;
                    font-weight: 600;
                  }
                  
                  @media (max-width: 430px) {
                      form {
                        padding: 20px;
                      }
                  
                      form input {
                        width: 192px;
                        height: 30px;
                        margin-bottom: 10px;
                        margin-right: 5px;
                      }
                  }
                `}
            </style>
        </div>
        
        
    );
};

export default Form;