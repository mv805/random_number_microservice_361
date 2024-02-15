//run `ts-node sampleApp.ts` in the terminal from the root folder to run this app. Make sure the backend is running prior.

/**
 * Fetches a random number from the backend API given a maximum value.
 *
 * @param backendPort The port number of the backend server.
 * @param maxInt The maximum integer value for the random number.
 * @returns A string containing the random number.
 */
async function fetchRandomNumberMax(backendPort: number, maxInt: number) {
  try {
    const response = await fetch(
      `http://localhost:${backendPort}/api/random/max/${maxInt}`
    );
    const data = await response.json();
    return `Hello, here is your random integer between 1 and ${maxInt}: ${data.randomNumber}`;
  } catch (error) {
    console.error("Error:", error);
  }
}

/**
 * Fetches a random number from the backend API given a maximum value and minimum value to define a range.
 *
 * @param backendPort The port number of the backend server.
 * @param minInt The minimum integer value for the random number (inclusive).
 * @param maxInt The maximum integer value for the random number (inclusive).
 * @returns A string containing the random number.
 */
async function fetchRandomNumberRange(
  backendPort: number,
  minInt: number,
  maxInt: number
) {
  try {
    const response = await fetch(
      `http://localhost:${backendPort}/api/random/range?min=${minInt}&max=${maxInt}`
    );
    const data = await response.json();
    return `Hello, here is your random integer between ${minInt} and ${maxInt}: ${data.randomNumber}`;
  } catch (error) {
    console.error("Error:", error);
  }
}

const exampleBackendPort = 3050; //adjust as necessary to your backend port.

fetchRandomNumberMax(exampleBackendPort, 1_000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

fetchRandomNumberRange(exampleBackendPort, 100, 10_000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
