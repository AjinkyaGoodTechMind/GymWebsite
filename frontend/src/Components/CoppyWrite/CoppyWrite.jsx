import React from 'react'
import "./CoppyWrite.css"
import { AiOutlineCopyright } from 'react-icons/ai';

export default function CoppyWrite() {
  return (
    <div className='coppy-container'>
        <div>
            <p></p>
            <AiOutlineCopyright />
            <p> Copyright Fitness Factory 2019. All Right Reserved.</p>
        </div>
    </div>
  )
}
