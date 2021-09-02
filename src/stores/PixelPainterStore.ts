import { Store } from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][];
  selectedcolor: string;
}
//return random color
const randomColor = () => {
  let color = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01'
    , '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
  let x = Math.floor((Math.random() * 12))
  return color[x]

}
//return an (16 x 16) 2D array filled with '#FFFFFF'
export const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const createRandomCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      let c = randomColor()
      output[i].push(c);
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedcolor: '#000000',
})