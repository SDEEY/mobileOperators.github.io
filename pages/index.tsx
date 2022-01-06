import React from 'react';
import ListOfMobileOperators from "../Components/ListOfMobileOperators";

const Index: React.FC = ({children}) => {
    return (
        <>
            <div className='container'>
                <ListOfMobileOperators/>
            </div>
            {children}

            <style jsx>
                {`
                  .container{
                    margin: 0 auto;
                    max-width: 1200px;
                  }
                `}
            </style>
        </>
    );
};

export default Index;