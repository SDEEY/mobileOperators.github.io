import React from 'react';
import Index from "../index";
import Form from "../../Components/Form";

const Megaphone = () => {

    return (
        <>
            <Index>
                <div className='name'>Мегафон</div>
                <Form/>
            </Index>

            <style jsx>
                {`
                  .name{
                    display: flex;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 600;
                  }
                `}
            </style>
        </>
    );
};

export default Megaphone;