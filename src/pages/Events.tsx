import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  category: 'feliceUpcoming' | 'robocciaUpcoming' | 'past';
}

const Events: React.FC = () => {
  const [feliceUpcomingEvents, setFeliceUpcomingEvents] = useState<Event[]>([]);
  const [robocciaUpcomingEvents, setRobocciaUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList: Event[] = eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];

      const sortByDate = (events: Event[]) => {
        return [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      };

      setFeliceUpcomingEvents(sortByDate(eventsList.filter(event => event.category === 'feliceUpcoming')));
      setRobocciaUpcomingEvents(sortByDate(eventsList.filter(event => event.category === 'robocciaUpcoming')));
      setPastEvents(sortByDate(eventsList.filter(event => event.category === 'past')));
    };

    fetchEvents();
  }, []);

  const renderDescription = (description: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = description.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            {part}
          </a>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>

      {/* Roboccia Events Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2025 Roboccia Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {robocciaUpcomingEvents.map(event => (
            <div key={event.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">{renderDescription(event.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Felice Events Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Felice Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feliceUpcomingEvents.map(event => (
            <div key={event.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">{renderDescription(event.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="mt-8">
        <h1 className="text-3xl font-bold mb-4">Past Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastEvents.map(event => (
            <div key={event.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">{renderDescription(event.description)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
