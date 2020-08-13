function ev(e) {
	if(e.target.classList.contains('clicked')) {
  	e.target.classList.remove('clicked')
  }
 	else {
		e.target.classList.add('clicked')
 	}
 }