import { useSearchParams } from 'react-router-dom';

const Paging = ({ totalPage, page }) => {
	const [, setSearchParams] = useSearchParams();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				gap: 15,
			}}
		>
			{new Array(totalPage).fill(0).map((_, i) => (
				<span
					key={i}
					onClick={() => {
						setSearchParams({ page: i + 1 });
					}}
					style={{
						textDecoration: 'none',
						cursor: 'pointer',
						...(i + 1 === page
							? {
									color: 'red',
							  }
							: {}),
					}}
				>
					{i + 1}
				</span>
			))}
		</div>
	);
};

export default Paging;
