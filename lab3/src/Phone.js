import React, { Component } from 'react'

export default class Phone extends Component {
  render() {
    return (
      <div>

<table >
        <thead ><td>Страна</td><td>Формат номера телефона</td><td>Операторы</td></thead>
        <tbody>
            <tr><td> Беларусь</td><td><mark>+375 (XX) XXX-XX-XX</mark></td><td>МТС, A1, life:)</td></tr>
            <tr><td> Россия</td><td><mark>+7 (XXX) XXX-XX-XX</mark></td><td>Билайн, Мегафон, МТС, Tele2</td></tr>
            <tr><td> Украина</td><td><mark>+380 (XX) XXX-XX-XX</mark></td><td>Lifecell, Vodafone, Київстар</td></tr>
            <tr><td> Польша</td><td><mark>+48 XXX-XXX-XXX</mark></td><td>Orange, Play, Plus, T-mobile</td></tr>
            <tr><td> Литва</td><td><mark>+370 (XX) XXX-XX-XX</mark></td><td>Telia, Bite, Tele2</td></tr>
            <tr><td> Латвия</td><td><mark>+371 XXXX-XXXX</mark></td><td>LMT, Tele2, Bite</td></tr>
        </tbody>
    </table>


      </div>
    )
  }
}
