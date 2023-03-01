import { Link } from 'react-router-dom';

function Header() {
	return (
		<div
			style={{
				width: '100%',
				height: '40px',
				position: 'fixed',
				top: 0,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				background: '#000',
				zIndex: 10,
			}}
		>
			<div>
				<Link to='/movies'>HOME</Link>
			</div>
			<div
				style={{
					color: '#fff',
				}}
			>
				HEADER
			</div>
			<div
				style={{
					color: '#fff',
				}}
			>
				Theme Change
			</div>
		</div>
	);
}

export default Header;
