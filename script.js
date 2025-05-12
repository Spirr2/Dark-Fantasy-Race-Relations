document.addEventListener('DOMContentLoaded', () => {
    const raceListUl = document.getElementById('raceList');
    const raceASelect = document.getElementById('raceA');
    const raceBSelect = document.getElementById('raceB');
    const descriptionBox = document.getElementById('relationshipDescription');

    // Populate sidebar and dropdowns
    RACES.forEach(race => {
        // Sidebar
        const li = document.createElement('li');
        li.textContent = race;
        li.dataset.race = race;
        raceListUl.appendChild(li);

        // Dropdowns
        const optionA = document.createElement('option');
        optionA.value = race;
        optionA.textContent = race;
        raceASelect.appendChild(optionA);

        const optionB = document.createElement('option');
        optionB.value = race;
        optionB.textContent = race;
        raceBSelect.appendChild(optionB);
    });

    // Store sidebar list items for easy access
    const sidebarItems = Array.from(raceListUl.getElementsByTagName('li'));

    // --- Event Listener for Sidebar Race Click ---
    raceListUl.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedRaceName = event.target.dataset.race;
            updateSidebarColors(selectedRaceName);
            // Optionally, clear dropdowns or set one to selectedRaceName
            // raceASelect.value = selectedRaceName;
            // raceBSelect.value = "";
            // updateDescriptionFromDropdowns(); // if you want to show a default
            descriptionBox.innerHTML = `<p>Displaying general disposition of <strong>${selectedRaceName}</strong> towards other races. Select two races from dropdowns for specific A ➔ B relationship.</p>`;
        }
    });

    // --- Event Listeners for Dropdown Changes ---
    raceASelect.addEventListener('change', updateDescriptionFromDropdowns);
    raceBSelect.addEventListener('change', updateDescriptionFromDropdowns);

    // --- Function to Update Sidebar Colors ---
    function updateSidebarColors(selectedRaceName) {
        sidebarItems.forEach(item => {
            item.classList.remove('sidebar-selected', 'sidebar-friendly', 'sidebar-hostile', 'sidebar-neutral');
            const otherRaceName = item.dataset.race;

            if (otherRaceName === selectedRaceName) {
                item.classList.add('sidebar-selected');
            } else {
                // Get the relationship from selectedRaceName's perspective TO otherRaceName
                const relationship = RELATIONS[selectedRaceName] ? RELATIONS[selectedRaceName][otherRaceName] : null;
                if (relationship) {
                    switch (relationship.status) {
                        case 'H':
                            item.classList.add('sidebar-hostile');
                            break;
                        case 'N':
                            item.classList.add('sidebar-neutral');
                            break;
                        case 'T':
                            item.classList.add('sidebar-friendly'); // Tolerant maps to friendly green
                            break;
                        default:
                            item.classList.add('sidebar-neutral'); // Fallback
                    }
                } else {
                     item.classList.add('sidebar-neutral'); // If no specific relation (e.g. to itself, though handled by selected)
                }
            }
        });
    }

    // --- Function to Update Description from Dropdowns ---
    function updateDescriptionFromDropdowns() {
        const raceAName = raceASelect.value;
        const raceBName = raceBSelect.value;

        if (raceAName && raceBName) {
            if (raceAName === raceBName) {
                descriptionBox.innerHTML = `<p>Please select two <em>different</em> races to see their relationship.</p>`;
                return;
            }

            // Get relationship from A's perspective to B
            const relationship = RELATIONS[raceAName] ? RELATIONS[raceAName][raceBName] : null;

            if (relationship) {
                let statusText = '';
                switch (relationship.status) {
                    case 'H': statusText = 'Hostile'; break;
                    case 'N': statusText = 'Neutral/Wary'; break;
                    case 'T': statusText = 'Tolerant/Pragmatic'; break;
                }
                descriptionBox.innerHTML = `
                    <p><strong>${raceAName} ➔ ${raceBName} (Status: ${statusText})</strong></p>
                    <p>${relationship.description}</p>
                `;
            } else {
                descriptionBox.innerHTML = `<p>No specific relationship data found for ${raceAName} towards ${raceBName}. This might be an oversight or they have no significant defined interaction.</p>`;
            }
        } else {
            descriptionBox.innerHTML = `<p>Select two different races from the dropdowns to see their relationship.</p>`;
        }
    }
});