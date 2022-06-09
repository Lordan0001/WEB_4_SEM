import {useEffect, useState} from 'react'
import '../../Styles/SortTable.css'
import RowList from './RowList'

import Chaos from '../../Images/Chaos.jpeg'
import Heaven from '../../Images/Heaven.png'
import Pale from '../../Images/Pale.jpeg'
import Born from '../../Images/Born.jpg'
import End from '../../Images/End.jpg'
import Eat from '../../Images/Eat.png'
import Age from '../../Images/Age.png'




const SortTable = ({setProductsList}) => {
    const [rows, setRows] = useState([
        {
            id: 1,
            name: "We are Chaos",
            price: 100,
            count: 2,
            image: Chaos,
            description: 'We Are Chaos (stylized in all caps)[1] is the eleventh studio album by American rock band Marilyn Manson. It was produced by Marilyn Manson and Shooter Jennings, and was released on September 11, 2020, by Loma Vista Recordings and Concord Music.',
            new: true,
            discount: 5
        },
        {
            id: 2,
            name: "Heaven Upside Down",
            price: 90,
            count: 25,
            image: Heaven,
            description: 'Heaven Upside Down is the tenth studio album by American rock band Marilyn Manson. It was released on October 6, 2017 by Loma Vista Recordings and Caroline International.',
            new: true,
            discount: 10
        },
        {
            id: 3,
            name: "The Pale Emperor",
            price: 80,
            count: 30,
            image: Pale,
            description: 'The Pale Emperor is the ninth studio album by American rock band Marilyn Manson.',
            new: false,
            discount: 0
        },
        {
            id: 4,
            name: "Born Villain",
            price: 70,
            count: 7,
            image: Born,
            description: 'Born Villain is the eighth studio album by American rock band Marilyn Manson. It was released on April 25, 2012 by Cooking Vinyl and Marilyn Mansons independent record label Hell, etc.',
            new: false,
            discount: 7
        },
        {
            id: 5,
            name: "The High End of Low",
            price: 65,
            count: 1,
            image: End,
            description: 'The High End of Low is the seventh studio album by American rock band Marilyn Manson. It was released on May 20, 2009 by Interscope Records.',
            new: false,
            discount: 5
        },
        {
            id: 6,
            name: "Eat Me, Drink Me",
            price: 55,
            count: 0,
            image: Eat,
            description: 'Eat Me, Drink Me is the sixth studio album by American rock band Marilyn Manson. It was released on June 5, 2007, by Interscope Records.',
            new: false,
            discount: 0
        },
        {
            id: 7,
            name: "The Golden Age of Grotesque",
            price: 40,
            count: 45,
            image: Age,
            description: 'The Golden Age of Grotesque is the fifth studio album by American rock band Marilyn Manson. It was released on May 7, 2003, by Nothing and Interscope Records.',
            new: false,
            discount: 50
        },
    ]);
    // asc - по возрастанию, desc - по убыванию
    const [sort, setSort] = useState('asc')

    // передача элементов вверх - родительскому компоненту
    useEffect(() => {
        setProductsList(rows)
    }, [rows])

    const byField = (field, type) => { // сортировка массива объектов
        switch (type) {
            case 'asc': return (a, b) => a[field] > b[field] ? 1 : -1;
            case 'desc': return (a, b) => a[field] < b[field] ? 1 : -1;
            default:
        }
    }

    const sortTable = (e) => {
        let copy = Object.assign([], rows);
        let val = e.target.value
        let field

        switch (val) {
            case 'Row': field = 'id'; break
            case 'Name': field = 'name'; break
            case 'Price': field = 'price'; break
            case 'Count': field = 'count'; break
            case 'Discount': field = 'discount'; break
			default:
        }

        copy.sort(byField(field, sort))

        if(sort === 'asc') setSort('desc')
        else setSort('asc')

        setRows(copy)
    }

    return (
        <table className="productsTable">
            <caption>Products</caption>
            <thead>
                <tr>
                    <th><input type="button" value={'Row'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Name'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Price'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Count'} onClick={sortTable}/></th>
                    <th><input type="button" value={'Image'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Description'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'New'} onClick={sortTable} disabled/></th>
                    <th><input type="button" value={'Discount'} onClick={sortTable}/></th>
                </tr>
            </thead>
            <RowList rows={rows}/>
        </table>
    )
}

export default SortTable
