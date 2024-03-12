import AddEvent from './AddEvent'
import EventsCreatedByUser from './EventsCreatedByUser'
import EventsAsignedToUser from './EventsAsignedToUser'
import EventsAsignedToUserWithCSS from './EventComponentWithCSSFile/EventsAsignedToUserWithCSS'


function MainContent() {
  return (
    <div className="grid container mx-auto mt-12 mb-20 p-4 gap-3 overflow-auto">     
      <EventsCreatedByUser />
      <EventsAsignedToUserWithCSS />
      <EventsAsignedToUser />
      <AddEvent />
    </div>
  );
}

export default MainContent