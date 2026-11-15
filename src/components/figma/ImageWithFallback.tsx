import React, { useState, useEffect } from 'react'
import { optimizeUnsplashUrl, generateImageSrcSet, generateImageSizes } from '../../utils/imageOptimization'
import { ImageSkeleton } from '../ui/image-skeleton'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  showSkeleton?: boolean;
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall';
  /** Above-the-fold image (e.g. hero): load immediately with high priority instead of lazily. */
  priority?: boolean;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const {
    src,
    alt,
    style,
    className,
    sizes,
    showSkeleton = true,
    aspectRatio = 'video',
    priority = false,
    ...rest
  } = props

  // Reset state when the image source changes (e.g. testimonial carousel)
  useEffect(() => {
    setDidError(false)
    setIsLoaded(false)
  }, [src])

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  const optimizedSrc = src ? optimizeUnsplashUrl(src) : src
  const srcSet = src ? generateImageSrcSet(src) || undefined : undefined
  const fade = !priority

  return (
    <div className={`relative ${className ?? ''}`} style={style}>
      {showSkeleton && fade && !isLoaded && (
        <ImageSkeleton
          className="absolute inset-0 w-full h-full"
          aspectRatio={aspectRatio}
        />
      )}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={srcSet ? sizes ?? generateImageSizes() : undefined}
        alt={alt}
        className={`${className ?? ''}${
          fade ? ` transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}` : ''
        }`}
        style={style}
        {...rest}
        onError={() => {
          setDidError(true)
          setIsLoaded(true)
        }}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? 'eager' : 'lazy'}
        // React 18 doesn't know the camelCase prop yet; lowercase passes through to the DOM
        {...({ fetchpriority: priority ? 'high' : 'auto' } as Record<string, string>)}
        decoding={priority ? 'sync' : 'async'}
      />
    </div>
  )
}
