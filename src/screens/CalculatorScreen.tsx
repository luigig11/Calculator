import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCal';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/apptheme';



export const CalculatorScreen = () => {

    const {
        number,
        previousNumber,
        clean,
        buildNumber,
        deleteButton,        
        positiveNegative,
        btnDivision,
        btnSum,
        btnSubstraction,
        btnMultiplication,
        calcular

    } = useCalculator();
    return (
        <View style={styles.calculatorContainer}>
            {
                (previousNumber !== '0') && (
                    <Text style={styles.littleResult} >{previousNumber}</Text>
                )
            }

            <Text
                style={styles.result}
                adjustsFontSizeToFit
                numberOfLines={1}
            >
                {number}
            </Text>

            <View style={styles.row}>
                <ButtonCalc text='C' color='#9B9B9B' action={clean} />
                <ButtonCalc text='+/-' color='#9B9B9B' action={positiveNegative} />
                <ButtonCalc text='del' color='#9B9B9B' action={deleteButton} />
                <ButtonCalc text='/' color='#FF9427' action={btnDivision} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text='7' action={buildNumber} />
                <ButtonCalc text='8' action={buildNumber} />
                <ButtonCalc text='9' action={buildNumber} />
                <ButtonCalc text='X' color='#FF9427' action={btnMultiplication} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text='4' action={buildNumber} />
                <ButtonCalc text='5' action={buildNumber} />
                <ButtonCalc text='6' action={buildNumber} />
                <ButtonCalc text='-' color='#FF9427' action={btnSubstraction} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text='1' action={buildNumber} />
                <ButtonCalc text='2' action={buildNumber} />
                <ButtonCalc text='3' action={buildNumber} />
                <ButtonCalc text='+' color='#FF9427' action={btnSum} />
            </View>

            <View style={styles.row}>
                <ButtonCalc text='0' ButtonWidth action={buildNumber} />
                <ButtonCalc text='.' action={buildNumber} />
                <ButtonCalc text='=' color='#FF9427' action={calcular} />
            </View>
        </View>
    )
}