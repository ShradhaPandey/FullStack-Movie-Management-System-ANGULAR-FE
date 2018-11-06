import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/catch';
import { Movie } from './movie';



@Injectable()
export class MovieService{

    constructor(private httpService: Http){}

    getAllMovies(): Observable<Movie[]>{
        console.log("inside the service getAllMovies():::::::");
        return this.httpService.get("http://localhost:8080/moviesapi/api/movie")
                .pipe(map((response: Response) => response.json()));
    }

    addMovie(movie: Movie){
        let body = JSON.parse(JSON.stringify(movie));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if(movie.id){    
            console.log("Inside addMovie update service():::::::");
            return this.httpService.put("http://localhost:8080/moviesapi/api/movie/"+movie.id, body, options);
        }else{
            console.log("Inside addMovie add service():::::::");
            return this.httpService.post("http://localhost:8080/moviesapi/api/movie", body, options);
        }
    }

    deleteMovie(movieId: string){
        console.log("Inside the service deleteMovie():::::book id:::"+movieId);
        return this.httpService.delete("http://localhost:8080/moviesapi/api/movie/"+movieId);
    }


    getMovieById(movieId: string): Observable<Movie>{
        console.log("Inside the getMovieById() service::::::");
        return this.httpService.get("http://localhost:8080/moviesapi/api/movie/"+movieId)
                .pipe(map((response: Response) => response.json()));
               
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
}