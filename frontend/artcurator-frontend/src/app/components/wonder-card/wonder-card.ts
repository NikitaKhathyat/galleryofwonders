import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wonder-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wonder-card.html',
  styleUrls: ['./wonder-card.css'],
})
export class WonderCard {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() avatarUrl!: string;
  @Input() username!: string;

  @Input() likes: number = 0;
  @Input() commentsCount: number = 0;
  @Input() liked: boolean = false;

  @Output() commentClicked = new EventEmitter<void>();
 @Output() likeChanged = new EventEmitter<boolean>();

onLike() {
  this.liked = !this.liked;
  this.likeChanged.emit(this.liked); // <- emit boolean, not { liked: boolean }
}

  onComment() {
    this.commentClicked.emit();
  }
  onShare() {
    alert('Share clicked!');
  }
}
