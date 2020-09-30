const { Transform } = require('stream')

/** ingresa un string y convierte el primer
 * carácter a mayúscula
 */
const upperFirst = text => {
  //obtiene primer letra y convierte a mayúscula
  let first = text.charAt(0).toUpperCase()
  //el string a partir de la segunda letra
  let rest = text.slice(1)
  //unión primer letra + resto
  return first + rest
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    //la cadena de entrada en string
    const strChunk = chunk.toString()
    //cadena en minúsculas
    const lowerChunk = strChunk.toLowerCase()
    //array separado por espacio en blanco
    const arrayChunk = lowerChunk.split(' ')
    /**
     * creación de un nuevo array con camelCase
     * si  i (index) es 0 se retorna la primer
     * palabra sin cambios, si no se cambia la
     * primer letra de la palabra a mayúscula
     */
    const arrayCamel = arrayChunk.map((word,i)=>{
      return i === 0 ? word : upperFirst(word)
    })
    //se junta el array anterior y listo
    const camelCase = arrayCamel.join('')
    this.push(camelCase)
    //finaliza la el flujo para esta chunk
    callback()
  }
})
process.stdin.pipe(transformStream)
.pipe(process.stdout)