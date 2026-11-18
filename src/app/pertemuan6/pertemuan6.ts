import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Post } from '../services/post';

@Component({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTableModule, MatCardModule],
  selector: 'app-pertemuan6',
  styleUrl: './pertemuan6.css',
  templateUrl: './pertemuan6.html',
})
export class Pertemuan6 {
  private postService = inject(Post);

  displayedColumns: string[] = ['id', 'title'];

  posts$ = this.postService.getPosts();
}
