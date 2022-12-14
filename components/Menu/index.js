import React from 'react';
import {Image, View, Text} from 'react-native'

import styles from './styles'
import LogoImg from '../../assets/Logo/logo.png'

const Menu = () => {
    return (
        <View>
            <Image style={styles.Logo} source={LogoImg} />
            <View style={styles.ButtonOff}>
                <Text style={styles.ButtonText}>Offline</Text>
            </View>
            <View style={styles.ButtonOn}>
                <Text style={styles.ButtonText}>Online</Text>
            </View>
        </View>
    )
}

export default Menu;