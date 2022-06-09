import React from 'react'
import { SignUpEmailInput } from './SignUpEmailInput'
import { SignUpPasswordInput } from './SignUpPasswordInput'
import { PhoneInput } from './PhoneInput.js'

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {disableBtn: true,disableEmail:true};
        //this.onChange = this.onChange.bind(this);
    }

    inputHandle = (e) => {
        let check = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
            checked = check.test(e.target.value);
        if (checked===false) this.setState({disableBtn:true})
        else {
            this.setState({disableBtn:false})
        }
    };

    disableBtn = (value) => {
        this.setState({disableBtn: value})
        return this.state.disableBtn
    }
    disableEmail = (value) => {
        this.setState({disableEmail: value})
        return this.state.disableEmail
    }

    Click(){
        alert("Вы прошли регистрацию!");
    }

    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }
    month() {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }
    year() {
        let years = []
        for (let year = 1960; year < 2022; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }
    render() {
        return(
            <form>
                <h1>Регистрация</h1>
                <SignUpEmailInput disableEmail={this.disableEmail}/>
                <SignUpPasswordInput disableBtn={this.disableBtn}/>
                <input className="inputs" type="text" placeholder="Surname" value={this.state.value} onInput={this.inputHandle}/>
                <input className="inputs" type="text" placeholder="Name" value={this.state.value} onInput={this.inputHandle}/>
                <input className="inputs" type="text" placeholder="Patronymic" value={this.state.value} onInput={this.inputHandle}/>
                <input className="radiob" type="radio" name="gender" value={this.state.value}/>male
                <input className="radiob" type="radio" name="gender" value={this.state.value}/>female
                <p>Дата рождения: </p>
                <div className="date">
                {this.day()}
                {this.month()}
                {this.year()}
                </div>
                <br />
                <PhoneInput disableBtn={this.disableBtn}/>
                <br />
                <button onClick={this.Click} disabled={(this.state.disableBtn+this.state.disableEmail)}>Отправить</button>
            </form>
        )
    }
}