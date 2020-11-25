import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../App';
import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';

jest.mock('../services/api');
api.getCategories.mockImplementation(() => Promise.resolve([{
  "id": "MLB5672",
  "name": "Acessórios para Veículos"
}, {
  "id": "MLB271599",
  "name": "Agro"
}, {
  "id": "MLB1403",
  "name": "Alimentos e Bebidas"
}]));

describe(`Listar as categorias de produtos disponíveis via API na página principal`, () => {
  it(`Exibe as categorias retornadas pela API na página de listagem de
      produtos`, async () => {
    render(<App />);
    await waitFor(() => expect(api.getCategories).toHaveBeenCalled());
    expect(screen.getAllByTestId('category').length).toEqual(
      mockedCategoriesResult.length,
    );
  });
});
