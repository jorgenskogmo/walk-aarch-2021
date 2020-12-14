
import * as DATA from './data.js'


let container
let _filterThemeTimeout = null
let themeFilter = null
let studentSelected = null

export const action = (trigger, action, id, args=[]) => {
	console.log('action():', trigger, action, id)
	container = document.querySelector('#content')

	document.querySelector('#overlay').style.pointerEvents = 'none'

	if( trigger === 'clearThemeSelection' ){
		clearThemeSelection()
	}

	if( trigger === 'clearFeatSelection' ){
		clearFeatSelection()
	}

	if( trigger === 'filter:feat' ){

		window.location.href = '#'+ id

		if( action === 'hide'){
			container.innerHTML = ''
			window.app.pauseRendering = false
			return
		}
		if( action === 'show'){
			if( id === 'about' ) render_text(id)
			if( id === 'live' ) render_live(id)
			if( id === 'videos' ) render_videos(id)
			if( id === 'students' ) render_students(id)			
		}
	}


	if( trigger === 'filter:theme' ){

		const theme = DATA.THEMES.filter(t => t.id === id)[0]
		window.location.href = '#theme:'+ theme.name.toLowerCase().replace(/ /g, '-')

		if( action === 'hide' ){
			// _filterThemeTimeout = setTimeout( () => {
				render_theme(false)
			// }, 1)
		}

		if( action === 'show' ){
			// clearTimeout( _filterThemeTimeout )
			render_theme(id)
		}
	}


}

export const setStudentSelected = (s) => {
	console.log('setStudentSelected', s);
	studentSelected = s ? s : null
}

///

const clearFeatSelection = () => {
	console.log('@sidebar clearFeatSelection');
	Array.from( document.querySelectorAll(`#sidebar [data-trigger="filter:feat"]`)).forEach( el => {
		el.classList.remove('selected')
	})
}

const clearThemeSelection = () => {
	console.log('@sidebar clearThemeSelection');
	Array.from( document.querySelectorAll(`#sidebar [data-trigger="filter:theme"]`)).forEach( el => {
		el.classList.remove('selected')
	})
}


///

const render_theme = (val) => {
	themeFilter = val
	window.app.animation.applyFilter('theme', val)

	let studentsToggleSelected = document.querySelector('#sidebar [data-key="students"]').classList.contains("selected")
	console.log('studentsToggleSelected', studentsToggleSelected);
	if( studentsToggleSelected ){
		render_students()
	}
}

export const clear_content = () => {
	window.toFree()

	document.querySelector('#content').innerHTML = ''
	document.querySelector('#content').classList = 'hide'
	// document.querySelector('#content').style.overflowY = 'auto'
	// document.querySelector('#curtain').classList = ''
	document.querySelector('#overlay').style.pointerEvents = 'none'
	window.app.pauseRendering = false
}


export const render_text = (id) => {
	console.log('render_text', id);
	container = document.querySelector('#content')
	if( id === 'about' ){
		container.innerHTML = DATA.DATA_ABOUT
		container.classList = 'show'
		container.style.overflowY = 'auto'
		document.querySelector('#curtain').classList = 'black'
		document.querySelector('#overlay').style.pointerEvents = 'all'
		
		setTimeout( () => {
			window.app.pauseRendering = true
		}, 500)
	}
}


// pending client
// unfinnished
export const render_live = (id) => {
	container = document.querySelector('#content')
	container.classList = id
	container.innerHTML = `<iframe
    src="https://player.twitch.tv/?channel=jorgenskogmo&parent=vibrant-nobel-c7d9ea.netlify.app"
    height="600"
    width="800"
    frameborder="yes"
    scrolling="auto"
    allowfullscreen="true">`
}


// pending client
// unfinnished: needs test with multiple vimeo-thumbs and a layout
export const render_videos = (id) => {
	container = document.querySelector('#content')
	container.classList = id
	container.innerHTML = 'render_videos'
}


// called from clicking a ball
export const render_student = (stub) => {

	const s = DATA.DATA_STUDENTS.filter( student => student.stub === stub)[0]
	console.log('render_student', stub, s);

	const html = `

		<div class="studentinfo">

			<div class="div1">

				<span class="name">${s.name}</span>
				
				<br />
				<br />
				<span class="theme">GRADUATION PROJECT:<br />
				${s.title}
				</span>

				<br />
				<br />
				<span class="studio">PROGRAMME:<br />
				${s.studio} [todo: map studio-id to studio-data]
				</span>

				<br />
				<br />
				<span class="studio">CONTACT:<br />
				${s.id}@stud.aarch.dk
				</span>
			</div>

			<div class="div2">
				<a class="projectlink" href="http://wp/${s.stub}">SE PROJECT</a>
			</div>
			
			<div class="div3">
				<div class="projectimage">
					<img alt="${s.title}" src="images/${s.id}-${s.stub}.png" />
				</div>
			</div>

			<div class="div4">
				(pdf-link?)
			</div>

		</div>


	`

	content.classList = 'hide'
	document.querySelector('#curtain').classList = 'show'
	setTimeout( () => {
		content.innerHTML = html
		content.classList = 'show'
	}, 750);
}
export const hide_render_student = () => {
	document.querySelector('#curtain').classList = 'hide'
	content.innerHTML = ''
}

// unfinnished: style as pills
export const render_students = (id) => {
	console.log('render_students', id, studentSelected);
	container = document.querySelector('#content')
	container.classList = id

	document.querySelector('#overlay').style.pointerEvents = 'all'
	container.style.overflowY = 'auto'

	let html = ''

	html += '<div style="height:100%;"><div style="align-self: flex-end;">'

	DATA.DATA_STUDENTS.forEach( s => {

		if( themeFilter ){
			if( s.theme === themeFilter ){
				if( studentSelected && s.stub === studentSelected.stub) {
					html += `<a class="student selectedHilite" href="/#${s.stub}">${s.name}</a>`
				}else{
					html += `<a class="student" href="/#${s.stub}">${s.name}</a>`
				}
			}
		
		}else{
			html += `<a class="student" href="/#${s.stub}">${s.name}</a>`
		}
	})

	html += '</div></div>'

	container.innerHTML = html
}

