import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'
import { XButton } from './component-lib/XButton'
import { XText } from './component-lib/XText'

function App() {
    return (
        <div className="App flex flex-col gap-5">
            <XText as="h1">Hey Andrei</XText>
            <div className="flex gap-5 items-center">
                <Button colorScheme="blue">kzen</Button>
                <Button colorScheme="cyan">twitter</Button>
                <XButton as="a" href="#">
                    facebook
                </XButton>
            </div>
        </div>
    )
}

export default App
