import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, Input, IconButton, Button } from '@mui/material';
import { AccountCircle, AccessTime, Search, Clear, LocationOn } from '@mui/icons-material';
import dayjs from 'dayjs';

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
        <Box>
            <Typography variant="h5" sx={{ my: 2 }}>
                Events
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Input value={search} placeholder="Search"
                    onChange={onSearchChange} />
                <IconButton color="primary"
                    onClick={() => filterEvents(search)}>
                    <Search />
                </IconButton>
                <IconButton color="primary"
                    onClick={onClickClear}>
                    <Clear />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Link to="/addevent">
                    <Button variant='contained'>
                        Add Event
                    </Button>
                </Link>
            </Box>

            <Grid container spacing={2}>
                {
                    filteredEvents.map((event) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={event.id}>
                                <Card>
                                    {
                                        event.thumbnail && (
                                            <Box className="aspect-ratio-container">
                                                <img alt="event"
                                                    src={event.thumbnail}>
                                                </img>
                                            </Box>
                                        )
                                    }
                                    <CardContent>
                                        <Box sx={{ display: 'flex', mb: 1 }}>
                                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                                {event.name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                                            color="text.secondary">
                                            <LocationOn sx={{ mr: 1 }} />
                                            <Typography>
                                                {event.location}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                                            color="text.secondary">
                                            <AccessTime sx={{ mr: 1 }} />
                                            <Typography>
                                                {dayjs(event.eventDate).format('YYYY-MM-DD')} {event.startTime} - {event.endTime}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                                            {event.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
}

export default Events;
