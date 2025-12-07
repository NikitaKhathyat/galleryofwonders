import { Component,Input } from '@angular/core';
import { Wonder } from '../../models/wonder.model';
@Component({
  selector: 'app-wonder-card',
  imports: [],
  templateUrl: './wonder-card.html',
  styleUrl: './wonder-card.css',
})
export class WonderCard {

  @Input() wonder!: Wonder;
}
