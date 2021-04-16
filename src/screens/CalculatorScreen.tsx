import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCal';
import { styles } from '../theme/apptheme';

export const CalculatorScreen = () => {

    const [number, setNumber] = useState('0');
    const [previousNumber, setpreviousNumber] = useState('0');

    const clean = () => {
        setNumber('0');
    }

    const buildNumber = (textNumber: string) => {
        //Checking decimal point
        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            //check if the textNumber is a decimal point
            if (textNumber === '.'){
                setNumber(number + textNumber);
            } //check if the textNumber is a zero and there is a point 
            else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } //check if the textNumber is different to zero and there is no point
            else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            } //avoiding 000.0
            else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else{
            setNumber(number + textNumber);
        }
        
    }

    const deleteButton = () => {
        if (number.length === 1) {
            setNumber('0')
        } else if (number.length === 2 && number.includes('-')) {
            setNumber('0')
        } else {
            // setNumber(number.slice(0, number.length-1)); 
            setNumber(number.slice(0, -1));
        }
    }
    
    //another solution for the deleteButton
    /* const deleteButton = () => {
        let negative = '';
        let temporalNumber = number;
        
        if (number.includes('-')) {
            negative = '-';
            temporalNumber = number.substr(1);
        }

        if (temporalNumber.length > 1) {
            setNumber(negative + temporalNumber.slice(0, -1));
        } else {
            setNumber('0');
        }

    } */

    const changeNumberForPrevious = () => {
        if (number.endsWith('.')) {
            setpreviousNumber(number.slice(0, -1));
        } else{
            setpreviousNumber(number);
        }
        setNumber('0');
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.littleResult} >{previousNumber}</Text>
            <Text 
                style={styles.result} 
                    adjustsFontSizeToFit 
                        numberOfLines={1}
            >
                {number}
            </Text>

            <View style={styles.row}>                      
                <ButtonCalc text='C' color='#9B9B9B' action = {clean}/>
                <ButtonCalc text='+/-' color='#9B9B9B' action = {positiveNegative}/>
                <ButtonCalc text='del' color='#9B9B9B' action = {deleteButton}/>
                <ButtonCalc text='/' color='#FF9427' action = {clean}/>
            </View>

            <View style={styles.row}>                      
                <ButtonCalc text='7' action = {buildNumber}/>
                <ButtonCalc text='8' action = {buildNumber}/>
                <ButtonCalc text='9' action = {buildNumber}/>
                <ButtonCalc text='X' color='#FF9427' action = {clean}/>
            </View>

            <View style={styles.row}>                      
                <ButtonCalc text='4' action = {buildNumber}/>
                <ButtonCalc text='5' action = {buildNumber}/>
                <ButtonCalc text='6' action = {buildNumber}/>
                <ButtonCalc text='-' color='#FF9427' action = {clean}/>
            </View>

            <View style={styles.row}>                      
                <ButtonCalc text='1' action = {buildNumber}/>
                <ButtonCalc text='2' action = {buildNumber}/>
                <ButtonCalc text='3' action = {buildNumber}/>
                <ButtonCalc text='+' color='#FF9427'action = {clean}/>
            </View>

            <View style={styles.row}>                      
                <ButtonCalc text='0' ButtonWidth action = {buildNumber}/>
                <ButtonCalc text='.' action = {buildNumber}/>
                <ButtonCalc text='=' color='#FF9427' action = {clean}/>
            </View>
        </View>
    )
}