// Initialise GitHUb
const github = new GitHub;

// Initializse UI
const ui = new UI;

// Search Input 
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    // Check its not null
    if (userText !== '') {
        // console.log(userText);
        github.getUSer(userText)
            .then(data => {
                // console.log(data);
                if (data.profile.status === 404) {
                    // Show alert
                    ui.showAlert('Search Not Found!', 'alert alert-danger');
                } else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});