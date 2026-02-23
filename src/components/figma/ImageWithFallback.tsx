import React, { useState, useEffect, useRef } from 'react'
import { optimizeUnsplashUrl, generateImageSrcSet, generateImageSizes } from '../../utils/imageOptimization'
import { ImageSkeleton } from '../ui/image-skeleton'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  showSkeleton?: boolean;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const { src, alt, style, className, showSkeleton = true, aspectRatio = 'video', ...rest } = props

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleError = () => {
    setDidError(true)
    setIsLoaded(true)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Optimize image URL
  const optimizedSrc = src ? optimizeUnsplashUrl(src) : src
  const srcSet = src ? generateImageSrcSet(src) : undefined
  const sizes = src ? generateImageSizes() : undefined

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
        ref={imgRef as React.RefObject<HTMLDivElement>}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      {showSkeleton && !isLoaded && (
        <ImageSkeleton
          className="absolute inset-0 w-full h-full"
          aspectRatio={aspectRatio}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : undefined}
        srcSet={isInView ? srcSet : undefined}
        sizes={isInView ? sizes : undefined}
        alt={alt}
        className={`${className ?? ''} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
        {...rest}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
