import { Component } from "react";

export class SortTable extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.goods };
  }

  goods = [
    { id: "Xiaomi-Redmi-9A",  name: "We Are Chaos",  price: 597, inStock: 13,  img: "/images/Chaos.jpeg",
    desc: 
       "Одиннадцатый студийный альбом американской рок-группы Marilyn Manson, выпущенный 11 сентября 2020 года лейблами Loma Vista Recordings и Concord Music.",
    new: true,
    discount: 10,
    weight: 120,
    added: 1
  },
  { id: "Galaxy-a03",       name: "Heaven Upside Down",       price: 600, inStock: 4,   img: "/images/Heaven.png",
  desc: "Десятый студийный альбом американской рок-группы Marilyn Manson, выпущенный 6 октября 2017 год лейблом Loma Vista",
  new: true,
  discount: 20,
  weight: 199,
  added: 4
},

{ id: "Realme-C21Y",      name: "The Pale Emperor",      price: 300,  inStock: 50,  img: "/images/Pale.jpeg",
  desc: "Девятый студийный альбом американской рок-группы Marilyn Manson.",
  new: false,
  discount: 40,
  weight: 130,
  added: 0
},

{ id: "Realme-C25s",      name: "Born Villain",      price: 473,  inStock: 140,   img: "/images/Born.jpg",
  desc: 
      "Восьмой студийный альбом американской рок-группы Marilyn Manson.",
  new: false,
  discount: 15,
  weight: 250,
  added: 2
},

{ id: "Vivo-2111",        name: "The High End of Low",        price: 478, inStock: 0,   img: "/images/End.jpg",
  desc: "Седьмой студийный альбом американской рок-группы Marilyn Manson, выпущенный 26 мая 2009 года на лейбле Interscope Records.",
  new: false,
  discount: 30,
  weight: 314,
  added: 3
},

{ id: "Xiaomi-Redmi-10",  name: "Eat Me, Drink Me",  price: 670,   inStock: 16,  img: "/images/Eat.png",
  desc: "Шестой студийный альбом американской рок-группы Marilyn Manson, выпущенный 5 июня 2007 года лейблом Interscope Records.",
  new: false,
  discount: 25,
  weight: 329,
  added: 0
},

{ id: "Huawei-Y5p",       name: "The Golden Age of Grotesque",       price: 555,  inStock: 2,   img: "/images/Age.png",
  desc: "пятый студийный альбом группы Marilyn Manson, релиз которого состоялся 13 мая 2003 года.",
  new: false,
  discount: 5,
  weight: 176,
  added: 0
},
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
      if (+item.inStock < 3) inStockStyle = { background: "yellow" };
      if (+item.inStock === 0) inStockStyle = { background: "red" };
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
        <button className="but" onClick={() => this.sort("name")}>Name</button>
      </td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("price")}>Price</button>
      </td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("inStock")}>In Stock</button>
      </td>
      <td style={this.styles.td}>Image</td>
      <td style={this.styles.td}>Description</td>
      <td style={this.styles.td}>Is New</td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("discount")}>Discount</button>
      </td>
    </tr>,
  ];

  render() {
    return (
      <table style={this.styles.table}>
        <tbody>
          {this.head}
          {this.table()}
        </tbody>
      </table>
    );
  }
}
