import React, {FormEvent} from 'react';
import Index from "../index";

const Mts = () => {

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <Index>
                <div>
                    <p>МТС</p>
                    <form onSubmit={submitHandler}>
                        <input type="text"/>
                        <input type="text"/>
                        <button onClick={(e) => console.log(e)}>Send</button>
                    </form>
                </div>
            </Index>

            <style jsx>
                {`

                `}
            </style>
        </>
    );
};

export default Mts;