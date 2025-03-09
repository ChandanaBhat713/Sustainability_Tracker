Sustainability Tracker

Overview
Sustainability Tracker is a web application built using Django (backend) and Vite + React (frontend) to track sustainability efforts.  

---

Features
- Track Sustainability Activities– Log daily sustainability actions like recycling, energy savings, and eco-friendly purchases.

---

Tech Stack
Frontend (Client)
- Vite + React– Fast and optimized UI.
- Tailwind CSS– Beautiful and responsive design.
- Axios – For API communication.

Backend (Server)
- Django – Robust and scalable backend.
- Django REST Framework (DRF)– API development.

---

**Installation & Setup**

# Clone the Repository
git clone https://github.com/ChandanaBhat713/Sustainability_Tracker.git
cd Sustainability_Tracker

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate

#**Backend**
cd backend

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run the server
python manage.py runserver

#**Frontend**

Open a new terminal

cd frontend  # Move to the frontend directory
npm install  # Install dependencies
npm run dev  # Start the development server
