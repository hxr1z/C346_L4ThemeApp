import React from 'react';
import {View, Text, Image} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Game = ({title,description,rating,picture,icon_name})=> {
    return (
        <View style={{marginTop:20}}>
            <View style={{marginLeft: 5, alignContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <MaterialCommunityIcons name={icon_name} size={40} color='black' />
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginTop: 5, paddingRight: 40}}>{title}</Text>
                </View>
                <Image source={picture}
                       style={{width:400,height:600, marginTop: 20}}/>
                <Text style={{fontWeight:'bold', fontSize: 30, textAlign: 'center', marginTop: 20}}>{rating}</Text>
                <Text style={{alignContent: 'center', marginTop: 20}}>{description}</Text>
            </View>
        </View>
    );
};

export default Game;