// interface
interface Point{
    x: number;
    y: number
}

let drawPointt = (point: Point) => {
    // ...
}

drawPointt({
    x: 1, 
    y: 2
})


//inline notation
let drawPoint = (point: { x: number , y: number }) => {
    // ...
}

drawPoint({
    x: 1, 
    y: 2
})