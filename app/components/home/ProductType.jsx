import React from 'react'
import { Link } from 'react-router'

export default class ProductType extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container block product-type">
				<div className="row">
					<div className="col-sm-4 col-md-4">
						<div className="img-block line-1">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/image-cate_zpsl60oehs8.jpg" alt="product-type" className="img-responsive" />
							<p className="text-center"><Link to={'#'}>Spinner</Link></p>
						</div>
						<div className="img-block line-1">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img2-cate_zpsj29lzkqx.jpg" alt="product-type" className="img-responsive" />
							<p className="text-center"><Link to={'#'}>Rubik</Link></p>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="img-block line-2">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img3-cate_zpsogr7lgka.jpg" alt="tut" className="img-responsive" />
							<p className="text-center"><Link to={'#'}>Hướng dẫn chơi</Link></p>
						</div>
					</div>
					<div className="col-sm-4 col-md-4">
						<div className="img-block line-1">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/image-cate_zpsl60oehs8.jpg" alt="product-type" className="img-responsive" />
							<p className="text-center"><Link to={'#'}>Spinner</Link></p>
						</div>
						<div className="img-block line-1">
							<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img2-cate_zpsj29lzkqx.jpg" alt="product-type" className="img-responsive" />
							<p className="text-center"><Link to={'#'}>Rubik</Link></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}