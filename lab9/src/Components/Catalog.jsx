import React, {useState} from 'react'

const Catalog = ({productsList, setProductsList}) => {
    // asc - по возрастанию, desc - по убыванию
    const [sort, setSort] = useState('asc')

    const byField = (field, type) => { // сортировка массива объектов
        switch (type) {
            case 'asc':
                return (a, b) => a[field] > b[field] ? 1 : -1;
            case 'desc':
                return (a, b) => a[field] < b[field] ? 1 : -1;
            default:
        }
    }

    const sortProductsList = (e) => {
        let copy = productsList.slice()
        let value = e.target.value
        let field

        switch (value) {
            case 'Row': field = 'id'; break
            case 'Name': field = 'name'; break
            case 'Price': field = 'price'; break
            case 'Count': field = 'count'; break
            case 'Discount': field = 'discount'; break
            default:
        }

        copy.sort(byField(field, sort))

        if (sort === 'asc') setSort('desc')
        else setSort('asc')


        let newProductsList = [], indexToSlice = []
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].new) {
                newProductsList.push(copy[i])
                indexToSlice.push(i)
            }
        }


        indexToSlice.map((el, i) => copy.splice(el - i, 1))

        setProductsList([...newProductsList, ...copy])
    }

    return (
        <div className={'catalogContainer'}>
            <div className={'catalogSorts'}>
                <h3>Sort by:</h3>
                <input type="button" value={'Name'} onClick={sortProductsList}/>
                <input type="button" value={'Price'} onClick={sortProductsList}/>
                <input type="button" value={'Count'} onClick={sortProductsList}/>
                <input type="button" value={'Discount'} onClick={sortProductsList}/>
            </div>
            {productsList && productsList.map((product) => {
                return (
                    <div key={product.id} className={'catalogItem'}>
                        {product.new && <p className={'new'}>NEW!</p>}
                        <h2>{product.name.toUpperCase()}</h2>
                        <img src={product.image} alt="" style={{width: '200px'}}/>
                        {product.discount ?
                            <div>Price: {(product.price * (1 - product.discount / 100)).toFixed(2)}$ <s>{product.price}$</s></div> :
                            <div>Price: {product.price}$</div>}
                        <div>{product.description}</div>
                        <div>Count: {product.count}</div>
                        {product.discount > 0 && <div className={'discount'}>-{product.discount}%</div>}
                    </div>
                )
            })}
        </div>
    )
}

export default Catalog