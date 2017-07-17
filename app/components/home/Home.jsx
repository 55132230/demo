import React from 'react'

import Header from '../Header.jsx'
import Slide from '../element/Slide.jsx'
import Footer from '../Footer.jsx'
import ProductType from './ProductType.jsx'
import NewProducts from './NewProducts.jsx'
import BestSellProducts from './BestSellProducts.jsx'
import TopNews from './TopNews.jsx'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home">
				<Header />
				<Slide />

				<ProductType />
				<NewProducts />
				<BestSellProducts />
				<TopNews />

				<Footer />
			</div>
		)
	}
}
