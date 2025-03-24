import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  topic = 'Angular 9';
  title = 'Code Demonstration';
  group = 'Group 7';
  block = 'BSCS 3-3';
  topic1 = 'Event Binding';
  topic2 = 'Data Binding and Directives';
  counter = 0; // Counter variable


  // Increment the counter
  incrementCounter() {
    this.counter++;
  }
  // Decrement the counter
  decrementCounter() {
    this.counter--;
  }

  // Movie list array
  movies = [
    {
      name: 'Inception',
      genre: 'Sci-Fi, Action',
      year: 2010,
      rating: 8.8,
    }
  ];



  // New movie object
  newMovie = {
    name: '',
    genre: '',
    year: null,
    rating: null
  };

  // Add movie to the list
  addMovie() {
    if (this.newMovie.name) {
      const year = this.newMovie.year ? Number(this.newMovie.year) : 0;
      const rating = this.newMovie.rating ? Number(this.newMovie.rating) : 0;

      this.movies.push({
        ...this.newMovie,
        year: year,
        rating: rating,
      });

      // Reset the form
      this.newMovie = { name: '', genre: '', year: null, rating: null };
    }
  }
}
