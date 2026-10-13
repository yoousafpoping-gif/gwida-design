import test from 'node:test'
import assert from 'node:assert/strict'
import { computeLens, lensSizeFor, LENS_ZOOM } from '../src/components/ui/lensMath.js'

const base = { imageWidth: 800, imageHeight: 600, lensSize: 200 }

test('centers the magnified point under the cursor', () => {
  const r = computeLens({ ...base, pointerX: 400, pointerY: 300, zoom: 2 })
  assert.equal(r.cx, 400)
  assert.equal(r.cy, 300)
  // lens box is centered on the cursor
  assert.equal(r.left, 300)
  assert.equal(r.top, 200)
  // background point (cx * zoom) lands on the lens center (half)
  assert.equal(r.bgX + r.cx * 2, 100)
  assert.equal(r.bgY + r.cy * 2, 100)
})

test('background size scales the rendered image by the zoom factor', () => {
  const r = computeLens({ ...base, pointerX: 10, pointerY: 10, zoom: LENS_ZOOM })
  assert.equal(r.bgWidth, 800 * LENS_ZOOM)
  assert.equal(r.bgHeight, 600 * LENS_ZOOM)
})

test('clamps the lens fully inside the image at every corner', () => {
  const corners = [
    [0, 0],
    [800, 0],
    [0, 600],
    [800, 600],
    [-50, -50],
    [999, 999],
  ]
  for (const [x, y] of corners) {
    const r = computeLens({ ...base, pointerX: x, pointerY: y, zoom: LENS_ZOOM })
    assert.ok(r.left >= 0, `left ${r.left} >= 0 for (${x},${y})`)
    assert.ok(r.top >= 0, `top ${r.top} >= 0 for (${x},${y})`)
    assert.ok(r.left + base.lensSize <= base.imageWidth + 1e-9, 'lens inside right edge')
    assert.ok(r.top + base.lensSize <= base.imageHeight + 1e-9, 'lens inside bottom edge')
  }
})

test('zoomed background always covers the lens circle', () => {
  for (const [x, y] of [[0, 0], [800, 0], [0, 600], [800, 600], [123, 456]]) {
    const r = computeLens({ ...base, pointerX: x, pointerY: y, zoom: LENS_ZOOM })
    assert.ok(r.bgX <= 0, `bgX ${r.bgX} <= 0`)
    assert.ok(r.bgY <= 0, `bgY ${r.bgY} <= 0`)
    assert.ok(r.bgX + r.bgWidth >= base.lensSize, 'bg covers right of lens')
    assert.ok(r.bgY + r.bgHeight >= base.lensSize, 'bg covers bottom of lens')
  }
})

test('a tiny image centers the lens instead of producing NaN', () => {
  const r = computeLens({ pointerX: 5, pointerY: 5, imageWidth: 80, imageHeight: 80, lensSize: 200 })
  assert.equal(r.cx, 40)
  assert.equal(r.cy, 40)
  assert.equal(r.left, -60)
})

test('lensSizeFor stays within its bounds', () => {
  assert.equal(lensSizeFor(2000, 3000), 220)
  assert.equal(lensSizeFor(200, 200), 120)
  assert.equal(lensSizeFor(800, 600), 220)
})
