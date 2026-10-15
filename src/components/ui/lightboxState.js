/* ============================================================
   LIGHTBOX STATE
   ------------------------------------------------------------
   Pure, framework-free transitions for the gallery lightbox so the
   open -> close -> reopen lifecycle can be unit-tested without a DOM.

   `index` is a single integer used as the source of truth:
     -1 (CLOSED_INDEX)  -> nothing selected, overlay is closed
     >= 0               -> the selected item, overlay is open
   ============================================================ */

/** Sentinel index meaning "no lightbox open". */
export const CLOSED_INDEX = -1

/** Open only when a real item is selected AND the gallery is not empty. */
export function isOpen(index, length) {
  return index >= 0 && length > 0
}

/** Closing always returns to the sentinel. */
export function closeIndex() {
  return CLOSED_INDEX
}

/**
 * Jump to a specific item. A missing match (e.g. findIndex returned -1)
 * or an out-of-range value can never open a broken overlay: it either
 * closes or clamps to the last real item.
 */
export function selectIndex(index, length) {
  if (!length || index < 0) return CLOSED_INDEX
  return index < length ? index : length - 1
}

/** Wrap forward, staying closed when the gallery is empty. */
export function nextIndex(index, length) {
  if (!length) return CLOSED_INDEX
  return (index + 1) % length
}

/** Wrap backward, staying closed when the gallery is empty. */
export function prevIndex(index, length) {
  if (!length) return CLOSED_INDEX
  return (index - 1 + length) % length
}
