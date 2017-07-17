import React from 'react'
import __ from 'lodash';
import { Link } from 'react-router'
import Product from '../element/Product.jsx'

export default class BestSellProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			'data':[
			{
				image: "http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png",
				name: "Shengshou 3x3x3 Aurora",
				price: 100000
			},
			{
				image: "http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png",
				name: "Shengshou 3x3x3 Aurora",
				price: 100000
			},
			{
				image: "http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png",
				name: "Shengshou 3x3x3 Aurora",
				price: 100000
			},
			{
				image: "http://i1266.photobucket.com/albums/jj538/dinhvnquang/sp1_zpssqbqw0b3.png",
				name: "Shengshou 3x3x3 Aurora",
				price: 100000
			}
			]
		}
	}

	render() {
		return (
			<div className="container block" id="best-sell-products" >
				<h2 className="text-center">Top sản phẩm bán chạy</h2>
				<div className="row product">
					{
						__.map(this.state.data,(value,idx) => {
							return(
								<Product key={idx} value={value} />
							)
						})
					}
				</div>
				<p className="text-center loadmore"><Link to={'#'}>Xem thêm</Link></p>
			</div>
		)
	}
}