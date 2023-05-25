import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../../utils/test-utils';
import AdminModal from '../../../admin/adminModal/AdminModal';
import { textContent } from '../../../../mockData/mockTest';

test('modal shows the children', () => {
  renderWithProviders(
    <AdminModal>
      <p>{textContent}</p>
    </AdminModal>
  );

  expect(screen.getByText(textContent)).toBeInTheDocument();
});
