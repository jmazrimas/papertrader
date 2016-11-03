// Link.react-test.js
import React from 'react';
import TestComp from '../js/testcomponent';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <TestComp />
  );
  let tComp1 = component.toJSON();
  
  console.log(tComp1)

});