const event_list = [
    {
        name: 'Healthy Living Workshop',
        description: 'A workshop focused on promoting a healthy lifestyle among seniors, including exercise routines and nutrition advice.',
        eventDate: '2024-09-15',
        startTime: '10:00',
        endTime: '12:00',
        availability: 25,
        location: 'Ang Mo Kio Community Centre',
        thumbnail: '../../public/workshop-thumbnail.png',
        accessibility: ['wheelchair', 'hearing assistance'],
        languages: ['en', 'zh-cn'],
        organizerContact: '99558888',
        isRegistrationOpen: true,
        registrationLink: '/register/healthy-living-workshop',
    },
    {
        name: 'Art Therapy Session',
        description: 'An art therapy session aimed at helping individuals express emotions and improve mental well-being through creative activities.',
        eventDate: '2024-09-20',
        startTime: '14:00',
        endTime: '16:00',
        availability: 15,
        location: 'Bukit Batok Community Centre',
        thumbnail: '../../public/art-therapy-thumbnail.png',
        accessibility: ['wheelchair'],
        languages: ['en', 'ms'],
        organizerContact: '99447777',
        isRegistrationOpen: true,
        registrationLink: '/register/art-therapy-session',
    },
    {
        name: 'Technology for Seniors',
        description: 'A hands-on workshop teaching seniors how to use smartphones, apps, and the internet safely and effectively.',
        eventDate: '2024-09-25',
        startTime: '09:00',
        endTime: '11:00',
        availability: 30,
        location: 'Tampines Regional Library',
        thumbnail: '../../public/tech-workshop-thumbnail.png',
        accessibility: ['wheelchair', 'sign language interpreter'],
        languages: ['en', 'ta'],
        organizerContact: '99336677',
        isRegistrationOpen: false,
        registrationLink: '/register/technology-for-seniors',
    },
    {
        name: 'Community Health Screening',
        description: 'A free health screening event providing blood pressure, glucose, and cholesterol checks for the elderly.',
        eventDate: '2024-09-30',
        startTime: '08:00',
        endTime: '12:00',
        availability: 50,
        location: 'Yishun Polyclinic',
        thumbnail: '../../public/health-screening-thumbnail.png',
        accessibility: ['wheelchair', 'hearing assistance'],
        languages: ['en', 'ms', 'ta'],
        organizerContact: '99224455',
        isRegistrationOpen: true,
        registrationLink: '/register/community-health-screening',
    },
    {
        name: 'Senior Fitness Class',
        description: 'A fitness class designed for seniors to improve mobility and strength through low-impact exercises.',
        eventDate: '2024-10-05',
        startTime: '07:30',
        endTime: '09:00',
        availability: 20,
        location: 'Jurong East Sports Complex',
        thumbnail: '../../public/fitness-class-thumbnail.png',
        accessibility: ['wheelchair'],
        languages: ['en', 'zh-cn'],
        organizerContact: '99887766',
        isRegistrationOpen: true,
        registrationLink: '/register/senior-fitness-class',
    },
    {
        name: 'Cooking for Health',
        description: 'A cooking workshop that teaches healthy and affordable recipes tailored to seniors.',
        eventDate: '2024-10-10',
        startTime: '11:00',
        endTime: '13:00',
        availability: 12,
        location: 'Pasir Ris Community Centre',
        thumbnail: '../../public/cooking-workshop-thumbnail.png',
        accessibility: ['wheelchair', 'sign language interpreter', 'hearing assistance'],
        languages: ['en', 'zh-cn', 'ms'],
        organizerContact: '99775544',
        isRegistrationOpen: true,
        registrationLink: '/register/cooking-for-health',
    },
];

export default event_list;
