import {useState} from 'react'
import React from 'react'

function RatingSelect({select}) {
    const {selected, setSelected} = useState(10)

    const handleChange = (e) =>{
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    }

  return (
    <div>
        rating form
    </div>
  )
}

export default RatingSelect