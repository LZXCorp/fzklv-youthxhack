-- database: ..\db\core.sqlite3

CREATE TABLE User (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    birth_date DATE,
    gender TEXT,
    phone_number TEXT,
    emergency_contact TEXT
);

CREATE TABLE ContactInfo (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    phone_number TEXT NOT NULL,
    contact_type TEXT NOT NULL, -- 'personal' or 'emergency'
    relationship TEXT,
    is_primary BOOLEAN DEFAULT 0, -- Flag for primary contact
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Disabilities (
    disability_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    disability_description TEXT NOT NULL,
    transport_mode TEXT NOT NULL, -- Transport based on disability
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Events (
    event_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    transport_mode TEXT,
    event_date DATE,
    location TEXT,
    accessibility_options TEXT
);

CREATE TABLE EventParticipants (
    participant_id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (event_id) REFERENCES Events(event_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
