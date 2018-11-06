import {Component, OnInit} from '@angular/core';
import {Movie} from './movie'; 
import {MovieService} from './movie.service';
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
    movies: Movie[];
    statusMessage: string;
    movie = new Movie();

    constructor(private movieService: MovieService){}

    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.getMovies();
    }

    getMovies(): void{
        console.log("Inside getBooks():::::")
        this.movieService.getAllMovies()
            .subscribe((movieData) => {this.movies = movieData, console.log(movieData)},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
        console.log("end of getBooks():::::");
    }

    addMovie(): void{
        console.log("inside the addBook()::::::")
        this.movieService.addMovie(this.movie)
            .subscribe((response) => {console.log(response); this.getMovies();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
        
        console.log("end of addBook()::::");
        //this._router.navigate(['/books']);
    }

    deleteMovie(movieId: string){
        console.log("Inside the deleteMovie()::::Movie id::::"+movieId);
        this.movieService.deleteMovie(movieId)
            .subscribe((response) => {console.log(response); this.getMovies();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
            this.reset();
            console.log("end of deleteBook():::::::");
    }

    getMovieById(movieId: string){
        console.log("Inside the getMovieById()::::::Movie id::::"+movieId);
        this.movieService.getMovieById(movieId)
            .subscribe((movieData) => {this.movie = movieData; this.getMovies(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        this.reset();    
        console.log("end of updateBook()::::::");
    }

    private reset(){
        console.log("inside the reset():::::::");
        this.movie.id = null;
        this.movie.title = null;
        this.movie.leadActor = null;
        console.log("end of reset():::::::");
    }

}