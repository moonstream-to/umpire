// Loads Umpire server configuration from environment variables.
// This is the single point of entry for all server configuration. All environment variables used to
// configure the Umpire server and all constants used in the code should be defined here.

const PORT = process.env.UMPIRE_PORT || 6644;
const LEADERBOARD_ID = process.env.UMPIRE_LEADERBOARD_ID;
const MOONSTREAM_ACCESS_TOKEN = process.env.UMPIRE_MOONSTREAM_ACCESS_TOKEN;

export {PORT, LEADERBOARD_ID, MOONSTREAM_ACCESS_TOKEN}
