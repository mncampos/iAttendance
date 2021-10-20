import React from 'react';
import PasswordInput from '../átomos/components.passwordInput';
import EmailInput from '../átomos/components.emailInput';
import { View, Linking } from 'react-native'
import { Button } from 'react-native-paper'


export function Card({navigation}){
    // const { users } =  this.props;
    return(      
        <View>
          { console.log(users) };
          {/* <section className="MovieCard">
            <img src={ movie.imagePath } alt={ movie.title } />
            <h4>{ movie.title }</h4>
            <h5>{ movie.subtitle }</h5>
            <p>{ movie.storyline }</p>
            <Rating rating={ movie.rating } />
          </section>         */}
      </View>
    );
}
export default Card;