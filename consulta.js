const pool = require('/bd')
const insertar = async (datos) => {
  // Paso 3
  const consulta = {
    text: 'INSERT INTO ejercicios values($1, $2, $3, $4)',
    values: datos,
  }
  try {
    const result = await pool.query(consulta)
    return result
  } catch (error) {
    // Paso 4
    console.log(error.code)
    return error
  }
}
// Paso 1
const consultar = async () => {
  // Paso 2
  try {
    const result = await pool.query('SELECT * FROM ejercicios')
    return result
  } catch (error) {
    // Paso 3
    console.log(error.code)
    return error
  }
}
const editar = async (datos) => {
  // Paso 2
  const consulta = {
    text: `UPDATE ejercicios SET
  nombre = $1,
  series = $2,
  repeticiones = $3,
  descanso = $4
  WHERE nombre = $1 RETURNING *`,
    values: datos,
  }
  // Paso 3
  try {
    const result = await pool.query(consulta)
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}
// Paso 1
const eliminar = async (nombre) => {
  // Paso 2
  try {
    const result = await pool.query(
      `DELETE FROM ejercicios WHERE nombre = '${nombre}'`
    )
    return result
  } catch (error) {
    console.log(error.code)
    return error
  }
}

module.exports = { insertar, consultar, editar, eliminar }
