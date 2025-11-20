import { Component } from '@angular/core';
import { BlockComponent } from "../common/block/block.component"; import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
;

@Component({
  selector: 'app-technology',
  imports: [BlockComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss'
})
export class TechnologyComponent {
  data: any = [
    {
      title: 'Development',
      items: [
        {
          name: "Java",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968231.png",
          content: `➤ Build highly scalable enterprise applications trusted by global businesses.
➤ Develop secure and robust backend services for web platforms.
➤ Power Android and mobile applications with proven performance.
➤ Create cloud-native apps deployed on AWS, Azure, or GCP.
➤ Leverage Java for big-data ecosystems like Hadoop and Spark.
➤ Develop gaming applications with high performance needs.
➤ Enable IoT and embedded systems with reliable Java-based solutions.`
        },
        {
          name: "Node",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
          content: `➤ Build highly scalable enterprise applications trusted by global businesses using Node.js.
➤ Develop secure and robust backend services for web platforms with Express, NestJS, or Koa.
➤ Power real-time applications, APIs, and microservices with proven performance.
➤ Create cloud-native apps deployed on AWS, Azure, or GCP using Node.js serverless architectures.
➤ Leverage Node.js for big-data processing with frameworks like Apache Kafka, Redis, or RabbitMQ.
➤ Develop high-performance gaming or interactive applications using Node.js and WebSockets.
➤ Enable IoT and embedded systems with reliable Node.js-based solutions.

          `
        },
        {
          name: "Angular",
          imageUrl: "https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif",
          content: `➤ Build dynamic, single-page web applications with Angular.
➤ Develop responsive and reusable UI components.
➤ Integrate seamlessly with APIs and backend services.
➤ Create enterprise-grade dashboards and workflows.
➤ Optimize performance with Angular’s modular architecture.
          `
        },
        {
          name: "Vue",
          imageUrl: "https://cdn.iconscout.com/icon/free/png-512/free-vue-dot-js-icon-svg-download-png-3030285.png?f=webp&w=256",
          content: `➤ Develop interactive web applications with Vue.js.
➤ Create smooth and high-performance user interfaces.
➤ Integrate easily with APIs and existing projects.
➤ Build lightweight, maintainable, and modular codebases.
➤ Ideal for single-page apps, dashboards, and progressive apps.`
        },
        {
          name: "Python",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
          content: `➤ Build AI, machine learning, and automation solutions.
➤ Develop scalable backend systems with Django or Flask.
➤ Perform data analysis, visualization, and scientific computing.
➤ Create cloud services, scripts, and enterprise automation.
➤ Leverage Python for web, mobile, and desktop applications.`
        },
        {
          name: "Aws",
          imageUrl:"https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-File.png",
          content: `➤ Host scalable and reliable applications on AWS cloud.
➤ Use services like EC2, S3, Lambda, and RDS for backend infrastructure.
➤ Deploy serverless and containerized applications efficiently.
➤ Ensure high availability and security with AWS best practices.
➤ Monitor and optimize performance with CloudWatch and CloudTrail.`
        },
        {
          name: "Zscaler",
          imageUrl: "https://companieslogo.com/img/orig/ZS-46a5871c.png?t=1720244494",
          content: `➤ Implement secure internet access and cloud security solutions.
➤ Protect enterprise networks from cyber threats and data breaches.
➤ Monitor and enforce security policies across users and devices.
➤ Enable secure remote work with zero-trust architecture.
➤ Integrate with cloud applications for visibility and control.`
        },
        {
          name: "SalesForce",
          imageUrl: "https://toppng.com/uploads/preview/salesforce-transparent-logo-115525063493207zrqpiz.png",
          content: `➤ Build and customize CRM solutions for sales, service, and marketing.
➤ Automate workflows and business processes using Salesforce tools.
➤ Integrate Salesforce with third-party apps and cloud platforms.
➤ Analyze customer data to drive insights and better decision-making.
➤ Develop Lightning Components and custom apps with Apex and Visualforce.`
        },
        {
          name: "Flutter",
          imageUrl: "https://img.icons8.com/?size=256&id=7I3BjCqe9rjG&format=png",
          content: `➤ Build cross-platform mobile applications for iOS and Android.
➤ Create high-performance and visually attractive UIs with Flutter widgets.
➤ Leverage a single codebase to speed up development and reduce costs.
➤ Integrate apps with APIs, Firebase, and cloud services.
➤ Maintain and update apps efficiently with hot reload and modular architecture.`
        },
      ]
    },
    {
      title: 'Microsoft 365',
      items: [
        {
          name: "DLP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1e966bbee09941ea8c2f36d710d1165c~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DLP.png",
          content: "Preventing Data Breaches with Advanced Data Loss Prevention",
        },
        {
          name: "ATP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: "Advanced Threat Protection (ATP) ",
        },
        {
          name: "MIP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: "Advanced Solutions for Protecting and Managing Sensitive Information",
        },
        {
          name: "PIM",
          imageUrl: "https://static.wixstatic.com/media/c997f4_4f9d515feffc45ec9da9da42aaf8979e~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PIM.png",
          content: "Managing Privileged Access Effectively and Securely",
        },
        {
          name: "Casby",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: "Revolutionize Your Cloud App Security Landscape",
        },
        {
          name: "Intune",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: "Unifying Device Management and Security in One Platform",
        },
        {
          name: "Copilot",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1fd8b85248da4f8b8103bc985d7028b0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/copilot.png",
          content: "Harness AI to Drive Efficiency and Innovation",
        },
        {
          name: "Purview",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: "Comprehensive Data Management and Compliance Solutions",
        },
        {
          name: "Azure AD",
          imageUrl: "https://static.wixstatic.com/media/c997f4_8515552d220d4899a30d7fcf221c8f4b~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/azure%20synapse.png",
          content: "Secure and Simplify Access with Advanced Identity Solutions",
        },
        {
          name: "Cloud Security",
          imageUrl: "https://static.wixstatic.com/media/c997f4_c61520ad0fff477ab5381bc9c26054b9~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cloud%20app%20security.png",
          content: "Securing Your Cloud Applications and Services",
        },
        {
          name: "Compliance Manager",
          imageUrl: "https://static.wixstatic.com/media/c997f4_de6e0ac4840349349d32be650928c698~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/compliance%20manager.png",
          content: "Efficiently Manage Your Compliance Posture",
        },
      ]
    },
    {
      title: 'Cyber Security & SOC',
      items: [
        {
          name: "SOC Advisory",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1d1b10079be04b66924c2ec2ba556909~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sentinel.png",
          content: "Deploy, optimize, and innovate with our white-label Azure Synapse solutions.",
        },
        {
          name: "Threat Detection",
          imageUrl: "https://static.wixstatic.com/media/c997f4_f20ff87fda1b4d5b9aad0b3d11d96ba5~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/247%20support.png",
          content: "Offer your clients round-the-clock support services under your brand name.",
        },
        {
          name: "Threat and Vulnerability",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e5a38c012365425e9494a2623d41fb61~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/network%20security.png",
          content: "Deliver robust network security solutions, white-labeled for your business needs.",
        },
        {
          name: "Advance Incident Response",
          imageUrl: "https://static.wixstatic.com/media/c997f4_9382c13ae6b244bdbf5e7f7286e09c38~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%201.png",
          content: "Offer advanced identity protection services under your brand to enhance client security",
        },
        {
          name: "Threat Intelligence",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: "Deliver top-tier endpoint security solutions, customized and branded for your client's needs.",
        },
      ]
    },
  ];

}
