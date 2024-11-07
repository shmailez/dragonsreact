import { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Функция для проверки валидации
  const validateForm = () => {
    const errors = {};

    // Проверка имени пользователя
    if (username.trim().length < 3) {
      errors.username = 'Имя пользователя должно содержать не менее 3 символов';
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Введите корректный email (например, example@domain.com)';
    }

    setErrors(errors);

    // Возвращает true, если нет ошибок
    return Object.keys(errors).length === 0;
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(''); // Сбрасываем успешное сообщение

    if (validateForm()) {
      setSuccessMessage('Форма успешно отправлена!');
      // Очистка формы после успешной отправки
      setUsername('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        {/* Поле ввода имени пользователя */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>

        {/* Поле ввода email */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        {/* Сообщение об успешной отправке */}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <button type="submit" style={{ padding: '10px 20px' }}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
