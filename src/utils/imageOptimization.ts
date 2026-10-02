export function optimizeUnsplashUrl(url: string, width?: number): string {
  if (!url.includes('unsplash.com')) {
    return url;
  }

  try {
    const urlObj = new URL(url);

    // Set optimal quality and format
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');

    // Set width if provided, otherwise use a reasonable default
    if (width) {
      urlObj.searchParams.set('w', width.toString());
    } else if (!urlObj.searchParams.has('w')) {
      urlObj.searchParams.set('w', '1200');
    }

    // Set quality to balance size and appearance
    urlObj.searchParams.set('q', '80');

    return urlObj.toString();
  } catch (error) {
    return url;
  }
}

export function generateImageSrcSet(url: string): string {
  if (!url.includes('unsplash.com')) {
    return '';
  }

  const widths = [640, 750, 828, 1080, 1200, 1920];
  return widths
    .map(width => `${optimizeUnsplashUrl(url, width)} ${width}w`)
    .join(', ');
}

export function generateImageSizes(): string {
  return '(max-width: 640px) 640px, (max-width: 1024px) 1080px, 1200px';
}
