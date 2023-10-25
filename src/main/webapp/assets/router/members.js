const user = sessionStorage.getItem("logginEmail");

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

const getMembers = () => {
	const url = "/pupdesk/ListTeamMatesServlet";
	axios.get(url).then((response) => {
		tableData(response.data);
	}).catch((error) => {
		console.error(error.message)
	})
}

const searchFilter = () =>{
const searchInput = document.querySelector('.search-input');
const tableRows = document.querySelectorAll(".member");
console.log(searchInput, tableRows)
searchInput.addEventListener('input', (e) => {
	const searchTerm = searchInput.value.trim().toLowerCase();
	tableRows.forEach((row) => {
		const name = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
		const email = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
		console.log(row);
		if (name.includes(searchTerm) || email.includes(searchTerm)) {
			row.style.display = '';

		} else {
			row.style.display = 'none';
		}
	});
});
}

const tableData = (jsonData) => {
	const tableBody = document.querySelector('.table-data');

	jsonData.forEach(item => {
		const row = document.createElement('tr');
		row.classList.add("member");
		row.innerHTML = `
                <td>${item.firstname} ${item.lastname}</td>
                <td>${item.email}</td>
                <td>${item.teamCode}</td>
            `;
		tableBody.appendChild(row);
	});
	searchFilter();
}

getMembers();



