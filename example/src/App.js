import React from 'react'

import { ExampleComponent, Button, SignUpBox } from 'naveenuikit'
import 'naveenuikit/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <ExampleComponent text='Create React Library Example 😄' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: 600
        }}
      >
        <Button>Normal Button</Button>
        <Button btnColor='blue' type='outline'>
          Outline Button
        </Button>
        <Button btnColor='red' disabled>
          Disabled Button
        </Button>
        <Button btnColor='yellow' type='rounded' labelColor='black'>
          Rounded Button
        </Button>
        <Button type='block' btnColor='black'>
          Block Button
        </Button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '5rem'
        }}
      >
        <SignUpBox />
      </div>
    </React.Fragment>
  )
}

export default App
