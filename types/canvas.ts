export type CanvasState = 
| {
    mode: CanvasMode.None
  }
| {
    mode: CanvasMode.SelectionNet
  }
| {
    mode: CanvasMode.Inserting
  }
| {
    mode: CanvasMode.Pressing
  }
| {
    mode: CanvasMode.Resizing
  }
| {
    mode: CanvasMode.Translating
  }
| {
    mode: CanvasMode.Pencil
}

export enum CanvasMode {
    None,
    Pressing,
    SelectionNet,
    Translating,
    Inserting,
    Resizing,
    Pencil
}