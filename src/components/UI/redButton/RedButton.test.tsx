import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import RedButton from './RedButton';

it('if load equal false text on button should be show', () => {
  renderWithProviders(<RedButton text={'test'} isLoad={false} />);
  expect(screen.getByText(/test/i)).toBeInTheDocument();
});
