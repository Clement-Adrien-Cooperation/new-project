import type { FC, PropsWithChildren } from 'react'

import { Footer, Header } from '@/presentation/layouts'

import './AppLayout.styles.sass'
import { Button } from '@/presentation/components'
import { SettingsIcon } from 'lucide-react'

export const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBlock: '1rem' }}>
      <Button variant='filled'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button variant='underlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button variant='outlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button variant='tonal'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button variant='transparent'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBlock: '1rem' }}>
      <Button Icon={<SettingsIcon />} variant='filled'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button Icon={<SettingsIcon />} variant='underlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button Icon={<SettingsIcon />} variant='outlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button Icon={<SettingsIcon />} variant='tonal'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button Icon={<SettingsIcon />} variant='transparent'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBlock: '1rem' }}>
      <Button iconSide='right' Icon={<SettingsIcon />} variant='filled'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button iconSide='right' Icon={<SettingsIcon />} variant='underlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button iconSide='right' Icon={<SettingsIcon />} variant='outlined'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button iconSide='right' Icon={<SettingsIcon />} variant='tonal'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>

      <Button iconSide='right' Icon={<SettingsIcon />} variant='transparent'>
        un texte très très long pour voir jusqu'où il peut aller parce que je veux tester à la fois la max-width mais aussi le text-ellispsis justement quand j'aurais set une max-width un peu intelligente enfin on espère
      </Button>
    </div>

    <Footer />
  </>
)
