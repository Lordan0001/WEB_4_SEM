import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import {Search} from "./Search.jsx";
import { signedIN } from "../redux/actions";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.array, isModalOpen: false, search: "", searchParameter: "partial" };
  }

  array = [
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

  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      arrayCopy = [...this.state.array].sort(function (a, b) {
        if (a.new || b.new) return 0;
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: arrayCopy });
  }

  sorts() {
    return (
      <div className="sorts">
        <button onClick={() => this.sort("name")}>Name</button>
        <button onClick={() => this.sort("price")}>Price</button>
        <button onClick={() => this.sort("inStock")}>In Stock</button>
        <button onClick={() => this.sort("discount")}>Discount</button>
      </div>
    );
  }

  onClickHandler(item, e) {
    this.props.addToCart(item);
    e.target.disabled = true;
    this.setState({isModalOpen: true});
  }

  goods() {
    return this.state.array
    .filter((item) => {
      if (!this.state.search) return item;
      switch (this.state.searchParameter) {
        case "partial":
          if (
            item.name.toLowerCase().includes(this.state.search.toLowerCase())
          ) {
            return item;
          }
          break;
        case "full":
          if (item.name.toLowerCase() === this.state.search.toLowerCase()) {
            return item;
          }
          break;
          default: return item;
      }
    })
    .map((item) => {
      return (
        <div className="one_good" key={item.id}>
          <img src={item.img} alt="" />
          <div className="text">
            <div className="discount">
              {item.new && <h2>New</h2>}
              <h2>{item.discount}%</h2>
              <button
                className="cart"
                onClick={(e) => this.onClickHandler(item, e)}
              >
                add to cart
              </button>
            </div>
            <h2>{item.name}</h2>
            <div className="prices">
              {item.discount && (
                <h2>{(item.price * (100 - item.discount)) / 100}$</h2>
              )}
              <h3>{item.price}$</h3>
            </div>
            <h4>Available: {item.inStock} items</h4>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  search = (item) => {
    this.setState({ search: item });
  };

  searchParameter = (item) => {
    this.setState({searchParameter: item})
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.signedIN(false);
  }


  render() {
    return (
      <>
        {/* КНОПКА ДЛЯ LOGOUT ИЗ ПРИЛОЖЕНИЯ, ДОП ЗАДАНИЕ*/}
        {/*<button className="but" name="buttonExit" onClick={this.handleClick}>Log off</button>*/}
      <Search search={this.search} searchParameter={this.searchParameter} />
        {this.sorts()}
        {this.goods()}
        {this.state.isModalOpen && ReactDOM.createPortal(
          <Modal toCatalog={this.closeModal}/>,
          document.getElementById("portal")
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  addToCart,
  signedIN
};

export default connect(null, mapDispatchToProps)(Catalog);
