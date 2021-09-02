import { createEmptyCanvas ,PixelPainterStore } from "../stores/PixelPainterStore"

const Utility = () => {
  const state = PixelPainterStore.useState()
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36"
      onClick={() => PixelPainterStore.update(state => {state.canvas = createEmptyCanvas()})}>
        Clear</button>
      <button className="w-36">Random color</button>
    </div>
  )
}

export default Utility