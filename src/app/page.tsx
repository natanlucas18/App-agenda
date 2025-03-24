"use client";
import './home.css';
import {Container, Button} from '../styled';
import { MdDeleteOutline } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface NovasTarefas {
  nome: string,
};

interface Tarefas {
  id: number,
  nome:string
}

export default function Home() {
  const [tasks,setTasks] = useState<Tarefas>([]);
  const [formTasks, setFormTasks] = useState<NovasTarefas>({
    nome: '',
  });

  useEffect(() => {
    async function getTasks() {
        const res = await axios.get('http://localhost:3000/tarefas')
        return setTasks(res.data);
    }
    getTasks();
  },[tasks]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e:any) => {
    const {name, value} = e.target;
    setFormTasks({
      ...formTasks,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/tarefas', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formTasks),
    });

    if (response.ok) {
      formTasks.nome = '';
      return alert('Tarefas adcionada com sucesso!');
    } else {
      alert('Falha ao adcionar tarefa.');
    };
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/tarefas/${id}`);
    if (res.status <= 205) {
      console.log('tarefa deletada!')
    } else {
      console.log('falha ao apagar tarefa!!!');
    };
  }

  const handleEdit = async (id) => {
    const response = await axios.put(`http://localhost:3000/tarefas/${id}`, {formTasks})
    return response.data;

  }

  return (
        <Container>
          <div className='div-form'>
            <form method="POST" onSubmit={handleSubmit}>
                  <label htmlFor="nome">Nome da Tarefa:</label>
                  <input
                   type="text"
                   id='nome'
                   name='nome'
                   value={formTasks.nome}
                   onChange={handleChange}
                   required/>
                  <button type="submit">Adcionar</button>
            </form>
          </div>
        {/* <div className='div-tasks'>
             {tasks.map(task=> (
                            <section key={task.id}>
                            <h2>{task.nome}</h2>
                            <span>
                              <Button type='button' color='edit' onClick={() => handleEdit(task.id)}><FaEdit/></Button>
                              <Button type='button' color='delete' onClick={() => handleDelete(task.id)}><MdDeleteOutline/></Button>
                            </span>
                          </section>
            ))}
          </div>  */}
          <div className='list-tasks'>
            {tasks.map(task => (
              <ul key={task.id}>
                  <li>{task.nome}</li>
                  <span>
                      <Button type='button' color='delete' onClick={() => handleDelete(task.id)}><MdDeleteOutline/></Button>
                  </span>

              </ul>
            ))}
          </div>
      </Container>
  );
}
