function createShimmerSVG(width: number, height: number): string {
  return `\n  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">\n    <defs>\n      <linearGradient id="g">\n        <stop stop-color="#eee" offset="20%"/>\n        <stop stop-color="#ddd" offset="50%"/>\n        <stop stop-color="#eee" offset="70%"/>\n      </linearGradient>\n    </defs>\n    <rect width="${width}" height="${height}" fill="#eee"/>\n    <rect id="r" width="${width}" height="${height}" fill="url(#g)"/>\n    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />\n  </svg>`;
}

export function getBlurDataURL(width = 16, height = 9): string {
  const svg = createShimmerSVG(width, height);
  const base64 = typeof window === "undefined"
    ? Buffer.from(svg).toString("base64")
    : window.btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
}


