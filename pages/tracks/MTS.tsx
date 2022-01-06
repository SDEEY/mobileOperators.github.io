import React from 'react';
import Index from "../index";
import Form from "../../Components/Form";

const Mts = () => {

    return (
        <>
            <Index>
                <div className='name'>МТС</div>
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

export default Mts
