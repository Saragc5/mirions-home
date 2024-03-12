import Events from './Events'
import { eventData  } from '../data'
import '../personalizedStyles.css'

function EventsCreatedByUser() {
  return (
    <div className="colorBackground">
      <span className="flex justify-between mb-1">
        <h3 className="mb-2">Eventos creados por ti</h3>
        <span className='w-10 h-10 p-2 mb-2 border-solid border-2 border-indigo-600 rounded-full'>{`12`}</span>
      </span>
      {eventData &&
        eventData
        .filter(event => event.type === "createdByUser")
        .slice(0, 2)
        .map(({ id, title, description }) => {
          return <Events key={id} title={title} description={description} />;
        })}
    </div>
  );
}

export default EventsCreatedByUser