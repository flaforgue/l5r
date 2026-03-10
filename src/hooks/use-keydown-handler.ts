import type { KeyBoardKey } from "./use-keyboard-handler";
import { useKeyboardHandler } from "./use-keyboard-handler";

export function useKeydownHandler(givenKey: KeyBoardKey, givenHandler: (e: KeyboardEvent) => void) {
  useKeyboardHandler("keydown", givenKey, givenHandler);
}
