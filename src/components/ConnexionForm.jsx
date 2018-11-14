import React from 'react';

const ConnexionForm = props => {
    return (
        <form
            className='connexion-form'
            onSubmit={event => event.preventDefault()}
        >
            <label className='label-connexion' htmlFor='name'>Name</label>
            <input
                className='input-connexion'
                id='name'
                name='name'
                type='text'
                placeholder='John Doe'
                value={props.value}
                onChange={(event) => {props.onChangeValue(event)}}
            />
            <button
                type='submit'
                className='btn-connexion'
            >Connexion</button>
        </form>
    );
};

export default ConnexionForm;