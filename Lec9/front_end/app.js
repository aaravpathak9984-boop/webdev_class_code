// The API endpoint where we are fetching our user data from
const API_URL = 'http://localhost:3000/data';

// Declare an asynchronous function to handle the API request and update the UI
async function fetchAndRenderUsers() {
  try {
    // 1. Send a GET request to the API and wait for the response
    const response = await fetch(API_URL);
    
    // 2. If the HTTP response is not successful (e.g., 404 or 500), throw an error
    if (!response.ok) {
      throw new Error('Network error');
    }
    
    // 3. Parse the response data into a JavaScript array and wait for it to finish
    const users = await response.json();
    
    // 4. Select the HTML container element where the user cards will be displayed
    const container = document.getElementById('card-container');
    
    // 5. Clear the container so it's empty before adding new data
    container.innerHTML = '';
    
    // 6. Loop through each user in the array we received from the API
    users.forEach(user => {
      // 7. Create a new <div> element to act as the user's card
      const card = document.createElement('div');
      
      // 8. Add the CSS class 'user-card' to this new div for styling
      card.className = 'user-card';
      
      // 9. Safely get the first letter of the first name. If missing, use '?'
      const firstNameInitial = user.first_name ? user.first_name[0] : '?';
      
      // 10. Safely get the first letter of the last name. If missing, use '?'
      const lastNameInitial = user.last_name ? user.last_name[0] : '?';
      
      // 11. Safely get the gender and convert it to lowercase for CSS, or default to 'unknown'
      const genderStyle = user.gender ? user.gender.toLowerCase() : 'unknown';
      
      // 12. Build the HTML content for this user's card using template literals
      card.innerHTML = `
        <div class="avatar">${firstNameInitial}${lastNameInitial}</div>
        <h3>${user.first_name || 'Anonymous'} ${user.last_name || ''}</h3>
        <p class="gender ${genderStyle}">${user.gender || 'Not Specified'}</p>
        <p class="email">⚡ ${user.email || 'No Email'}</p>
        <p class="ip">system_ip: ${user.ip_address || '0.0.0.0'}</p>
      `;
      
      // 13. Add the fully constructed card into the main container on the webpage
      container.appendChild(card);
    });
    
  } catch (error) {
    // 14. Catch and log any errors that happen during fetching, parsing, or rendering
    console.error('Error:', error);
    
    // 15. If something fails, display a user-friendly error message in the container
    document.getElementById('card-container').innerHTML = `
      <p class="error">⚠️ Terminal connection failed. Verify local server configuration.</p>
    `;
  }
}

// 16. Wait for the webpage to be fully loaded before starting our function
window.addEventListener('DOMContentLoaded', fetchAndRenderUsers);
