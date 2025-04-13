import { BrowserRouter } from 'react-router'

import { Router } from '@/application/router'
import { AppLayout, ErrorBoundary, Providers } from '@/presentation/components'

import '@/presentation/styles/base.sass'

export const App = () => (
  <BrowserRouter>
    <Providers>
      <ErrorBoundary>
        <AppLayout>
          <Router />

          <div className='grid'>
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className='grid__item'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, necessitatibus?
                </p>

                <hr />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, necessitatibus?
                </p>
              </div>
            ))}
          </div>
        </AppLayout>
      </ErrorBoundary>
    </Providers>
  </BrowserRouter>
)
