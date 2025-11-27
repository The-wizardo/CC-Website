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
      title: 'DevOps',
      items: [
        {
          name: "Aws",
          imageUrl: "https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-File.png",
          content: `➤ Host scalable and reliable applications on AWS cloud.
➤ Use services like EC2, S3, Lambda, and RDS for backend infrastructure.
➤ Deploy serverless and containerized applications efficiently.
➤ Ensure high availability and security with AWS best practices.
➤ Monitor and optimize performance with CloudWatch and CloudTrail.`
        },
        {
          name: "Jenkins",
          imageUrl: "https://logo.svgcdn.com/devicon/jenkins-original.png",
          content: `➤ Host scalable and reliable applications on AWS cloud.
➤ Use services like EC2, S3, Lambda, and RDS for backend infrastructure.
➤ Deploy serverless and containerized applications efficiently.
➤ Ensure high availability and security with AWS best practices.
➤ Monitor and optimize performance with CloudWatch and CloudTrail.`
        },
        {
          name: "Docker",
          imageUrl: "https://logo.svgcdn.com/devicon/docker-original.png",
          content: `➤ Containerize applications for consistent runtime environments.
➤ Simplify deployment across dev, staging, and production.
➤ Reduce dependency conflicts using isolated containers.
➤ Build lightweight, portable microservices easily.
➤ Improve delivery speed with efficient image pipelines.`
        },
        {
          name: "Kubernetes",
          imageUrl: "https://logo.svgcdn.com/devicon/kubernetes-original.png",
          content: `➤ Orchestrate containers at scale with automated operations.
➤ Self-heal workloads using probes, restarts, and rescheduling.
➤ Manage rolling updates and zero-downtime deployments.
➤ Implement autoscaling based on real-time metrics.
➤ Secure workloads through RBAC, namespaces, and network policies.`
        },
        {
          name: "GitHub Actions",
          imageUrl: "https://logo.svgcdn.com/devicon/githubactions-original-wordmark.png",
          content: `➤ Automate CI/CD pipelines directly from your GitHub repository.
➤ Run builds, tests, and deployments using workflows.
➤ Integrate with Docker, Kubernetes, and cloud platforms.
➤ Improve development speed with reusable workflow templates.
➤ Enforce code quality through automated checks.`
        },
        {
          name: "Terraform",
          imageUrl: "https://logo.svgcdn.com/devicon/terraform-original.png",
          content: `➤ Manage infrastructure as code using declarative configuration.
➤ Provision cloud resources across AWS, Azure, and GCP.
➤ Track infrastructure changes with a clear execution plan.
➤ Enable repeatable, version-controlled cloud environments.
➤ Improve reliability with modular, reusable templates.`
        },
        {
          name: "Ansible",
          imageUrl: "https://logo.svgcdn.com/logos/ansible.png",
          content: `➤ Automate server configuration and environment setup.
➤ Manage fleets of instances with simple YAML playbooks.
➤ Enforce consistent deployments across all environments.
➤ Reduce manual ops work through agentless automation.
➤ Integrate with CI/CD to streamline provisioning.`
        },
        {
          name: "Prometheus & Grafana",
          imageUrl: "https://logo.svgcdn.com/devicon/grafana-original.png",
          content: `➤ Collect real-time metrics for applications and infrastructure.
➤ Detect issues early using customizable alerts.
➤ Visualize performance trends in interactive dashboards.
➤ Monitor Kubernetes workloads with exporters.
➤ Improve reliability through data-driven insights.`
        }

      ]
    },
    {
      title: 'Microsoft 365',
      items: [
        {
          name: "Intune",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: `• Manage Windows, macOS, iOS, and Android devices centrally
• Enforce compliance, security baselines, and access rules
• Deploy and update applications consistently
• Enable Zero Trust with conditional access integration
• Monitor device health, threats, and configuration`
        },

        {
          name: "Copilot",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1fd8b85248da4f8b8103bc985d7028b0~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/copilot.png",
          content: `• Automate tasks across Word, Excel, Outlook, and Teams
• Summarize, write, analyze, and generate content instantly
• Use natural language to execute workflows
• Improve team efficiency using AI insights
• Reduce repetitive work and accelerate decision-making`
        },

        {
          name: "Purview",
          imageUrl: "https://static.wixstatic.com/media/c997f4_a58a1c43fccd479e992eb4a565cacc24~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/purview.png",
          content: `• Classify and label sensitive data automatically
• Enforce retention, data lifecycle, and governance policies
• Monitor data risks across apps and endpoints
• Ensure compliance with regulatory standards
• Provide unified auditing for investigations`
        },

        {
          name: "Azure AD",
          imageUrl: "https://static.wixstatic.com/media/c997f4_8515552d220d4899a30d7fcf221c8f4b~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/azure%20synapse.png",
          content: `• Authenticate users securely using MFA and SSO
• Enforce conditional access based on risk and context
• Manage user identities, access, and roles
• Enable secure app sign-ins across cloud and on-prem
• Strengthen identity governance with Zero Trust`
        },

        {
          name: "Cloud Security",
          imageUrl: "https://static.wixstatic.com/media/c997f4_c61520ad0fff477ab5381bc9c26054b9~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cloud%20app%20security.png",
          content: `• Protect cloud applications from threats and anomalies
• Monitor user behavior across SaaS platforms
• Enforce access controls using conditional policies
• Detect risky activities and shadow IT usage
• Safeguard sensitive data in cloud environments`
        },

        {
          name: "Compliance Manager",
          imageUrl: "https://static.wixstatic.com/media/c997f4_de6e0ac4840349349d32be650928c698~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/compliance%20manager.png",
          content: `• Monitor your compliance score in real time
• Automate assessments and regulatory checks
• Get improvement recommendations for each control
• Track risks across multiple compliance frameworks
• Simplify audits with centralized reporting`
        },

        {
          name: "DLP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1e966bbee09941ea8c2f36d710d1165c~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DLP.png",
          content: `• Prevent sharing of confidential or sensitive data
• Apply protection to email, Teams, SharePoint, and devices
• Detect risky actions using AI-based classifiers
• Block, allow, or warn users based on policies
• Reduce data leakage across cloud environments`
        },

        {
          name: "ATP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: `• Protect endpoints from malware and zero-day threats
• Detect attacks using behavioral and AI analytics
• Provide automated investigation and remediation
• Isolate compromised devices instantly
• Give real-time visibility into endpoint security`
        },

        {
          name: "MIP",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: `• Apply sensitivity labels to documents and emails
• Automatically protect data with encryption
• Track access and usage of protected content
• Prevent unauthorized sharing internally or externally
• Maintain consistent information protection policies`
        },

        {
          name: "PIM",
          imageUrl: "https://static.wixstatic.com/media/c997f4_4f9d515feffc45ec9da9da42aaf8979e~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PIM.png",
          content: `• Enable just-in-time privileged access for admins
• Require approval before elevating permissions
• Reduce permanent high-risk access levels
• Log and monitor all privileged activities
• Strengthen identity governance with audits`
        },

        {
          name: "Casby",
          imageUrl: "https://static.wixstatic.com/media/c997f4_86d70025178e45718d2c543e62c3c87f~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/casby.png",
          content: `• Monitor cloud app access in real time
• Enforce security and compliance policies for SaaS apps
• Detect suspicious logins and risky activity
• Control data movement across third-party apps
• Enhance cloud security posture across the organization`
        }
      ]
    },
    {
      title: 'Cyber Security & SOC',
      items: [
        {
          name: "SOC Advisory",
          imageUrl: "https://static.wixstatic.com/media/c997f4_1d1b10079be04b66924c2ec2ba556909~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sentinel.png",
          content: `• Assess and improve your security operations maturity
• Build or enhance SOC processes, playbooks, and governance
• Align detection and response capabilities with business goals
• Recommend technology, automation, and workflow improvements
• Strengthen your overall threat readiness and operational posture`
        },

        {
          name: "Threat Detection",
          imageUrl: "https://static.wixstatic.com/media/c997f4_f20ff87fda1b4d5b9aad0b3d11d96ba5~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/247%20support.png",
          content: `• Identify malicious activities across endpoints, identities, and cloud
• Detect behavioral anomalies using analytics and threat intelligence
• Monitor attack indicators in real time with automated alerts
• Reduce dwell time with proactive detection strategies
• Strengthen visibility across your entire security landscape`
        },

        {
          name: "Threat and Vulnerability",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e5a38c012365425e9494a2623d41fb61~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/network%20security.png",
          content: `• Identify vulnerabilities across systems, networks, and cloud assets
• Prioritize risks by severity, exposure, and exploit likelihood
• Provide actionable remediation guidance for critical gaps
• Conduct continuous scanning and posture management
• Reduce attack surface and strengthen overall security hygiene`
        },

        {
          name: "Advanced Incident Response",
          imageUrl: "https://static.wixstatic.com/media/c997f4_9382c13ae6b244bdbf5e7f7286e09c38~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%201.png",
          content: `• Contain, investigate, and remediate active cyber incidents
• Perform forensic analysis to uncover root causes and attack paths
• Isolate compromised identities, endpoints, and cloud resources
• Apply automated response actions to reduce impact
• Provide post-incident reporting and security hardening guidance`
        },

        {
          name: "Threat Intelligence",
          imageUrl: "https://static.wixstatic.com/media/c997f4_e2b5098f0c694a6cb4de016ece8073ce~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/defender%202.png",
          content: `• Track emerging threats relevant to your industry and environment
• Leverage global intelligence feeds to strengthen SOC detection
• Identify attacker tools, techniques, and campaigns
• Enhance security controls with intelligence-driven rules
• Support proactive defense with contextual threat insights`
        }
      ]

    },
  ];

}
