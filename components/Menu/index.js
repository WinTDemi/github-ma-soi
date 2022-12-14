import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native'

import styles from './styles'
import LogoImg from '../../assets/Logo/logo.png'

const Menu = () => {
    return (
        <View>
            <Image style={styles.Logo} source={LogoImg} />
            <TouchableOpacity>
                <View style={styles.ButtonOff}>
                    <Text style={styles.ButtonText}>Offline</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.ButtonOn}>
                    <Text style={styles.ButtonText}>Online</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;