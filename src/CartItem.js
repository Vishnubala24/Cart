import React from "react";

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: 'https://m.economictimes.com/thumb/msid-93747525,width-1200,height-900,resizemode-4,imgsize-45376/iphone-14-max-iphone-14-pro-max-see-which-apple-phones-demand-scaling-new-heights.jpg'
        }
        // this.increaseQty = this.increaseQty.bind(this);
    }

    increaseQty = () => {
        // console.log('This', this.state);
        // Below will not re-render the componenet with change
        // this.state.qty += 1;

        // Form 1 - Using setState with Shallow merging - Batching is applied (Only last is applied) - is asynchronous
        // this.setState({ qty : this.state.qty + 1}, () => {console.log(this.state)});

        // Form 2 - Using prevState obj - Batching is perfomed (But all changes are taken)- is asynchronous
        this.setState( (prevState) => {
                return { qty: prevState.qty + 1 }
            },
            () => {console.log(this.state)}
        );
    }

    decreaseQty = () => {
        if(this.state.qty <=0 )
            return;

        this.setState({ qty : this.state.qty - 1});
    }

    render() {
        // Object destructuring
        const {price, title, qty} = this.props.product;

        console.log('render');
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="product" style={styles.image} src = {this.state.img}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25, marginTop: 5} }> {title} </div>
                    <div style={ {color: '#777', marginTop: 5} }> Price: {price} </div>
                    <div style={ {color: '#777', marginTop: 5} }> Quantity: {qty} </div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img alt="increase" onClick={this.increaseQty.bind(this)} className="action-icons" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img alt="decrease" onClick={this.decreaseQty} className="action-icons" src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                        <img alt="delete" className="action-icons" src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" /> 
                    </div>
                </div>
            </div>
        )
    }
};

const styles = {
    image: {
        width: 165,
        height: 160,
        borderRadius: 10
    }
}

export default CartItem;