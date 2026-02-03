:root {
    --primary: #ff4d6d;
    --secondary: #ff8fa3;
    --bg: #fff0f3;
    --glass: rgba(255, 255, 255, 0.9);
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--bg);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden; /* Prevents scrollbars when button moves */
}

.container {
    width: 90%;
    max-width: 500px;
    text-align: center;
    z-index: 10;
}

.card {
    background: var(--glass);
    padding: 30px;
    border-radius: 25px;
    box-shadow: 0 15px 35px rgba(255, 77, 109, 0.2);
    border: 1px solid white;
    margin-bottom: 20px;
}

.hidden { display: none !important; }

/* The Love Meter */
.progress-bar {
    height: 25px;
    background: #eee;
    border-radius: 15px;
    margin: 20px 0;
    overflow: hidden;
}

.fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    transition: width 0.1s linear;
}

/* The Proposal Section */
.btn-group {
    margin-top: 30px;
    height: 60px; /* Fixed height for the buttons area */
    position: relative;
}

button {
    padding: 12px 30px;
    font-size: 1.1rem;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

#yesBtn { background: var(--primary); color: white; box-shadow: 0 5px 15px rgba(255, 77, 109, 0.4); }
#noBtn { background: #555; color: white; position: absolute; left: 60%; }

/* Final Screen Image */
#successScreen img {
    width: 100%;
    max-width: 300px;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
