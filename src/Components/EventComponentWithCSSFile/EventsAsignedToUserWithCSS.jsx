import Events from '../Events';
import { eventData  } from '../../data';
import './estilos.css'

function EventsAsignedToUserWithCSS() {
  return (
    <div className="contenedorEventos">
    <span className="primerSpan">
      <h3 className="titulo">Tus eventos con CSS normal</h3>
      <span className='segundoSpan'>{`12`}</span>
    </span>
    {eventData &&
      eventData
      .filter(event => event.type === "invited")
      .slice(0, 2)
      .map(({ id, title, description }) => {
        return <Events key={id} title={title} description={description} />;
      })}
  </div>
  )
}

export default EventsAsignedToUserWithCSS