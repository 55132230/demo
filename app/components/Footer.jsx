import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="main-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 info">
							<div className="col-md-6">
								<a href="#"><img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/LASTEST-01_zpsymk9eoks.png" alt="logo" className="img-responsive" /></a>
							</div>
							<div className="col-md-6">
								<h4>Thông tin chi tiết</h4>
								<p><i className="fa fa-home" aria-hidden="true"></i>rubiknhatrang.com</p>
								<p><i className="fa fa-phone" aria-hidden="true"></i>0123456789</p>
								<p><i className="fa fa-envelope" aria-hidden="true"></i>rubiknhatrang.gmail.com</p>
								<p><i className="fa fa-map-marker" aria-hidden="true"></i>33 nha trang</p>
							</div>
						</div>
						<div className="col-md-6 subcribe">
							<h3>Đăng kí email để nhận thông tin mới nhất</h3>
							<div className="form-group">
								<input type="text" name="register" className="form-control" />
								<a href="#">Đăng ký</a>
							</div>
							<div className="social-icon text-center">
								<Link to={'#'}><i className="fa fa-facebook" aria-hidden="true"></i></Link>
								<Link to={'#'}><i className="fa fa-youtube" aria-hidden="true"></i></Link>
								<Link to={'#'}><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
								<Link to={'#'}><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}