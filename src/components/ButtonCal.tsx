import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
/* import { styles } from '../theme/apptheme'; */
import { StyleSheet } from "react-native";

interface Props {
    text: string;
    color?: string | undefined | null;
    ButtonWidth?: boolean;
    action: (action: string) => void;
}

export const ButtonCalc = ({ text, color, ButtonWidth = false, action  }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View
                style={[
                    styles.button, {
                        backgroundColor: (color ? color : '#2D2D2D'),
                        width: (ButtonWidth) ? 180 : 80
                    }
                ]}

            /* another way to handle multiple conditional style 
            style={{
                ...styles.button, 
                    backgroundColor: (color ? color : '#2D2D2D')
                
            }} */
            >
                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        /* backgroundColor: '#333333', */
        /* alignItems: 'center' */

    },
    buttonText: {
        textAlign: 'center',
        padding: 15,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});

