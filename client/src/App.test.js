import { render, screen } from '@testing-library/react';
import App from './App';
import API from './common/API'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('testing api layer fetch', async () => {
  const res = await API.sendRequest('http://localhost:5000/api/users/login', {
    user_name: "ducy23061999",
    password: "tranducy"
  })
  console.log(res)
})
