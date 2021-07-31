import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const formater = new Intl.NumberFormat('pt-br');
  const [formData, setFormData] = useState({
    costPerHours: '',
    workHours: '',
    numberOfDays: '',
  });

  const [result, setResult] = useState(0);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { costPerHours, workHours, numberOfDays } = formData;
    const costPerDay = Number(costPerHours) * Number(workHours);
    if (costPerDay)
      setResult(formater.format(costPerDay * Number(numberOfDays)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src='/logo.svg' />
        <div className={styles.resultContainer}>
          <h2>Custo de trabalho</h2>
          <div className={styles.result}>
            <span>Kz</span>
            <h1>{result || '00,00'}</h1>
          </div>
        </div>
      </div>

      <aside>
        <form onSubmit={handleSubmit}>
          <label htmlFor='costPerHours'>Custo por Hora</label>
          <input name='costPerHours' onChange={handleChange} />
          <label>Horas de trabalho</label>
          <input name='workHours' onChange={handleChange} />
          <label>Dias de trabalho</label>
          <input name='numberOfDays' onChange={handleChange} />
          <button type='submit'>Calcular</button>
        </form>
      </aside>
    </div>
  );
}
