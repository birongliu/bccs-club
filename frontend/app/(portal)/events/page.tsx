"use client"; // This makes it a Client Component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import HeroSection from "@/app/ui/portal/events/HeroSection";
import CalendarSection from "@/app/ui/portal/events/CalendarSection";

interface Event {
  title: string;
  description: string;
  location: string;
  rrule?: {
    freq: string;
    interval: number;
    byweekday: string;
    dtstart: string;
    until: string;
  }; // Optional for non-recurring events
  start?: string; // Used for non-recurring events
  end?: string;   // Used for non-recurring events
  duration?: string;
  exdate?: string[]; // Optional for recurring events
}

export default function Page() {
  const [events, setEvents] = useState<Event[]>([]);

  const router = useRouter(); // Initialize useRouter for navigation

  useEffect(() => {
    setEvents([
      {
        title: 'Club Hours',
        description: 'Weekly club meeting to discuss ongoing projects, coding, and collaboration.',
        location: 'Room 0317, Ingersoll Hall',
        rrule: {
          freq: 'weekly', // Recurring every week
          interval: 1,    // Every week
          byweekday: 'TU', // Tuesday
          dtstart: '2024-09-03T13:00:00', // Start time in UTC (01:00 PM local time)
          until: '2024-10-31', // Until the end of the year
        },
        duration: '02:30', // Duration (2 hours and 30 minutes)
        exdate: [
          '2024-10-08T13:00:00', // Exclude October 8, 2024
        ],
      },
      {
        title: 'Club Hours',
        description: 'Weekly club meeting to discuss ongoing projects, coding, and collaboration.',
        location: 'Room 0317, Ingersoll Hall',
        rrule: {
          freq: 'weekly', // Recurring every week
          interval: 1,    // Every week
          byweekday: 'WE', // Wednesday
          dtstart: '2024-09-04T12:00:00', // Start time in UTC (12:00 PM local time)
          until: '2024-10-31', // Until the end of the year
        },
        duration: '02:00', // Duration (2 hours)
        exdate: [
          '2024-10-02T12:00:00', // Exclude October 2, 2024
        ],
      },
      {
        title: 'Meet & Greet',
        description: 'Get to know the executive board members and heard from 4 alumni about their experiences in the tech industry.',
        location: 'Jefferson Williams 4th Fl, Student Center',
        start: '2024-10-08T01:00:00', 
        end: '2024-10-08T14:30:00',
      },
    ]);
  }, []);

  // Event click handler to navigate to the specific event page
  const handleEventClick = (clickInfo: any) => {
    const eventId = clickInfo.event.title.replace(" ", ""); // Get the event ID
    router.push(`/events/${eventId}?info=${encodeURIComponent(JSON.stringify(clickInfo.event))}`); // Navigate to /events/[eventId] with event details
  };

  return (
    <main>
      <HeroSection />
      {events.length > 0 && 
        (<CalendarSection handleEventClick={handleEventClick} events={events}/>)
      }
    </main>
  );
}