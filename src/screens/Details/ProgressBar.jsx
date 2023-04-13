import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({vote_average}) => {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
    <CircularProgressbar
      value={vote_average * 10}
      text={`${vote_average}`}
      strokeWidth={5}
      styles={{
        root: {},
        path: {
          stroke: '#8B5CF6',
          strokeLinecap: 'butt',
          transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        trail: {
          stroke: '#d6d6d6',
          strokeLinecap: 'butt',
        },
        text: {
          fill: '#8B5CF6',
          fontSize: '24px',
        },
        background: {
          fill: '#3e98c7',
        },
      }}
    />
  </div>
  )
}

export default ProgressBar