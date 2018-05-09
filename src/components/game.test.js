import React from 'react';
import {shallow, mount} from 'enzyme';
import Game from './game';

describe('<Game />', ()=> {

    let seedGuesses = [];
    beforeAll(() => {
        for (let i = 1; i <= 10; i++) {
            seedGuesses.push(i);
        }
    });

    it('renders without crashing', ()=>{
        shallow(<Game/>);
    });

    it('makes a guess and updates state accordingly', ()=> {
        const wrapper = shallow(<Game/>);
        //this is like Game.instance, gives access to Game's methods
        const instance = wrapper.instance();
        const guess = 50;
        //here we can use one of Game's methods
        instance.makeGuess(guess);
        //test if state.guesses array now has a guess (i.e., it has length 1)
        expect(wrapper.state('guesses').length).toEqual(1);

    });
});//end outermost describe