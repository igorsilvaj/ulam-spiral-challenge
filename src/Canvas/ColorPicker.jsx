import React, { useContext } from 'react'
import { SketchPicker } from 'react-color'
import { CanvasContext } from './Context/CanvasContext'

export default function ColorPicker() {
  const {color, setColor} = useContext(CanvasContext)
  const pickerStyles = {
    default: {
      picker: {
        position: 'absolute',
        top: '0',
        right: '-230px',
      }
    }
  }
  return (
    <div>
      <SketchPicker 
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
        styles={pickerStyles}
      />
    </div>
  )
}
