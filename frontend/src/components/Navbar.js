import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div style={{ "padding-top": "40px" }}>
			<nav class="navbar navbar-expand-lg navbar-light bg-light" >
				<div class="container-fluid">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav" >
						<div className="table">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="/">Home</a>
								</li>
								<li class="nav-item" >
									<a class="nav-link" href="#">About</a>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Top
          							</a>
									<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<Link to="/topmanga">
											<li><a class="dropdown-item" href="/topmanga">Top Manga</a></li>
										</Link>
										<li><a class="dropdown-item" href="#">Top Characters</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>

	)
}

export default Navbar