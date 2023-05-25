import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../../utils/test-utils';
import RedButton from '../../../UI/redButton/RedButton';

test('if load equal false text on button should be show', () => {
  renderWithProviders(<RedButton text={'test'} isLoad={false} />);
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});

test('if load equal false text on button should not be show', () => {
  renderWithProviders(<RedButton text={'test'} isLoad={true} />);
  expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
});
