const ticketid = new URLSearchParams(window.location.search).get("ticketid")
const email = sessionStorage.getItem("logginEmail");
document.querySelector(".profile-logo").src = userData.profileImage;


/**
 * Created a function for adding comments 
 * 
 */
const addComments = (comment) => {
	axios.post("/pupdesk/CreateCommentServlet", comment, {
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		if (response.data === "Success\r\n") {

			listComment(comment.ticketid);
			window.alert("Comment added");
		}
	}).catch((error) => {
		console.error(error);
	})
}

/**
 * List the comment Function
 */

const listComment = (ticketId) => {
	axios.get(`/pupdesk/ListCommentByIdServlet?ticketid=${ticketId}`).then((response) => {
		console.log(response);
		createComments(response.data);
	}).catch((error) => {
		console.error(error);
	})
}

/*
  Update Comment
*/

const updateComment = (commentId, changedDescription) => {
	const updateObject = { commentId, changedDescription };
	axios.post("/pupdesk/UpdateCommentServlet", updateObject, {
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((response) => {
			if (response.data === "Success\r\n") {
				console.log(response.data);
				window.alert("Comment edited");
			}
		}).catch((error) => {
			console.error(error);
		})
}

/*
  Update Comment
*/

const deleteComment = (commentId, ticketId) => {
	const deleteObject = { commentId, ticketId };
	axios.post("/pupdesk/DeleteCommentServlet", deleteObject, {
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((response) => {
			if (response.data === "Success\r\n") {
				console.log(response.data);
				window.alert("Comment deleted");
			}
		}).catch((error) => {
			console.error(error);
		})
}


const createComments = (commentJson) => {
	const container = document.querySelector(".comments-container");

	for (let comment of commentJson) {
		const commentDiv = document.createElement("div");
		commentDiv.setAttribute("id", comment.commentId);
		commentDiv.classList.add("comment");

		const span = document.createElement("span");

		const strongEl = document.createElement("strong");
		strongEl.innerText = comment.name;
		span.appendChild(strongEl);

		const time = document.createElement("span");
		time.innerText = comment.createdTime;
		span.appendChild(time);
		time.classList.add("time");
		commentDiv.appendChild(span);
		const commentDataDiv = document.createElement("span");
		const commentDesc = document.createElement("textarea");
		commentDesc.value = comment.comment;
		commentDesc.classList.add("comment-data");
		commentDesc.disabled = true;
		const button = document.createElement("button");
		button.innerText = "Save";
		button.classList.add("save-button");
		commentDataDiv.appendChild(commentDesc);
		commentDataDiv.appendChild(button);
		commentDiv.appendChild(commentDataDiv);
		if (email === comment.email) {
			const div = document.createElement("div");
			div.classList.add("buttons");
			const editIcon = document.createElement("button");
			editIcon.classList.add("edit-button", "button-style");
			editIcon.innerText = "Edit";
			editIcon.addEventListener("click", (e) => {
				e.preventDefault();
				div.style.display = "none";
				commentDesc.disabled = false;
				button.style.display = "block";
				button.addEventListener("click", (e) => {
					e.preventDefault();
					button.style.display = "none";
					div.style.display = "block";
					commentDesc.disabled = true;
					updateComment(comment.commentId , commentDesc.value);
				})
			})
			div.appendChild(editIcon);
			const deleteIcon = document.createElement("button");
			deleteIcon.innerText = "Delete";
			deleteIcon.classList.add("delete-button", "button-style");
			div.appendChild(deleteIcon);
			deleteIcon.addEventListener("click", (e) => {
				if(window.confirm("Are you want to delete the comment ?")){
					deleteComment(comment.commentId , ticketid);
					commentDiv.remove();
				}
			})
			commentDiv.appendChild(div);
		}

		container.appendChild(commentDiv);
	}

}


const commentForm = document.querySelector(".comments-form");
commentForm.addEventListener("submit", (e) => {
	e.preventDefault()
	const description = document.querySelector(".comment-input").value;
	const name = userData.name;
	const comment = { name, description, ticketid }
	try {
		addComments(comment);
	} catch (error) {
		console.error(error);
	}
})

listComment(ticketid);