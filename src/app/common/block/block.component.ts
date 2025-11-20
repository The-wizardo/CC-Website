import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() content!: string;
}
