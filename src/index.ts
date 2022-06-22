import sql, { clearData, createTables, loadInitialData } from './config/db'
import { getEspecieByHabitat, getEspecieByScientificName } from './controllers/especieController'
import { getEspecimeByEspecieIdOrPopNameOrScientName, getEspecimeByJaulaCod, getEspecimeByZeladorByMatricula } from './controllers/especimeController'
import { getJaulaByZeladorMatricula } from './controllers/jaulaController'
import { getZeladorByEspecimeForEspeciesIdOrPopNameOrScientName } from './controllers/zeldaorController'

const run = async () => {
  await createTables()
  await clearData()
  await loadInitialData()

  /**
   * Execute as funções responsáveis pelas consultas aqui!
   */
  
  console.log('------------------------------------------------')

  await getEspecieByHabitat('europa')

  console.log('------------------------------------------------')

  await getEspecieByScientificName('Panthera tigris')

  console.log('------------------------------------------------')

  await getEspecimeByEspecieIdOrPopNameOrScientName('preta')

  console.log('------------------------------------------------')

  await getEspecimeByJaulaCod('00007')

  console.log('------------------------------------------------')

  await getEspecimeByZeladorByMatricula('12004')

  console.log('------------------------------------------------')

  await getJaulaByZeladorMatricula('12001')

  console.log('------------------------------------------------')

  await getZeladorByEspecimeForEspeciesIdOrPopNameOrScientName('mico-leão')

  /**
   * Fim das consultas
   */

  await sql.end()
  console.log('Mal feito desfeito')
}

run()
