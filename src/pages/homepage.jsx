import React from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { Main } from '../components';
export default function Homepage() {
	return (
		<Main>
			<Parallax y={[1600, 3250]}>
				<div className='w-20 mx-auto text-4xl text-white animate-bounce'>
					&#9759;
				</div>
			</Parallax>
			<Parallax y={[130, -60]}>
				<div className='font-serif italic h-page text-charcoal-50 sm:leading-tight t:leading-snug md:leading-snug sm:text-3xl t:text-6xl md:text-7xl lg:text-8xl lg:leading-tight'>
					We are a photography consultancy covering a wide range of services.
				</div>
			</Parallax>
			<ParallaxBanner
				className='your-class'
				layers={[
					{
						image: 'https://portraits.boutique/img/254.jpg',
						amount: 0.2,
					},
				]}
				style={{
					height: '800px',
				}}
			>
				<p className='absolute flex items-center justify-center w-full h-full font-serif text-charcoal-50 sm:leading-tight t:leading-snug md:leading-snug sm:text-3xl t:text-6xl md:text-7xl lg:text-8xl lg:leading-tight'>
					Portraits
				</p>
			</ParallaxBanner>
			<ParallaxBanner
				className='your-class'
				layers={[
					{
						image: 'https://portraits.boutique/img/249.jpg',
						amount: 0.2,
					},
				]}
				style={{
					height: '800px',
				}}
			>
				<p className='absolute flex items-center justify-center w-full h-full font-serif text-charcoal-50 sm:leading-tight t:leading-snug md:leading-snug sm:text-3xl t:text-6xl md:text-7xl lg:text-8xl lg:leading-tight'>
					Products
				</p>
			</ParallaxBanner>
			<ParallaxBanner
				className='your-class'
				layers={[
					{
						image: 'https://portraits.boutique/img/249.jpg',
						amount: 0.2,
					},
				]}
				style={{
					height: '800px',
				}}
			>
				<p className='absolute flex items-center justify-center w-full h-full font-serif text-charcoal-50 sm:leading-tight t:leading-snug md:leading-snug sm:text-3xl t:text-6xl md:text-7xl lg:text-8xl lg:leading-tight'>
					Editorial
				</p>
			</ParallaxBanner>
			<Parallax y={[130, -120]}>
				<div className='font-serif italic h-page text-charcoal-50 sm:leading-tight t:leading-snug md:leading-snug sm:text-3xl t:text-6xl md:text-7xl lg:text-8xl lg:leading-tight'>
					Get in touch!
				</div>
			</Parallax>
		</Main>
	);
}
