import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import LoginTemplate from '../templates/loginTemplate';
import { LoginData } from '../../types/formData';
import { loginRequest } from '../../store/slices/userSlice';
import { RootState } from '../../store';
import { useUserDispatch } from '../../hooks/store';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState,
    getFieldState,
    getValues,
  } = useForm<LoginData>({
    mode: 'onChange',
  });

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useUserDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    if (user.isLogin) {
      navigator('/');
    }
  }, [user.isLogin]);

  const handleLogin = async () => {
    const { email, password } = getValues();

    await dispatch(loginRequest({
      email,
      password,
    }));
  };

  return (
    <LoginTemplate
      handleLogin={handleSubmit(handleLogin)}
      register={register}
      setValue={setValue}
      formState={formState}
      getFieldState={getFieldState}
      isLoading={user.isLoading}
      errorMessage={user.errorMessage}
    />
  );
}
