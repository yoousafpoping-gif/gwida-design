export const LENS_ZOOM = 2.5

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

/**
 * Geometry for the circular magnifier.
 *
 * `pointerX/Y` are relative to the RENDERED image box (caller subtracts the
 * image's bounding rect). The lens center is clamped to stay fully inside
 * the image, which also guarantees the zoomed background always covers the
 * circle — no blank wedges at the edges.
 *
 * backgroundPosition is chosen so the image point under the lens center
 * (`cx * zoom`, `cy * zoom`) lands exactly on the lens center (`half`).
 */
export function computeLens({
  pointerX,
  pointerY,
  imageWidth,
  imageHeight,
  lensSize,
  zoom = LENS_ZOOM,
}) {
  const half = lensSize / 2
  const cx =
    imageWidth <= lensSize ? imageWidth / 2 : clamp(pointerX, half, imageWidth - half)
  const cy =
    imageHeight <= lensSize ? imageHeight / 2 : clamp(pointerY, half, imageHeight - half)

  return {
    cx,
    cy,
    left: cx - half,
    top: cy - half,
    bgWidth: imageWidth * zoom,
    bgHeight: imageHeight * zoom,
    bgX: half - cx * zoom,
    bgY: half - cy * zoom,
  }
}

export function lensSizeFor(imageWidth, imageHeight, { min = 120, max = 220, ratio = 0.42 } = {}) {
  return Math.round(clamp(Math.min(imageWidth, imageHeight) * ratio, min, max))
}
