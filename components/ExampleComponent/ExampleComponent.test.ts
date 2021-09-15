import { fireEvent, render, waitFor } from '@testing-library/react-native'
import ExampleComponent from './ExampleComponent'


describe('examples of some things', () => {
  it("should do some shit", async () => {

    const { getByTestId, getByText, queryByTestId, toJSON } = render(<ExampleComponent/>)
    
    const famousProgrammerInHistory = 'Ada Lovelace'

    const input = getByTestId('input')
    fireEvent.changeText(input, famousProgrammerInHistory)

    const button = getByText('Print Username')
    fireEvent.press(button)

    await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy())

    expect(getByTestId('printed-username').props.children).toBe(
      famousProgrammerInHistory,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})