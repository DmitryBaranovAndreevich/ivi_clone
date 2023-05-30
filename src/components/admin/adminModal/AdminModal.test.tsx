import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import AdminModal from './AdminModal';
import { textContent } from '../../../mockData/mockTest';

test('modal shows the children', () => {
  act(() => {
    renderWithProviders(
      <AdminModal>
        <p>{textContent}</p>
      </AdminModal>
    );
  });

  expect(screen.getByText(textContent)).toBeInTheDocument();
});
