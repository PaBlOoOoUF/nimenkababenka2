
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';
import {React, useCallback, useEffect, useState} from 'react';

export const Form =()=>{
    const[country, setCountry] = useState('');
    const[city, setCity] = useState('');
    const[subject, setSubject] = useState('');
    const {tg} = useTelegram();
    const onSendData = useCallback(()=>{
        const data = {
            country, city, subject
        }
        tg.sendData(JSON.stringify(data))
    }, [city, country, subject])

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(()=>{
        if (!country || !city){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }, [country, city])

    const onChangeCity = (e) =>{
        setCity(e.target.vaule);
    }
    const onChangeCountry = (e) =>{
        setCountry(e.target.vaule);
    }
    const onChangeSubject = (e) =>{
        setSubject(e.target.vaule);
        console.log(country, city, subject)
    }
        
    return(
        <div className='container'>
    <h3>Введите ваши данные:</h3>
    <input
    classname='input'
    type = 'text'
    placeholder='Город'
    value = {city}
    onChange = {onChangeCity}
    
    />
    <input
    className='input'
    type = 'text'
    placeholder='Улица'
    value = {country}
    onChange= {onChangeCountry}
    />
    <select  value  = {subject} onChange={onChangeSubject} className='select'>
    <option  value ={'legal'}>Pablo Spike</option>
    <option  value ={'legal'}>Pablo Farm</option>
    </select>
    </div>
    )
}