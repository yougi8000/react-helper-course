import React from 'react';

const ConnexionForm = props => {
    return (
        <form className='connexion-form'>
            <label className='label-connexion' htmlFor='name'>Name</label>
            <input
                className='input-connexion'
                id='name'
                name='name'
                type='text'
                placeholder='John Doe'
            />
            <button
                type='submit'
                className='btn-connexion'
            >Connexion</button>
        </form>
    );
};

export default ConnexionForm;