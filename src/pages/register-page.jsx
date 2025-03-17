import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { Button, Checkbox, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialUser = {
  name: '',
  university: '',
  participants: [
    {
      fullName: '',
      email: '',
      phoneNumber: '',
      role: '',
      age: '',
      isCaptain: false,
    },
  ],
};

export function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const registerUser = async (user) => {
    setIsSubmitting(true);
    setServerError('');
    try {
      const response = await axios.post(
        'https://api.comtehno.kg/api/events-team/',
        user
      );
      toast.success('Регистрация успешна!');
    } catch (error) {
      setServerError(error.response?.data?.message || 'Ошибка регистрации');
      toast.error('Ошибка при регистрации');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-20 md:w-[600px] bg-white mx-auto rounded-md md:px-5 px-3 py-7 border">
      <h1 className="font-bold text-center text-2xl">Регистрация команды</h1>
      <Formik initialValues={initialUser} validate={validateForm} onSubmit={registerUser}>
        {({ values }) => (
          <Form>
            <Field as={TextField} fullWidth name="name" label="Название команды" size="small" className="my-3" />
            <ErrorMessage name="name" component="div" className="text-xs text-red-600" />
            
            <Field as={TextField} fullWidth name="university" label="Школа" size="small" className="my-3" />
            <ErrorMessage name="university" component="div" className="text-xs text-red-600" />
            
            <h2 className="font-bold text-xl my-3">Участники команды</h2>
            <FieldArray name="participants">
              {({ push, remove }) => (
                <div>
                  {values.participants.map((_, index) => (
                    <div key={index} className="border p-4 mb-4 rounded">
                      <Field as={TextField} fullWidth name={`participants.${index}.fullName`} label={`ФИО участника ${index + 1}`} size="small" className="my-3" />
                      <Field as={TextField} fullWidth name={`participants.${index}.email`} label="Email" size="small" className="my-3" />
                      <Field as={TextField} fullWidth name={`participants.${index}.phoneNumber`} label="Телефон" size="small" className="my-3" />
                      <Field as={TextField} fullWidth name={`participants.${index}.role`} label="Роль" size="small" className="my-3" />
                      <Field as={TextField} fullWidth name={`participants.${index}.age`} label="Возраст" size="small" type="number" className="my-3" />
                      <label className="flex items-center gap-2">
                        <Field type="checkbox" name={`participants.${index}.isCaptain`} as={Checkbox} /> Капитан
                      </label>
                      {values.participants.length > 1 && (
                        <Button onClick={() => remove(index)} variant="outlined" color="error" size="small" className="mt-2">Удалить</Button>
                      )}
                    </div>
                  ))}
                  <Button onClick={() => push({ fullName: '', email: '', phoneNumber: '', role: '', age: '', isCaptain: false })} variant="outlined" color="primary" size="small" className="mt-3">Добавить участника</Button>
                </div>
              )}
            </FieldArray>
            
            <Button type="submit" disabled={isSubmitting} variant="contained" color="primary" fullWidth className="mt-5">
              {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
            </Button>
            {serverError && <p className="text-red-600 text-xs mt-2">{serverError}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

function validateForm(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Название команды обязательно';
  }

  if (!values.university) {
    errors.university = 'Школа обязательна';
  }

  let hasCaptain = false;
  let captainCount = 0;

  values.participants.forEach((participant, index) => {
    if (!participant.fullName) {
      errors.participants = errors.participants || [];
      errors.participants[index] = { ...errors.participants[index], fullName: 'ФИО обязательно' };
    }
    if (!participant.email) {
      errors.participants = errors.participants || [];
      errors.participants[index] = { ...errors.participants[index], email: 'Email обязателен' };
    }
    if (!participant.phoneNumber) {
      errors.participants = errors.participants || [];
      errors.participants[index] = { ...errors.participants[index], phoneNumber: 'Телефон обязателен' };
    }
    if (!participant.role) {
      errors.participants = errors.participants || [];
      errors.participants[index] = { ...errors.participants[index], role: 'Роль обязательна' };
    }
    if (!participant.age || isNaN(participant.age) || participant.age <= 0) {
      errors.participants = errors.participants || [];
      errors.participants[index] = { ...errors.participants[index], age: 'Возраст должен быть больше 0' };
    }
    if (participant.isCaptain) {
      captainCount++;
    }
  });

  if (captainCount === 0) {
    errors.general = 'В команде должен быть хотя бы один капитан';
  } else if (captainCount > 1) {
    errors.general = 'В команде может быть только один капитан';
  }

  return errors;
}
