import type { ComponentProps, FC } from 'react'

import './Main.styles.sass'

type MainProps = ComponentProps<'main'>

export const Main: FC<MainProps> = (mainProps) => <main {...mainProps} />
