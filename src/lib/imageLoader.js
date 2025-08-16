// Custom image loader for static serving
export default function imageLoader({ src }) {
  // For static images, just return the src as-is
  // This ensures images are served directly from the public folder
  return src
}