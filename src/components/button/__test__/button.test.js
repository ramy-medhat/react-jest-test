import React from 'react'
import ReactDom from 'react-dom'
import Button from './../button'
import {render, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

afterEach(cleanup);

it('render without crashes',()=>{
    const div = document.createElement('button');
    ReactDom.render(<Button></Button>, div)
})

it('render button correctly', ()=>{
    const {getByTestId} = render(<Button label="click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent('click me')
})


it('render button correctly', ()=>{
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent('save')
})

it('matches snapshots', ()=>{
    const tree = renderer.create(<Button label='save'/>).toJSON()
    expect(tree).toMatchSnapshot();
})