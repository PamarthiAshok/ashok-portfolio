# Ashok Pamarthi — Personal Portfolio

A personal portfolio website built with Django, showcasing my technical skills, education, projects, certifications, and professional experience.

## Tech Stack

- **Backend:** Python, Django
- **Frontend:** HTML5, CSS3, JavaScript
- **Database:** SQLite
- **Static files:** WhiteNoise
- **Version control:** Git and GitHub

## Features

- Responsive portfolio UI for desktop and mobile
- About, Education, Skills, Projects, Certifications, Experience, and Contact sections
- Technology logo showcase
- Downloadable PDF resume
- Links to project repositories
- Animated hero background and scroll-reveal effects

## Project Structure

- `config/` — Django project configuration
- `home/`, `about/`, `education/`, `skills/`, `projects/`, `experience/`, `contact/` — Django apps
- `templates/` — HTML templates
- `static/` — CSS, JavaScript, images, fonts, and resume
- `build.sh` — deployment build script

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/PamarthiAshok/ashok-portfolio.git
   cd ashok-portfolio
   ```

2. Create and activate a virtual environment.

3. Install dependencies:

   ```bash
   python -m pip install -r requirements.txt
   ```

4. Create a local `.env` file containing a Django `SECRET_KEY` and set `DEBUG=True` for local development.

5. Run migrations and start the development server:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

6. Open `http://127.0.0.1:8000/` in your browser.

## Deployment Status

The project includes initial Django deployment configuration. Public website hosting is still in progress.

## Author

**Ashok Pamarthi**

- GitHub: https://github.com/PamarthiAshok
- LinkedIn: https://www.linkedin.com/in/venkata-ashok-kumar-pamarthi-37109b31a/
