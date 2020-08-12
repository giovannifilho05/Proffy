import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';
import HeaderDescription from '../../components/HeaderDescription';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('Matemática');
  const [week_day, setWeekDay] = useState('1');
  const [time, setTime] = useState('02:30');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" >
      <PageHeader
        title="Estudar"
      >
        <HeaderDescription
          title="Estes são os proffys disponíveis."
          icon="smile"
          label={['Nós temos 32', 'professores']}
        >

          <form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              valueDefaultLabel="Selecione"
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
              ]}
            />
            <Select
              name="week_day"
              label="Dia da Semana"
              value={week_day}
              valueDefaultLabel="Selecione"
              onChange={(e) => { setWeekDay(e.target.value) }}
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-Feira' },
                { value: '2', label: 'Terça-Feira' },
                { value: '3', label: 'Quarta-Feira' },
                { value: '4', label: 'Quinta-Feira' },
                { value: '5', label: 'Sexta-Feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />
            <Input
              name="time"
              label="Hora"
              type="time"
              value={time}
              onChange={(e) => { setTime(e.target.value) }}
            />

            <button type="submit">
              Buscar
            </button>
          </form>

        </HeaderDescription>
      </PageHeader>

          <main>
            {teachers.map((teacher: Teacher) => {
              return (
                <TeacherItem key={teacher.id}
                  teacher={teacher}
                />
              );
            })}
          </main>

    </div>
  );
}

export default TeacherList;