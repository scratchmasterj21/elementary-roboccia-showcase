import React, { useState } from 'react';
    import { db } from '../firebase';
    import { collection, addDoc } from 'firebase/firestore';

    interface Event {
      name: string;
      date: string;
      description: string;
      category: 'feliceUpcoming' | 'robocciaUpcoming' | 'past';
    }

    const Admin: React.FC = () => {
      const [event, setEvent] = useState<Event>({
        name: '',
        date: '',
        description: '',
        category: 'feliceUpcoming',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
          ...prevEvent,
          [name]: value,
        }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'events'), event);
          alert('Event added successfully!');
          setEvent({
            name: '',
            date: '',
            description: '',
            category: 'feliceUpcoming',
          });
        } catch (error) {
          console.error('Error adding event: ', error);
          alert('Failed to add event.');
        }
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Event Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={event.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={event.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                value={event.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={event.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="feliceUpcoming">Felice Upcoming</option>
                <option value="robocciaUpcoming">Roboccia Upcoming</option>
                <option value="past">Past Events</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Event
              </button>
            </div>
          </form>
        </div>
      );
    };

    export default Admin;
