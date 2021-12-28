import React from 'react'
// import "./apple's-website/css/style.css";
import '../../css/bootstrap.css';
// import './bootstrap';
import logo from '../../images/icons/logo.png';
import cart from '../../images/icons/cart.png';
import search from '../../images/icons/search-icon.png';


 function header() {
    return (
        <div>
            
	<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#"><img src={logo} /></a>

			    <div className="navbar-collapse collapse">
			        <ul id="nav" className=" navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search} /></a></li>
						
			        </ul>
			    </div>
                <a  className="navbar-brand mx-right js-scroll-trigger" href="/cart/"><img src={cart} /></a>
			</nav>
		</div>
	</div>
        </div>
    )
}
export default header;