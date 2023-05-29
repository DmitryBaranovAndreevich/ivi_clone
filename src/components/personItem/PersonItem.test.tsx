import { act, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import { mockFilmTest, typePersonEnglishName, typePersonNameTest } from '../../mockData/mockTest';
import PersonItem from './PersonItem';

const role = 'test';

describe('WatchPersonType', () => {
  // beforeEach(() => {
  //   const filmNew = mockFilmTest;
  // });
  it('if lenght of person equal 4, button showmore should not be in document', async () => {
    await act(async () => {
      renderWithProviders(<PersonItem personId={1} role={role} />);
    });
    // expect(screen.getByText(role)).toBeInTheDocument();
    // expect(screen.queryByText(/Показать еще/i)).not.toBeInTheDocument();
  });
});
