import React from 'react'
import __ from 'lodash'
import { Link } from 'react-router'

export default class TopNews extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div id="top-news-slide" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#top-news-slide" data-slide-to="0" className="active"></li>
						<li data-target="#top-news-slide" data-slide-to="1"></li>
					</ol>
					<div className="carousel-inner">
						<div className="item active" style={{backgroundImage: 'url(http://i1266.photobucket.com/albums/jj538/dinhvnquang/slider-news_zps8vnwov5h.jpg)'}}>
							<div className="container">
								<div className="row">
									<h2 className="text-center">Tin tức nổi bật</h2>
									<div className="col-sm-5 image">
										<img src='http://i1266.photobucket.com/albums/jj538/dinhvnquang/img-slidernew_zps7gtzduez.jpg' className="img-responsive" />
									</div>
									<div className="col-sm-7 info">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										<p className="text-right"><Link to={'#'}>Đọc tiếp</Link></p>
									</div>
								</div>
							</div>
						</div>
						<div className="item" style={{backgroundImage: 'url(http://i1266.photobucket.com/albums/jj538/dinhvnquang/slider-news_zps8vnwov5h.jpg)'}}>
							<div className="container">
								<div className="row">
									<h2 className="text-center">Tin tức nổi bật</h2>
									<div className="col-sm-5 image">
										<img src='http://i1266.photobucket.com/albums/jj538/dinhvnquang/img-slidernew_zps7gtzduez.jpg' className="img-responsive" />
									</div>
									<div className="col-sm-7 info">
										<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										<p className="text-right"><Link to={'#'}>Đọc tiếp</Link></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}