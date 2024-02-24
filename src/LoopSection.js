import './App.css';

const arr = [
  { value: 1, type: 'duck', place: 'idk', data: '10/10/2025' },
  { value: 50, type: 'another duck', place: 'island', data: '10/10/2025' },
  { value: 550, type: 'uber', place: 'america', data: '10/10/2025' },
  { value: 10, type: 'lorem', place: 'brazil', data: '10/10/2025' },
  { value: 3, type: 'this', place: 'brazil', data: '10/10/2025' },
  { value: 340, type: 'something', place: 'brazil', data: '10/10/2025' },
  { value: 5, type: 'quack', place: 'brazil', data: '10/10/2025' },
  { value: 90, type: 'hungry', place: 'brazil', data: '10/10/2025' },
]

export const LoopSection = () => {

  const colorizeValue = (value) =>{
    if(typeof value !== 'number'){
      return 0
    }

    return value > 10 ? '#00aa4f' : 'black'
  }

  return (
    <section className='LoopSection'>
    <table className='Table'>
      <thead>
        <tr>
          <th>Data</th>
          <th>Tipo</th>
          <th>Place</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item, index) => (
          <tr key={index}>
            <td>{item.data}</td>
            <td>{item.type}</td>
            <td style={{
              color: colorizeValue(item.value)
            }} >{item.value}</td>
            <td>{item.place}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
  )
}

// 8c91a9