import React, { useState } from 'react'

const USER = [
    {
        firstName: "Mike",
        lastName: "Ekim",
        balance: 1000000
    },
    {
        firstName: "Dominic",
        lastName: "Cinimod",
        balance: 403020
    },
    {
        firstName: "Chad",
        lastName: "Dach",
        balance: 1500095571
    },
    {
        firstName: "Come",
        lastName: "Forth",
        balance: 324.565
    },
];



const GetUserBalance = () => {

    function FirstName() {
        const inputFirstName = USER.map((user) => {
            return (
                <FirstName key={user.firstName} />
            );
        });
    };

    function LastName() {
        const inputLastName = USER.map((user) => {
            return (
                <LastName key={user.lastName} />
            );
        });
    };

    const [balance, setBalance] = useState(0);


    return (
        <div className="">
            <form>
                <input type="text" onChange={FirstName} />
                <input type="text" onChange={LastName} />
                <button type='submit'>{GetUserBalance}</button>
            </form>
        </div>
    )
}

export default GetUserBalance