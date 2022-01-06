import React from 'react';
import {useRouter} from "next/router";

const listItems = [
    {itemName: 'МТС', href: '/tracks/MTS', id: 1},
    {itemName: 'Билайн', href: '/tracks/Beeline', id: 2},
    {itemName: 'Мегафон', href: '/tracks/Megaphone', id: 3}
]

const ListOfMobileOperators = () => {
    const router = useRouter()

    return (
        <>
            <div className='containerListItems'>
                {listItems.map(item => <p key={item.id} onClick={() => router.push(item.href)}>{item.itemName}</p>)}
            </div>

            <style jsx>
                {`
                  *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                  }
                
                  .containerListItems{
                    font-size: 30px;
                    font-weight: 700;
                    width: 200px;
                  }
                  
                  p{
                    cursor: pointer;
                  }
                `}
            </style>
        </>
    );
};

export default ListOfMobileOperators;