import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	return (
		<div className='fixed z-50 flex justify-center w-screen bg-black'>
			<nav className='z-50 flex items-center justify-between w-full max-w-screen-xl py-1 sm:px-3 xl:px-0'>
				<NavLink
					className='font-serif text-lg text-white uppercase hover:text-blue-400'
					to='/'
				>
					Photon Boutique
				</NavLink>
				<button
					className='relative flex flex-col gap-1 outline-none hover:opacity-60 focus:outline-none'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div className='w-4 h-0.5 bg-white' />
					<div className='w-4 h-0.5 bg-white' />
					<div className='w-4 h-0.5 bg-white' />
				</button>
			</nav>
			<div
				className={
					'absolute w-screen h-screen flex flex-col t:items-center sm:items-end px-3 justify-center bg-charcoal-1200 bg-opacity-90 ease-in-out transition-all delay-300 duration-500 z-40 font-serif sm:text-4xl md:text-8xl t:text-6xl' +
					(menuOpen ? ' visible' : ' hidden')
				}
			>
				<NavLink
					className='py-3 font-thin tracking-widest text-white uppercase hover:text-blue-400'
					to='/'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					Home
				</NavLink>
				<NavLink
					className='py-3 font-thin tracking-widest text-white uppercase hover:text-blue-400'
					to='/'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					work
				</NavLink>
				<NavLink
					className='py-3 font-thin tracking-widest text-white uppercase hover:text-blue-400'
					to='/'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					services
				</NavLink>
				<NavLink
					className='py-3 font-thin tracking-widest text-white uppercase hover:text-blue-400'
					to='/'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					contacts
				</NavLink>
			</div>
		</div>
	);
}
