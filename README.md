# CV Maker - Professional Resume Builder

A modern, high-performance web application designed to help users create professional resumes in minutes. Built with a sophisticated **Pure Blue** theme and a clean, monochromatic aesthetic.

## 🚀 Features

- **Intuitive Builder**: Easy-to-use interface for adding personal details, experience, and education.
- **Modern Templates**: Selection of professional, high-performance resume layouts.
- **Premium Design**: Sophisticated Pure Blue gradient theme with high-contrast elements.
- **Privacy First**: Comprehensive privacy and cookie statement implemented.
- **Responsive UI**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **React**: Library for building user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Lucide React**: Beautiful & consistent icons.
- **Vanilla CSS**: Custom design system with modern gradients.

### Backend
- **Node.js & Express**: Fast, unopinionated web framework.
- **Prisma**: Next-generation ORM for Node.js.
- **PostgreSQL**: Robust relational database.
- **Puppeteer**: For high-quality PDF generation.

---

## 📦 Installation Guide

Follow these steps to get the project running locally.

### 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/Shaif-Alam/CV-Maker.git
cd CV-Maker
```

### 3. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` directory and add your database URL:
  ```env
  DATABASE_URL="postgresql://username:password@localhost:5432/cv_maker_db"
  JWT_SECRET="your_secret_key"
  ```
- Initialize the database:
  ```bash
  npx prisma generate
  npx prisma db push
  ```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
```

---

## 🚀 Running the Project

### Start Backend
```bash
cd backend
npm run dev
```
The server will start at `http://localhost:5000`.

### Start Frontend
```bash
cd frontend
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 📄 License
This project is licensed under the ISC License.

## 📧 Contact
For any queries or support, please contact: [support@cvmaker.com](mailto:support@cvmaker.com)
