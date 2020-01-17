import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	
	let keyPressed = (event) => {
		if (event.key === 'Enter') {
			onButtonSubmit();
		}
	}
	
	return (
		<div>
			<p className='f3'>
				{'This App Will Detect Faces in your Pictures'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center'type='tex' onChange={onInputChange} onKeyPress={keyPressed}/>
					<button className='w-30 b br2 grow f4 link ph3 pv2 dib white bg-transparent'	onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;