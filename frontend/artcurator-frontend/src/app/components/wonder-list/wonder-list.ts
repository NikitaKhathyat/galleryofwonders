import { Component, OnInit } from '@angular/core';
import { WonderService } from '../../services/wonder';
import { Wonder } from '../../models/wonder.model';
import { WonderCard } from '../wonder-card/wonder-card';

@Component({
  selector: 'app-wonder-list',
  imports: [WonderCard],
  templateUrl: './wonder-list.html',
  styleUrl: './wonder-list.css',
})
export class WonderList implements OnInit {

  wonders: Wonder[] = [];

  constructor(private wonderService: WonderService) {}

  ngOnInit() {
    this.wonderService.getAll().subscribe(res => {
      this.wonders = res;
    });
  }

}
