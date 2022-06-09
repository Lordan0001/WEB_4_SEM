import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ThirdPage extends React.Component {
  total() {
    let total = 0,
      totalWeight = 0,
      delivery = 0;
    for (let i = 0; i < this.props.goods.length; i++) {
      total +=
        (this.props.goods[i].price *
          (100 - this.props.goods[i].discount) *
          this.props.goods[i].added) /
        100;
      totalWeight += this.props.goods[i].weight * this.props.goods[i].added;
    }

    switch (this.props.delivery) {
      case "courier":
        if (total < 50) delivery += 5;
        total += delivery;
        break;
      case "post":
        Math.round(totalWeight);
        delivery += 3 * totalWeight;
        total += delivery;
        break;
      default:
        break;
    }

    return (
      <>
        <h2>Total price: {total}$</h2>
        <h4>Price for delivery: {delivery}$</h4>
        <h5 className="hh">Total weight: {totalWeight}kg</h5>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="progress_bar_bg">
          <div className="progress_bar" style={{ width: "100%" }} />
        </div>
        <ul className="list">
          {this.props.goods.map((item) => {
            return (
              <li className="list" key={item.key}>
                <h2 className="h22">{item.name}</h2>
                <h3 className="h23">Amount: {item.added}</h3>
                <h3 className="h24">
                  Price for one item:{" "}
                  {(item.price * (100 - item.discount)) / 100}$
                </h3>
                <h4>
                  Price for all items:{" "}
                  {(item.price * (100 - item.discount) * item.added) / 100}$
                </h4>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        {this.total()}
        <h3 className="h25">Delivery: {this.props.delivery}</h3>
        <h3 className="hh">Payment by: {this.props.payment}</h3>
        {this.props.address && <h3>address: {this.props.address}</h3>}
        <Link to="/secondPage">
          <button className="puk" >Previous page</button>
        </Link>
        <Link to="/">
          <button className="puk" >Confirm</button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    delivery: state.deliveryMethod,
    payment: state.paymentMethod,
    address: state.address,
  };
};

export default connect(mapStateToProps)(ThirdPage);
