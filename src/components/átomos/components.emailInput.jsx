import React from 'react';
import { TextInput } from 'react-native-paper';

const EmailInput = () => {

    const[text, setText] = React.useState('');

    return (
        <TextInput
        mode = "outlined"
        placeholder = "Insira seu E-mail"
        label="E-mail"
        value={text}
        onChangeText={text => setText(text)} />
    );

}

export default EmailInput;