import React from "react";
import { deliveryMethod, paymentMethod, address } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SecondPage extends React.Component {
    state = {
        address: true,
    };

    radiobuttonsHandler(e) {
        if (e.target.value === "myself")
        {
            this.setState({ address: false })
        } else if (e.target.value === "courier")
        {
            this.setState({ address: true })
        } else if (e.target.value === "post")
        {
            this.setState({address: true})
        }

        if (e.target.name === "delivery") {
            return this.props.deliveryMethod(e.target.value);
        }
        return this.props.paymentMethod(e.target.value);
    }

    addressHandler = (e) => {
        this.props.address(e.target.value);
    };

    render() {
        return (
            <>
                <div className="progress_bar_bg">
                    <div
                        className="progress_bar"
                        style={{ width: "66%" }}
                    />
                </div>
                <h2>Choose delivery method:</h2>
                <ul className="delivery">
                    <li>
                        <input
                            type="radio"
                            name="delivery"
                            value="courier"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        Courier
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="delivery"
                            value="post"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        Post
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="delivery"
                            value="myself"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        Pickup
                    </li>
                    <li className="address">
                        Your address:
                        <input
                            type="text"
                            disabled={!this.state.address}
                            onChange={this.addressHandler}
                        />
                    </li>
                </ul>
                <h2>Choose payment method:</h2>
                <ul className="payment">
                    <li>
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        By cash
                    </li>

                    <li>
                        <input
                            type="radio"
                            name="payment"
                            value="creditCard"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        By credit card
                    </li>

                    <li>
                        <input
                            type="radio"
                            name="payment"
                            value="transfer"
                            onClick={(e) => this.radiobuttonsHandler(e)}
                        />
                        By transfer
                    </li>
                </ul>
                <Link to="/">
                    <button className="puk">Previous page</button>
                </Link>
                <Link to="/thirdPage">
                    <button className="puk">Next page</button>
                </Link>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
    };
};
const mapDispatchToProps = {
    deliveryMethod,
    paymentMethod,
    address,
};
export default connect(mapStateToProps, mapDispatchToProps)(SecondPage);
