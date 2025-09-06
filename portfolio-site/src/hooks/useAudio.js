import { useState, useRef, useCallback, useEffect } from 'react'

export const useAudio = (src) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(src)
    audioRef.current = audio

    const handleLoadedData = () => {
      setDuration(audio.duration)
      setIsLoaded(true)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.pause()
    }
  }, [src])

  const play = useCallback(() => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  const pause = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [isPlaying])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  const seek = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  const setVolume = useCallback((volume) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, volume))
    }
  }, [])

  return {
    isPlaying,
    duration,
    currentTime,
    isLoaded,
    play,
    pause,
    toggle,
    seek,
    setVolume,
    progress: duration > 0 ? (currentTime / duration) * 100 : 0
  }
}

export const useAudioManager = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const audioInstances = useRef(new Map())

  const registerAudio = useCallback((id, audioHook) => {
    audioInstances.current.set(id, audioHook)
  }, [])

  const playAudio = useCallback((id) => {
    // Pause any currently playing audio
    if (currentlyPlaying && currentlyPlaying !== id) {
      const currentAudio = audioInstances.current.get(currentlyPlaying)
      if (currentAudio) {
        currentAudio.pause()
      }
    }

    // Play the requested audio
    const audio = audioInstances.current.get(id)
    if (audio) {
      audio.play()
      setCurrentlyPlaying(id)
    }
  }, [currentlyPlaying])

  const pauseAudio = useCallback((id) => {
    const audio = audioInstances.current.get(id)
    if (audio) {
      audio.pause()
      if (currentlyPlaying === id) {
        setCurrentlyPlaying(null)
      }
    }
  }, [currentlyPlaying])

  const stopAll = useCallback(() => {
    audioInstances.current.forEach((audio) => {
      audio.pause()
    })
    setCurrentlyPlaying(null)
  }, [])

  return {
    currentlyPlaying,
    registerAudio,
    playAudio,
    pauseAudio,
    stopAll
  }
}
