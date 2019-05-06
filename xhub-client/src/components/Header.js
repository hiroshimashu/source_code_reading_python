import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		return (
			<li>
				<a href="/auth/google">Login With Google</a>
			</li>
		);
	}

	render() {
		return (
			<nav>
                <div className="nav-wrapper" style={ styles.navWrapper }>
					<Link to="/" className="left brand-logo">
						XR-hub
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

const styles = {
	navWrapper: {
	    position: "fixed",
        height: "60px"
    }
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
