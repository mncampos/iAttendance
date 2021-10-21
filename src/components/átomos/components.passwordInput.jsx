import React from 'react';
import { TextInput } from 'react-native-paper';

const PasswordInput = () => {

    const[text, setText] = React.useState('');

    return (
        <TextInput
            mode="outlined"
            placeholder="Insira sua senha"
            label="Senha"
            value={ text }
            onChangeText={text => setText(text)}
            secureTextEntry={true}
        />
    );
}

export default PasswordInput;