import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="main-header">
				<div id="top-header">
					<div className="container">
						<div className="text-right">
							<div className="social_icons">
								<Link to={'https://www.facebook.com/'}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
								<Link to={'https://www.youtube.com/'}><i className="fa fa-youtube" aria-hidden="true"></i></Link>
								<Link to={'https://www.pinterest.com/'}><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
								<Link to={'https://www.plus.google.com/'}><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
							</div>
							<div className="search">
								<input type="text" name="search" placeholder="Tìm kiếm" />
								<Link to={'#'}><i className="fa fa-search" aria-hidden="true"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div id="bottom-header">
					<div className="container">
						<div className="row">
							<div id="logo" className="col-md-2">
								<Link to={'/'}><img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/LASTEST-01_zpsymk9eoks.png" alt="logo" className="img-responsive" /></Link>
							</div>
							<div id="menu" className="col-md-10">
								<nav className="navbar navbar-inverse">
									<div className="container-fluid">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											</button>
										</div>
										<div className="collapse navbar-collapse" id="myNavbar">
											<ul className="nav navbar-nav navbar-right">
												<li className="active"><Link to={'/'}>Trang Chủ</Link></li>
												<li><Link to={'#'}>Giới thiệu</Link></li>
												<li className="dropdown">
													<Link to={'#'} className="dropdown-toggle" data-toggle="dropdown" >Sản Phẩm<span className="caret"></span></Link>
													<ul className="dropdown-menu">
														<li><Link to={'#'}>Fidget Toys</Link></li>
														<li><Link to={'#'}>Rubik</Link></li>
														<li><Link to={'#'}>Spinner</Link></li>
													</ul>
												</li>
												<li><Link to={'#'}>Hướng Dẫn Chơi</Link></li>
												<li><Link to={'/news'}>Tin Tức</Link></li>
												<li><Link to={'#'}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}