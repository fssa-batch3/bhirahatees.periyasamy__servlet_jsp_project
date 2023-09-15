<header>
      <!-- using symantic tags -->
      
        <%if((String) session.getAttribute("loggedInEmail") == null) {%>
         <nav class="navbar header">
        <!-- navbar -->
        <div class="container">
          <a class="navbar-brand" href="../index.jsp">
            <!-- <img class="logo" src="#" alt="#" /> -->
            Pupdesk
          </a>
          <div>
          <a href=<%=request.getContextPath()+"/jsp/register.jsp"%> class="login">Sign in</a>
        <a href=<%=request.getContextPath()+"/jsp/login.jsp"%> class="login">Log in</a>
        </div>
        </div>
        <!-- nav items -->
        
      </nav>
        <%} else {%>
        <nav class="navbar container-fluid sticky-top header">
        <!-- navbar -->
        <div class="container nav-container">
          <a class="navbar-brand nav-href nav-" href="./dashboard.html">
            <!-- <img class="logo" src="#" alt="#" /> -->
            Pupdesk
          </a>
        </div>
        <ul class="nav-bar">
          <li class="nav--items">
            <a class="nav-link link" href="./dashboard.html">Dashboard</a>
          </li>
          <li class="nav--items">
            <a
              class="nav-link link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tickets
            </a>
            <ul class="dropdown-menu drop">
              <li>
                <a class="dropdown-item" href="../Ticket Page/tickets.html"
                  >Tickets List</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="../Ticket Page/raise_ticket.html"
                  >Raise Ticket</a
                >
              </li>
            </ul>
          </li>
          <li class="nav--items">
            <a class="nav-link link" href="../Ticket Page/history.html"
              >History</a
            >
          </li>
          <li class="nav--items">
            <a class="nav-link link" href="../Ticket Page/members.html"
              >Members</a
            >
          </li>
        </ul>
        
        <div class="dropdown profile-setting">
          <a
            class="btn dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img class="profile-logo" alt="profile" />
          </a>

          <ul class="dropdown-menu profile-drop">
            <li>
              <a class="dropdown-item" href="../Ticket Page/profile.html"
                >Profile</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="../Ticket Page/profile.html"
                >Edit Profile</a
              >
            </li>
            <li>
              <a
                class="dropdown-item log-out"
                href=<%=request.getContextPath()+"/LogoutServlet" %>
                >Log out</a
              >
            </li>
          </ul>
        </div>
        <%} %>
      </nav>
    </header>