import React from 'react'
import { Link } from 'react-router'

export default class Product extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-3 item-block">
				<div className="item-image">
					<img src={this.props.value.image} alt={this.props.value.name} className="img-responsive" />
					<p className="detail"><a href="#product_link" title={this.props.value.name}>Xem Chi tiết</a></p>
					<span className="cart-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
				</div>
				<div className="item-info">
					<h4><a href="#product_link" title={this.props.value.name}>{this.props.value.name}</a></h4>
					<span className="price">{this.props.value.price} VNĐ</span>
				</div>
			</div>
		)
	}
}