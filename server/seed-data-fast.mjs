// NOTE: this is a faster duplicate of seed-data.mjs for quick demo seeding.
// It still uses Math.random() for all performance metrics — it has NOT been
// updated with verified real stats. Use seed-data.mjs as the source of truth;
// this file is for fast local iteration only, not for the submitted build.
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool(process.env.DATABASE_URL);

// Teams data
const teamsData = [
  { name: 'Manchester City', league: 'Premier League', country: 'England', budget: 500, formation: '4-3-3' },
  { name: 'Liverpool FC', league: 'Premier League', country: 'England', budget: 450, formation: '4-3-3' },
  { name: 'Arsenal FC', league: 'Premier League', country: 'England', budget: 400, formation: '4-2-3-1' },
  { name: 'Manchester United', league: 'Premier League', country: 'England', budget: 420, formation: '4-2-3-1' },
  { name: 'Chelsea FC', league: 'Premier League', country: 'England', budget: 380, formation: '3-4-3' },
  { name: 'Real Madrid', league: 'La Liga', country: 'Spain', budget: 550, formation: '4-3-3' },
  { name: 'Barcelona', league: 'La Liga', country: 'Spain', budget: 480, formation: '4-3-3' },
  { name: 'Atletico Madrid', league: 'La Liga', country: 'Spain', budget: 320, formation: '4-4-2' },
  { name: 'Paris Saint-Germain', league: 'Ligue 1', country: 'France', budget: 520, formation: '4-3-3' },
  { name: 'Bayern Munich', league: 'Bundesliga', country: 'Germany', budget: 480, formation: '4-2-3-1' },
];

// Players data
const playersData = [
  // Manchester City
  { name: 'Erling Haaland', position: 'ST', age: 23, nationality: 'Norway', currentTeamId: 1, marketValue: 180, salary: 25, jerseyNumber: 9, height: 194, weight: 88, preferredFoot: 'left' },
  { name: 'Kevin De Bruyne', position: 'CM', age: 32, nationality: 'Belgium', currentTeamId: 1, marketValue: 85, salary: 24, jerseyNumber: 17, height: 181, weight: 76, preferredFoot: 'right' },
  { name: 'Ruben Dias', position: 'CB', age: 26, nationality: 'Portugal', currentTeamId: 1, marketValue: 75, salary: 18, jerseyNumber: 3, height: 187, weight: 82, preferredFoot: 'right' },
  { name: 'Ederson', position: 'GK', age: 31, nationality: 'Brazil', currentTeamId: 1, marketValue: 60, salary: 20, jerseyNumber: 31, height: 188, weight: 86, preferredFoot: 'right' },
  { name: 'Phil Foden', position: 'LW', age: 23, nationality: 'England', currentTeamId: 1, marketValue: 120, salary: 16, jerseyNumber: 47, height: 180, weight: 73, preferredFoot: 'left' },
  
  // Liverpool
  { name: 'Mohamed Salah', position: 'RW', age: 31, nationality: 'Egypt', currentTeamId: 2, marketValue: 95, salary: 22, jerseyNumber: 11, height: 175, weight: 71, preferredFoot: 'left' },
  { name: 'Virgil van Dijk', position: 'CB', age: 32, nationality: 'Netherlands', currentTeamId: 2, marketValue: 70, salary: 21, jerseyNumber: 4, height: 193, weight: 87, preferredFoot: 'right' },
  { name: 'Alisson', position: 'GK', age: 31, nationality: 'Brazil', currentTeamId: 2, marketValue: 65, salary: 19, jerseyNumber: 1, height: 191, weight: 91, preferredFoot: 'right' },
  { name: 'Luis Diaz', position: 'LW', age: 27, nationality: 'Colombia', currentTeamId: 2, marketValue: 85, salary: 17, jerseyNumber: 19, height: 179, weight: 73, preferredFoot: 'left' },
  { name: 'Trent Alexander-Arnold', position: 'RB', age: 25, nationality: 'England', currentTeamId: 2, marketValue: 95, salary: 15, jerseyNumber: 66, height: 184, weight: 81, preferredFoot: 'right' },
  
  // Arsenal
  { name: 'Bukayo Saka', position: 'RW', age: 22, nationality: 'England', currentTeamId: 3, marketValue: 110, salary: 14, jerseyNumber: 7, height: 178, weight: 69, preferredFoot: 'left' },
  { name: 'Gabriel Martinelli', position: 'LW', age: 22, nationality: 'Brazil', currentTeamId: 3, marketValue: 100, salary: 12, jerseyNumber: 11, height: 183, weight: 77, preferredFoot: 'right' },
  { name: 'William Saliba', position: 'CB', age: 23, nationality: 'France', currentTeamId: 3, marketValue: 90, salary: 11, jerseyNumber: 2, height: 193, weight: 88, preferredFoot: 'right' },
  { name: 'Aaron Ramsdale', position: 'GK', age: 25, nationality: 'England', currentTeamId: 3, marketValue: 55, salary: 10, jerseyNumber: 1, height: 188, weight: 82, preferredFoot: 'right' },
  { name: 'Declan Rice', position: 'CM', age: 24, nationality: 'England', currentTeamId: 3, marketValue: 105, salary: 13, jerseyNumber: 41, height: 188, weight: 85, preferredFoot: 'right' },
  
  // Manchester United
  { name: 'Bruno Fernandes', position: 'CM', age: 29, nationality: 'Portugal', currentTeamId: 4, marketValue: 100, salary: 20, jerseyNumber: 8, height: 179, weight: 80, preferredFoot: 'right' },
  { name: 'Jadon Sancho', position: 'RW', age: 23, nationality: 'England', currentTeamId: 4, marketValue: 85, salary: 14, jerseyNumber: 25, height: 180, weight: 76, preferredFoot: 'left' },
  { name: 'Lisandro Martinez', position: 'CB', age: 25, nationality: 'Argentina', currentTeamId: 4, marketValue: 75, salary: 12, jerseyNumber: 6, height: 175, weight: 75, preferredFoot: 'left' },
  { name: 'David de Gea', position: 'GK', age: 32, nationality: 'Spain', currentTeamId: 4, marketValue: 40, salary: 18, jerseyNumber: 1, height: 192, weight: 82, preferredFoot: 'right' },
  { name: 'Harry Maguire', position: 'CB', age: 30, nationality: 'England', currentTeamId: 4, marketValue: 45, salary: 15, jerseyNumber: 5, height: 194, weight: 100, preferredFoot: 'right' },
  
  // Chelsea
  { name: 'Enzo Fernandez', position: 'CM', age: 23, nationality: 'Argentina', currentTeamId: 5, marketValue: 120, salary: 16, jerseyNumber: 8, height: 180, weight: 78, preferredFoot: 'right' },
  { name: 'Moisés Caicedo', position: 'CM', age: 21, nationality: 'Ecuador', currentTeamId: 5, marketValue: 110, salary: 13, jerseyNumber: 25, height: 180, weight: 76, preferredFoot: 'right' },
  { name: 'Reece James', position: 'RB', age: 24, nationality: 'England', currentTeamId: 5, marketValue: 95, salary: 12, jerseyNumber: 24, height: 185, weight: 83, preferredFoot: 'right' },
  { name: 'Robert Sanchez', position: 'GK', age: 26, nationality: 'Spain', currentTeamId: 5, marketValue: 50, salary: 11, jerseyNumber: 1, height: 188, weight: 85, preferredFoot: 'right' },
  { name: 'Thiago Silva', position: 'CB', age: 39, nationality: 'Brazil', currentTeamId: 5, marketValue: 25, salary: 14, jerseyNumber: 6, height: 180, weight: 79, preferredFoot: 'right' },
  
  // Real Madrid
  { name: 'Cristiano Ronaldo', position: 'ST', age: 38, nationality: 'Portugal', currentTeamId: 6, marketValue: 50, salary: 32, jerseyNumber: 7, height: 187, weight: 84, preferredFoot: 'left' },
  { name: 'Vinícius Júnior', position: 'LW', age: 23, nationality: 'Brazil', currentTeamId: 6, marketValue: 150, salary: 18, jerseyNumber: 20, height: 176, weight: 73, preferredFoot: 'left' },
  { name: 'Karim Benzema', position: 'ST', age: 35, nationality: 'France', currentTeamId: 6, marketValue: 60, salary: 25, jerseyNumber: 9, height: 185, weight: 81, preferredFoot: 'right' },
  { name: 'Thibaut Courtois', position: 'GK', age: 31, nationality: 'Belgium', currentTeamId: 6, marketValue: 55, salary: 19, jerseyNumber: 1, height: 206, weight: 96, preferredFoot: 'right' },
  { name: 'Sergio Ramos', position: 'CB', age: 37, nationality: 'Spain', currentTeamId: 6, marketValue: 30, salary: 20, jerseyNumber: 4, height: 184, weight: 82, preferredFoot: 'right' },
  
  // Barcelona
  { name: 'Robert Lewandowski', position: 'ST', age: 35, nationality: 'Poland', currentTeamId: 7, marketValue: 75, salary: 24, jerseyNumber: 9, height: 184, weight: 81, preferredFoot: 'right' },
  { name: 'Pedri', position: 'CM', age: 20, nationality: 'Spain', currentTeamId: 7, marketValue: 100, salary: 10, jerseyNumber: 8, height: 174, weight: 65, preferredFoot: 'left' },
  { name: 'Gavi', position: 'CM', age: 19, nationality: 'Spain', currentTeamId: 7, marketValue: 90, salary: 9, jerseyNumber: 6, height: 173, weight: 67, preferredFoot: 'right' },
  { name: 'Marc-André ter Stegen', position: 'GK', age: 31, nationality: 'Germany', currentTeamId: 7, marketValue: 50, salary: 16, jerseyNumber: 1, height: 187, weight: 85, preferredFoot: 'right' },
  { name: 'Sergi Roberto', position: 'RB', age: 31, nationality: 'Spain', currentTeamId: 7, marketValue: 35, salary: 12, jerseyNumber: 20, height: 183, weight: 80, preferredFoot: 'right' },
  
  // Atletico Madrid
  { name: 'Antoine Griezmann', position: 'ST', age: 32, nationality: 'France', currentTeamId: 8, marketValue: 50, salary: 18, jerseyNumber: 7, height: 183, weight: 76, preferredFoot: 'left' },
  { name: 'Jan Oblak', position: 'GK', age: 31, nationality: 'Slovenia', currentTeamId: 8, marketValue: 55, salary: 15, jerseyNumber: 13, height: 188, weight: 88, preferredFoot: 'right' },
  { name: 'Jose Maria Gimenez', position: 'CB', age: 28, nationality: 'Uruguay', currentTeamId: 8, marketValue: 45, salary: 12, jerseyNumber: 2, height: 187, weight: 85, preferredFoot: 'right' },
  { name: 'Koke', position: 'CM', age: 31, nationality: 'Spain', currentTeamId: 8, marketValue: 40, salary: 13, jerseyNumber: 6, height: 183, weight: 78, preferredFoot: 'right' },
  { name: 'Yannick Carrasco', position: 'LW', age: 29, nationality: 'Belgium', currentTeamId: 8, marketValue: 35, salary: 10, jerseyNumber: 21, height: 180, weight: 75, preferredFoot: 'left' },
  
  // PSG
  { name: 'Neymar Jr', position: 'LW', age: 31, nationality: 'Brazil', currentTeamId: 9, marketValue: 80, salary: 30, jerseyNumber: 10, height: 175, weight: 68, preferredFoot: 'right' },
  { name: 'Kylian Mbappé', position: 'ST', age: 24, nationality: 'France', currentTeamId: 9, marketValue: 200, salary: 28, jerseyNumber: 7, height: 178, weight: 73, preferredFoot: 'right' },
  { name: 'Gianluigi Donnarumma', position: 'GK', age: 24, nationality: 'Italy', currentTeamId: 9, marketValue: 70, salary: 14, jerseyNumber: 50, height: 196, weight: 90, preferredFoot: 'right' },
  { name: 'Marquinhos', position: 'CB', age: 29, nationality: 'Brazil', currentTeamId: 9, marketValue: 55, salary: 16, jerseyNumber: 5, height: 183, weight: 80, preferredFoot: 'right' },
  { name: 'Achraf Hakimi', position: 'RB', age: 24, nationality: 'Morocco', currentTeamId: 9, marketValue: 90, salary: 13, jerseyNumber: 2, height: 181, weight: 77, preferredFoot: 'right' },
  
  // Bayern Munich
  { name: 'Thomas Müller', position: 'RW', age: 34, nationality: 'Germany', currentTeamId: 10, marketValue: 40, salary: 16, jerseyNumber: 25, height: 183, weight: 79, preferredFoot: 'right' },
  { name: 'Serge Gnabry', position: 'RW', age: 27, nationality: 'Germany', currentTeamId: 10, marketValue: 75, salary: 14, jerseyNumber: 7, height: 183, weight: 76, preferredFoot: 'right' },
  { name: 'Leroy Sané', position: 'LW', age: 27, nationality: 'Germany', currentTeamId: 10, marketValue: 80, salary: 15, jerseyNumber: 10, height: 183, weight: 77, preferredFoot: 'left' },
  { name: 'Manuel Neuer', position: 'GK', age: 37, nationality: 'Germany', currentTeamId: 10, marketValue: 35, salary: 18, jerseyNumber: 1, height: 193, weight: 92, preferredFoot: 'right' },
  { name: 'Dayot Upamecano', position: 'CB', age: 25, nationality: 'France', currentTeamId: 10, marketValue: 70, salary: 11, jerseyNumber: 2, height: 186, weight: 85, preferredFoot: 'right' },
];

try {
  const connection = await pool.getConnection();
  
  // Insert teams
  console.log('Inserting teams...');
  const teamValues = teamsData.map(t => [t.name, t.league, t.country, t.budget, t.formation]);
  await connection.query(
    'INSERT INTO teams (name, league, country, budget, formation) VALUES ?',
    [teamValues]
  );
  
  // Insert players
  console.log('Inserting players...');
  const playerValues = playersData.map(p => [p.name, p.position, p.age, p.nationality, p.currentTeamId, p.marketValue, p.salary, p.jerseyNumber, p.height, p.weight, p.preferredFoot]);
  await connection.query(
    'INSERT INTO players (name, position, age, nationality, currentTeamId, marketValue, salary, jerseyNumber, height, weight, preferredFoot) VALUES ?',
    [playerValues]
  );
  
  // Insert metrics
  console.log('Inserting player metrics...');
  const metricsValues = playersData.map((p, idx) => [
    idx + 1, '2023-24',
    Math.floor(Math.random() * 20) + 15, Math.floor(Math.random() * 1500) + 500,
    Math.floor(Math.random() * 15), Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 2000) + 500, Math.random() * 20 + 75,
    Math.floor(Math.random() * 30), Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 10), Math.floor(Math.random() * 5), Math.floor(Math.random() * 2),
    Math.random() * 10 + 2, Math.random() * 5 + 1,
    Math.floor(Math.random() * 50), Math.random() * 30 + 50, Math.random() * 40 + 40,
    Math.floor(Math.random() * 30), Math.random() * 40 + 40
  ]);
  await connection.query(
    'INSERT INTO playerMetrics (playerId, season, appearances, minutes, goals, assists, passes, passAccuracy, tackles, interceptions, fouls, yellowCards, redCards, expectedGoals, expectedAssists, dribbles, dribbleSuccess, shotAccuracy, aerialWins, aerialWinPercentage) VALUES ?',
    [metricsValues]
  );
  
  // Insert workload
  console.log('Inserting workload data...');
  const workloadValues = playersData.map((p, idx) => [
    idx + 1, '2023-24',
    Math.random() * 200 + 100, Math.random() * 2 + 0.5,
    Math.random() * 40 + 20, Math.random() * 25 + 5,
    JSON.stringify([]), Math.floor(Math.random() * 7), null
  ]);
  await connection.query(
    'INSERT INTO playerWorkload (playerId, season, minutesPerWeek, gamesPerWeek, fatigueScore, injuryRisk, injuryHistory, recoveryTime, lastInjury) VALUES ?',
    [workloadValues]
  );
  
  connection.release();
  console.log('✅ Data seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('❌ Error seeding data:', error);
  process.exit(1);
}
