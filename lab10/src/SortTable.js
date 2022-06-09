import { Component } from "react";

export class SortTable extends Component {
    constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, inStock: true, discount: true };
        this.state = { array: this.goods };
    }

    goods = [
        { id: "Syringe", name: "We Are Chaos", price: 250, inStock: 12, img: "/imgs/Chaos.jpeg", desc: "We Are Chaos (stylized in all caps)[1] is the eleventh studio album by American rock band Marilyn Manson.", new: true, discount: 0 },
        { id: "Water", name: "Heaven Upside Down", price: 220, inStock: 10, img: "/imgs/Heaven.png", desc: "Heaven Upside Down is the tenth studio album by American rock band Marilyn Manson.", new: true, discount: 10 },
        { id: "Copper", name: "The Pale Emperor", price: 240, inStock: 6, img: "/imgs/Pale.jpeg", desc: "The Pale Emperor is the ninth studio album by American rock band Marilyn Manson.", new: false, discount: 20 },
        { id: "Moon", name: "Born Villain", price: 340, inStock: 0, img: "/imgs/Born.jpg", desc: "Born Villain is the eighth studio album by American rock band Marilyn Manson.", new: false, discount: 0 },
        { id: "Coal", name: "The High End of Low", price: 210, inStock: 7, img: "/imgs/End.jpg", desc: "The High End of Low is the seventh studio album by American rock band Marilyn Manson.", new: false, discount: 0 },
        { id: "Off-road", name: "Eat Me, Drink Me", price: 200, inStock: 4, img: "/imgs/Eat.png", desc: "Eat Me, Drink Me is the sixth studio album by American rock band Marilyn Manson. ", new: false, discount: 10 },
    ];
    styles = {
        td: {
            padding: "10px 20px",
            border: "1px solid",
        },
        table: {
            margin: "100px",
            borderCollapse: "collapse",
        },
    };
    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            goodsCopy = [...this.goods].sort(function (a, b) {
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: goodsCopy });
    }
    table() {
        let stringNumber = 0;
        return this.state.array.map((item) => {
            let inStockStyle = {};
            if (+item.inStock < 3) inStockStyle = { background: "rgb(255, 240, 106)" };
            if (+item.inStock === 0) inStockStyle = { background: "rgb(248, 54, 54)" };
            return (
                <tr key={item.id}>
                    <td style={this.styles.td}>{++stringNumber}</td>
                    <td style={this.styles.td}>{item.name}</td>
                    <td style={this.styles.td}>${item.price}</td>
                    <td style={Object.assign({}, this.styles.td, inStockStyle)}>
                        {item.inStock}
                    </td>
                    <td style={this.styles.td}><img src={item.img} style={{ width: "50px" }} alt="" /></td>
                    <td style={this.styles.td}>{item.desc}</td>
                    <td style={this.styles.td}>{item.new ? "Yes" : "No"}</td>
                    <td style={this.styles.td}>{item.discount}%</td>
                </tr>
            );
        });
    }
    head = [
        <tr>
            <td style={this.styles.td}>№</td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("name")}>Name</button>
            </td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("price")}>Price</button>
            </td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("inStock")}>In Stock</button>
            </td>
            <td style={this.styles.td}>Image</td>
            <td style={this.styles.td}>Description</td>
            <td style={this.styles.td}>New</td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("discount")}>Discount</button>
            </td>
        </tr>,
    ];
    render() {
        return null
    }
}
