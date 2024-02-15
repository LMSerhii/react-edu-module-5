import { Login } from '../components/Login/Login';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async values => {
    // const response = await FakeAPI.login(values);
    console.log(values);
    const response = true;

    if (response) {
      navigate('/profile', { replace: true });
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Login onFormSubmit={handleSubmit} />
    </div>
  );
};
