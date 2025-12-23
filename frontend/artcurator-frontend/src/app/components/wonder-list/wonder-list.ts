import { Component, OnInit } from '@angular/core';
import { WonderService } from '../../services/wonder';
import { Wonder } from '../../models/wonder.model';
import { WonderCard } from '../wonder-card/wonder-card';
import { User } from '../../models/user.model';
import { Comment } from '../../models/comment.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-wonder-list',
  imports: [WonderCard,CommonModule],
  templateUrl: './wonder-list.html',
  styleUrl: './wonder-list.css',
})
export class WonderList  {

  wonders: Wonder[] = [];
  ngOnInit() {
    const user1: User = { name: 'Nikita', email: 'nikita@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=12' };
    const user2: User = { name: 'Alex', email: 'alex@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=32' };
    const user3: User = { name: 'Sophia', email: 'sophia@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=52' };

    const comment1: Comment = { id: 'c1', comment: 'Nice!', createdBy: user1, createdAt: new Date().toISOString() };
    const comment2: Comment = { id: 'c2', comment: 'Awesome!', createdBy: user2, createdAt: new Date().toISOString() };
    const comment3: Comment = { id: 'c3', comment: 'Love it!', createdBy: user3, createdAt: new Date().toISOString() };

    this.wonders = [
      {
        id: '1',
        name: 'Aesthetic Workspace',
        image: { url: 'https://picsum.photos/400/500?random=1' },
        description: 'Cool setup for productivity',
        tag: ['workspace', 'aesthetic'],
        user: user1,
        likes: [user2, user3],
        comments: [comment1, comment2],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '2',
        name: 'Minimalist Desk',
        image: { url: 'https://picsum.photos/400/500?random=2' },
        description: 'Simple and clean desk',
        tag: ['desk', 'minimalist'],
        user: user2,
        likes: [user1],
        comments: [comment3],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: '3',
        name: 'Cozy Reading Corner',
        image: { url: 'https://picsum.photos/400/500?random=3' },
        description: 'Perfect place to read books',
        tag: ['reading', 'cozy'],
        user: user3,
        likes: [],
        comments: [comment1, comment2, comment3],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];
  }

  iisLikedByCurrentUser(wonder: Wonder): boolean {
  return !!wonder.likes?.some(u => u.name === 'You');
}


handleLikeChange(liked: boolean, wonder: Wonder) {
  const currentUser: User = { name: 'You', email: 'you@example.com', avatarUrl: 'https://i.pravatar.cc/150?img=64' };

  if (!wonder.likes) wonder.likes = [];

  if (liked) {
    if (!wonder.likes.some(u => u.name === currentUser.name)) {
      wonder.likes.push(currentUser);
    }
  } else {
    wonder.likes = wonder.likes.filter(u => u.name !== currentUser.name);
  }
}

   handleCommentClick(wonder: Wonder) {
    alert(`Open comments for "${wonder.name}"`);
  }

  isLikedByCurrentUser(wonder: Wonder): boolean {
  return !!wonder.likes?.some(u => u.name === 'You');
}


}
