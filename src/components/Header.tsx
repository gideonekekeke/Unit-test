import React from 'react'

interface Iprops {
    title : string
}

const Header:React.FC<Iprops> = ({title}) => {
  return (
		<>
			<h1>{title}</h1>
			<h3 title='second-heading'>second heading</h3>
			<input placeholder='name' />
			<div data-testid='header-id'></div>
		</>
	);
}

export default Header