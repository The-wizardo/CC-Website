import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgFor } from '@angular/common';
import { ScrollObserverDirective } from '../scroll-observer.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor, ScrollObserverDirective], // Add the directive to imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featureCards = [
    {
      image: '/security-shield.png',
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols protecting your data and operations.'
    },
    {
      image: '/scalability.png',
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business, from startup to enterprise.'
    },
    {
      image: '/target.png',
      title: 'Precision Delivery',
      description: 'Agile methodologies ensuring on-time, on-budget project completion.'
    },
  ];

  servicesCards = [
  {
    image: '/lighting.png',
    title: 'Technology Transformation Experience',
    description:
      'We empower businesses to stay ahead of the curve by embracing modern technological shifts that drive efficiency and innovation.',
    points: [
      'DevOps & Cloud Solutions',
      'Cybersecurity',
      'Data Science & Analytics',
      'AI/ML Solutions',
      'Automation',
      'Digital Product Creation'
    ],
    link: '/technology',
    hoverClass: 'hover:from-indigo-50 hover:to-purple-50'
  },
  {
    image: '/worldwide.png',
    title: 'Curated Digital & Enterprise Experience',
    description:
      'We build scalable digital ecosystems tailored to enterprise needs, helping organizations operate smarter and reach their customers faster.',
    points: [
      'Web Development',
      'Mobile App Development',
      'E-Commerce (Magento, Shopify & More)',
      'Third-Party Integrations',
      'ITSM (Jira, ServiceNow, Freshservice)',
      'CRM (Salesforce, Hubspot, Zoho)'
    ],
    link: '/technology',
    hoverClass: 'hover:from-purple-100 hover:to-pink-100'
  },
  {
    image: '/rocket.png',
    title: 'Branding and Creative Experience',
    description:
      'We blend strategy with creativity to shape compelling brand narratives and engaging digital experiences that connect with audiences.',
    points: [
      'Digital Marketing',
      'SEO & SEM',
      'UI/UX Design',
      'Video Production',
      'Augmented Reality (AR)',
      'Branding & Visual Identity'
    ],
    link: '/technology',
    hoverClass: 'hover:from-pink-50 hover:to-red-50'
  }
];

}