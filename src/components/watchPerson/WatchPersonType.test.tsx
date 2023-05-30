import { act, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../utils/test-utils';
import WatchPersonType from './WatchPersonType';
import { mockFilmTest, typePersonEnglishName, typePersonNameTest } from '../../mockData/mockTest';
import { URL } from '../../service/constans';
import fetchMock from 'jest-fetch-mock';

describe('WatchPersonType', () => {
  beforeAll(() => {
    fetchMock.mockOnceIf(URL, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify([]),
      })
    );
  });

  it('if lenght of person equal 4, button showmore should not be in document', async () => {
    const filmNew = {
      ...mockFilmTest,
    };
    filmNew[typePersonEnglishName] = [...mockFilmTest[typePersonEnglishName]];
    filmNew[typePersonEnglishName].length = 4;
    await act(async () => {
      renderWithProviders(
        <WatchPersonType
          film={filmNew}
          typePerson={typePersonNameTest}
          typePersonEnglish={typePersonEnglishName}
        />
      );
    });
    expect(screen.getAllByRole('WatchPersonType-item')).toHaveLength(4);
    expect(screen.queryByText(/Показать еще/i)).not.toBeInTheDocument();
  });
  it('if lenght of person equal 17, button showmore should be in document and remove after click on this button', async () => {
    const filmNew = {
      ...mockFilmTest,
    };
    filmNew[typePersonEnglishName] = [...mockFilmTest[typePersonEnglishName]];
    filmNew[typePersonEnglishName].length = 17;
    await act(async () => {
      renderWithProviders(
        <WatchPersonType
          film={filmNew}
          typePerson={typePersonNameTest}
          typePersonEnglish={typePersonEnglishName}
        />
      );
    });
    expect(screen.getAllByRole('WatchPersonType-item')).toHaveLength(16);
    expect(screen.getByText(/Показать еще/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Показать еще/i));
    expect(screen.getAllByRole('WatchPersonType-item')).toHaveLength(17);
    expect(screen.queryByText(/Показать еще/i)).not.toBeInTheDocument();
  });
  it('if lenght of person equal 17, lenght of prson list shoul be 16 and after click button showmore shoul be equal 17', async () => {
    const filmNew = {
      ...mockFilmTest,
    };
    filmNew[typePersonEnglishName] = [...mockFilmTest[typePersonEnglishName]];
    filmNew[typePersonEnglishName].length = 17;
    await act(async () => {
      renderWithProviders(
        <WatchPersonType
          film={filmNew}
          typePerson={typePersonNameTest}
          typePersonEnglish={typePersonEnglishName}
        />
      );
    });
    expect(screen.getAllByRole('WatchPersonType-item')).toHaveLength(16);
    expect(screen.getByText(/Показать еще/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Показать еще/i));
    expect(screen.getAllByRole('WatchPersonType-item')).toHaveLength(17);
    expect(screen.queryByText(/Показать еще/i)).not.toBeInTheDocument();
  });
});
