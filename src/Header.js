import './App.css';

export const Header = ({ header,  onUpdateHeader }) => {
  return (
    <header className="Header">
      <span className='Logo'>
        LOGO
        </span>
      <div className='HeaderContent'>
        <span className='Orange'>Olá, {header.name}!</span>
        Lorem ipsum dolor sit amet. :)
      </div>
      <div className='HeaderContent'>
        vencimento
        <span>{header.date}</span>
      </div>
    </header>
  )
} 