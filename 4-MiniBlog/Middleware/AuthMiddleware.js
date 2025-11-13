export default function requireLogin() {
    const userId = localStorage.getItem('user_id');
    // console.log(!userId || userId == 'null' , userId);
    if (!userId || userId == 'null') {
        window.location.href = './login.html';
    }
}