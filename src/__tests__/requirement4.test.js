import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import CategoryList from '../components/CategoryList';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories.js';

describe(`Listar as categorias de produtos disponíveis via API na página principal`, () => {
  it(`Exibe as categorias retornadas pela API na página de listagem de
      produtos`, async () => {
    render(<CategoryList />);
    expect(screen.getAllByTestId('category').length).toEqual(
      mockedCategoriesResult.length,
    );
  });
});
