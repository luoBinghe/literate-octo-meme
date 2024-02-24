import { Duck } from './Duck'
import { LoopSection } from './LoopSection'

import GridSection from './GridSection'
import './App.css';

export const Main = () => {
  return (
    <main className='Main'>
      <GridSection />
      <LoopSection />
      <Duck />
    </main>
  )
} 