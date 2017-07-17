import React from 'react'
import { Link } from 'react-router'

export default class Slide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home-slide" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#home-slide" data-slide-to="0" className="active"></li>
					<li data-target="#home-slide" data-slide-to="1"></li>
					<li data-target="#home-slide" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="item active">
						<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img-slider_zpsdjbfpcuh.jpg" alt="Slide1" style={{width: "100%"}} />
					</div>
					<div className="item">
						<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img-slider_zpsdjbfpcuh.jpg" alt="Slide2" style={{width: "100%"}} />
					</div>
					<div className="item">
						<img src="http://i1266.photobucket.com/albums/jj538/dinhvnquang/img-slider_zpsdjbfpcuh.jpg" alt="Slide3" style={{width: "100%"}} />
					</div>
				</div>
				<Link to={"#home-slide"} className="left carousel-control" data-slide="prev">
					<span className="glyphicon glyphicon-chevron-left"></span>
					<span className="sr-only">Previous</span>
				</Link>
				<Link to={"#home-slide"} className="right carousel-control" data-slide="next">
					<span className="glyphicon glyphicon-chevron-right"></span>
					<span className="sr-only">Next</span>
				</Link>
			</div>
		)
	}
}