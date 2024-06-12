# Aria: Song Recommendation App

Aria is a full stack application designed to provide song recommendations based on a user-selected snippet of a song. The app generates recommendations for other songs with similar melodies or signatures to the chosen snippet, using an algorithm inspired by the Shazam fingerprinting model.

## Tech Stack

- **Frontend:** React
- **Backend:** Django
- **Database:** MongoDB
- **Deployment:** TBD

## Features

- Select a snippet of a song to generate recommendations
- Discover songs with similar melodies/signatures
- User-friendly interface with seamless interactions

## Architecture

![image](https://github.com/Dynnwa/Aria/assets/79378020/f80a97ca-3c43-4155-a1a8-8c2686dc1cdf)


## Getting Started

### Prerequisites

- Node.js
- Python
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/aria.git
    cd aria
    ```

2. Install frontend dependencies:
    ```sh
    cd frontend
    npm install
    ```

3. Install backend dependencies:
    ```sh
    cd backend
    pip install -r requirements.txt
    ```

4. Set up MongoDB:
    - Ensure MongoDB is running on your machine or set up a MongoDB Atlas cluster.
    - Update the backend settings with your MongoDB connection string.

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    python manage.py runserver
    ```

2. Start the frontend development server:
    ```sh
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Useful Links

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Django Documentation](https://docs.djangoproject.com/en/stable/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Shazam Fingerprinting Model](https://www.ijcai.org/Proceedings/16/Papers/095.pdf) (Inspiration for the algorithm)
- [Figma](https://www.figma.com/file/yppZC9zjpJYgBMyH07OTJs/Melody-Matcher?type=design&mode=design&t=Rj0rYkGhMumlr2tS-0)
- [Miro](https://miro.com/welcomeonboard/M1h4b3JuWWFidXIyNEEyUDk5RW5SYmZHZ3lNRDhXZldXeTZYNXRRRFM5YjVpVlRGdUJjWUNDNzA3d3FRbGpCanwzNDU4NzY0NTgyOTA1MTk0MTMxfDI=?share_link_id=260742835850)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

