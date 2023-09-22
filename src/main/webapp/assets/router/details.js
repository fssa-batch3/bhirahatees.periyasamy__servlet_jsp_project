const ticketId = {
  ticketid: new URLSearchParams(window.location.search).get("ticketid"),
};

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

const insertingData = (ticketData) => {
  const ticketIdContainer = document.querySelector(".ticketid-data");
  ticketIdContainer.innerText = ticketData.ticketId;
  const ticketCreatedTime = document.querySelector(".ticket__created-time");
  ticketCreatedTime.innerText = ticketData.createdTime;
  const ticketFrom = document.querySelector(".ticket__from");
  ticketFrom.innerText = ticketData.from;
  const ticketTo = document.querySelector(".ticket__raiser");
  ticketTo.innerText = ticketData.to;
  const ticketSummary = document.querySelector(".ticket__summary");
  ticketSummary.innerText = ticketData.summary;
  const ticketDescription = document.querySelector(".ticket__description");
  ticketDescription.innerText = ticketData.description;
  const ticketPriority = document.querySelector(".ticket__priority");
  ticketPriority.innerText = ticketData.priority;
  const ticketStatus = document.querySelector(".ticket__status");
  ticketStatus.innerText = ticketData.status;
  const ticketClosingDescr = document.querySelector(".ticket__closing-descripton");
  ticketClosingDescr.innerText= ticketData.closingDescription;
};



axios
  .get("/pupdesk/CloseTicketServlet", {
    params: ticketId,
  })
  .then((response) => {
    insertingData(response.data);
  })
  .catch((err) => {
    console.error(err);
  });