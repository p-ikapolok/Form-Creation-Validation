async function fetchUserData() {
    // 1. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // 2. Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // 3. Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 4. Convert response to JSON
        const users = await response.json();
        
        // 5. Clear loading message
        dataContainer.innerHTML = '';
        
        // 6. Create and append user list
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // 7. Handle errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Invoke function when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
