import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';


function Cards() {
    return (
        <div class="wrapper" id="wrapper">
            <div class="card text-center" id="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
            </div>
        </div>

    );
}
export default Cards;