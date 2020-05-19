import { AbilityBuilder } from '@casl/ability'

function subjectName(item) {
  console.log('SUBJECT', item)
  if (!item || typeof item === 'string') {
    return item
  }

  return item.__type
}

const Ability = AbilityBuilder.define({ subjectName }, can => {
  // console.log("test Ability", can)
  can(['black', 'white', 'red', 'green', 'blue', 'futebol'], 'Colors', { access: 'man' })
  can(['black', 'white', 'red', 'green', 'blue', 'cyan', 'maquiagem'], 'Colors', { access: 'woman' })
  can(['black', 'white', 'latir'], 'Colors', { access: 'dog' })
})

export default Ability
