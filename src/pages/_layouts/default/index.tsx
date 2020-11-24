import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';

import { Wrapper } from './styles';

interface Props {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
