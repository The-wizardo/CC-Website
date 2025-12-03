import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  imports: [NgFor],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {
  premiumCard = [
    {
      title : 'Primary Focus',
      description: 'Software Product Development & M365 Ecosystem Support'
    },
    {
      title : 'Core strengths',
      description: 'Architecture, DevOps, Automation'
    },
    {
      title : 'Operations',
      description: 'M365 tenant & Security Support'
    },
    {
      title : 'Model',
      description: 'Assessment → Build → Deploy → Automate → Support'
    },
  ]
}
