import React from 'react';
// import { useSelector } from 'react-redux'; для jsx
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const User = () => {

    const { isLoading, user, error } = useTypedSelector(state => state.users)
    const { getUserById } = useActions();

    return(
        <div>
            <button onClick={() => getUserById(1)}>
                Get user
            </button>
            {
                isLoading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : user?.name ? (
                    <h1 className='text-2xl font-bold p-8'>User: {user.name}</h1>
                ) : (
                    <div>USER NOT FOUND</div>
                )
            }
        </div>
    );
};
