import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';


// Images
import logo from '../../images/mainlogonobg.png';
import logoWhite from '../../images/logo1.png';

const Header = () => {
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchFormOpen, setIsSearchBtn] = useState(false);
	const quikSearchBtn = () => setIsSearchBtn(!isSearchFormOpen);
	const quikSearchClose = () => setIsSearchBtn(false);
	const [activeItem, setActiveItem] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);
	
	const toggleSubmenu = (item) => {
		setActiveItem(item === activeItem ? null : item);
	};
	
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const handleMenuLinkClick = () => {
		if (window.innerWidth <= 991) {
			setIsMenuOpen(false);
		}
	};

	const handleContactBtnClick = () => {
		setIsMenuOpen(false);
		// Implement the logic to toggle the contact sidebar here.
	};

	const handleMenuCloseClick = () => {
		setIsMenuOpen(false);
	};
	

	
	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth >= 768);
		};

		// Check the screen size on initial render and whenever the window is resized
		handleResize();
		
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	},[]);
	
	const menuItems = [
		{
			id: 'home',
			name: 'Home',
			linkName: '#',
		},
		{
			id: 'blog',
			name: 'Blog',
			linkName: 'blog-grid',
		},
		{
			id: 'pages',
			name: 'About',
			linkName: '#',
			
			subItems: [
				{
					id: 'aboutus',
					displayName: 'About Us',
					linkName: 'about-us'
				},
				{
					id: 'doctors',
					displayName: 'Our doctors',
					linkName: 'doctors'
				},
				// {
				// 	id: 'faq',
				// 	displayName: "FAQ's",
				// 	linkName: 'faq'
				// },
				// {
				// 	id: 'booking',
				// 	displayName: 'Booking',
				// 	linkName: 'booking'
				// },
				// {
				// 	id: 'error',
				// 	displayName: 'Error 404',
				// 	linkName: 'error-404'
				// },
				// {
				// 	id: 'formLogin',
				// 	displayName: 'Login / Register',
				// 	linkName: 'form-login'
				// },
			]
		},
	
		{
			id: 'services',
			name: 'Services',
			linkName: '',
			
			subItems: [
				{
					id: 'Neurology',
					displayName: 'Neurology',
					linkName: 'Neurology'
				},
				{
					id: 'Neurodiagnosis',
					displayName: 'Neurodiagnosis',
					linkName: 'Neurodiagnosis'
				},
			]
		},
		// {
		// 	id: 'blog',
		// 	name: 'Blog',
		// 	linkName: '#',
			
		// 	subItems: [
		// 		{
		// 			id: 'blogGrid',
		// 			displayName: 'Blogs',
		// 			linkName: 'blog-grid'
		// 		},
		// 		// {
		// 		// 	id: 'blogDetails',
		// 		// 	displayName: 'Blog Details',
		// 		// 	linkName: 'blog-details'
		// 		// },
		// 	]
		// },
		{
			id: 'contactUs',
			name: 'Contact us',
			linkName: 'contact-us'
		}
	];
	
	return(
		<div className="page-wraper">
		<header className="header header-transparent rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg">
				<div className="menu-bar clearfix">
					<div className="container-fluid clearfix">
						<div className="menu-logo logo-dark">
							<Link to="/"><img src={logo} alt=""/></Link>
						</div>
						
						<button className={`navbar-toggler collapsed menuicon justify-content-end ${isMenuOpen ? 'open' : ''}`}
							type="button"
							onClick={toggleMenu}
							aria-label="Toggle navigation">
							<span></span>
							<span></span>
							<span></span>
						</button>

						<div className="secondary-menu">
							<ul>
								{/* <li className="search-btn">
									<button
										id="quikSearchBtn"
										type="button"
										className="btn-link"
										onClick={quikSearchBtn}
										>										
										<i className="las la-search"></i>
									</button>
								</li> */}
								<li className="num-bx"><a href="tel:(+91)7984807991"><i className="fas fa-phone-alt"></i> (+91) 798 480 7991</a></li>
								{/* <li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow"> <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li> */}
							</ul>
						</div>
						
						<div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
							<div className="menu-logo">
								<Link to="/"><img src={logoWhite} alt=""/></Link>
							</div>
							
							<ul className="nav navbar-nav">	
								{menuItems.map((item) => (
									<li
										key={item.id}
											className={`${activeItem === item.id ? 'open' : ''}`}
											onClick={() => toggleSubmenu(item.id)}
										>
										{item.subItems ? (
											<Link to="#">
												{item.name}
												<i className={`fas fa-plus`}></i>
											</Link>
										) : (
											<Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
												{item.name}
											</Link>
										)}
										{(isMobileView || activeItem === item.id) && item.subItems && (
											<ul className="sub-menu">
												{item.subItems.map((subItem, index) => (
													<li key={subItem.id}><Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}><span>{subItem.displayName}</span></Link></li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
							
							<ul className="social-media">
								<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
							</ul>
							
							<div className="menu-close" onClick={handleMenuCloseClick}>
								<i className="ti-close"></i>
							</div>
							
						</div>
					</div>
				</div>
			</Sticky>
			
			<div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
				<form>
					<input type="text" className="form-control" placeholder="Type to search"/>
					<span><i className="ti-search"></i></span>
				</form>
				<span id="searchRemove" onClick={quikSearchClose}><i className="ti-close"></i></span>
			</div>
			
		</header>
		</div>
	
	);
}

export default Header;