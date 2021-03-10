CREATE TABLE Profiles(id SERIAL, name VARCHAR(30) NOT NULL UNIQUE, description VARCHAR(500), work_experience_years INT NOT NULL, age INT NOT NULL, CONSTRAINT profile_name UNIQUE (name));
INSERT INTO Profiles(name, description, work_experience_years, age)
VALUES ('Roman Tuomisto', 'Senior Frontend Developer', 4, 36);