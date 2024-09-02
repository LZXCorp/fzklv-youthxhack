import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const eventList = [
    {
        id: 1,
        name: 'Healthy Living Workshop',
        description: 'A workshop focused on promoting a healthy lifestyle among seniors, including exercise routines and nutrition advice.',
        eventDate: '2024-09-15',
        startTime: '10:00',
        endTime: '12:00',
        availability: 25,
        location: 'Ang Mo Kio Community Centre',
        thumbnail: 'assets/workshop-thumbnail.png',
        accessibility: ['wheelchair', 'hearing assistance'],
        languages: ['en', 'zh-cn'],
        organizerContact: '99558888',
        isRegistrationOpen: true,
    },
    {
        id: 2,
        name: 'Art Therapy Session',
        description: 'An art therapy session aimed at helping individuals express emotions and improve mental well-being through creative activities.',
        eventDate: '2024-09-20',
        startTime: '14:00',
        endTime: '16:00',
        availability: 15,
        location: 'Bukit Batok Community Centre',
        thumbnail: 'assets/art-therapy-thumbnail.png',
        accessibility: ['wheelchair'],
        languages: ['en', 'ms'],
        organizerContact: '99447777',
        isRegistrationOpen: true,
    },
    {
        id: 3,
        name: 'Technology for Seniors',
        description: 'A hands-on workshop teaching seniors how to use smartphones, apps, and the internet safely and effectively.',
        eventDate: '2024-09-25',
        startTime: '09:00',
        endTime: '11:00',
        availability: 30,
        location: 'Tampines Regional Library',
        thumbnail: 'assets/tech-workshop-thumbnail.png',
        accessibility: ['wheelchair', 'sign language interpreter'],
        languages: ['en', 'ta'],
        organizerContact: '99336677',
        isRegistrationOpen: false,
    },
];

function Events() {
    const [search, setSearch] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(eventList);

    const onSearchChange = (e) => {
        setSearch(e.target.value);
        filterEvents(e.target.value);
    };

    const filterEvents = (searchTerm) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filtered = eventList.filter(event =>
            event.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
            event.location.toLowerCase().includes(lowerCaseSearchTerm)
        );
        setFilteredEvents(filtered);
    };

    const onClickClear = () => {
        setSearch('');
        setFilteredEvents(eventList);
    };

    return (
        <div>
            <h2>Tutorials</h2>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <input 
                    value={search} 
                    placeholder="Search"
                    onChange={onSearchChange}
                    onKeyDown={onSearchKeyDown} 
                    style={{ padding: '8px', flexGrow: 1 }} 
                />
                <button onClick={onClickSearch} style={{ marginLeft: '8px' }}>
                    Search
                </button>
                <button onClick={onClickClear} style={{ marginLeft: '8px' }}>
                    Clear
                </button>
                {account && (
                    <Link to="/addevent" style={{ marginLeft: 'auto' }}>
                        <button>Add</button>
                    </Link>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                {eventList.map((event) => (
                    <div key={event.id} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
                        {event.thumbnail && (
                            <div style={{ paddingTop: '56.25%', background: `url(${event.thumbnail}) center/cover` }} />
                        )}
                        <div style={{ padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h3 style={{ margin: 0 }}>{event.name}</h3>
                                {account && account.id === event.accountId && (
                                    <Link to={`/editevent/${event.id}`}>
                                        <button style={{ padding: '4px' }}>Edit</button>
                                    </Link>
                                )}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#555' }}>
                                <span style={{ marginRight: '8px' }}>Organizer:</span>
                                <p style={{ margin: 0 }}>{event.organizerContact}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#555' }}>
                                <span style={{ marginRight: '8px' }}>Date:</span>
                                <p style={{ margin: 0 }}>{event.eventDate}</p>
                            </div>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
