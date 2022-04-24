/* eslint-disable no-undef */
import { expect } from '@esm-bundle/chai';

import { getText } from '../src/view';

describe('testing the function getText', () => {
  it('the function should return a string', () => {
    expect(getText()).to.be.a('string');
  });

  it('the function should return "action test"', () => {
    expect(getText()).to.be.equal('Action test');
  });
});
