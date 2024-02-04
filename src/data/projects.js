import oes1 from '@/assets/web-portfolio/oes/Screenshot 2024-01-17 135431.png';
import oes2 from '@/assets/web-portfolio/oes/Screenshot 2024-01-17 135455.png';
import oes3 from '@/assets/web-portfolio/oes/Screenshot 2024-01-17 135539.png';

import eportal1 from '@/assets/web-portfolio/eportal/Screenshot 2024-01-17 134901.png';
import eportal2 from '@/assets/web-portfolio/eportal/Screenshot 2024-01-17 134929.png';
import eportal3 from '@/assets/web-portfolio/eportal/Screenshot 2024-01-17 135335.png';

import bookshelf1 from '@/assets/web-portfolio/library/Screenshot 2024-01-17 134723.png';

import procsys1 from '@/assets/web-portfolio/procsys/Screenshot 2024-01-17 133910.png';

import woms1 from '@/assets/web-portfolio/woms/Screenshot 2024-01-17 133059.png';
import woms2 from '@/assets/web-portfolio/woms/Screenshot 2024-01-17 133515.png';
import woms3 from '@/assets/web-portfolio/woms/Screenshot 2024-01-17 133540.png';

import mms1 from '@/assets/web-portfolio/mms/Screenshot 2024-01-17 132921.png';
import mms2 from '@/assets/web-portfolio/mms/Screenshot 2024-01-17 132959.png';
import mms3 from '@/assets/web-portfolio/mms/Screenshot 2024-01-17 133028.png';

import iams1 from '@/assets/web-portfolio/iams/Screenshot 2024-01-17 132526.png';
import iams2 from '@/assets/web-portfolio/iams/Screenshot 2024-01-17 132752.png';
import iams3 from '@/assets/web-portfolio/iams/Screenshot 2024-01-17 132829.png';

import dox1 from '@/assets/web-portfolio/doxminder/Screenshot 2024-01-17 131849.png';
import dox2 from '@/assets/web-portfolio/doxminder/Screenshot 2024-01-17 132357.png';
import dox3 from '@/assets/web-portfolio/doxminder/Screenshot 2024-01-17 132419.png';

import netiweb1 from '@/assets/web-portfolio/netiWeb/Screenshot 2024-01-17 131703.png';
import netiweb2 from '@/assets/web-portfolio/netiWeb/Screenshot 2024-01-17 131746.png';
import netiweb3 from '@/assets/web-portfolio/netiWeb/Screenshot 2024-01-17 131813.png';

import elogBook1 from '@/assets/web-portfolio/eLogBook/Screenshot 2024-01-17 130825.png';
import elogBook2 from '@/assets/web-portfolio/eLogBook/Screenshot 2024-01-17 131533.png';

import spoon1 from '@/assets/web-portfolio/spoon/Screenshot 2024-01-17 130343.png';
import spoon2 from '@/assets/web-portfolio/spoon/Screenshot 2024-01-17 130546.png';
import spoon3 from '@/assets/web-portfolio/spoon/Screenshot 2024-01-17 130613.png';

import glps1 from '@/assets/web-portfolio/glps/Screenshot 2024-01-17 125539.png';
import glps2 from '@/assets/web-portfolio/glps/Screenshot 2024-01-17 130116.png';
import glps3 from '@/assets/web-portfolio/glps/Screenshot 2024-01-17 130236.png';

const portfolioData = [
	{
		id:1,
		description:'Welcome to the heart of my portfolio – the Projects section. Here, I\'ve meticulously curated a selection of work that reflects my passion, expertise, and commitment to excellence. Each project is a testament to my dedication to delivering innovative solutions and pushing creative boundaries.'
	}
];

const projects = [
	{
		id: 1,
		title: 'Online Enrollment System',
		category: 'Web Application',
		img: oes1,
		isActive: true,
		url: 'https://netiaccess.com',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: oes1,
				},
				{
					id:2,
					img: oes2,
				},
				{
					id:3,
					img: oes3,
				}
		],
		objective: 'Implement an efficient and user-friendly online enrollment system for NYK-Fil Maritime E-Training, Inc. with the aim of streamlining the enrollment process, enhancing accessibility, and providing a seamless experience for both prospective trainees and administrative staff.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Online Enrollment System is a user-friendly platform designed to streamline maritime education registration. With an intuitive interface, users can effortlessly explore a diverse course catalog, ranging from fundamental seafarer courses to specialized certifications. The system allows individuals to create and manage personalized profiles, facilitating efficient tracking of enrollment history and certificates. Secure transactions are ensured through an integrated payment gateway supporting various methods. Real-time scheduling keeps users informed about course availability, and streamlined document submission expedites the verification process. Notifications and updates, coupled with 24/7 customer support, ensure users stay connected and receive assistance promptly.'
	},
	{
		id: 2,
		title: 'Telephone Directory System',
		category: 'Web Application',
		img: eportal1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: eportal1,
				},
				{
					id:2,
					img: eportal2,
				},
				{
					id:3,
					img: eportal3,
				}
		],
		objective: 'Implement a robust telephone directory and system links web app for NYK-Fil Maritime E-Training, Inc. to streamline communication channels, enhance internal connectivity, and facilitate efficient information retrieval.',
		tools: '<strong>Frontend: </strong>Vue JS <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Telephone and Web Links System seamlessly integrates telephone and online communication channels to enhance accessibility for maritime education. Users can connect directly through designated phone lines for inquiries, support, and information retrieval.'
	},
	{
		id: 3,
		title: 'Library System',
		category: 'Web Application',
		img: bookshelf1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: bookshelf1,
				}
		],
		objective: 'Implement an advanced and user-friendly library management web app for NYK-Fil Maritime E-Training, Inc. with the aim of modernizing and optimizing the organization, accessibility, and utilization of maritime-related learning resources.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Library System serves as a comprehensive resource hub, allowing users to access a wealth of maritime knowledge and educational materials. Through this innovative platform, users can browse an extensive digital catalog of textbooks, reference materials, and research resources tailored to maritime training. The system offers functionalities such as search and categorization features for efficient content discovery, a user-friendly interface for seamless navigation, and a personalized account system for tracking reading history and managing borrowed materials. Whether preparing for courses, conducting research, or simply expanding maritime knowledge, the Library System reinforces NYK-Fil Maritime E-Training, Inc.\'s commitment to fostering a rich learning environment for maritime professionals.'
	},
	{
		id: 4,
		title: 'Procurement System',
		category: 'Web Application',
		img: procsys1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: procsys1,
				}
		],
		objective: 'Implement an efficient and transparent procurement system web app for NYK-Fil Maritime E-Training, Inc., aimed at optimizing the procurement process, enhancing vendor management, and ensuring cost-effective acquisition of goods and services.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Procurement System is a robust platform designed to streamline and optimize the procurement process for the maritime training center. This system facilitates efficient management of procurement requests, vendor interactions, and purchase orders. Users can create and track procurement requests, ensuring transparency and accountability in the procurement workflow. The system includes a vendor management module that allows for the evaluation, selection, and collaboration with suppliers. Features such as automated notifications and real-time status updates enhance communication and provide stakeholders with timely information on procurement activities. With its user-friendly interface and comprehensive functionalities, the Procurement System ensures that NYK-Fil Maritime E-Training, Inc. can procure goods and services seamlessly, fostering a more effective and transparent procurement environment.'
	},
	{
		id: 5,
		title: 'Work Order and Management System',
		category: 'Web Application',
		img: woms1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: woms1,
				},
				{
					id:2,
					img: woms2,
				},
				{
					id:3,
					img: woms3,
				}
		],
		objective: 'Implement an effective Work Order Management System web app for NYK-Fil Maritime E-Training, Inc. to optimize the tracking, execution, and oversight of maintenance and facility-related tasks.',
		tools: '<strong>Frontend: </strong>Vue JS <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Work Order Management System is a robust platform designed to streamline and enhance the efficiency of task execution and resource allocation. This system facilitates the creation, assignment, and tracking of work orders, allowing seamless communication and collaboration among staff members. With functionalities such as a user-friendly interface, real-time progress tracking, and automated notifications, the system ensures that work orders are managed systematically. It includes features for prioritizing tasks, allocating resources based on availability and expertise, and generating comprehensive reports for performance analysis. The Work Order Management System at NYK-Fil Maritime E-Training, Inc. optimizes workflow processes, promoting timely and effective task completion in a maritime training environment.'
	},
	{
		id: 6,
		title: 'Employee Meal Tracking System',
		category: 'Web Application',
		img: mms1,
		isActive: true,
		url: 'https://meal-tracker.neti.com.ph/',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: mms1,
				},
				{
					id:2,
					img: mms2,
				},
				{
					id:3,
					img: mms3,
				}
		],
		objective: 'Implement an Employee Meal Tracking System web app for NYK-Fil Maritime E-Training, Inc. to streamline and enhance the management of employee meals, fostering a convenient and transparent process for meal planning, distribution, and tracking within the maritime training center.',
		tools: '<strong>Frontend: </strong>Vue JS <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Employee Meal Tracker System is an innovative platform designed to efficiently manage and monitor meal provisions for staff members within the maritime training center. This system allows employees to request meals based on dietary preferences and restrictions through a user-friendly interface. The platform includes functionalities for meal scheduling, tracking consumption, and generating reports for effective resource planning. Automated notifications ensure timely meal reminders and facilitate seamless communication between the catering team and employees. The Employee Meal Tracker System at NYK-Fil Maritime E-Training, Inc. streamlines the meal management process, enhancing employee satisfaction and promoting a well-organized culinary experience within the maritime training environment.'
	},
	{
		id: 7,
		title: 'Inventory and Asset Management System',
		category: 'Web Application',
		img: iams1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: iams1,
				},
				{
					id:2,
					img: iams2,
				},
				{
					id:3,
					img: iams3,
				}
		],
		objective: 'Implement a comprehensive Inventory Management System web app for NYK-Fil Maritime E-Training, Inc. to optimize the organization, tracking, and utilization of training materials, equipment, and resources.',
		tools: '<strong>Frontend: </strong>Vue JS <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Inventory System is a comprehensive platform designed to optimize the management of training materials, equipment, and resources within the maritime training center. This system facilitates seamless tracking of inventory levels, procurement, and usage through a user-friendly interface. Users can efficiently categorize items, monitor stock levels in real-time, and generate detailed reports for informed decision-making. The system includes functionalities for automated reordering, ensuring that essential training materials are always available. With features like barcode scanning, the Inventory System enhances accuracy and expedites inventory management processes, promoting an organized and efficient maritime training environment at NYK-Fil Maritime E-Training, Inc.'
	},
	{
		id: 8,
		title: 'Document Management System',
		category: 'Web Application',
		img: dox1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: dox1,
				},
				{
					id:2,
					img: dox2,
				},
				{
					id:3,
					img: dox3,
				}
		],
		objective: 'Implement a robust Document Management System (DMS) web app for NYK-Fil Maritime E-Training, Inc., aimed at improving the organization, accessibility, and security of digital documents essential for the efficient operation of the maritime training center.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Document Management System is a robust platform designed to streamline and enhance the organization of training-related documents within the maritime training center. This system provides a centralized repository for documents, allowing users to upload, categorize, and manage files efficiently. With features such as version control and document access permissions, the platform ensures data integrity and security. Users can easily search and retrieve documents, reducing time spent on manual document handling. The system facilitates seamless collaboration with functionalities like document sharing and real-time editing, enhancing communication and coordination among staff members. With its user-friendly interface and comprehensive functionalities, the Document Management System promotes an organized and efficient approach to handling training-related documents at NYK-Fil Maritime E-Training, Inc.'
	},
	{
		id: 9,
		title: 'NYK-Fil Maritime E-Training, Inc. Website',
		category: 'Web Application',
		img: netiweb1,
		isActive: true,
		url: 'https://www.neti.com.ph/',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: netiweb1,
				},
				{
					id:2,
					img: netiweb2,
				},
				{
					id:3,
					img: netiweb3,
				}
		],
		objective: 'Develop and launch a dynamic and user-friendly website for NYK-Fil Maritime E-Training, Inc. with the goal of establishing a strong online presence, providing comprehensive information about the training center\'s programs, facilities, and services, and facilitating seamless communication between prospective trainees, current students, and stakeholders.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Website serves as a dynamic and informative online platform for maritime professionals seeking comprehensive training programs. Users can explore a user-friendly interface offering a detailed course catalog, enabling seamless enrollment and access to diverse maritime education programs.'
	},
	{
		id: 10,
		title: 'Electronic Log Book',
		category: 'Web Application',
		img: elogBook1,
		isActive: true,
		url: 'not available',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: elogBook1,
				},
				{
					id:2,
					img: elogBook2,
				}
		],
		objective: 'Develop and implement an efficient and user-friendly Logbook System web app for NYK-Fil Maritime E-Training, Inc., aimed at enhancing the tracking, recording, and management of maritime trainees\' practical experiences and activities.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Electronic Logbook System is a sophisticated platform designed to digitize and streamline the recording of maritime training activities. This system allows trainees and instructors to seamlessly input and track various aspects of their training experiences, including sea time, practical exercises, and assessments. With functionalities such as automated data validation and real-time updates, the system ensures accuracy and completeness of logbook entries. Users can easily generate reports for assessment reviews and certification purposes, enhancing the efficiency of administrative processes. The Electronic Logbook System facilitates a centralized and secure repository for training records, promoting transparency, and accountability within NYK-Fil Maritime E-Training, Inc.\'s maritime training environment.'
	},
	{
		id: 11,
		title: 'SpoonPH Fitness Application',
		category: 'Web Application',
		img: spoon1,
		isActive: true,
		url: 'http://www.spoon.ph/',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: spoon1,
				},
				{
					id:2,
					img: spoon2,
				},
				{
					id:3,
					img: spoon3,
				}
		],
		objective: 'Develop and implement the Spoon Fitness Application, tailored for the maritime training center NYK-Fil Maritime E-Training, Inc., with the aim of promoting the health and well-being of its trainees and staff. The application should provide personalized fitness plans, nutrition guidance, and a platform for community engagement to foster a culture of wellness within the maritime training community.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The Spoon Fitness Application by NYK-Fil Maritime E-Training, Inc. is a specialized platform tailored for maritime professionals, offering a holistic approach to health and wellness. This application provides personalized fitness plans and nutritional guidance, ensuring seafarers can maintain a healthy lifestyle during their maritime careers. Users can access a range of workout routines designed for onboard spaces, fostering physical well-being while at sea. The application includes features such as progress tracking, virtual coaching, and a nutrition diary for comprehensive health management. Spoon Fitness promotes the overall well-being of maritime trainees by seamlessly integrating fitness and nutrition support into their demanding training schedules, enhancing their resilience and performance in the maritime industry.'
	},
	{
		id: 12,
		title: 'NYK Guest Lecturer Payroll System',
		category: 'Web Application',
		img: glps1,
		isActive: true,
		url: 'https://glps.neti.com.ph/',
		client : {
			name: 'NYK-Fil Maritime E-Training, Inc.',
			services: 'Seafarer Training Center',
			website: 'https://www.neti.com.ph/',
			phone: '(049) 508-8600'
		},
		gallery : [
				{
					id:1,
					img: glps1,
				},
				{
					id:2,
					img: glps2,
				},
				{
					id:3,
					img: glps3,
				}
		],
		objective: 'Develop and implement a Guest Lecturer Payroll System web app for NYK-Fil Maritime E-Training, Inc. with the goal of automating and streamlining the process of compensating guest lecturers.',
		tools: '<strong>Frontend: </strong>Laravel-livewire <br/><strong>Backend: </strong>Laravel <br/><strong>Database: </strong>MySql',
		description: 'The NYK-Fil Maritime E-Training, Inc. Guest Lecturer Payroll System is a robust platform designed to efficiently manage and process compensation for guest lecturers contributing to maritime training programs. This system allows administrators to easily input and track lecturer attendance, session details, and associated remuneration rates. With functionalities such as automated calculation of payment based on delivered sessions, the platform ensures accuracy and transparency in the payroll process. The system facilitates the generation of detailed payment reports, streamlining financial documentation and contributing to efficient administrative workflows. With a user-friendly interface, secure access controls, and timely payment processing, the Guest Lecturer Payroll System at NYK-Fil Maritime E-Training, Inc. provides an effective and organized solution for compensating valuable contributors to the maritime training center.'
	},
];

export {  projects , portfolioData };
