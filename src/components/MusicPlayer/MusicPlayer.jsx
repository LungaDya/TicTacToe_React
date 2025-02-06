import React from 'react'
import { MusicPlayerWrapper  } from './MusicPlayer.styled'

function MusicPlayer() {
  return (
      <MusicPlayerWrapper>
        <button>play</button>
        <button>pause</button>
        <button>shuffle</button>
      </MusicPlayerWrapper>   
  )
}

export default MusicPlayer
