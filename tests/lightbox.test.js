import test from 'node:test'
import assert from 'node:assert/strict'
import {
  CLOSED_INDEX,
  isOpen,
  closeIndex,
  selectIndex,
  nextIndex,
  prevIndex,
} from '../src/components/ui/lightboxState.js'

const items = ['a', 'b', 'c', 'd', 'e', 'f']

test('opening a card, closing, then opening a second card works without a reload', () => {
  let index = CLOSED_INDEX
  assert.equal(isOpen(index, items.length), false, 'starts closed')

  // 1) open the first card
  index = 0
  assert.equal(isOpen(index, items.length), true)
  assert.equal(items[index], 'a')

  // 2) close via the X button / backdrop / Escape
  index = closeIndex()
  assert.equal(index, CLOSED_INDEX)
  assert.equal(isOpen(index, items.length), false)

  // 3) a second, different card must open straight away
  index = selectIndex(4, items.length)
  assert.equal(isOpen(index, items.length), true)
  assert.equal(items[index], 'e')
})

test('closing clears the open flag even when the gallery still has items', () => {
  assert.equal(isOpen(closeIndex(), 12), false)
})

test('an empty gallery can never open', () => {
  assert.equal(isOpen(0, 0), false)
  assert.equal(selectIndex(0, 0), CLOSED_INDEX)
})

test('selectIndex guards against a missing match (-1) and out-of-range values', () => {
  assert.equal(selectIndex(-1, 6), CLOSED_INDEX)
  assert.equal(selectIndex(99, 6), 5)
  assert.equal(selectIndex(3, 6), 3)
})

test('next/prev wrap around and keep the overlay open', () => {
  assert.equal(nextIndex(5, 6), 0)
  assert.equal(prevIndex(0, 6), 5)
  assert.equal(nextIndex(2, 6), 3)
  assert.equal(prevIndex(2, 6), 1)
})

test('next/prev on an empty gallery keep it closed', () => {
  assert.equal(nextIndex(CLOSED_INDEX, 0), CLOSED_INDEX)
  assert.equal(prevIndex(CLOSED_INDEX, 0), CLOSED_INDEX)
})
