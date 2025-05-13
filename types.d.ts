export {};

declare global {
  interface Window {
    createBubblesAtPosition: (x: number, y: number, color?: string) => void;
  }
}
