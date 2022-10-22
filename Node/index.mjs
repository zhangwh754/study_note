import { stat } from 'fs/promises'

try {
  const res = await stat('./test.txt')
  console.log(res)
} catch (error) {
  console.error('there was an error:', error.message)
}
