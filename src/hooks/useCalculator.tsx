import { useRef, useState } from "react";

enum Operadores {
    sum,
    substraction,
    multiplication,
    division
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0');
    const [previousNumber, setpreviousNumber] = useState('0');
    const lastOperation = useRef<Operadores>();

    const clean = () => {
        setNumber('0');
        setpreviousNumber('0');
    }

    const buildNumber = (textNumber: string) => {
        //Checking decimal point
        if (number.includes('.') && textNumber === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            //check if the textNumber is a decimal point
            if (textNumber === '.') {
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
        } else {
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
        } else {
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

    const btnDivision = () => {
        changeNumberForPrevious();
        lastOperation.current = Operadores.division;
    }

    const btnSum = () => {
        changeNumberForPrevious();
        lastOperation.current = Operadores.sum;
    }

    const btnSubstraction = () => {
        changeNumberForPrevious();
        lastOperation.current = Operadores.substraction;
    }

    const btnMultiplication = () => {
        changeNumberForPrevious();
        lastOperation.current = Operadores.multiplication;
    }

    const calcular = () => {
        const number1 = Number(number);
        const number2 = Number(previousNumber);

        switch (lastOperation.current) {
            case Operadores.sum:
                setNumber(`${number1 + number2}`);

                break;
            case Operadores.substraction:
                setNumber(`${number2 - number1}`);

                break;
            case Operadores.multiplication:
                setNumber(`${number1 * number2}`);

                break;
            case Operadores.division:
                setNumber(`${number2 / number1}`);

                break;
        }
        setpreviousNumber('0');
    }

    return {
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
    }

}