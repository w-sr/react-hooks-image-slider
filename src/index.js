import React from 'react'
import ReactDOM from 'react-dom'
import Slider from './components/Slider'
import images from './images'

ReactDOM.render(<Slider images={images} />, document.querySelector('.main'))
